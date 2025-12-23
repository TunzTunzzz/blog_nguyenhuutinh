import React from 'react';
import { Button } from '../components/Button';
import { useLanguage } from '../contexts/LanguageContext';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className="max-w-2xl mx-auto animate-fade-in">
        <div className="bg-white border-2 border-black shadow-hard p-6 md:p-10 relative">
          {/* Decoration */}
          <div className="absolute -top-4 -left-4 bg-accent text-white font-bold px-4 py-1 border-2 border-black shadow-hard-sm transform -rotate-2">
            {t('contact.decoration')}
          </div>

          <h2 className="text-3xl font-black uppercase mb-2 mt-4">{t('contact.title')}</h2>
          <p className="mb-8 text-gray-700 font-medium">{t('contact.subtitle')}</p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-bold uppercase text-sm block">{t('contact.name')}</label>
                <input 
                  type="text" 
                  className="w-full bg-cream border-2 border-black p-3 font-medium focus:outline-none focus:shadow-hard focus:-translate-y-1 focus:-translate-x-1 transition-all placeholder:text-gray-400"
                  placeholder={t('contact.placeholder.name')}
                />
              </div>
              <div className="space-y-2">
                <label className="font-bold uppercase text-sm block">{t('contact.email')}</label>
                <input 
                  type="email" 
                  className="w-full bg-cream border-2 border-black p-3 font-medium focus:outline-none focus:shadow-hard focus:-translate-y-1 focus:-translate-x-1 transition-all placeholder:text-gray-400"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-bold uppercase text-sm block">{t('contact.subject')}</label>
              <select className="w-full bg-cream border-2 border-black p-3 font-medium focus:outline-none focus:shadow-hard focus:-translate-y-1 focus:-translate-x-1 transition-all">
                <option>Hợp tác dự án</option>
                <option>Tuyển dụng</option>
                <option>Hỏi đáp chung</option>
                <option>Khác</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-bold uppercase text-sm block">{t('contact.message')}</label>
              <textarea 
                rows={5}
                className="w-full bg-cream border-2 border-black p-3 font-medium focus:outline-none focus:shadow-hard focus:-translate-y-1 focus:-translate-x-1 transition-all placeholder:text-gray-400"
                placeholder={t('contact.placeholder.msg')}
              ></textarea>
            </div>

            <div className="pt-2">
              <Button fullWidth className="text-lg py-4">
                {t('contact.submit')}
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
           {/* Email Box */}
           <div 
             className="flex items-center gap-3 md:gap-4 bg-white border-2 border-black px-5 py-3 md:px-8 md:py-4 shadow-hard w-full md:w-auto justify-start md:justify-center max-w-full cursor-default hover:-translate-y-1 transition-transform"
           >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-dark text-white border-2 border-black flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div className="text-left overflow-hidden">
                 <div className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">Email Contact</div>
                 <div className="text-base md:text-xl font-black text-dark truncate select-text">nhuutinh2004@gmail.com</div>
              </div>
           </div>

           {/* Phone Box */}
           <div 
             className="flex items-center gap-3 md:gap-4 bg-white border-2 border-black px-5 py-3 md:px-8 md:py-4 shadow-hard w-full md:w-auto justify-start md:justify-center max-w-full cursor-default hover:-translate-y-1 transition-transform"
           >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent text-white border-2 border-black flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="text-left overflow-hidden">
                 <div className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">Phone Number</div>
                 <div className="text-base md:text-xl font-black text-dark truncate select-text">+84 362 098 344</div>
              </div>
           </div>
        </div>
      </div>
    </>
  );
};