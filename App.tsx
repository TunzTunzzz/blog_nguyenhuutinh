import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { BlogGrid } from './components/BlogGrid';
import { Footer } from './components/Footer';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { Page } from './types';
import { BLOG_POSTS } from './data/blogPosts';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

// Create a wrapper component to use the hook
const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const { t } = useLanguage();

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setSelectedPostId(null);
    window.scrollTo(0, 0);
  };

  const handlePostClick = (postId: number) => {
    setSelectedPostId(postId);
    window.scrollTo(0, 0);
  };

  const handleBackToBlog = () => {
    setSelectedPostId(null);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    if (selectedPostId !== null) {
      const post = BLOG_POSTS.find(p => p.id === selectedPostId);
      if (post) {
        return <BlogPostPage post={post} onBack={handleBackToBlog} />;
      }
    }

    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <BlogGrid onPostClick={handlePostClick} />
          </>
        );
      case 'about':
        return <AboutPage />;
      case 'blog':
        return (
          <div className="animate-fade-in">
             <div className="mb-8 p-4 bg-white border-2 border-black shadow-hard-sm text-center">
                <h1 className="text-2xl font-bold uppercase">{t('blog.header.archive')}</h1>
                <p className="text-gray-600">{t('blog.header.desc')}</p>
             </div>
             <BlogGrid onPostClick={handlePostClick} />
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
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white bg-cream text-dark flex flex-col">
      <NavBar onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="container mx-auto px-4 py-8 flex-grow space-y-16">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;