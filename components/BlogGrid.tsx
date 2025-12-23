import React from 'react';
import { ButtonVariant } from '../types';
import { Button } from './Button';
import { BLOG_POSTS } from '../data/blogPosts';
import { useLanguage } from '../contexts/LanguageContext';

interface BlogGridProps {
  onPostClick?: (postId: number) => void;
}

export const BlogGrid: React.FC<BlogGridProps> = ({ onPostClick }) => {
  const { t } = useLanguage();

  return (
    <section>
      <div className="flex items-center justify-between mb-8 border-b-2 border-black pb-4">
        <h2 className="text-4xl font-black uppercase">{t('blog.latest')}</h2>
        <span className="font-bold font-mono text-sm hidden sm:block">{t('blog.archive')}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="bg-white border-2 border-black flex flex-col h-full shadow-hard transition-transform hover:-translate-y-1">
            <div className="h-48 overflow-hidden border-b-2 border-black relative">
               <div className="absolute top-2 left-2 bg-accent text-white text-xs font-bold px-2 py-1 border-2 border-black z-10">
                 {post.category}
               </div>
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xs font-mono text-gray-500 mb-2 block">{post.date}</span>
              <h3 
                className="text-2xl font-bold mb-3 leading-tight hover:text-accent cursor-pointer line-clamp-2"
                onClick={() => onPostClick && onPostClick(post.id)}
              >
                {post.title}
              </h3>
              <p className="text-gray-700 mb-6 flex-grow border-l-4 border-gray-200 pl-3 line-clamp-3">
                {post.excerpt}
              </p>
              
              <Button 
                variant={ButtonVariant.OUTLINE} 
                fullWidth 
                onClick={() => onPostClick && onPostClick(post.id)}
              >
                {t('blog.readMore')}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};