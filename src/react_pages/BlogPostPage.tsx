import React, { useEffect, useState, useRef } from 'react';
import { ButtonVariant } from '../types';
import type { BlogPost } from '../types';
import { Button } from '../components/Button';
import { useLanguage } from '../contexts/LanguageContext';

interface BlogPostPageProps {
  post: BlogPost;
}

interface TocItem {
  id: string;
  text: string;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }) => {
  const { t } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);
  const [toc, setToc] = useState<TocItem[]>([]);

  // Function to process headings and generate TOC
  useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll('h3');
      const tocList: TocItem[] = [];

      headings.forEach((heading, index) => {
        // Generate simplified ID if not present
        if (!heading.id) {
          const id = `heading-${index}`;
          heading.id = id;
        }
        tocList.push({
          id: heading.id,
          text: heading.innerText
        });
      });

      setToc(tocList);
    }
  }, [post.content]);

  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -20; // Offset for sticky header if any
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <article className="animate-fade-in max-w-7xl mx-auto px-4 md:px-0">
      <a href="/blog" className="inline-block mb-6 no-underline">
        <Button variant={ButtonVariant.OUTLINE}>
          ← {t('blog.readMore').replace('Đọc bài viết', 'Quay lại').replace('Read Article', 'Back')}
        </Button>
      </a>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

        {/* MAIN CONTENT COLUMN */}
        <div className="lg:col-span-3 bg-white border-2 border-black shadow-hard overflow-hidden">
          {/* Header Image */}
          <div className="h-64 md:h-[400px] w-full relative border-b-2 border-black group">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
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

            {/* Injected Content */}
            <div
              ref={contentRef}
              className="prose prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-p:text-gray-800 prose-img:border-2 prose-img:border-black prose-img:shadow-hard-sm prose-a:text-accent prose-a:font-bold prose-code:bg-gray-100 prose-code:px-1 prose-code:border prose-code:border-gray-300"
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

        {/* TABLE OF CONTENTS SIDEBAR (Desktop) */}
        <div className="hidden lg:block lg:col-span-1 sticky top-8">
          <div className="bg-white border-2 border-black shadow-hard p-6">
            <h3 className="font-black text-xl uppercase mb-4 border-b-2 border-black pb-2 flex items-center gap-2">
              <span className="w-3 h-3 bg-accent rounded-full border border-black"></span>
              Mục lục
            </h3>

            {toc.length > 0 ? (
              <nav className="flex flex-col gap-3">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleScrollTo(item.id, e)}
                    className="text-sm font-bold text-gray-600 hover:text-accent hover:translate-x-1 transition-all flex items-start gap-2"
                  >
                    <span className="text-accent mt-[2px]">›</span>
                    <span className="leading-tight">{item.text}</span>
                  </a>
                ))}
              </nav>
            ) : (
              <p className="text-gray-500 italic text-sm">Không có mục lục</p>
            )}

            {/* Decorative Extra */}
            <div className="mt-8 pt-4 border-t-2 border-dashed border-gray-300">
              <div className="text-xs font-mono text-gray-400">
                READ_TIME: ~5 MINS <br />
                AUTHOR: TINH_NH
              </div>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
};