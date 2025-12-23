import React, { useState } from 'react';
import { Button } from '../components/Button';

export const ContactPage: React.FC = () => {
  const [showZaloModal, setShowZaloModal] = useState(false);

  // NOTE: Vui lòng lưu hình ảnh danh thiếp Zalo của bạn thành file "zalo-qr.jpg" 
  // và đặt ở thư mục gốc (cùng cấp với index.html)
  const zaloQrImage = "./zalo-qr.jpg"; 

  return (
    <>
      <div className="max-w-2xl mx-auto animate-fade-in">
        <div className="bg-white border-2 border-black shadow-hard p-6 md:p-10 relative">
          {/* Decoration */}
          <div className="absolute -top-4 -left-4 bg-accent text-white font-bold px-4 py-1 border-2 border-black shadow-hard-sm transform -rotate-2">
            HÃY NÓI XIN CHÀO!
          </div>

          <h2 className="text-3xl font-black uppercase mb-2 mt-4">Liên Hệ</h2>
          <p className="mb-8 text-gray-700 font-medium">Bạn có ý tưởng điên rồ? Hay chỉ muốn rủ tôi đi ăn mì cay? Điền vào form bên dưới nhé.</p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-bold uppercase text-sm block">Tên của bạn</label>
                <input 
                  type="text" 
                  className="w-full bg-cream border-2 border-black p-3 font-medium focus:outline-none focus:shadow-hard focus:-translate-y-1 focus:-translate-x-1 transition-all placeholder:text-gray-400"
                  placeholder="VD: Nguyễn Văn A"
                />
              </div>
              <div className="space-y-2">
                <label className="font-bold uppercase text-sm block">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-cream border-2 border-black p-3 font-medium focus:outline-none focus:shadow-hard focus:-translate-y-1 focus:-translate-x-1 transition-all placeholder:text-gray-400"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-bold uppercase text-sm block">Chủ đề</label>
              <select className="w-full bg-cream border-2 border-black p-3 font-medium focus:outline-none focus:shadow-hard focus:-translate-y-1 focus:-translate-x-1 transition-all">
                <option>Hợp tác dự án</option>
                <option>Tuyển dụng</option>
                <option>Hỏi đáp chung</option>
                <option>Khác</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-bold uppercase text-sm block">Tin nhắn</label>
              <textarea 
                rows={5}
                className="w-full bg-cream border-2 border-black p-3 font-medium focus:outline-none focus:shadow-hard focus:-translate-y-1 focus:-translate-x-1 transition-all placeholder:text-gray-400"
                placeholder="Hãy viết gì đó..."
              ></textarea>
            </div>

            <div className="pt-2">
              <Button fullWidth className="text-lg py-4">
                GỬI TIN NHẮN 🚀
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 text-center">
           <div className="bg-dark text-white p-4 border-2 border-black shadow-hard-sm flex flex-col justify-center items-center h-32">
              <div className="text-xs font-mono opacity-70 mb-1">EMAIL</div>
              <div className="font-bold break-all">namcutevll78@gmail.com</div>
           </div>
           
           {/* Zalo Button */}
           <div 
             onClick={() => setShowZaloModal(true)}
             className="bg-white p-4 border-2 border-black shadow-hard-sm flex flex-col justify-center items-center h-32 cursor-pointer hover:bg-gray-50 hover:-translate-y-1 hover:shadow-hard transition-all group relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] px-2 py-0.5 font-bold">CLICK ME</div>
              <div className="text-xs font-mono opacity-70 mb-2 group-hover:text-blue-600 transition-colors">MỞ DANH THIẾP ZALO</div>
              {/* Thumbnail - Show a cropped part or scaled down version */}
              <div className="w-16 h-16 border-2 border-black overflow-hidden relative group-hover:scale-110 transition-transform bg-gray-200">
                <img 
                  src={zaloQrImage} 
                  alt="Zalo QR" 
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    // Fallback if image is missing
                    (e.target as HTMLImageElement).src = "https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=namcutevll78@gmail.com";
                  }}
                />
              </div>
           </div>
        </div>
      </div>

      {/* Zalo Modal Overlay */}
      {showZaloModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowZaloModal(false)}
        >
          {/* Business Card Display */}
          <div 
            className="relative transform transition-all scale-100 max-w-[320px] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setShowZaloModal(false)}
              className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-black shadow-hard z-10 hover:bg-gray-100 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L1 13M1 1L13 13" stroke="black" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Full Image Display */}
            <div className="bg-white p-2 border-2 border-black shadow-2xl rounded-xl overflow-hidden">
               <img 
                 src={zaloQrImage} 
                 alt="Nguyễn Hữu Tịnh Zalo Card" 
                 className="w-full h-auto rounded-lg block"
                 onError={(e) => {
                    // Instruction fallback if image is missing
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if(parent) {
                        const msg = document.createElement('div');
                        msg.className = "p-8 text-center";
                        msg.innerHTML = "<p class='font-bold text-red-500'>Không tìm thấy ảnh!</p><p class='text-sm mt-2'>Vui lòng lưu ảnh danh thiếp của bạn thành file <code>zalo-qr.jpg</code> và đặt vào thư mục gốc.</p>";
                        parent.appendChild(msg);
                    }
                 }}
               />
            </div>
            
            <p className="mt-4 text-white text-center font-bold text-shadow-sm pointer-events-none">
              Quét mã để kết bạn Zalo
            </p>
          </div>
        </div>
      )}
    </>
  );
};