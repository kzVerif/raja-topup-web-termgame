"use client";

import Image from "next/image";
import React, { useState } from "react"; // 1. เพิ่ม useState
import { Gamepad2, Search, X } from "lucide-react";
import Link from "next/link";

export default function TopupPage() {
  // 2. สร้าง State สำหรับเก็บคำค้นหา
  const [searchQuery, setSearchQuery] = useState("");

  const games = [
    {
      id: 1,
      name: "Seven Knights",
      src: "/topup/7k.png",
      href: "/topup/seven-knight",
    },
    {
      id: 2,
      name: "Call of Duty Mobile",
      src: "/topup/calllof.png",
      href: "/topup/call-of-duty-mobile",
    },
    {
      id: 3,
      name: "Delta Force",
      src: "/topup/deltaf.png",
      href: "/topup/delta-force",
    },
    {
      id: 4,
      name: "FC Mobile",
      src: "/topup/fcm.jpg",
      href: "/topup/fc-mobile",
    },
    {
      id: 5,
      name: "Free Fire",
      src: "/topup/freefire.png",
      href: "/topup/freefire",
    },
    {
      id: 6,
      name: "Genshin Impact",
      src: "/topup/genshin.png",
      href: "/topup/genshin-impact",
    },
    {
      id: 7,
      name: "Honkai Star Rail",
      src: "/topup/honk.png",
      href: "/topup/honkai-star-rail",
    },
    {
      id: 8,
      name: "League of Legends",
      src: "/topup/lol.png",
      href: "/topup/league-of-legends",
    },
    {
      id: 9,
      name: "LoL: Wild Rift",
      src: "/topup/lolw.jpg",
      href: "/topup/lol-wild-rift",
    },
    {
      id: 10,
      name: "Mobile Legends",
      src: "/topup/MLBB.webp",
      href: "/topup/mobile-legends",
    },
    {
      id: 11,
      name: "MU Origin",
      src: "/topup/mu.png",
      href: "/topup/mu-origin",
    },
    {
      id: 12,
      name: "Goddess of Victory: Nikke",
      src: "/topup/nikke.png",
      href: "/topup/nikke",
    },
    {
      id: 13,
      name: "PUBG Mobile",
      src: "/topup/pubgm.webp",
      href: "/topup/pubg-mobile",
    },
    {
      id: 15,
      name: "Ragnarok M",
      src: "/topup/ragm.png",
      href: "/topup/ragnarok-m",
    },
    { id: 16, name: "RoV", src: "/topup/rov.png", href: "/topup/rov" },
    {
      id: 17,
      name: "TFT Mobile",
      src: "/topup/tftm.png",
      href: "/topup/tft-mobile",
    },
    {
      id: 18,
      name: "Valorant",
      src: "/topup/valo.jpg",
      href: "/topup/valorant",
    },
    {
      id: 19,
      name: "Wuthering Waves",
      src: "/topup/wuwa.jpg",
      href: "/topup/wuthering-waves",
    },
    {
      id: 20,
      name: "Zenless Zone Zero",
      src: "/topup/zzz.png",
      href: "/topup/zenless-zone-zero",
    },
  ];

  // 3. กรองข้อมูลตามตัวอักษร และ ค้นหาตามชื่อเกม
  const filteredGames = games
    .filter((game) =>
      game.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="min-h-screen py-12 bg-[#fcfcfd] ">
      <div className="container">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-indigo-600 font-bold uppercase tracking-wider text-sm">
              <Gamepad2 size={20} />
              <span>Game Topup</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900">
              เติมเกมออนไลน์
            </h1>
            <p className="text-gray-500">
              เลือกเติมเกมที่ต้องการเป็นมหาราชาได้เลย บริการไว ระบบอัตโนมัติ
            </p>
          </div>

          {/* Search Bar ที่ใช้งานได้จริง */}
          <div className="relative w-full md:w-80">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              size={20}
            />
            <input
              type="text"
              placeholder="ค้นหาชื่อเกม..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // อัปเดต State เมื่อพิมพ์
              className="w-full pl-12 pr-10 py-3.5 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-sm text-gray-700"
            />
            {/* ปุ่มล้างคำค้นหา (แสดงเมื่อมีข้อความ) */}
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

        {/* --- GAMES GRID --- */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 animate-in fade-in duration-500">
            {filteredGames.map((game) => (
              <button
                key={game.id}
                className="group relative bg-white rounded-[2rem] p-3 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-indigo-100 transition-all duration-300 hover:-translate-y-2 active:scale-95"
              >
                <Link href={game.href}>
                  <div className="relative aspect-square overflow-hidden rounded-[1.5rem] mb-4">
                    <Image
                      src={game.src}
                      alt={game.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h2 className="text-sm md:text-base font-bold text-gray-800 truncate px-1">
                    {game.name}
                  </h2>

                  <p className="text-[10px] md:text-xs text-indigo-600 font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    คลิกเพื่อเติมเงิน
                  </p>

                  <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.8)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </button>
            ))}
          </div>
        ) : (
          /* กรณีค้นหาไม่เจอ */
          <div className="py-20 text-center space-y-4">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-gray-400">
              <Search size={32} />
            </div>
            <div className="space-y-1">
              <p className="text-xl font-bold text-gray-800">
                ไม่พบเกมที่ค้นหา
              </p>
              <p className="text-gray-500">
                ลองเปลี่ยนคำค้นหา หรือตรวจสอบตัวสะกดอีกครั้ง
              </p>
            </div>
            <button
              onClick={() => setSearchQuery("")}
              className="text-indigo-600 font-bold hover:underline"
            >
              ล้างการค้นหาทั้งหมด
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
