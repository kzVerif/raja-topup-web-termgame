import Link from "next/link";
import { Facebook, Mail, Phone, ChevronRight, Globe, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* 1. BRAND & ABOUT */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              RAJA TOPUP
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              ตัวแทนเติมเกมออนไลน์อันดับ 1 บริการดุจราชา 
              ปลอดภัย รวดเร็ว ตลอด 24 ชั่วโมง พร้อมระบบอัตโนมัติที่ทันสมัยที่สุด
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500 transition-all shadow-sm">
                <span className="font-bold text-xs text-center leading-none">LINE</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-pink-500 hover:border-pink-500 transition-all shadow-sm">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 flex items-center gap-2">
              <ChevronRight className="text-indigo-600" size={18} />
              เมนูแนะนำ
            </h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/topup" className="text-gray-500 hover:text-indigo-600 transition-colors">เติมเกมออนไลน์</Link></li>
              <li><Link href="/vouchers" className="text-gray-500 hover:text-indigo-600 transition-colors">ซื้อบัตรเติมเงิน</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">โปรโมชั่นสุดคุ้ม</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">เช็คสถานะรายการ</Link></li>
            </ul>
          </div>

          {/* 3. SUPPORT */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 flex items-center gap-2">
              <ChevronRight className="text-indigo-600" size={18} />
              ช่วยเหลือ & ติดต่อ
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-gray-500">
                <Phone size={16} className="text-indigo-500" />
                08X-XXX-XXXX
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Mail size={16} className="text-indigo-500" />
                support@rajatopup.com
              </li>
              <li><Link href="/tos" className="text-gray-500 hover:text-indigo-600 transition-colors underline-offset-4 hover:underline">เงื่อนไขการให้บริการ</Link></li>
              <li><Link href="/policy" className="text-gray-500 hover:text-indigo-600 transition-colors underline-offset-4 hover:underline">นโยบายความเป็นส่วนตัว</Link></li>
            </ul>
          </div>

          {/* 4. PAYMENT METHODS */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 flex items-center gap-2">
              <ShieldCheck className="text-indigo-600" size={18} />
              มั่นใจ ปลอดภัย
            </h4>
            <p className="text-xs text-gray-400 mb-4 uppercase tracking-wider font-semibold">Accepted Payments</p>
            <div className="grid grid-cols-3 gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              {/* แทนที่ด้วยโล่โก้จริงในอนาคต */}
              <div className="bg-white border border-gray-200 rounded-md p-2 h-10 flex items-center justify-center font-bold text-[8px] text-blue-800">PromptPay</div>
              <div className="bg-white border border-gray-200 rounded-md p-2 h-10 flex items-center justify-center font-bold text-[8px] text-orange-500">True Wallet</div>
              <div className="bg-white border border-gray-200 rounded-md p-2 h-10 flex items-center justify-center font-bold text-[8px] text-blue-600">Banking</div>
            </div>
            <p className="mt-4 text-[11px] text-gray-400 italic">
              * ข้อมูลส่วนตัวของคุณจะถูกเข้ารหัสด้วยระบบ SSL
            </p>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} RAJA TOPUP. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Globe size={14} /> ภาษาไทย (TH)</span>
            <span className="text-xs">Version 1.0.4</span>
          </div>
        </div>
      </div>
    </footer>
  );
}