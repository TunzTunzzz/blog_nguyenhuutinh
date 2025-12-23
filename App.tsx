import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { BlogGrid } from './components/BlogGrid';
import { Footer } from './components/Footer';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <BlogGrid />
          </>
        );
      case 'about':
        return <AboutPage />;
      case 'blog':
        return (
          <div className="animate-fade-in">
             <div className="mb-8 p-4 bg-white border-2 border-black shadow-hard-sm text-center">
                <h1 className="text-2xl font-bold uppercase">Blog Archives</h1>
                <p className="text-gray-600">Chia sẻ kiến thức về Frontend, Design và Cuộc sống</p>
             </div>
             <BlogGrid />
             {/* Pagination Mock */}
             <div className="flex justify-center gap-4 mt-12">
                <button className="px-4 py-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors font-bold disabled:opacity-50" disabled>PREV</button>
                <button className="px-4 py-2 border-2 border-black bg-accent text-white font-bold">1</button>
                <button className="px-4 py-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors font-bold">2</button>
                <button className="px-4 py-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors font-bold">3</button>
                <button className="px-4 py-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors font-bold">NEXT</button>
             </div>
          </div>
        );
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white bg-cream text-dark flex flex-col">
      <NavBar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="container mx-auto px-4 py-8 flex-grow space-y-16">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;