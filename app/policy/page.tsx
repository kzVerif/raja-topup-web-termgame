import {
  Lock,
  Eye,
  Database,
  Share2,
  UserCheck,
  ShieldCheck,
  LifeBuoy,
} from "lucide-react";

export default function Policy() {
  const lastUpdated = "15 กุมภาพันธ์ 2026";

  const policies = [
    {
      icon: <Database className="text-indigo-600" />,
      title: "ข้อมูลที่เราจัดเก็บ",
      content:
        "เราเก็บข้อมูลเท่าที่จำเป็น เช่น ชื่อผู้ใช้, อีเมล, เบอร์โทรศัพท์ และประวัติการทำรายการ เพื่อใช้ในการยืนยันตัวตนและให้บริการเติมเกมแก่คุณอย่างแม่นยำ",
    },
    {
      icon: <Eye className="text-purple-600" />,
      title: "การใช้งานข้อมูล",
      content:
        "ข้อมูลของคุณจะถูกใช้เพื่อดำเนินการเติมเกม, แจ้งเตือนสถานะการชำระเงิน และปรับปรุงบริการให้ดียิ่งขึ้น เราจะไม่มีการนำข้อมูลไปขายให้บุคคลภายนอกโดยเด็ดขาด",
    },
    {
      icon: <Lock className="text-amber-500" />,
      title: "การรักษาความปลอดภัย",
      content:
        "เราใช้เทคโนโลยี SSL Encryption ในการเข้ารหัสข้อมูลทุกขั้นตอน และมีระบบ Firewall ป้องกันการเข้าถึงข้อมูลโดยไม่ได้รับอนุญาตในระดับมาตรฐานสากล",
    },
    {
      icon: <Share2 className="text-blue-600" />,
      title: "การเปิดเผยข้อมูลแก่บุคคลที่สาม",
      content:
        "เราจะเปิดเผยข้อมูลเฉพาะกับผู้ให้บริการชำระเงิน (เช่น ธนาคาร, True Wallet) และผู้ให้บริการเกมที่คุณเลือกเติม เพื่อให้รายการสำเร็จลุล่วงเท่านั้น",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fcfcfd] py-16 md:py-24">
      <div className="container max-w-4xl">
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-green-50 rounded-2xl text-green-600 mb-4">
            <Lock size={32} />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            นโยบายความเป็นส่วนตัว
          </h1>
          <p className="text-gray-500 font-medium">
            เราให้ความสำคัญกับ{" "}
            <span className="text-green-600">ความเป็นส่วนตัวของคุณ</span>{" "}
            มากที่สุด
          </p>
          <p className="text-gray-500 font-medium">
            อัปเดตล่าสุดเมื่อ:{" "}
            <span className="text-indigo-600">{lastUpdated}</span>
          </p>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 p-8 md:p-12">
          <div className="grid gap-10">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors duration-300">
                  {policy.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {policy.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed italic md:not-italic">
                    {policy.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <hr className="my-12 border-gray-100" />

          {/* --- USER RIGHTS SECTION --- */}
          <div className="bg-indigo-50/50 rounded-3xl p-8 border border-indigo-50">
            <div className="flex items-center gap-3 mb-6">
              <UserCheck className="text-indigo-600" />
              <h2 className="text-2xl font-bold text-indigo-950">
                สิทธิ์ของคุณ
              </h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-indigo-800">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                สิทธิ์ในการเข้าถึงและขอสำเนาข้อมูล
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                สิทธิ์ในการขอลบหรือทำลายข้อมูล
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                สิทธิ์ในการแก้ไขข้อมูลให้ถูกต้อง
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                สิทธิ์ในการคัดค้านการประมวลผล
              </li>
            </ul>
          </div>

          {/* --- CONTACT SUPPORT --- */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              มีข้อสงสัยเกี่ยวกับเงื่อนไข?{" "}
              <a
                href="/contact"
                className="text-indigo-600 font-bold hover:underline"
              >
                ติดต่อฝ่ายสนับสนุน
              </a>
            </p>
          </div>
        </div>

        {/* --- FOOTER BADGE --- */}
        <div className="mt-8 flex justify-center items-center gap-2 text-gray-400 text-xs uppercase tracking-widest font-bold">
          <ShieldCheck size={14} />
          <span>PDPA Compliant System</span>
        </div>
      </div>
    </main>
  );
}
