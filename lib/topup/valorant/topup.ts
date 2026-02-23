"use server";

import axios, { AxiosError } from "axios";

type WepayStatusCode =
  | "00000"
  | "10001"
  | "10002"
  | "10003"
  | "10004"
  | "20001"
  | "20003"
  | "20004"
  | "20005"
  | "30001"
  | "30002"
  | "30003"
  | "30004"
  | "30005"
  | "30006"
  | "30007"
  | "30008"
  | "30009"
  | "30010"
  | "30011"
  | "30012"
  | "30013"
  | "30016"
  | "30017"
  | "30018"
  | "30019"
  | "30020";

const WEPAY_CODE_MESSAGE: Record<string, string> = {
  "00000": "รายการสำเร็จ",

  "10001": "Internal Error (ไม่สามารถเชื่อมต่อระบบฐานข้อมูลได้)",
  "10002": "Internal Error (รายการไม่สมบูรณ์)",
  "10003": "Internal Error (Too Many Requests)",
  "10004": "Internal Error (เกิดข้อผิดพลาดในการสร้างรายการใหม่)",

  "20001": "Username หรือ Password รูปแบบไม่ถูกต้อง",
  "20003": "Username หรือ Password รูปแบบไม่ถูกต้อง",
  "20004": "Username นี้ไม่สามารถเรียกใช้ API ได้",
  "20005": "ไม่ได้รับอนุญาตให้เข้าถึงระบบ (IP address นี้ไม่ได้รับอนุญาต)",

  "30001": "ไม่พบ Company ที่ระบุ",
  "30002": "Transaction ID ไม่ถูกต้อง",
  "30003": "ไม่พบ Transaction ID ที่ระบุ",
  "30004": "Transaction ID ที่ระบุอยู่ในระหว่างทำรายการ",
  "30005": "Callback URL ไม่ถูกต้อง",
  "30006": "Callback Reference ID ไม่ถูกต้อง",
  "30007": "ระบุจำนวนเงินที่ชำระไม่ถูกต้อง",
  "30008": "ระบุบริษัทไม่ถูกต้อง",
  "30009": "ระบุ Ref.1 ไม่ถูกต้อง",
  "30010": "ระบุ Ref.2 ไม่ถูกต้อง",
  "30011": "ระบุ Ref.3 ไม่ถูกต้อง",
  "30012": "ระบุ Ref.4 ไม่ถูกต้อง",
  "30013": "บาร์โค้ดไม่ถูกต้อง",
  "30016": "มีการทำรายการซ้ำ (พบ Callback Reference ID ซ้ำกัน)",
  "30017": "ตรวจพบการเลือกบริษัทผิดพลาด",
  "30018": "ตรวจพบความไม่ถูกต้องของยอดหนี้",
  "30019": "ยอดเงินในระบบไม่เพียงพอ",
  "30020": "ไม่ได้รับอนุญาตให้ชำระเงินให้กับบริษัทที่ระบุ",
};

function mapWepayMessage(code?: string) {
  if (!code) return "ไม่พบรหัสสถานะจาก Wepay";
  return WEPAY_CODE_MESSAGE[code] ?? `เกิดข้อผิดพลาด (code: ${code})`;
}

type WepayResponse = {
  code?: string; // Wepay status code เช่น "00000"
  // ฟิลด์อื่น ๆ ของ Wepay อาจมีอีก เช่น msg, ref, transaction_id ฯลฯ
  [key: string]: any;
};

type TopupResult =
  | { success: true; data: WepayResponse }
  | { success: false; code?: string; error: string; details?: any };

export async function topupValorant(
  price: number,
  riotId: string
): Promise<TopupResult> {
  try {
    // validation
    if (!price || price <= 0) {
      return { success: false, error: "ราคาไม่ถูกต้อง" };
    }
    if (!riotId?.trim()) {
      return { success: false, error: "ไม่พบ Riot ID" };
    }

    const response = await axios.post<WepayResponse>(
      "https://www.wepay.in.th/client_api.json.php",
      {
        username: process.env.WEPAY_USERNAME ?? "kanghunz",
        password_hash:
          process.env.WEPAY_PASSWORD_HASH ??
          "be5e64bcf1d417debf5d7992c1bf6cd3",
        resp_url: "https://yourdomain.com/api/wepay/callback",
        dest_ref: "NamNM_Test",
        type: "gtopup",
        pay_to_amount: price.toString(),
        pay_to_company: "VALORANT-D",
        pay_to_ref1: riotId.trim(),
      },
      {
        timeout: 15000,
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = response.data;

    if (!data) {
      return { success: false, error: "ไม่ได้รับข้อมูลจาก Wepay" };
    }

    const code = String(data.code ?? "");
    if (code !== "00000") {
      return {
        success: false,
        code,
        error: mapWepayMessage(code),
        details: data, // เก็บ raw ไว้ debug
      };
    }

    return { success: true, data };
  } catch (err) {
    const error = err as AxiosError;

    // HTTP error (เช่น 500/403) + มี body กลับมา
    if (error.response) {
      const body: any = error.response.data;
      const code = body?.code ? String(body.code) : undefined;

      return {
        success: false,
        code,
        error: code ? mapWepayMessage(code) : "Wepay API error",
        details: body,
      };
    }

    // network / timeout
    if (error.request) {
      const isTimeout =
        (error as any).code === "ECONNABORTED" ||
        String(error.message).toLowerCase().includes("timeout");

      return {
        success: false,
        error: isTimeout
          ? "เชื่อมต่อ Wepay ไม่สำเร็จ (timeout)"
          : "ไม่สามารถเชื่อมต่อ Wepay ได้",
      };
    }

    return {
      success: false,
      error: error.message || "Unknown error",
    };
  }
}