"use client";

import Image from "next/image";
import { ShoppingBag, CheckCircle2, Info, Link2, X, ExternalLink, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function TftMobileTopup() {
  const [showLightbox, setShowLightbox] = useState(false);

  const packages = [
    { id: 1, price: 69, amount: "27 Prisms" },
    { id: 2, price: 299, amount: "109 Prisms" },
    { id: 3, price: 729, amount: "273 Prisms" },
    { id: 4, price: 1100, amount: "409 Prisms" },
    { id: 5, price: 1800, amount: "718 Prisms" },
    { id: 6, price: 2500, amount: "990 Prisms" },
  ];

  return (
    <main className="min-h-screen bg-[#f8f9fc] py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="bg-white rounded-[2.5rem] p-8 mb-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 overflow-hidden rounded-[2rem] shadow-lg">
            <Image
              src="/topup/7k.png"
              alt="Seven Knights : Rebirth"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900">
              Seven Knights: Rebirth
            </h1>
            <p className="text-gray-500 max-w-xl leading-relaxed">
              เลือกแพ็กเกจที่ต้องการ และคัดลอกลิงก์จากเว็บ Official เพื่อส่งให้แอดมิน
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <span className="px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-xs font-bold border border-green-100">
                ● ราคาคุ้มค่าที่สุด
              </span>
              <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold border border-indigo-100">
                ● ปลอดภัย 100%
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            
            {/* 1. PACKAGES */}
            <section className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-md">
                  <ShoppingBag size={20} />
                </div>
                <h2 className="text-xl font-bold text-gray-800">รายการแพ็กเกจ Prisms</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {packages.map((pkg) => (
                  <div key={pkg.id} className="p-5 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-indigo-200 transition-all group">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">{pkg.amount}</p>
                    <p className="text-2xl font-black text-indigo-600 group-hover:scale-110 transition-transform">฿{pkg.price.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. HOW TO COPY LINK */}
            <section className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-xl flex items-center justify-center shadow-md">
                    <Link2 size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">วิธีคัดลอกลิงก์ (ทำตามภาพ)</h2>
                </div>
                
                {/* ACTION BUTTON: WEB SHOP */}
                <Link 
                  href="https://skre-shop.netmarble.com/en" 
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-orange-100"
                >
                  <ExternalLink size={18} />
                  ไปที่เว็บ Netmarble Shop
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Image Preview Card */}
                <div 
                  className="relative group cursor-zoom-in rounded-3xl overflow-hidden border-4 border-gray-50 shadow-md"
                  onClick={() => setShowLightbox(true)}
                >
                  <Image 
                    src="/7k-topup/howto.jpg" 
                    alt="วิธีคัดลอกลิงก์เติมเงิน" 
                    width={800} 
                    height={1200}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white p-3 rounded-full text-gray-900 shadow-xl">
                      <Search size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-orange-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">
                    คลิกเพื่อขยาย
                  </div>
                </div>

                {/* Steps Description */}
                <div className="space-y-6">
                  <h3 className="font-bold text-gray-800 text-lg">ขั้นตอนง่ายๆ ในการเตรียมเติมเงิน:</h3>
                  <ul className="space-y-4">
                    {[
                      "เข้าเว็บไซต์ Netmarble Shop (ปุ่มสีส้มด้านบน)",
                      "เลือกแพ็กเกจที่ต้องการในเว็บไซต์",
                      "กดปุ่ม 'แชร์' หรือ 'คัดลอก URL' ของหน้านั้นๆ",
                      "นำลิงก์ที่ได้มาส่งให้แอดมินทางแชท Facebook"
                    ].map((step, idx) => (
                      <li key={idx} className="flex gap-4 items-start">
                        <span className="w-6 h-6 shrink-0 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs font-bold">{idx + 1}</span>
                        <p className="text-gray-600 text-sm">{step}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-blue-700 text-xs leading-relaxed">
                    <b>หมายเหตุ:</b> ลิงก์ที่ถูกต้องจะขึ้นต้นด้วย <i>https://skre-shop.netmarble.com/...</i> เท่านั้น
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* --- CONTACT SIDEBAR --- */}
          <div className="lg:col-span-1">
            <div className="sticky top-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden">
              <div className="bg-indigo-900 p-8 text-white text-center">
                <h3 className="font-black text-xl">ส่งลิงก์ให้แอดมิน</h3>
                <p className="text-indigo-300 text-sm mt-1">พร้อมเติมให้ทันที 24 ชม.</p>
              </div>
              <div className="p-8 space-y-6">
                <div className="p-4 bg-green-50 rounded-2xl border border-green-100 flex items-center justify-center gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-700 font-bold text-sm">แอดมินพร้อมให้บริการ</span>
                </div>
                
                <Link
                  href="https://www.facebook.com/profile.php?id=61588210013998"
                  target="_blank"
                  className="w-full py-5 bg-[#1877F2] text-white font-black text-lg rounded-2xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" width={24} height={24} alt="FB" />
                  ส่งลิงก์ทาง Facebook
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- LIGHTBOX (FULL IMAGE) --- */}
      {showLightbox && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowLightbox(false)}
        >
          <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2">
            <X size={40} />
          </button>
          
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-auto rounded-xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src="/7k-topup/howto.jpg"
              alt="How to copy link"
              width={1000}
              height={1500}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </main>
  );
}