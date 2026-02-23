"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Gamepad2,
  User,
  CreditCard,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";

interface RomPackages {
  id: number;
  price: number;
  amount: string;
  isSpecial?: boolean;
}

export default function RagnarokMTopup() {
  const [selectedPackage, setSelectedPackage] = useState<RomPackages>();
  const [userId, setUserId] = useState("");

  // แปลงข้อมูลจาก JSON ให้แสดงผลสวยงาม
  const packages: RomPackages[] = [
    { id: 1, price: 350.02, amount: "หีบเสบียง Zeny 2 เท่า (เล็ก)", isSpecial: true },
    { id: 2, price: 1050.02, amount: "หีบเสบียง Zeny 2 เท่า (ใหญ่)", isSpecial: true },
    { id: 3, price: 235.02, amount: "Upgrade Adventure Log", isSpecial: true },
    { id: 4, price: 800.02, amount: "Collection Adventure Log", isSpecial: true },
    { id: 5, price: 102, amount: "1,800,000 Zeny" },
    { id: 6, price: 170, amount: "3,060,000 Zeny" },
    { id: 7, price: 350, amount: "7,072,000 Zeny" },
    { id: 8, price: 600, amount: "13,568,000 Zeny" },
    { id: 9, price: 1530, amount: "35,500,000 Zeny" },
    { id: 10, price: 2995, amount: "72,000,000 Zeny" },
  ];

  return (
    <main className="min-h-screen bg-[#f8f9fc] py-12">
      <div className="container max-w-6xl">
        {/* --- GAME HEADER --- */}
        <div className="bg-white rounded-[2.5rem] p-8 mb-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 overflow-hidden rounded-[2rem] shadow-lg">
            <Image
              src="/topup/ragm.png" // ใช้ไฟล์ ragm.png ตาม Memory
              alt="Ragnarok M: Classic"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900">
              Ragnarok M: Classic
            </h1>
            {/* คำบรรยายสไตล์ราชา (Chuunibyou) */}
            <p className="text-gray-500 max-w-xl leading-relaxed">
              เสียงเพรียกหาจาก Rune Midgard กำลังกึกก้อง! 
              จงใช้อำนาจแห่ง Zeny บันดาลศัสตราวุธให้เปล่งประกายแสง +15 เหนือผู้ใด 
              ปลดล็อกสมุดผจญภัยเพื่อจารึกตำนานบทใหม่ที่แม้แต่ Odin ยังต้องจับตามอง 
              อย่ามัวแต่ตี Poring อยู่เลย... จงเติมขุมทรัพย์ แล้วก้าวขึ้นเป็นมหาเศรษฐีผู้ปกครองตลาดกลาง เดี๋ยวนี้!
            </p>
            
            {/* Badges บังคับ */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <span className="px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-xs font-bold flex items-center gap-1.5">
                <CheckCircle2 size={14} /> ระบบอัตโนมัติ
              </span>
              <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold flex items-center gap-1.5">
                <Gamepad2 size={14} /> เข้าเกมทันที
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* --- LEFT COLUMN: INPUTS --- */}
          <div className="lg:col-span-2 space-y-8">
            {/* STEP 1: CHARACTER ID (No Server) */}
            <section className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold">
                  1
                </div>
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <User size={20} className="text-indigo-600" /> กรอก Character ID
                </h2>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="กรอก Character ID (ตัวเลข)"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value.replace(/\D/g, ''))} // รับเฉพาะตัวเลข
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-lg font-mono"
                />
                <p className="text-sm text-gray-400 font-medium italic">
                  * คลิกที่รูปโปรไฟล์ในเกมเพื่อดู Character ID ของคุณ
                </p>
              </div>
            </section>

            {/* STEP 2: PACKAGES */}
            <section className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold">
                  2
                </div>
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <ShoppingBag size={20} className="text-indigo-600" />{" "}
                  เลือกแพ็กเกจที่ต้องการ
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {packages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg)}
                    className={`relative p-5 rounded-3xl border-2 transition-all text-left space-y-2 group flex flex-col justify-between
                      ${
                        selectedPackage?.id === pkg.id
                          ? "border-indigo-600 bg-indigo-50/50 shadow-md shadow-indigo-100"
                          : "border-gray-50 bg-gray-50 hover:border-indigo-200 hover:bg-white"
                      } ${pkg.isSpecial ? "sm:col-span-3 flex-row items-center" : ""}`}
                  >
                    <div>
                      {pkg.isSpecial && (
                        <span className="text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded-full font-bold mb-2 inline-block uppercase">
                          Special Item
                        </span>
                      )}
                      <p className={`font-bold text-gray-500 group-hover:text-indigo-600 transition-colors uppercase leading-tight ${pkg.isSpecial ? "text-base" : "text-sm"}`}>
                        {pkg.amount}
                      </p>
                    </div>
                    
                    <p className="text-xl font-black text-gray-800 mt-2">
                      ฿{pkg.price.toLocaleString(undefined, { minimumFractionDigits: pkg.price % 1 !== 0 ? 2 : 0 })}
                    </p>
                    
                    {selectedPackage?.id === pkg.id && (
                      <div className="absolute top-3 right-3 text-indigo-600">
                        <CheckCircle2 size={20} fill="white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* --- RIGHT COLUMN: SUMMARY --- */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
              <div className="bg-indigo-600 p-6 text-white text-center">
                <h3 className="font-bold text-lg uppercase tracking-wider">
                  สรุปคำสั่งซื้อ
                </h3>
              </div>
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium font-mono uppercase">
                    เกม
                  </span>
                  <span className="text-gray-900 font-bold truncate max-w-[150px]">
                    Ragnarok M: Classic
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium font-mono uppercase">
                    Character ID
                  </span>
                  <span
                    className={`font-bold ${userId ? "text-gray-900" : "text-red-400 font-mono"}`}
                  >
                    {userId || "REQUIRED"}
                  </span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium font-mono uppercase">
                    แพ็กเกจ
                  </span>
                  <span
                    className={`font-bold text-right ${selectedPackage ? "text-gray-900" : "text-red-400 font-mono"}`}
                  >
                    {selectedPackage ? selectedPackage.amount : "NOT SELECTED"}
                  </span>
                </div>

                <hr className="border-dashed border-gray-100" />

                <div className="flex justify-between items-end">
                  <span className="text-gray-500 font-bold uppercase text-xs">
                    ราคาสุทธิ
                  </span>
                  <span className="text-3xl font-black text-indigo-600">
                    ฿
                    {selectedPackage
                      ? selectedPackage.price.toLocaleString(undefined, { minimumFractionDigits: selectedPackage.price % 1 !== 0 ? 2 : 0 })
                      : "0"}
                  </span>
                </div>

                <button
                  disabled={!userId || !selectedPackage}
                  className="w-full py-4 bg-indigo-600 disabled:bg-gray-200 disabled:cursor-not-allowed text-white font-black text-lg rounded-2xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2 uppercase tracking-tighter"
                >
                  <CreditCard size={20} />
                  ยืนยันการสั่งซื้อ
                </button>

                <p className="text-[10px] text-center text-gray-400 leading-relaxed">
                  เมื่อคลิกยืนยัน คุณยอมรับ{" "}
                  <span className="underline cursor-pointer">
                    เงื่อนไขการใช้บริการ
                  </span>{" "}
                  <br />
                  กรุณาตรวจสอบ Character ID ให้ถูกต้องก่อนชำระเงิน
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}