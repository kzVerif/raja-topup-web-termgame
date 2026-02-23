"use server";

import axios from "axios";

export async function GET() {
  try {
    const balance = await axios.post(
      "https://www.wepay.in.th/client_api.json.php",
      {
        username: "kanghunz",
        password_hash: "ab6744cd558cb7966262343a2351351f",
        type: "balance_inquiry",
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return new Response(JSON.stringify(balance.data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch balance" }), {
      status: 500,
    });
  }
}
