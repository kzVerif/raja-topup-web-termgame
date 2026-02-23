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

interface mlbbPackages {
  id: number;
  price: number;
  amount: string;
  desc?: string;
}

export default function MobileLegendsTopup() {
  const [selectedPackage, setSelectedPackage] = useState<mlbbPackages>();
  const [userId, setUserId] = useState("");
  const [zoneId, setZoneId] = useState("");

  // แปลงข้อมูลจาก JSON
  const packages: mlbbPackages[] = [
    { id: 1, price: 58.02, amount: "Weekly Diamond Pass", desc: "รับเพชรรายวันสุดคุ้ม" },
    { id: 2, price: 6, amount: "11 Diamonds" },
    { id: 3, price: 12, amount: "22 Diamonds" },
    { id: 4, price: 30, amount: "56 Diamonds" },
    { id: 5, price: 45, amount: "86 Diamonds" },
    { id: 6, price: 60, amount: "112 Diamonds" },
    { id: 7, price: 90, amount: "172 Diamonds" },
    { id: 8, price: 120, amount: "223 Diamonds" },
    { id: 9, price: 135, amount: "257 Diamonds" },
    { id: 10, price: 180, amount: "336 Diamonds" },
    { id: 11, price: 300, amount: "570 Diamonds" },
    { id: 12, price: 360, amount: "706 Diamonds" },
    { id: 13, price: 600, amount: "1,163 Diamonds" },
    { id: 14, price: 1080, amount: "2,195 Diamonds" },
    { id: 15, price: 1200, amount: "2,398 Diamonds" },
    { id: 16, price: 1800, amount: "3,688 Diamonds" },
    { id: 17, price: 2700, amount: "5,532 Diamonds" },
    { id: 18, price: 3000, amount: "6,042 Diamonds" },
    { id: 19, price: 4500, amount: "9,288 Diamonds" },
  ];

  return (
    <main className="min-h-screen bg-[#f8f9fc] py-12">
      <div className="container max-w-6xl">
        {/* --- GAME HEADER --- */}
        <div className="bg-white rounded-[2.5rem] p-8 mb-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 overflow-hidden rounded-[2rem] shadow-lg">
            <Image
              src="/topup/MLBB.webp" // ใช้ไฟล์ตามที่ระบุ
              alt="Mobile Legends: Bang Bang"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900">
              Mobile Legends: Bang Bang
            </h1>
            <p className="text-gray-500 max-w-xl leading-relaxed">
              ณ ดินแดนแห่งรุ่งอรุณ (Land of Dawn) ที่ซึ่งผู้แข็งแกร่งเท่านั้นคือผู้กำหนดกฎเกณฑ์! 
              จงอย่าให้ความขาดแคลนมาฉุดรั้งจิตวิญญาณแห่งนักสู้... 
              จงเติม Diamonds เพื่อปลดปล่อยสกินระดับจักรวาลและแผดเผาศัตรูให้เป็นจุน! 
              ข้าขอประทานพลังแห่งเงินตรา เพื่อให้เจ้าก้าวขึ้นสู่บัลลังก์ Mythical Glory ได้อย่างสง่างาม!
            </p>
             {/* Badge Pattern บังคับ */}
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
            {/* STEP 1: INPUTS (MLBB ใช้ User ID + Zone ID) */}
            <section className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold">
                  1
                </div>
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <User size={20} className="text-indigo-600" />{" "}
                  กรอก ID และ Zone
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1 italic">
                    User ID
                  </label>
                  <input
                    type="text"
                    placeholder="User ID (เช่น 12345678)"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-lg font-mono"
                  />
                </div>
                <div className="md:col-span-1 space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1 italic">
                    Zone ID
                  </label>
                  <input
                    type="text"
                    placeholder="(1234)"
                    value={zoneId}
                    onChange={(e) => setZoneId(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-lg font-mono text-center"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-400 font-medium italic mt-4">
                * ดู ID และ Zone ID ได้ที่หน้าโปรไฟล์มุมซ้ายบนของเกม (Zone ID จะอยู่ในวงเล็บ)
              </p>
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
                    <div>
                        <p className="text-sm font-bold text-gray-500 group-hover:text-indigo-600 transition-colors uppercase">
                        {pkg.amount}
                        </p>
                        {pkg.desc && (
                             <p className="text-xs text-gray-400 mt-1">{pkg.desc}</p>
                        )}
                    </div>
                   
                    <p className="text-xl font-black text-gray-800">
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
                    Mobile Legends
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium font-mono uppercase">
                    User ID
                  </span>
                  <span
                    className={`font-bold ${userId ? "text-gray-900" : "text-red-400 font-mono"}`}
                  >
                    {userId || "REQUIRED"}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium font-mono uppercase">
                    Zone ID
                  </span>
                  <span
                    className={`font-bold ${zoneId ? "text-gray-900" : "text-red-400 font-mono"}`}
                  >
                    {zoneId || "REQUIRED"}
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
                  disabled={!userId || !zoneId || !selectedPackage}
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
                  กรุณาตรวจสอบ ID และ Zone ให้ถูกต้องก่อนชำระเงิน
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}