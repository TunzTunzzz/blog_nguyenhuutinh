import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { PROJECTS } from '../data/projects';
import { Button } from '../components/Button';
import { ButtonVariant } from '../types';

export const ProjectsPage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="animate-fade-in">
      {/* HEADER SECTION */}
      <div className="mb-12 border-b-2 border-black pb-8">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 flex items-baseline gap-4">
          <span className="bg-dark text-white px-4 py-2 transform -rotate-2 inline-block shadow-hard-sm">
            WORK
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
            / PROJECTS
          </span>
        </h2>
        <p className="text-xl md:text-2xl font-bold font-mono text-gray-600 max-w-2xl">
          {t('projects.subtitle')}
        </p>
      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {PROJECTS.map((project, index) => (
          <div key={project.id} className="group relative">

            {/* Decorative Number */}
            <div className="absolute -left-4 -top-6 text-6xl font-black text-gray-200 z-0 pointer-events-none select-none">
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* Card Container */}
            <div className="bg-white border-2 border-black shadow-hard hover:translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg transition-all duration-300 relative z-10 flex flex-col h-full">

              {/* Image Window */}
              <div className="h-48 md:h-64 border-b-2 border-black overflow-hidden relative bg-gray-100">
                <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
                <img
                  src={project.imageUrl}
                  alt={project.title[language]}
                  className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
                />

                {/* Tech Stack Pills Overlay */}
                <div className="absolute bottom-2 left-2 flex flex-wrap gap-1 z-20">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="bg-black text-white text-[10px] uppercase font-bold px-2 py-1 border border-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-2xl font-black uppercase mb-1 leading-none group-hover:text-accent transition-colors">
                    {project.title[language]}
                  </h3>
                  <div className="text-sm font-bold font-mono text-gray-500 uppercase bg-gray-100 inline-block px-2 py-1 mt-2 border border-black border-dashed">
                    ROLE: {project.role[language]}
                  </div>
                </div>

                <div className="space-y-4 mb-6 flex-grow">
                  <div>
                    <h4 className="font-bold underline decoration-2 decoration-accent mb-1 text-sm uppercase">
                      {language === 'vi' ? 'Tổng quan' : 'Overview'}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {project.overview[language]}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold underline decoration-2 decoration-accent mb-1 text-sm uppercase">
                      {language === 'vi' ? 'Nhiệm vụ chính' : 'Key Responsibilities'}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      {project.key_tasks[language].map((task, idx) => (
                        <li key={idx} className="leading-tight">{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto pt-4 border-t-2 border-gray-100 border-dashed">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex-1">
                      <Button variant={ButtonVariant.PRIMARY} className="w-full justify-center">
                        {t('projects.demo')} ↗
                      </Button>
                    </a>
                  )}
                  {project.codeUrl && (
                    <a href={project.codeUrl} target="_blank" rel="noreferrer" className="flex-1">
                      <Button variant={ButtonVariant.OUTLINE} className="w-full justify-center bg-white">
                        {t('projects.code')} {`</>`}
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GITHUB CTA */}
      <div className="mt-20 bg-black text-white p-8 md:p-12 text-center border-2 border-transparent shadow-hard relative overflow-hidden group">
        <div className="absolute inset-0 border-2 border-white opacity-20 m-2 pointer-events-none"></div>
        <h3 className="text-3xl md:text-4xl font-black uppercase mb-4">
          Còn nhiều nữa trên GitHub!
        </h3>
        <p className="mb-8 text-gray-400 max-w-xl mx-auto">
          Đây chỉ là một vài dự án tiêu biểu. Ghé thăm kho tàng code (và cả đống bug) của tôi tại link bên dưới.
        </p>
        <a href="https://github.com/TunzTunzzz" target="_blank" rel="noreferrer" className="inline-block transform hover:scale-110 transition-transform">
          <span className="bg-white text-black font-black text-xl px-8 py-4 border-2 border-accent shadow-[4px_4px_0px_0px_#FF6B6B]">
            GITHUB PROFILE
          </span>
        </a>
      </div>
    </div>
  );
};