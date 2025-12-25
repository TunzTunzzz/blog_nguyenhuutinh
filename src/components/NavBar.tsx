import React from 'react';
import { Button } from './Button';
import { ButtonVariant } from '../types';
import type { Page } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface NavBarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export const NavBar: React.FC<NavBarProps> = ({ onNavigate, currentPage }) => {
  const { t, language, toggleLanguage } = useLanguage();

  const getLinkClass = (page: Page) => {
    const baseClass = "cursor-pointer hover:underline decoration-2 underline-offset-4 decoration-accent";
    return currentPage === page ? `${baseClass} underline decoration-accent` : baseClass;
  };

  return (
    <nav className="sticky top-0 z-50 bg-cream border-b-2 border-black px-4 py-4 shadow-hard">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Area */}
        <a
          href="/"
          className="cursor-pointer text-2xl font-black uppercase tracking-tighter border-2 border-black bg-white px-3 py-1 shadow-hard-sm transform -rotate-2 hover:rotate-0 transition-transform block"
        >
          DEV.LOG
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-bold">
          <a href="/" className={getLinkClass('home')}>{t('nav.home')}</a>
          <a href="/about" className={getLinkClass('about')}>{t('nav.about')}</a>
          <a href="/blog" className={getLinkClass('blog')}>{t('nav.blog')}</a>
        </div>

        {/* CTA & Lang Switch */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="w-10 h-10 flex items-center justify-center font-black border-2 border-black bg-white shadow-hard-sm hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
            title="Switch Language"
          >
            {language === 'vi' ? 'EN' : 'VN'}
          </button>

          <a href="/contact">
            <Button variant={ButtonVariant.PRIMARY}>
              {t('nav.contact')}
            </Button>
          </a>
        </div>

        {/* Mobile Menu Icon (Placeholder) */}
        <div className="flex gap-4 md:hidden">
          <button
            onClick={toggleLanguage}
            className="w-10 h-10 flex items-center justify-center font-black border-2 border-black bg-white shadow-hard-sm active:translate-y-[1px] active:translate-x-[1px] active:shadow-none"
          >
            {language === 'vi' ? 'EN' : 'VN'}
          </button>
          <button className="border-2 border-black p-2 bg-white shadow-hard-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};