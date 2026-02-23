import Image from "next/image";
import {
  Gamepad2,
  CreditCard,
  ShieldCheck,
  Zap,
  Clock,
  Wallet,
  Users,
  CheckCircle2,
  LayoutGrid,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container py-12 lg:py-24">
        {/* --- HERO SECTION --- */}
        <section className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">
              เติมเกมกับ{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                RAJA TOPUP
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              บริการดุจราชา เติมแล้วเป็นราชาโคตรมหาราชา
              <br />
              เติมดี เติมเร็ว เติมไว ต้อง{" "}
              <span className="font-bold text-indigo-600">RAJA TOPUP</span>{" "}
              เท่านั้น
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={"/topup"}>
              <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-bold rounded-2xl shadow-xl shadow-indigo-200 transition-all active:scale-95 flex items-center justify-center gap-2 group">
                <Gamepad2 className="group-hover:rotate-12 transition-transform" />
                เติมเกมออนไลน์
              </button>
            </Link>
            <Link href={"/vouchers"}>
              <button className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-purple-100 text-purple-600 hover:border-purple-600 text-lg font-bold rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-2">
                <CreditCard />
                บัตรเติมเงินออนไลน์
              </button>
            </Link>
          </div>
        </section>

        {/* --- FEATURES GRID --- */}
        <section className="mt-20 md:mt-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                ชำระเงินปลอดภัย
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                รองรับทุกธนาคาร พร้อมเพย์ ทรูวอลเล็ต และระบบความปลอดภัยขั้นสูง
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                เติมดี เติมเร็ว เติมไว
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                ระบบอัตโนมัติ 100% ไม่ต้องรอนาน เครดิตเข้าทันทีหลังชำระเงิน
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                บริการ 24 ชั่วโมง
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                ไม่ว่าคุณจะเล่นเกมเวลาไหน ทีมงานและระบบของเราพร้อมดูแลตลอดเวลา
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Wallet size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                รองรับ SPayLater
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                ช้อปก่อนจ่ายทีหลัง เพิ่มความสะดวกสบายให้เหล่านักล่าแต้ม
              </p>
            </div>
          </div>
        </section>

        {/* --- STATS SECTION (เพิ่มใหม่) --- */}
        <section className="mt-16 py-12 px-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-2xl shadow-indigo-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <div className="flex justify-center text-indigo-200 mb-2">
                <CheckCircle2 size={40} />
              </div>
              <div className="text-4xl lg:text-5xl font-black">1,250,000+</div>
              <p className="text-indigo-100 font-medium tracking-wide uppercase text-sm">
                รายการเติมเกมที่สำเร็จ
              </p>
            </div>

            <div className="space-y-2 border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0">
              <div className="flex justify-center text-indigo-200 mb-2">
                <Users size={40} />
              </div>
              <div className="text-4xl lg:text-5xl font-black">850,000+</div>
              <p className="text-indigo-100 font-medium tracking-wide uppercase text-sm">
                ผู้ใช้งานในระบบทั้งหมด
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-center text-indigo-200 mb-2">
                <LayoutGrid size={40} />
              </div>
              <div className="text-4xl lg:text-5xl font-black">15+</div>
              <p className="text-indigo-100 font-medium tracking-wide uppercase text-sm">
                เกมที่รองรับการเติม
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
