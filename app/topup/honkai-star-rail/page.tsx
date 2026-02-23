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

interface hsrPackages {
  id: number;
  price: number;
  amount: string;
  desc?: string; // เพิ่ม field สำหรับรายละเอียดแพ็กเกจพิเศษ
  isSpecial?: boolean;
}

export default function HonkaiStarRailTopup() {
  const [selectedPackage, setSelectedPackage] = useState<hsrPackages>();
  const [openId, setOpenId] = useState("");
  const [server, setServer] = useState("");

  // Pattern #1: มีการเลือก Server (ดึงจาก gameservers ใน JSON)
  const servers = [
    { value: "AS", name: "Asia" },
    { value: "US", name: "America" },
    { value: "EU", name: "Europe" },
    { value: "CN", name: "Taiwan, Hongkong, Macau" },
  ];

  // ปรับข้อมูลจาก JSON ให้เข้ากับ Interface
  const packages: hsrPackages[] = [
    { 
      id: 1, 
      price: 179, 
      amount: "Express Supply Pass", 
      desc: "รับ 300 Oneiric + 90 Jade/วัน",
      isSpecial: true 
    },
    { id: 2, price: 35, amount: "60 Oneiric Shard" },
    { id: 3, price: 179, amount: "330 Oneiric Shard" },
    { id: 4, price: 549, amount: "1,090 Oneiric Shard" },
    { id: 5, price: 1100, amount: "2,240 Oneiric Shard" },
    { id: 6, price: 1800, amount: "3,880 Oneiric Shard" },
    { id: 7, price: 3700, amount: "8,080 Oneiric Shard" },
  ];

  return (
    <main className="min-h-screen bg-[#f8f9fc] py-12">
      <div className="container max-w-6xl">
        {/* --- GAME HEADER --- */}
        <div className="bg-white rounded-[2.5rem] p-8 mb-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 overflow-hidden rounded-[2rem] shadow-lg">
            <Image
              src="/topup/honk.png" // เปลี่ยนเป็น path รูป HSR ของคุณ
              alt="Honkai: Star Rail"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900">
              Honkai: Star Rail
            </h1>
            <p className="text-gray-500 max-w-xl leading-relaxed">
              ขึ้นรถไฟ Astral Express สู่การเดินทางข้ามดวงดาว! 
              เติม Oneiric Shard เพื่อเปิด Warp หาตัวละครระดับ 5 ดาวที่คุณรัก 
              หรือสมัคร Express Supply Pass เพื่อรับทรัพยากรสุดคุ้มทุกวัน
            </p>
             {/* Badge Pattern ตามที่คุณระบุ */}
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
          <div className="lg:col-span-2 space-y-8">
            {/* STEP 1: PLAYER ID & SERVER */}
            <section className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold">
                  1
                </div>
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <User size={20} className="text-indigo-600" />{" "}
                  กรอก UID และเลือกเซิร์ฟเวอร์
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1 italic">
                    UID
                  </label>
                  <input
                    type="text"
                    placeholder="กรอก UID ของคุณ"
                    value={openId}
                    onChange={(e) => setOpenId(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-lg font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1 italic">
                    เซิร์ฟเวอร์
                  </label>
                  <select
                    value={server}
                    onChange={(e) => setServer(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-lg appearance-none"
                  >
                    <option value="">เลือกเซิร์ฟเวอร์</option>
                    {servers.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
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
                  เลือกแพ็กเกจที่ต้องการ {/* แก้ไข Wording ให้ตรง Pattern */}
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
                      } ${pkg.isSpecial ? "sm:col-span-3 flex items-center justify-between gap-4" : ""}`}
                  >
                    <div>
                        {pkg.isSpecial && (
                             <span className="text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded-full font-bold mb-2 inline-block uppercase">
                             Special
                           </span>
                        )}
                        <p className="text-sm font-bold text-gray-500 group-hover:text-indigo-600 transition-colors uppercase">
                        {pkg.amount}
                        </p>
                         {/* เพิ่มส่วนแสดงรายละเอียดถ้ามี (สำหรับ Supply Pass) */}
                        {pkg.desc && (
                             <p className="text-xs text-gray-400 mt-1">{pkg.desc}</p>
                        )}
                    </div>
                   
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
                    Honkai: Star Rail
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium font-mono uppercase">
                    ID ผู้เล่น
                  </span>
                  <span
                    className={`font-bold ${openId ? "text-gray-900" : "text-red-400 font-mono"}`}
                  >
                    {openId || "REQUIRED"}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium font-mono uppercase">
                    เซิฟเวอร์
                  </span>
                  <span
                    className={`font-bold ${server ? "text-gray-900" : "text-red-400 font-mono"}`}
                  >
                    {servers.find((s) => s.value === server)?.name ||
                      "REQUIRED"}
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
                      ? selectedPackage.price.toLocaleString()
                      : "0"}
                  </span>
                </div>

                <button
                  disabled={!openId || !selectedPackage || !server}
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
                  กรุณาตรวจสอบ ID และ Server ให้ถูกต้องก่อนชำระเงิน
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}