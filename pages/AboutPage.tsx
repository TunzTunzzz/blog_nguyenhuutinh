import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const AboutPage: React.FC = () => {
  const { t, language } = useLanguage();

  const skills = [
    "ReactJS", "TypeScript", "TailwindCSS", "Node.js", "Figma", "UI/UX Design", "Git", "REST API"
  ];

  const experiences = [
    {
      role: t('about.journey.student4'),
      company: "HUTECH University",
      period: language === 'vi' ? "Hiện tại" : "Present",
      description: t('about.journey.student4.desc')
    },
    {
      role: t('about.journey.student1'),
      company: "HUTECH University",
      period: "2022",
      description: t('about.journey.student1.desc')
    }
  ];

  const certificates = [
    {
      name: "The Complete Web Developer Bootcamp",
      issuer: "Udemy",
      date: "2023",
      type: "PDF"
    },
    {
      name: "Chứng chỉ Tiếng Anh TOEIC 650",
      issuer: "IIG Vietnam",
      date: "2023",
      type: "PDF"
    },
    {
      name: "Giải Ba: Hackathon Sinh viên IT",
      issuer: "HUTECH",
      date: "2022",
      type: "PDF"
    },
    {
      name: "HackerRank Java Basic",
      issuer: "HackerRank",
      date: "2023",
      type: "PDF"
    }
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      {/* SECTION: VỀ TÔI & PROFILE */}
      <div>
        <h2 className="text-4xl font-black uppercase mb-6">{t('about.title')}</h2>
        
        <div className="bg-white border-2 border-black p-6 md:p-8 shadow-hard relative overflow-hidden">
          {/* Badge Decoration */}
          <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 font-mono text-sm font-bold border-l-2 border-b-2 border-white z-10">
            PROFILE.JSON
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Cột trái: Avatar & Thông tin cơ bản */}
            <div className="space-y-6">
              
              {/* --- PHẦN AVATAR --- */}
              <div className="flex items-start gap-6">
                <div className="relative group">
                    <div className="w-32 h-32 md:w-40 md:h-40 border-2 border-black p-1 bg-white shadow-hard group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-200">
                        {/* Thay đổi link ảnh avatar ở src bên dưới */}
                        <img 
                            src="https://picsum.photos/400/400?grayscale" 
                            alt="Avatar Nguyễn Hữu Tịnh" 
                            className="w-full h-full object-cover border border-black grayscale group-hover:grayscale-0 transition-all" 
                        />
                    </div>
                    {/* Sticker trang trí */}
                    <div className="absolute -bottom-2 -right-2 bg-accent text-white text-xs font-bold px-2 py-1 border-2 border-black rotate-12 z-20 uppercase">
                        {t('about.sticker')}
                    </div>
                </div>
                
                <div className="flex-1 pt-2">
                     <label className="block text-xs font-bold uppercase text-gray-500 mb-1">{t('about.name')}</label>
                     <div className="text-2xl md:text-3xl font-black font-mono uppercase text-dark leading-none mb-4">{t('about.myname')}</div>
                     
                     <label className="block text-xs font-bold uppercase text-gray-500 mb-1">{t('about.birthYear')}</label>
                     <div className="text-xl font-black font-mono">2004</div>
                </div>
              </div>
              {/* --- HẾT PHẦN AVATAR --- */}

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">{t('about.hometown')}</label>
                <div className="text-lg font-bold leading-tight">
                   {t('about.hometown.val')} <br/>
                  <span className="text-sm font-normal bg-yellow-200 px-1 border border-black italic inline-block mt-1">{t('about.hometown.note')}</span>
                </div>
              </div>

              {/* --- PHẦN LIÊN KẾT MẠNG XÃ HỘI --- */}
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">{t('about.connect')}</label>
                <div className="flex flex-wrap gap-3">
                    {/* Facebook */}
                    <a href="https://www.facebook.com/nguyen.huu.tinh.443033/" target="_blank" rel="noreferrer" className="bg-white border-2 border-black p-2 shadow-hard-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all group" title="Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-blue-600"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    
                    {/* Github */}
                    <a href="https://github.com/TunzTunzzz" target="_blank" rel="noreferrer" className="bg-white border-2 border-black p-2 shadow-hard-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all group" title="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-gray-600"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>

                    {/* Email */}
                    <a href="mailto:nhuutinh2004@gmail.com" className="flex items-center gap-2 bg-white border-2 border-black px-3 py-2 shadow-hard-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-sm font-bold hover:bg-black hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        Email
                    </a>

                    {/* Phone */}
                    <a href="tel:+84362098344" className="flex items-center gap-2 bg-white border-2 border-black px-3 py-2 shadow-hard-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-sm font-bold hover:bg-accent hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        +84 362 098 344
                    </a>
                </div>
              </div>
              {/* --- HẾT PHẦN LIÊN KẾT --- */}

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">{t('about.hobbies')}</label>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-cream border-2 border-black px-3 py-1 font-bold flex items-center gap-2 hover:-translate-y-1 transition-transform cursor-default">
                    🎮 {t('about.hobby.game')}
                  </span>
                  <span className="bg-cream border-2 border-black px-3 py-1 font-bold flex items-center gap-2 hover:-translate-y-1 transition-transform cursor-default">
                    🎵 {t('about.hobby.music')}
                  </span>
                  <span className="bg-cream border-2 border-black px-3 py-1 font-bold flex items-center gap-2 hover:-translate-y-1 transition-transform cursor-default">
                    🎬 {t('about.hobby.movie')}
                  </span>
                </div>
              </div>
            </div>

            {/* Cột phải: Ưu/Nhược điểm */}
            <div className="flex flex-col justify-end gap-4 h-full">
               <div className="bg-green-100 border-2 border-black p-4 flex items-center justify-between shadow-hard-sm hover:translate-x-1 transition-transform">
                  <div>
                     <span className="block text-xs font-bold uppercase text-green-800">{t('about.pros')}</span>
                     <span className="text-2xl font-black text-dark">{t('about.pros.val')}</span>
                  </div>
                  <div className="text-4xl">😄</div>
               </div>
               
               <div className="bg-red-100 border-2 border-black p-4 flex items-center justify-between shadow-hard-sm relative group hover:translate-x-1 transition-transform">
                  <div>
                     <span className="block text-xs font-bold uppercase text-red-800">{t('about.cons')}</span>
                     <span className="text-2xl font-black text-dark group-hover:line-through decoration-4 decoration-black">{t('about.cons.val')}</span>
                  </div>
                  <div className="text-4xl">😴</div>
                  
                  {/* Tem cảnh báo vui */}
                  <div className="absolute -top-3 -right-3 bg-accent text-white text-[10px] font-bold px-2 py-1 border border-black rotate-12 hidden group-hover:block z-20 shadow-sm">
                    {t('about.cons.alert')}
                  </div>
               </div>
            </div>
          </div>
          
          {/* Divider style "cắt giấy" */}
          <div className="w-full h-px bg-black opacity-10 mb-8 border-t-2 border-dashed border-gray-400"></div>

          {/* Phần 2: Giới thiệu (Văn bản) */}
          <div className="pr-0 md:pr-32 relative z-0">
             <p className="text-xl leading-relaxed text-gray-800">
               {t('about.intro')}
            </p>
          </div>

        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-bold uppercase mb-6 flex items-center gap-2">
            <span className="block w-4 h-4 bg-accent border-2 border-black"></span>
            {t('about.skills')}
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="border-2 border-black px-3 py-1 bg-white font-bold hover:bg-black hover:text-white transition-colors cursor-default shadow-hard-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-2xl font-bold uppercase mb-6 flex items-center gap-2">
            <span className="block w-4 h-4 bg-dark border-2 border-black"></span>
            {t('about.journey')}
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-black">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-black"></div>
                <h4 className="text-xl font-bold">{exp.role}</h4>
                <div className="text-accent font-mono font-bold text-sm mb-2">@ {exp.company} // {exp.period}</div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificates Section */}
      <div className="border-t-2 border-black pt-8">
        <h3 className="text-2xl font-bold uppercase mb-6 flex items-center gap-2">
          <span className="block w-4 h-4 bg-yellow-400 border-2 border-black"></span>
          {t('about.certs')}
        </h3>
        <p className="mb-6 text-gray-700">{t('about.certs.desc')}</p>
        
        <div className="grid md:grid-cols-2 gap-4">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="group bg-white border-2 border-black p-4 shadow-hard flex items-center justify-between hover:translate-x-1 hover:translate-y-1 hover:shadow-hard-sm transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                 {/* Icon PDF */}
                 <div className="bg-red-100 border-2 border-black p-2 text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                 </div>
                 <div>
                   <h4 className="font-bold text-lg leading-tight group-hover:text-accent transition-colors">{cert.name}</h4>
                   <p className="text-xs font-mono text-gray-500 mt-1">{cert.issuer} • {cert.date}</p>
                 </div>
              </div>
              
              <div className="bg-black text-white px-3 py-1 font-bold text-xs border border-transparent group-hover:bg-white group-hover:text-black group-hover:border-black transition-colors">
                 {t('about.download')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};