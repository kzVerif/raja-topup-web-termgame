// app/api/topup/route.ts
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// ─── Config ───────────────────────────────────────────────────────────────────
const WEPAY_URL       = "https://www.wepay.in.th/client_api.json.php";
const WEPAY_USERNAME  = "kanghunz";
const WEPAY_PASSWORD  = "be5e64bcf1d417debf5d7992c1bf6cd3";
const RESP_URL        = "http://119.59.124.159:9090/api/callback"; // เปลี่ยนเป็น URL ที่คุณต้องการให้ wePAY ส่ง callback ไป

// ─── Valid denominations for MY (my by NT) ────────────────────────────────────
const VALID_AMOUNTS = [10, 20, 50, 70, 100, 200, 300, 500];
 
// ─── MD5 helper (ไม่ต้องติดตั้ง package เพิ่ม) ────────────────────────────────
function md5(str: string): string {
  return crypto.createHash("md5").update(str).digest("hex");
}
 
// ─── GET /api/topup ───────────────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
 
  const phone    = searchParams.get("phone")    ?? "";
  const amount   = searchParams.get("amount")   ?? "";
  const dest_ref = searchParams.get("dest_ref") ?? "";
 
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
 
  // ── Build wePAY payload ───────────────────────────────────────────────────────
  const payload = {
    username      : WEPAY_USERNAME,
    password_hash : WEPAY_PASSWORD,
    resp_url      : RESP_URL,
    dest_ref      : dest_ref,
    type          : "mtopup",
    pay_to_amount : parsedAmount,
    pay_to_company: "MY",
    pay_to_ref1   : phone,
    pay_to_ref2   : "",
    pay_to_ref3   : "",
  };
 
  // ── POST to wePAY ─────────────────────────────────────────────────────────────
  try {
    const wePayRes = await fetch(WEPAY_URL, {
      method : "POST",
      headers: { "Content-Type": "application/json" },
      body   : JSON.stringify(payload),
    });
 
    // wePAY ส่งกลับเป็น plain text รูปแบบ pipe-delimited
    // เช่น "SUCCESS|TXN123456|ORDER001" หรือ "ERROR|REST|desc"
    const raw = await wePayRes.text();
 
    const parsed = parseWePayResponse(raw);
 
    if (parsed.status === "ERROR") {
      return NextResponse.json(
        { success: false, wepay: parsed, raw },
        { status: 400 }
      );
    }
 
    return NextResponse.json({ success: true, wepay: parsed, raw }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { success: false, message: "Failed to contact wePAY", error: message },
      { status: 502 }
    );
  }
}
 
// ─── Parse wePAY pipe-delimited response ─────────────────────────────────────
// รูปแบบ: "STATUS|CODE|DESCRIPTION|TXN_ID|..."
function parseWePayResponse(raw: string) {
  const parts = raw.split("|");
  return {
    status     : parts[0] ?? "",   // SUCCESS / ERROR
    code       : parts[1] ?? "",   // รหัสผล เช่น TXN123 หรือ REST
    description: parts[2] ?? "",   // คำอธิบาย
    txn_id     : parts[3] ?? "",   // Transaction ID (ถ้ามี)
    extra      : parts.slice(4),   // ฟิลด์เพิ่มเติม (ถ้ามี)
  };
}