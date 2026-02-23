"use client";
import { useState } from "react";
import { toast, Toaster } from "sonner";

export default function PaymentPage() {
  const [isOpen, setIsOpen] = useState(false);
  // ไม่ต้องใช้ isProcessing state แล้ว เพราะ Sonner จัดการให้
  const [file, setFile] = useState<File | null>(null);

  const openModal = () => {
    setFile(null);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      toast.error("กรุณาแนบสลิป");
      return;
    }

    // 1. สร้าง Promise จำลองการยิง API
    const paymentPromise = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            // สมมติว่าสำเร็จ
            // ถ้าอยากจำลอง Error ให้แก้เป็น reject("Network error")
            resolve({ data: "Success" }); 
        }, 2000);
    });

    // 2. ใช้ toast.promise จัดการทุกสถานะ (Loading -> Success -> Error)
    toast.promise(paymentPromise(), {
      loading: 'กำลังตรวจสอบข้อมูล...',
      success: (data) => {
        setIsOpen(false); // ปิด Modal อัตโนมัติเมื่อสำเร็จ
        return `ชำระเงินสำเร็จ!`;
      },
      error: (err) => {
        // ไม่ปิด Modal เพื่อให้ User ลองใหม่
        return `เกิดข้อผิดพลาด: ${err}`;
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      
      <button onClick={openModal} className="bg-blue-600 text-white py-3 px-6 rounded-xl">
        ชำระเงิน
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModal} />
          
          <div className="relative bg-white rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-2xl font-bold mb-4">ยืนยันการโอน</h3>
            
            <input 
              type="file" 
              onChange={handleFileChange} 
              className="mb-4 block w-full text-sm text-slate-500 file:bg-blue-50 file:text-blue-700 file:rounded-full file:border-0 file:px-4 file:py-2"
            />

            <div className="flex gap-3">
              <button onClick={closeModal} className="flex-1 py-2 border rounded-lg">ยกเลิก</button>
              <button 
                onClick={handleSubmit} 
                className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}