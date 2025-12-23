import React, { useState } from 'react';
import { Button } from './Button';
import { ButtonVariant, Page } from '../types';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [bio] = useState<string>("Tôi là một lập trình viên Frontend quan tâm đến code sạch, thiết kế brutalist và mì siêu cay.");

  return (
    <section className="flex flex-col md:flex-row items-center gap-12 py-12">
      <div className="flex-1 space-y-8">
        <div className="inline-block bg-accent text-white font-bold px-3 py-1 border-2 border-black shadow-hard-sm">
          Sẵn sàng nhận dự án
        </div>
        
        <h1 className="font-black text-dark uppercase flex flex-col items-start gap-4">
          <span className="text-5xl md:text-6xl leading-none">CHÀO, TÔI LÀ</span>
          <span className="text-4xl md:text-6xl bg-white px-5 py-4 border-2 border-black shadow-hard-sm leading-normal tracking-tight">
            NGUYỄN HỮU TỊNH
          </span>
        </h1>
        
        <div className="bg-white border-2 border-black p-6 shadow-hard relative mt-4">
          <p className="text-xl font-medium leading-relaxed">
            {bio}
          </p>
          <div className="absolute -top-3 -right-3">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FF6B6B" stroke="black" strokeWidth="2"/>
             </svg>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <Button variant={ButtonVariant.OUTLINE} onClick={() => onNavigate('projects')}>
            Xem Portfolio
          </Button>
        </div>
      </div>

      <div className="flex-1 w-full max-w-md relative group">
        <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 border-2 border-black"></div>
        <div className="relative border-2 border-black bg-white p-2 aspect-square overflow-hidden transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
          <img 
            src="https://picsum.photos/600/600?grayscale" 
            alt="Portrait placeholder" 
            className="w-full h-full object-cover border-2 border-black filter contrast-125"
          />
        </div>
      </div>
    </section>
  );
};