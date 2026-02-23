"use client";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    acceptTerms: false,
  });

  // State สำหรับการเปิด-ปิดตา
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("รหัสผ่านไม่ตรงกัน!");
      return;
    }
    console.log("ส่งข้อมูลสมัครสมาชิก:", formData);
  };

  // คอมโพเนนต์ไอคอนดวงตา (เพื่อลดความซ้ำซ้อนของโค้ด)
  const EyeIcon = ({ isOpen }: { isOpen: boolean }) => (
    isOpen ? (
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
    )
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50">
      <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 bg-white [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
        <div className="md:max-w-md w-full px-4 py-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <h1 className="text-slate-900 text-3xl font-bold">สมัครสมาชิก</h1>
              <p className="text-[15px] mt-4 text-slate-600">
                เป็นสมาชิกอยู่แล้วใช่ไหม?{" "}
                <Link href="/login" className="text-blue-600 font-medium hover:underline ml-1 whitespace-nowrap">
                  เข้าสู่ระบบที่นี่
                </Link>
              </p>
            </div>

            <div className="space-y-6">
              {/* Username & Email (เหมือนเดิม) */}
              <div>
                <label className="text-slate-900 text-[13px] font-medium block mb-2">ชื่อผู้ใช้</label>
                <div className="relative flex items-center">
                  <input name="username" type="text" required value={formData.username} onChange={handleChange} className="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none" placeholder="ตั้งชื่อผู้ใช้ของคุณ" />
                </div>
              </div>

              <div>
                <label className="text-slate-900 text-[13px] font-medium block mb-2">อีเมล</label>
                <div className="relative flex items-center">
                  <input name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none" placeholder="example@mail.com" />
                </div>
              </div>

              {/* Password With Toggle */}
              <div>
                <label className="text-slate-900 text-[13px] font-medium block mb-2">รหัสผ่าน</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 pl-2 pr-10 py-3 outline-none"
                    placeholder="กำหนดรหัสผ่าน"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 cursor-pointer focus:outline-none"
                  >
                    <EyeIcon isOpen={showPassword} />
                  </button>
                </div>
              </div>

              {/* Confirm Password With Toggle */}
              <div>
                <label className="text-slate-900 text-[13px] font-medium block mb-2">ยืนยันรหัสผ่าน</label>
                <div className="relative flex items-center">
                  <input
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 pl-2 pr-10 py-3 outline-none"
                    placeholder="ยืนยันรหัสผ่าน"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-2 cursor-pointer focus:outline-none"
                  >
                    <EyeIcon isOpen={showConfirmPassword} />
                  </button>
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="text-slate-900 text-[13px] font-medium block mb-2">เบอร์โทรศัพท์</label>
                <div className="relative flex items-center">
                  <input name="phoneNumber" type="tel" required value={formData.phoneNumber} onChange={handleChange} className="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none" placeholder="08X-XXX-XXXX" />
                </div>
              </div>
            </div>

            {/* Terms & Submit Button (เหมือนเดิม) */}
            <div className="flex items-center mt-6">
              <input id="accept-terms" name="acceptTerms" type="checkbox" required checked={formData.acceptTerms} onChange={handleChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded-sm cursor-pointer" />
              <label htmlFor="accept-terms" className="ml-3 block text-sm text-slate-600 cursor-pointer">
                ฉันยอมรับ <Link href="/tos" className="text-blue-600 hover:underline">เงื่อนไขการให้บริการ</Link>
              </label>
            </div>

            <div className="mt-10">
              <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm font-medium tracking-wide rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none transition-all">
                สร้างบัญชีผู้ใช้
              </button>
            </div>
          </form>
        </div>

        <div className="w-full h-full flex items-center bg-[#000842] rounded-xl p-8">
          <img src="https://readymadeui.com/signin-image.webp" className="w-full aspect-square object-contain" alt="register-illustration" />
        </div>
      </div>
    </div>
  );
}