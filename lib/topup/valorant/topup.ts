"use server";

import axios, { AxiosError } from "axios";
import crypto from "crypto";

function generateDestRef() {
  return crypto.randomUUID().replace(/-/g, "").slice(0, 20);
}

type TopupResult =
  | { success: true; data: any }
  | { success: false; error: string; code?: string; details?: any };

export async function topupValorant(price: number, riotId: string): Promise<TopupResult> {
  try {
    if (!price || price <= 0) return { success: false, error: "ราคาไม่ถูกต้อง" };
    if (!riotId?.trim()) return { success: false, error: "ไม่พบ Riot ID" };

    // 1) สร้างรายการ PENDING ใน DB ก่อน เพื่อให้ callback หาเจอ
    const destRef = generateDestRef();
    // console.log(destRef);
    

    // 2) ยิงไป Wepay โดยใช้ dest_ref ที่ไม่ซ้ำแน่นอน
    const response = await axios.post(
      "https://www.wepay.in.th/client_api.json.php",
      {
        username: process.env.WEPAY_USERNAME,
        password_hash: process.env.WEPAY_PASSWORD_HASH,
        resp_url: process.env.WEPAY_CALLBACK_URL, // เช่น https://xxx.com/api/wepay/callback
        dest_ref: destRef,
        type: "gtopup",
        pay_to_amount: price.toString(),
        pay_to_company: "VALORANT-D",
        pay_to_ref1: riotId.trim(),
      },
      { timeout: 15000, headers: { "Content-Type": "application/json" } }
    );

    return { success: true, data: response.data };
  } catch (err) {
    const error = err as AxiosError;
    return {
      success: false,
      error: error.message || "Unknown error",
      details: error.response?.data,
    };
  }
}