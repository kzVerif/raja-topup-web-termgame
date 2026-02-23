"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  // 1. สร้าง State สำหรับเก็บข้อมูล
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  // State สำหรับเปิด-ปิดการมองเห็นรหัสผ่าน
  const [showPassword, setShowPassword] = useState(false);

  // 2. ฟังก์ชันอัปเดตค่าใน State ตามที่พิมพ์
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // 3. ฟังก์ชันส่งข้อมูลไปหลังบ้าน
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("กำลังส่งข้อมูลไปหลังบ้าน:", credentials);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50">
      <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 bg-white [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
        <div className="md:max-w-md w-full px-4 py-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-12">
              <h1 className="text-slate-900 text-3xl font-bold">เข้าสู่ระบบ</h1>
              <p className="text-[15px] mt-6 text-slate-600">
                ยังไม่เป็นสมาชิกกับ RAJA-TOPUP?{" "}
                <Link
                  href="/register"
                  className="text-blue-600 font-medium hover:underline ml-1 whitespace-nowrap"
                >
                  สมัครสมาชิกเลย
                </Link>
              </p>
            </div>

            {/* Username Input */}
            <div>
              <label className="text-slate-900 text-[13px] font-medium block mb-2">
                ชื่อผู้ใช้
              </label>
              <div className="relative flex items-center">
                <input
                  name="username"
                  type="text"
                  required
                  value={credentials.username}
                  onChange={handleChange}
                  className="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none"
                  placeholder="กรอกชื่อผู้ใช้หรืออีเมล"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="7" r="4" />
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                </svg>
              </div>
            </div>

            {/* Password Input with Toggle */}
            <div className="mt-8">
              <label className="text-slate-900 text-[13px] font-medium block mb-2">
                รหัสผ่าน
              </label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={credentials.password}
                  onChange={handleChange}
                  className="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 pl-2 pr-10 py-3 outline-none"
                  placeholder="กรอกรหัสผ่าน"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 cursor-pointer focus:outline-none hover:opacity-70 transition-opacity"
                >
                  {showPassword ? (
                    /* ไอคอนตาเปิด */
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#bbb" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.644C3.414 8.618 7.378 5 12 5c4.622 0 8.586 3.618 9.964 6.678a1.012 1.012 0 0 1 0 .644C20.586 15.382 16.622 19 12 19c-4.622 0-8.586-3.618-9.964-6.678Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  ) : (
                    /* ไอคอนตาปิด */
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#bbb" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-8">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  checked={credentials.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded-sm cursor-pointer"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm text-slate-900 cursor-pointer"
                >
                  จดจำการเข้าสู่ระบบ
                </label>
              </div>
              <div>
                <a
                  href="#"
                  className="text-blue-600 font-medium text-sm hover:underline"
                >
                  ลืมรหัสผ่าน?
                </a>
              </div>
            </div>

            <div className="mt-12">
              <button
                type="submit"
                className="w-full shadow-xl py-2.5 px-4 text-sm font-medium tracking-wide rounded-md text-white  bg-indigo-600 hover:bg-indigo-700 focus:outline-none transition-all"
              >
                เข้าสู่ระบบ
              </button>
            </div>

            <div className="my-6 flex items-center gap-4">
              <hr className="w-full border-slate-300" />
              <p className="text-sm text-slate-900 text-center">หรือ</p>
              <hr className="w-full border-slate-300" />
            </div>

            {/* Social Login */}
            <div className="flex justify-center">
              <button
                type="button"
                aria-label="Login with Discord"
                className="p-2 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors cursor-pointer"
                onClick={() => alert("ระบบล็อกอิน Discord กำลังตามมา!")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  viewBox="0 0 127.14 96.36"
                >
                  <path
                    fill="#5865F2"
                    d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.82,56.6.48,80.21h0A105.73,105.73,0,0,0,32.47,96.36,77.7,77.7,0,0,0,39.2,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.73,11.1,105.32,105.32,0,0,0,32.05-16.14h0C130.23,50.26,121.84,26.45,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>

        {/* Right Side Image */}
        <div className="w-full h-full flex items-center bg-[#000842] rounded-xl p-8">
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="w-full aspect-square object-contain"
            alt="login-illustration"
          />
        </div>
      </div>
    </div>
  );
}