import React from 'react';
import { Button } from './Button';
import { ButtonVariant, Page } from '../types';

interface NavBarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export const NavBar: React.FC<NavBarProps> = ({ onNavigate, currentPage }) => {
  const getLinkClass = (page: Page) => {
    const baseClass = "cursor-pointer hover:underline decoration-2 underline-offset-4 decoration-accent";
    return currentPage === page ? `${baseClass} underline decoration-accent` : baseClass;
  };

  return (
    <nav className="sticky top-0 z-50 bg-cream border-b-2 border-black px-4 py-4 shadow-hard">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Area */}
        <div 
          onClick={() => onNavigate('home')}
          className="cursor-pointer text-2xl font-black uppercase tracking-tighter border-2 border-black bg-white px-3 py-1 shadow-hard-sm transform -rotate-2 hover:rotate-0 transition-transform"
        >
          DEV.LOG
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-bold">
          <button onClick={() => onNavigate('about')} className={getLinkClass('about')}>Giới thiệu</button>
          <button onClick={() => onNavigate('blog')} className={getLinkClass('blog')}>Bài viết</button>
          <button onClick={() => onNavigate('projects')} className={getLinkClass('projects')}>Dự án</button>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant={ButtonVariant.PRIMARY} onClick={() => onNavigate('contact')}>
            Liên hệ
          </Button>
        </div>

        {/* Mobile Menu Icon (Placeholder) */}
        <button className="md:hidden border-2 border-black p-2 bg-white shadow-hard-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};