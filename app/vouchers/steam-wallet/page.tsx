"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  Gamepad2,
  Ticket,
  CreditCard,
  ShoppingBag,
  CheckCircle2,
  Plus,
  Minus,
} from "lucide-react";

interface codPackage {
  id: number;
  price: number;
  amount: string;
}

export default function page() {
  const [selectedPackage, setSelectedPackage] = useState<codPackage | null>(
    null,
  );
  const [quantity, setQuantity] = useState(1);

  const packages = [
    { id: 1, price: 50, amount: "บัตร Steam Wallet 50 บาท" },
    { id: 2, price: 100, amount: "บัตร Steam Wallet 100 บาท" },
    { id: 3, price: 200, amount: "บัตร Steam Wallet 200 บาท" },
    { id: 4, price: 350, amount: "บัตร Steam Wallet 350 บาท" },
    { id: 5, price: 1000, amount: "บัตร Steam Wallet 1000 บาท" },
  ];

  // คำนวณราคารวม
  const totalPrice = selectedPackage ? selectedPackage.price * quantity : 0;

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <main className="min-h-screen bg-[#f8f9fc] py-12">
      <div className="container max-w-6xl mx-auto px-4">
        {/* --- HEADER --- */}
        <div className="bg-white rounded-[2.5rem] p-8 mb-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 overflow-hidden rounded-[2rem] shadow-lg bg-indigo-600 flex items-center justify-center">
            <Image
              src="/vouchers/steam.webp"
              alt="Roblox Gift Card"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900">
              ซื้อบัตร Steam Wallet
            </h1>
            <p className="text-gray-500 max-w-xl leading-relaxed">
              เลือกราคาบัตรและจำนวนที่ต้องการ
              ระบบจะจัดส่งรหัสบัตรให้คุณทันทีหลังชำระเงินเสร็จสิ้น รวดเร็ว
              ปลอดภัย 24 ชม.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <span className="px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-xs font-bold flex items-center gap-1.5">
                <CheckCircle2 size={14} /> รับรหัสทันที
              </span>
              <span className="px-4 py-1.5 bg-slate-800 text-white rounded-full text-xs font-bold flex items-center gap-1.5">
                <ShoppingBag size={14} /> ซื้อได้ทุกเกมบน Steam
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-2 space-y-8">
            {/* STEP 1: SELECT PACKAGE */}
            <section className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold">
                  1
                </div>
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <ShoppingBag size={20} className="text-indigo-600" />{" "}
                  เลือกราคาบัตร
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
                    <p
                      className={`text-sm font-bold transition-colors ${selectedPackage?.id === pkg.id ? "text-indigo-600" : "text-gray-500"}`}
                    >
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

            {/* STEP 2: QUANTITY */}
            <section className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold">
                  2
                </div>
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Plus size={20} className="text-indigo-600" />{" "}
                  ระบุจำนวนที่ต้องการ
                </h2>
              </div>
              <div className="flex items-center gap-6 justify-center bg-gray-50 p-6 rounded-3xl">
                <button
                  onClick={handleDecrement}
                  className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors shadow-sm"
                >
                  <Minus size={24} />
                </button>

                <div className="text-center min-w-[80px]">
                  <span className="text-4xl font-black text-gray-900">
                    {quantity}
                  </span>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    ใบ
                  </p>
                </div>

                <button
                  onClick={handleIncrement}
                  className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors shadow-sm"
                >
                  <Plus size={24} />
                </button>
              </div>
            </section>
          </div>

          {/* --- RIGHT COLUMN: SUMMARY --- */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
              <div className="bg-indigo-600 p-6 text-white text-center">
                <h3 className="font-bold text-lg">สรุปรายการสั่งซื้อ</h3>
              </div>
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">สินค้า</span>
                  <span className="text-gray-900 font-bold">
                    บัตร Steam Wallet
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">ราคาต่อใบ</span>
                  <span
                    className={`font-bold ${selectedPackage ? "text-gray-900" : "text-red-400"}`}
                  >
                    {selectedPackage
                      ? `฿${selectedPackage.price}`
                      : "ยังไม่เลือก"}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">จำนวน</span>
                  <span className="text-gray-900 font-bold">{quantity} ใบ</span>
                </div>

                <hr className="border-dashed border-gray-100" />

                <div className="flex justify-between items-end">
                  <span className="text-gray-500 font-bold">ราคาสุทธิ</span>
                  <span className="text-3xl font-black text-indigo-600">
                    ฿{totalPrice.toLocaleString()}
                  </span>
                </div>

                <button
                  disabled={!selectedPackage}
                  className="w-full py-4 bg-indigo-600 disabled:bg-gray-200 disabled:cursor-not-allowed text-white font-black text-lg rounded-2xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <CreditCard size={20} />
                  ชำระเงินทันที
                </button>

                <p className="text-[10px] text-center text-gray-400 leading-relaxed">
                  เมื่อชำระเงินแล้ว รหัสจะถูกส่งไปยัง{" "}
                  <span className="font-bold text-gray-600">
                    ประวัติการสั่งซื้อ
                  </span>
                  <br />
                  โปรดตรวจสอบความถูกต้องของรายการก่อนกดยืนยัน
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
