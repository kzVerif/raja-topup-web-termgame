"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X, Gamepad2, CreditCard, Home, LogIn } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "หน้าแรก", href: "/", icon: <Home size={18} /> },
    { name: "เติมเกมออนไลน์", href: "/topup", icon: <Gamepad2 size={18} /> },
    { name: "บัตรเติมเงินออนไลน์", href: "/vouchers", icon: <CreditCard size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              RAJA TOPUP
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-1.5 px-3 py-2 text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <Link href="/login">
              <button className="ml-4 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all shadow-md shadow-indigo-200 flex items-center gap-2">
                <LogIn size={18} />
                เข้าสู่ระบบ
              </button>
            </Link>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-indigo-600 hover:bg-gray-100 outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-3 px-3 py-3 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
          <Link href="/login" onClick={() => setIsOpen(false)}>
            <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white font-bold rounded-xl active:scale-95 transition-transform">
              <LogIn size={20} />
              เข้าสู่ระบบ/สมัครสมาชิก
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}