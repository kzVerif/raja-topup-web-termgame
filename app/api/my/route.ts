// app/api/topup/route.ts
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// ─── Config ───────────────────────────────────────────────────────────────────
const WEPAY_URL      = "https://www.wepay.in.th/client_api.json.php";
const WEPAY_USERNAME = "kanghunz";
const WEPAY_PASSWORD = "be5e64bcf1d417debf5d7992c1bf6cd3"; // ← MD5 hash แล้ว ไม่ต้อง hash ซ้ำ
const RESP_URL       = "http://119.59.124.159:9090/api/callback";

// ─── Valid denominations for MY (my by NT) ────────────────────────────────────
const VALID_AMOUNTS = [10, 20, 50, 70, 100, 200, 300, 500];

// ─── MD5 helper ───────────────────────────────────────────────────────────────
function md5(str: string): string {
  return crypto.createHash("md5").update(str).digest("hex");
}

// ─── GET /api/topup ───────────────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const phone    = searchParams.get("phone")    ?? "";
  const amount   = searchParams.get("amount")   ?? "";
  const dest_ref = searchParams.get("dest_ref") ?? "";

  console.log("[wePAY] ── INPUT ──────────────────────────");
  console.log("[wePAY] phone    :", phone);
  console.log("[wePAY] amount   :", amount);
  console.log("[wePAY] dest_ref :", dest_ref);

  // ── Validation ───────────────────────────────────────────────────────────────
  if (!phone || !amount || !dest_ref) {
    return NextResponse.json(
      { success: false, message: "Missing required params: phone, amount, dest_ref" },
      { status: 400 }
    );
  }

  const parsedAmount = parseFloat(amount);
  if (!VALID_AMOUNTS.includes(parsedAmount)) {
    return NextResponse.json(
      { success: false, message: `Invalid amount. Allowed: ${VALID_AMOUNTS.join(", ")}` },
      { status: 400 }
    );
  }

  if (!/^[a-zA-Z0-9]{1,20}$/.test(dest_ref)) {
    return NextResponse.json(
      { success: false, message: "dest_ref must be alphanumeric, max 20 chars" },
      { status: 400 }
    );
  }

  if (!/^[0-9]{9,10}$/.test(phone)) {
    return NextResponse.json(
      { success: false, message: "Invalid phone number format" },
      { status: 400 }
    );
  }

  // ── ตรวจสอบว่า WEPAY_PASSWORD เป็น raw password หรือ MD5 hash แล้ว ──────────
  // ถ้ายาว 32 ตัวและเป็น hex → เป็น MD5 แล้ว ใช้ตรงๆ ได้เลย
  const isAlreadyMd5 = /^[a-f0-9]{32}$/i.test(WEPAY_PASSWORD);
  const passwordHash = isAlreadyMd5 ? WEPAY_PASSWORD : md5(WEPAY_PASSWORD);

  console.log("[wePAY] ── AUTH ───────────────────────────");
  console.log("[wePAY] username      :", WEPAY_USERNAME);
  console.log("[wePAY] isAlreadyMd5  :", isAlreadyMd5);
  console.log("[wePAY] password_hash :", passwordHash);
  console.log("[wePAY] resp_url      :", RESP_URL);

  // ── Build payload ─────────────────────────────────────────────────────────────
  const payload = {
    username      : WEPAY_USERNAME,
    password_hash : passwordHash,
    resp_url      : RESP_URL,
    dest_ref      : dest_ref,
    type          : "mtopup",
    pay_to_amount : parsedAmount,
    pay_to_company: "MY",
    pay_to_ref1   : phone,
    // pay_to_ref2   : "",
    // pay_to_ref3   : "",
  };

  console.log("[wePAY] ── PAYLOAD ────────────────────────");
  console.log("[wePAY]", JSON.stringify(payload, null, 2));

  try {
    // ── Attempt 1: application/json ──────────────────────────────────────────
    console.log("[wePAY] ── ATTEMPT 1: application/json ──");
    const res1  = await fetch(WEPAY_URL, {
      method : "POST",
      headers: { "Content-Type": "application/json" },
      body   : JSON.stringify(payload),
    });
    const raw1 = await res1.text();
    console.log("[wePAY] raw1 :", raw1);

    // ── Attempt 2: application/x-www-form-urlencoded ─────────────────────────
    console.log("[wePAY] ── ATTEMPT 2: form-urlencoded ───");
    const res2  = await fetch(WEPAY_URL, {
      method : "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body   : new URLSearchParams({
        username      : payload.username,
        password_hash : payload.password_hash,
        resp_url      : payload.resp_url,
        dest_ref      : payload.dest_ref,
        type          : payload.type,
        pay_to_amount : String(payload.pay_to_amount),
        pay_to_company: payload.pay_to_company,
        pay_to_ref1   : payload.pay_to_ref1,
        // pay_to_ref2   : payload.pay_to_ref2,
        // pay_to_ref3   : payload.pay_to_ref3,
      }).toString(),
    });
    const raw2 = await res2.text();
    console.log("[wePAY] raw2 :", raw2);

    // ── เลือกผลลัพธ์ที่ดีกว่า ─────────────────────────────────────────────────
    const raw    = raw2.includes("RESTRICTED") ? raw1 : raw2;
    const parsed = parseWePayResponse(raw);

    console.log("[wePAY] ── FINAL ──────────────────────────");
    console.log("[wePAY] raw    :", raw);
    console.log("[wePAY] parsed :", parsed);

    if (parsed.status === "ERROR") {
      return NextResponse.json(
        { success: false, wepay: parsed, raw, debug: { raw1, raw2 } },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, wepay: parsed, raw }, { status: 200 });

  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("[wePAY] FETCH ERROR:", message);
    return NextResponse.json(
      { success: false, message: "Failed to contact wePAY", error: message },
      { status: 502 }
    );
  }
}

// ─── Parse wePAY pipe-delimited response ─────────────────────────────────────
// FORMAT: "STATUS|CODE|DESCRIPTION|TXN_ID|..."
function parseWePayResponse(raw: string) {
  const parts = raw.split("|");
  return {
    status     : parts[0] ?? "",
    code       : parts[1] ?? "",
    description: parts[2] ?? "",
    txn_id     : parts[3] ?? "",
    extra      : parts.slice(4),
  };
}