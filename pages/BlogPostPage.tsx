import React from 'react';
import { BlogPost, ButtonVariant } from '../types';
import { Button } from '../components/Button';

interface BlogPostPageProps {
  post: BlogPost;
  onBack: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onBack }) => {
  return (
    <article className="animate-fade-in max-w-4xl mx-auto">
      <Button variant={ButtonVariant.OUTLINE} onClick={onBack} className="mb-6">
        ← Quay lại danh sách
      </Button>

      <div className="bg-white border-2 border-black shadow-hard overflow-hidden">
        {/* Header Image */}
        <div className="h-64 md:h-96 w-full relative border-b-2 border-black">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-accent text-white font-bold px-3 py-1 border-2 border-black shadow-hard-sm">
            {post.category}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-12">
          <div className="mb-8 border-b-2 border-gray-200 pb-6">
            <h1 className="text-3xl md:text-5xl font-black uppercase mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-600 font-mono text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                {post.date}
              </span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                Tác giả: Nguyễn Hữu Tịnh
              </span>
            </div>
          </div>

          <div 
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:uppercase prose-p:text-gray-800 prose-img:border-2 prose-img:border-black prose-img:shadow-hard-sm"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
          
          <div className="mt-12 pt-8 border-t-2 border-black">
             <div className="bg-cream border-2 border-black p-6 shadow-hard-sm">
               <h4 className="font-bold uppercase mb-2">Lời tác giả</h4>
               <p className="italic text-gray-700">"Bài viết dựa trên những trải nghiệm đau thương (và cả những lúc sướng điên người) khi code dạo. Nếu thấy sai sót, hãy nhẹ nhàng góp ý, đừng ném đá tội nghiệp sinh viên nghèo."</p>
             </div>
          </div>
        </div>
      </div>
    </article>
  );
};