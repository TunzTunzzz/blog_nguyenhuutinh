import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="mt-20 border-t-2 border-black bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="font-bold text-lg mb-4 uppercase">
          © {new Date().getFullYear()} Nguyễn Hữu Tịnh
        </p>
        <div className="flex justify-center gap-6 font-mono text-sm">
          <a href="https://www.facebook.com/nguyen.huu.tinh.443033/" target="_blank" rel="noopener noreferrer" className="hover:bg-black hover:text-white px-1">FACEBOOK</a>
          <a href="https://github.com/TunzTunzzz" target="_blank" rel="noopener noreferrer" className="hover:bg-black hover:text-white px-1">GITHUB</a>
          <a href="#" className="hover:bg-black hover:text-white px-1">LINKEDIN</a>
        </div>
      </div>
    </footer>
  );
};