"use server";

import axios, { AxiosError } from "axios";
import crypto from "crypto";

function generateDestRef() {
  return crypto.randomUUID().replace(/-/g, "").slice(0, 20);
}

// map code → message
const WEPAY_CODE_MESSAGE: Record<string, string> = {
  "00000": "สำเร็จ",
  "10001": "Internal Error (DB connection)",
  "10002": "Internal Error (Incomplete)",
  "10003": "Too Many Requests",
  "10004": "Internal Error (Create failed)",

  "20001": "Username หรือ Password ไม่ถูกต้อง",
  "20003": "Username หรือ Password ไม่ถูกต้อง",
  "20004": "Username นี้ไม่มีสิทธิ์ใช้ API",
  "20005": "IP address นี้ไม่ได้รับอนุญาต",

  "30001": "ไม่พบ Company",
  "30002": "Transaction ID ไม่ถูกต้อง",
  "30003": "ไม่พบ Transaction ID",
  "30004": "Transaction กำลังดำเนินการ",
  "30005": "Callback URL ไม่ถูกต้อง",
  "30006": "Callback Reference ID ไม่ถูกต้อง",
  "30007": "จำนวนเงินไม่ถูกต้อง",
  "30008": "Company ไม่ถูกต้อง",
  "30009": "Ref1 ไม่ถูกต้อง",
  "30016": "รายการซ้ำ",
  "30019": "ยอดเงินในระบบไม่พอ",
  "30020": "ไม่ได้รับอนุญาต",
};

type TopupResult =
  | {
      success: true;
      httpStatus: number;
      wepayCode?: string;
      message?: string;
      data: any;
    }
  | {
      success: false;
      httpStatus?: number;
      wepayCode?: string;
      message?: string;
      error: string;
      details?: any;
    };

export async function topupValorant(
  price: number,
  riotId: string
): Promise<TopupResult> {
  try {
    if (!price || price <= 0) {
      return {
        success: false,
        error: "ราคาไม่ถูกต้อง",
      };
    }

    if (!riotId?.trim()) {
      return {
        success: false,
        error: "ไม่พบ Riot ID",
      };
    }

    const destRef = generateDestRef();

    const response = await axios.post(
      "https://www.wepay.in.th/client_api.json.php",
      {
        username: process.env.WEPAY_USERNAME,
        password_hash: process.env.WEPAY_PASSWORD_HASH,
        resp_url: process.env.WEPAY_CALLBACK_URL,
        dest_ref: destRef,
        type: "gtopup",
        pay_to_amount: price.toString(),
        pay_to_company: "VALORANT-D",
        pay_to_ref1: riotId.trim(),
      },
      {
        timeout: 15000,
        headers: {
          "Content-Type": "application/json",
        },
        validateStatus: () => true, // สำคัญมาก
      }
    );

    const httpStatus = response.status;
    const data = response.data;

    const wepayCode = data?.code?.toString();
    const message =
      wepayCode && WEPAY_CODE_MESSAGE[wepayCode]
        ? WEPAY_CODE_MESSAGE[wepayCode]
        : data?.message;

    // ถ้า Wepay success
    if (httpStatus === 200 && wepayCode === "00000") {
      return {
        success: true,
        httpStatus,
        wepayCode,
        message,
        data,
      };
    }

    // fail
    return {
      success: false,
      httpStatus,
      wepayCode,
      message,
      error: message || "Wepay error",
      details: data,
    };
  } catch (err) {
    const error = err as AxiosError<any>;

    return {
      success: false,
      httpStatus: error.response?.status,
      wepayCode: error.response?.data?.code?.toString(),
      message:
        WEPAY_CODE_MESSAGE[error.response?.data?.code] ||
        error.response?.data?.message,
      error: error.message,
      details: error.response?.data,
    };
  }
}