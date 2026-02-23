import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Wepay ส่งแบบ x-www-form-urlencoded
    const formData = await req.formData();

    const dest_ref = formData.get("dest_ref")?.toString();
    const transaction_id = formData.get("transaction_id")?.toString();
    const status = formData.get("status")?.toString();
    const operator_trxnsid = formData.get("operator_trxnsid")?.toString();
    const sms = formData.get("sms")?.toString();

    console.log("WEPAY CALLBACK RECEIVED:", {
      dest_ref,
      transaction_id,
      status,
      operator_trxnsid,
      sms,
    });

    if (!dest_ref) {
      return new Response("ERROR|INVALID_DEST_REF", { status: 400 });
    }

    return new Response(`SUCCEED|${dest_ref}`, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } catch (error) {
    console.error("WEPAY CALLBACK ERROR:", error);

    return new Response("ERROR|SERVER_ERROR", {
      status: 500,
    });
  }
}
