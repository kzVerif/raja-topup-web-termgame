"use server";

import axios from "axios";

export async function GET() {
  try {
    const balance = await axios.post(
      "https://www.wepay.in.th/client_api.json.php",
      {
        username: "kanghunz",
        password_hash: "be5e64bcf1d417debf5d7992c1bf6cd3",
        type: "balance_inquiry",
      },
      // REMOVED the "multipart/form-data" header block
      {
        headers: {
            "Content-Type": "application/json" // Optional: Axios does this automatically
        }
      }
    );
    
    console.log(balance.data); // Log just the data usually, not the whole object
    
    return new Response(JSON.stringify(balance.data), { status: 200 });
  } catch (error) {
    // Better error logging to see the response data if available
    if (axios.isAxiosError(error)) {
        console.error("Axios Error Response:", error.response?.data);
        console.error("Axios Status:", error.response?.status);
    } else {
        console.error(error);
    }
    
    return new Response(JSON.stringify({ error: "Failed to fetch balance" }), {
      status: 500,
    });
  }
}