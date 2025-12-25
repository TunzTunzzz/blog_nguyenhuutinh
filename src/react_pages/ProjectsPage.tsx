import React from 'react';
import { Button } from '../components/Button';
import { ButtonVariant } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

export const ProjectsPage: React.FC = () => {
  const { t } = useLanguage();
  const projects = [
    {
      id: 1,
      title: "E-Commerce Brutal",
      category: "Web App",
      description: "Một nền tảng thương mại điện tử với thiết kế phá cách, sử dụng React và Redux Toolkit.",
      tech: ["React", "Redux", "NodeJS"],
      image: "https://picsum.photos/400/300?random=10"
    },
    {
      id: 2,
      title: "Task Master AI",
      category: "Productivity",
      description: "Ứng dụng quản lý công việc tích hợp AI để gợi ý ưu tiên công việc hàng ngày.",
      tech: ["Next.js", "OpenAI API", "Tailwind"],
      image: "https://picsum.photos/400/300?random=11"
    },
    {
      id: 3,
      title: "Finance Dashboard",
      category: "Fintech",
      description: "Dashboard quản lý tài chính cá nhân với biểu đồ trực quan và báo cáo real-time.",
      tech: ["Vue.js", "D3.js", "Firebase"],
      image: "https://picsum.photos/400/300?random=12"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="border-b-2 border-black pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
           <h2 className="text-4xl font-black uppercase mb-2">{t('projects.title')}</h2>
           <p className="text-lg">{t('projects.subtitle')}</p>
        </div>
        <div className="font-mono bg-white border-2 border-black px-2 py-1 shadow-hard-sm text-sm">
          TOTAL: {projects.length}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white border-2 border-black shadow-hard flex flex-col group">
            {/* Window Header */}
            <div className="border-b-2 border-black p-2 bg-cream flex items-center justify-between">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full border-2 border-black bg-accent"></div>
                <div className="w-3 h-3 rounded-full border-2 border-black bg-white"></div>
              </div>
              <span className="text-xs font-mono font-bold uppercase truncate max-w-[150px]">{project.title}.exe</span>
            </div>

            {/* Image */}
            <div className="aspect-video border-b-2 border-black overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow gap-4">
              <div>
                <span className="text-xs font-bold bg-black text-white px-2 py-0.5 mb-2 inline-block">{project.category}</span>
                <h3 className="text-xl font-bold leading-tight mb-2">{project.title}</h3>
                <p className="text-sm text-gray-700 line-clamp-3">{project.description}</p>
              </div>

              <div className="mt-auto space-y-4">
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t, i) => (
                     <span key={i} className="text-xs border border-black px-1 bg-gray-100 font-mono">{t}</span>
                  ))}
                </div>
                <div className="flex gap-2">
                   <Button variant={ButtonVariant.PRIMARY} className="flex-1 text-sm py-1">{t('projects.demo')}</Button>
                   <Button variant={ButtonVariant.OUTLINE} className="flex-1 text-sm py-1">{t('projects.code')}</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};