import React, { useState } from 'react';
import { BlogGrid } from '../components/BlogGrid';
import { BLOG_POSTS } from '../data/blogPosts';
import { useLanguage } from '../contexts/LanguageContext';

export const BlogArchive: React.FC = () => {
    const [currentBlogPage, setCurrentBlogPage] = useState<number>(1);
    const { t } = useLanguage();

    return (
        <div className="animate-fade-in">
            <div className="mb-8 p-4 bg-white border-2 border-black shadow-hard-sm text-center">
                <h1 className="text-2xl font-bold uppercase">{t('blog.header.archive')}</h1>
                <p className="text-gray-600">{t('blog.header.desc')}</p>
            </div>

            <BlogGrid
                posts={BLOG_POSTS.slice((currentBlogPage - 1) * 9, currentBlogPage * 9)}
            />

            {/* Dynamic Pagination */}
            {Math.ceil(BLOG_POSTS.length / 9) > 1 && (
                <div className="flex justify-center gap-4 mt-12">
                    <button
                        onClick={() => setCurrentBlogPage(Math.max(1, currentBlogPage - 1))}
                        className="px-4 py-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors font-bold disabled:opacity-50"
                        disabled={currentBlogPage === 1}
                    >
                        PREV
                    </button>

                    {Array.from({ length: Math.ceil(BLOG_POSTS.length / 9) }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentBlogPage(idx + 1)}
                            className={`px-4 py-2 border-2 border-black font-bold transition-colors ${currentBlogPage === idx + 1
                                ? 'bg-accent text-white'
                                : 'bg-white hover:bg-black hover:text-white'
                                }`}
                        >
                            {idx + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentBlogPage(Math.min(Math.ceil(BLOG_POSTS.length / 9), currentBlogPage + 1))}
                        className="px-4 py-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors font-bold disabled:opacity-50"
                        disabled={currentBlogPage === Math.ceil(BLOG_POSTS.length / 9)}
                    >
                        NEXT
                    </button>
                </div>
            )}
        </div>
    );
};
