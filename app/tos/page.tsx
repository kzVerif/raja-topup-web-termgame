import { ShieldCheck, Scale, AlertCircle, RefreshCcw, UserCheck, FileText } from "lucide-react";

export default function tos() {
  const lastUpdated = "15 กุมภาพันธ์ 2026";

  const terms = [
    {
      icon: <UserCheck className="text-indigo-600" />,
      title: "1. การสมัครสมาชิก",
      content: "ผู้ใช้บริการต้องให้ข้อมูลที่เป็นจริงและเป็นปัจจุบันในการสมัครสมาชิก เพื่อประโยชน์ในการตรวจสอบและรับสิทธิ์การดูแลจากทีมงาน หากตรวจพบข้อมูลเท็จ ทางเราขอสงวนสิทธิ์ในการระงับบัญชีโดยไม่ต้องแจ้งให้ทราบล่วงหน้า"
    },
    {
      icon: <RefreshCcw className="text-purple-600" />,
      title: "2. นโยบายการคืนเงิน",
      content: "เนื่องจากสินค้าเป็นสินค้าดิจิทัล (Digital Goods) เมื่อการเติมเงินหรือการส่งรหัสสำเร็จแล้ว จะไม่สามารถยกเลิกหรือขอคืนเงินได้ทุกกรณี เว้นแต่จะเกิดข้อผิดพลาดจากทางระบบของ RAJA TOPUP เท่านั้น"
    },
    {
      icon: <AlertCircle className="text-amber-500" />,
      title: "3. ข้อจำกัดความรับผิดชอบ",
      content: "ทางเราจะไม่รับผิดชอบต่อความเสียหายที่เกิดจากการกรอกข้อมูลผิดพลาดของผู้ใช้ (เช่น กรอก ID เกมผิด) โปรดตรวจสอบข้อมูลให้ถี่ถ้วนก่อนยืนยันการชำระเงินทุกครั้ง"
    },
    {
      icon: <Scale className="text-blue-600" />,
      title: "4. การปรับปรุงเงื่อนไข",
      content: "RAJA TOPUP ขอสงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไขและข้อตกลงในการให้บริการโดยไม่ต้องแจ้งให้ทราบล่วงหน้า โดยการเปลี่ยนแปลงจะมีผลทันทีที่ประกาศบนหน้าเว็บไซต์"
    }
  ];

  return (
    <main className="min-h-screen bg-[#fcfcfd] py-16 md:py-24">
      <div className="container max-w-4xl">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-50 rounded-2xl text-indigo-600 mb-4">
            <FileText size={32} />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            เงื่อนไขการให้บริการ
          </h1>
          <p className="text-gray-500 font-medium">
            อัปเดตล่าสุดเมื่อ: <span className="text-indigo-600">{lastUpdated}</span>
          </p>
        </div>

        {/* --- CONTENT CARD --- */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden">
          <div className="p-8 md:p-12 space-y-12">
            
            <div className="prose prose-indigo max-w-none">
              <p className="text-gray-600 leading-relaxed text-lg">
                ยินดีต้อนรับสู่ <span className="font-bold text-gray-900">RAJA TOPUP</span> โปรดอ่านเงื่อนไขและข้อตกลงการใช้บริการด้านล่างนี้อย่างละเอียด 
                การใช้บริการของเราถือว่าคุณได้ยอมรับและยินยอมที่จะปฏิบัติตามเงื่อนไขทั้งหมดที่ระบุไว้
              </p>
            </div>

            <div className="grid gap-8">
              {terms.map((item, index) => (
                <div key={index} className="flex gap-6 p-6 rounded-3xl hover:bg-gray-50 transition-colors group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* --- SECURITY BADGE --- */}
            <div className="mt-12 p-6 rounded-3xl bg-indigo-50 border border-indigo-100 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div className="bg-white p-3 rounded-full text-indigo-600 shadow-sm">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="font-bold text-indigo-900">ความปลอดภัยคือหัวใจของเรา</p>
                <p className="text-sm text-indigo-700">เราใช้ระบบเข้ารหัสระดับสากลเพื่อปกป้องข้อมูลและการทำธุรกรรมของคุณตลอด 24 ชั่วโมง</p>
              </div>
            </div>

          </div>
        </div>

        {/* --- FOOTNOTE --- */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            มีข้อสงสัยเกี่ยวกับเงื่อนไข? <a href="/contact" className="text-indigo-600 font-bold hover:underline">ติดต่อฝ่ายสนับสนุน</a>
          </p>
        </div>

      </div>
    </main>
  );
}