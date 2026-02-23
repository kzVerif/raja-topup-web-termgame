"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CreditCard, Search, X, Ticket } from "lucide-react";
import Link from "next/link";

export default function VouchersPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const vouchers = [
    {
      id: 1,
      name: "EX CASH",
      src: "/vouchers/excash.jpg",
      href: "/vouchers/ex-cash",
    },
    {
      id: 2,
      name: "GeForce Now",
      src: "/vouchers/geforcenow.jpg",
      href: "/vouchers/geforce-now",
    },
    {
      id: 3,
      name: "Razer Gold",
      src: "/vouchers/razer-gold.webp",
      href: "/vouchers/razer-gold",
    },
    {
      id: 4,
      name: "Riot Prepaid Card",
      src: "/vouchers/riotppcard.webp",
      href: "/vouchers/riot-prepaid-card",
    },
    {
      id: 5,
      name: "Roblox Gift Card",
      src: "/vouchers/roblox.webp",
      href: "/vouchers/roblox-gift-card",
    },
    {
      id: 6,
      name: "Steam Wallet",
      src: "/vouchers/steam.webp",
      href: "/vouchers/steam-wallet",
    },
    {
      id: 7,
      name: "TrueMoney",
      src: "/vouchers/truemoney.webp",
      href: "/vouchers/true-money",
    },
  ];

  // กรองบัตรตามคำค้นหาและเรียงลำดับ A-Z
  const filteredVouchers = vouchers
    .filter((v) => v.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="min-h-screen py-12 bg-[#fcfcfd]">
      <div className="container">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-purple-600 font-bold uppercase tracking-wider text-sm">
              <Ticket size={20} />
              <span>Game Vouchers</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900">
              บัตรเติมเกมออนไลน์
            </h1>
            <p className="text-gray-500">
              เลือกซื้อบัตรเติมเกมของราชาได้เลย รับรหัสทันทีผ่านระบบอัตโนมัติ
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              size={20}
            />
            <input
              type="text"
              placeholder="ค้นหาบัตรเติมเงิน..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all shadow-sm text-gray-700"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full text-gray-400 transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* --- VOUCHERS GRID --- */}
        {filteredVouchers.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 animate-in fade-in duration-500">
            {filteredVouchers.map((v) => (
              <button
                key={v.id}
                className="group relative bg-white rounded-[2rem] p-4 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-purple-100 transition-all duration-300 hover:-translate-y-2 active:scale-95"
              >
                <Link href={v.href}>
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4 bg-gray-50 flex items-center justify-center">
                    <Image
                      src={v.src}
                      alt={v.name}
                      width={180}
                      height={180}
                      className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Voucher Name */}
                  <h2 className="text-sm md:text-base font-bold text-gray-800 truncate text-center">
                    {v.name}
                  </h2>

                  <p className="text-[10px] md:text-xs text-indigo-600 font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    เลือกซื้อบัตร
                  </p>

                  {/* Decorate Element */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.6)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </button>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-20 text-center space-y-4">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-gray-400">
              <CreditCard size={32} />
            </div>
            <p className="text-xl font-bold text-gray-800">
              ไม่พบข้อมูลบัตรที่คุณค้นหา
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-purple-600 font-bold hover:underline"
            >
              แสดงบัตรทั้งหมด
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
