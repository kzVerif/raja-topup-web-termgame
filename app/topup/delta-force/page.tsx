"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  Gamepad2,
  User,
  CreditCard,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";

interface deltaFPackages {
  id: number;
  price: number;
  amount: string;
}

export default function TopupDetail() {
  const [selectedPackage, setSelectedPackage] = useState<deltaFPackages>();
  const [openId, setOpenId] = useState("");

  const packages = [
    { id: 1, price: 10, amount: "18 Delta Coins"},
    { id: 2, price: 18, amount: "30 Delta Coins"},
    { id: 3, price: 34, amount: "60 Delta Coins"},
    { id: 4, price: 175, amount: "320 Delta Coins"},
    { id: 5, price: 250, amount: "460 Delta Coins"},
    { id: 6, price: 345, amount: "750 Delta Coins"},
    { id: 7, price: 690, amount: "1,480 Delta Coins"},
    { id: 8, price: 860, amount: "1,980 Delta Coins"},
    { id: 9, price: 1730, amount: "3,950 Delta Coins"},
    { id: 10, price: 3460, amount: "8,100 Delta Coins"},
  ];

  return (
    <main className="min-h-screen bg-[#f8f9fc] py-12">
      <div className="container max-w-6xl">
        {/* --- GAME HEADER --- */}
        <div className="bg-white rounded-[2.5rem] p-8 mb-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 overflow-hidden rounded-[2rem] shadow-lg">
            <Image
              src="/topup/deltaf.png"
              alt="Call of Duty Mobile"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900">
              Delta Force (Steam)
            </h1>
            <p className="text-gray-500 max-w-xl leading-relaxed">
              ยกระดับกองกำลังของคุณด้วย Delta Coins เติมง่าย ปลอดภัย 
              ใช้เพียง Player ID เพื่อรับเหรียญไปปลดล็อกอุปกรณ์สุดล้ำและวิถีแห่งราชาสนามรบ
            </p>
            <p className="text-red-500 max-w-xl leading-relaxed">
              รองรับเฉพาะ DeltaForce บนระบบ Steam เท่านั้น
            </p>
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
            {/* STEP 1: OPEN ID */}
            <section className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold">
                  1
                </div>
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <User size={20} className="text-indigo-600" /> กรอก ID ผู้เล่น
                </h2>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="กรอก กรอก ID ผู้เล่นของคุณ (เช่น 1234567890)"
                  value={openId}
                  onChange={(e) => setOpenId(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-lg"
                />
                <p className="text-sm text-gray-400">
                  * คุณสามารถดู Open ID ได้ที่เมนูตั้งค่าภายในเกม
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
                    className={`relative p-5 rounded-3xl border-2 transition-all text-left space-y-2 group
                      ${
                        selectedPackage?.id === pkg.id
                          ? "border-indigo-600 bg-indigo-50/50 shadow-md shadow-indigo-100"
                          : "border-gray-50 bg-gray-50 hover:border-indigo-200 hover:bg-white"
                      }`}
                  >
                    <p className="text-sm font-bold text-gray-500 group-hover:text-indigo-600 transition-colors uppercase">
                      {pkg.amount}
                    </p>
                    <p className="text-xl font-black text-gray-800">
                      ฿{pkg.price.toLocaleString()}
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
                <h3 className="font-bold text-lg">สรุปคำสั่งซื้อ</h3>
              </div>
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">เกม</span>
                  <span className="text-gray-900 font-bold">
                    Delta Force (Steam)
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">ID ผู้เล่น</span>
                  <span
                    className={`font-bold ${openId ? "text-gray-900" : "text-red-400"}`}
                  >
                    {openId || "ยังไม่ได้ระบุ"}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">แพ็กเกจ</span>
                  <span
                    className={`font-bold ${selectedPackage ? "text-gray-900" : "text-red-400"}`}
                  >
                    {selectedPackage
                      ? selectedPackage.amount
                      : "ยังไม่ได้เลือก"}
                  </span>
                </div>

                <hr className="border-dashed border-gray-100" />

                <div className="flex justify-between items-end">
                  <span className="text-gray-500 font-bold">ราคาสุทธิ</span>
                  <span className="text-3xl font-black text-indigo-600">
                    ฿
                    {selectedPackage
                      ? selectedPackage.price.toLocaleString()
                      : "0"}
                  </span>
                </div>

                <button
                  disabled={!openId || !selectedPackage}
                  className="w-full py-4 bg-indigo-600 disabled:bg-gray-200 disabled:cursor-not-allowed text-white font-black text-lg rounded-2xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <CreditCard size={20} />
                  ยืนยันการสั่งซื้อ
                </button>

                <p className="text-[10px] text-center text-gray-400 leading-relaxed">
                  เมื่อคลิกยืนยัน คุณยอมรับ{" "}
                  <span className="underline">เงื่อนไขการใช้บริการ</span> <br />
                  กรุณาตรวจสอบ ID ให้ถูกต้องก่อนชำระเงิน
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
