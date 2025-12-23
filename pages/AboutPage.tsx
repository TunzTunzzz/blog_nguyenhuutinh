import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const AboutPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

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
      name: "JavaScript Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "2025",
      type: "PDF",
      file: "/JavaScriptEssentials1Update20251130-31-f0014i.pdf"
    },
    {
      name: "JavaScript Essentials 2",
      issuer: "Cisco Networking Academy",
      date: "2025",
      type: "PDF",
      file: "/JavaScriptEssentials2Update20251204-32-w04q6r.pdf"
    },
    {
      name: "Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "2025",
      type: "PDF",
      file: "/NetworkingBasicsUpdate20251118-33-gd126a.pdf"
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
                      src="/avatar.jpg"
                      onError={(e) => {
                        e.currentTarget.src = "https://picsum.photos/400/400?grayscale";
                      }}
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
                  {t('about.hometown.val')} <br />
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

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => {
            // Cycling vivid colors for the "folder tab" look
            const colors = ['bg-pink-200', 'bg-blue-200', 'bg-green-200', 'bg-yellow-200'];
            const tabColor = colors[index % colors.length];

            return (
              <div
                key={index}
                className="group relative cursor-pointer"
                onClick={() => setSelectedCert(cert.file)}
              >
                {/* Folder Tab */}
                <div className={`absolute -top-3 left-0 w-24 h-4 ${tabColor} border-t-2 border-l-2 border-r-2 border-black rounded-t-sm z-0`}></div>

                {/* Main Card */}
                <div className="bg-white border-2 border-black p-5 shadow-hard relative z-10 transition-all group-hover:-translate-y-1 group-hover:shadow-hard-lg flex flex-col h-full">

                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-black text-white px-2 py-1 font-mono text-xs font-bold">
                      {cert.type}
                    </div>
                    <div className="text-xs font-bold uppercase border border-black px-2 py-1 bg-gray-100">
                      {cert.date}
                    </div>
                  </div>

                  <h4 className="font-black text-xl leading-tight mb-2 group-hover:text-accent transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-sm font-mono text-gray-500 mb-6 border-b-2 border-gray-100 pb-4">
                    ISSUED BY: <span className="text-black font-bold">{cert.issuer}</span>
                  </p>

                  <div className="mt-auto flex gap-3">
                    <button className="flex-1 bg-white border-2 border-black py-2 font-bold text-sm hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      PREVIEW
                    </button>
                    <a
                      href={cert.file}
                      download={cert.file.split('/').pop()}
                      className="bg-accent text-white border-2 border-black px-4 py-2 font-bold text-sm hover:bg-white hover:text-accent transition-colors flex items-center shadow-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* PDF Preview Modal - Clean Brutalist Style */}
        {selectedCert && (
          <div className="fixed inset-0 bg-accent/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8 animate-fade-in" onClick={() => setSelectedCert(null)}>
            <div className="bg-white border-4 border-black box-border w-full max-w-6xl h-full flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative" onClick={(e) => e.stopPropagation()}>

              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b-4 border-black bg-white">
                <h3 className="font-black text-xl md:text-2xl uppercase tracking-tighter truncate flex-1 pr-4">
                  FILE_VIEWER: <span className="text-accent">{selectedCert.split('/').pop()}</span>
                </h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="bg-black text-white hover:bg-red-600 hover:rotate-90 transition-all duration-300 w-12 h-12 flex items-center justify-center font-black text-xl border-none outline-none"
                >
                  ✕
                </button>
              </div>

              {/* Content Area */}
              <div className="flex-grow bg-gray-100 p-4 relative overflow-hidden">
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                </div>

                <iframe
                  src={selectedCert}
                  className="w-full h-full border-2 border-black shadow-sm bg-white relative z-10"
                  title="Certificate Preview"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};