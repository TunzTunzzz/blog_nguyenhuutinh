import React from 'react';
import { BlogPost, ButtonVariant } from '../types';
import { Button } from './Button';

const MOCK_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Tại sao 'Flat Design 2.0' đang thống trị?",
    excerpt: "Bóng đổ đã trở lại, nhưng lần này chúng cứng cáp, tối tăm và đầy cá tính. Đây là cách thực hiện phong cách này.",
    category: "THIẾT KẾ",
    date: "24 Th10, 2023",
    imageUrl: "https://picsum.photos/400/250?random=1"
  },
  {
    id: 2,
    title: "React Hooks: Những mặt trái",
    excerpt: "Chúng ta yêu thích chúng, nhưng đôi khi chúng gây ra vòng lặp vô tận khiến ta muốn khóc. Phân tích sâu về các lỗi thường gặp.",
    category: "LẬP TRÌNH",
    date: "18 Th10, 2023",
    imageUrl: "https://picsum.photos/400/250?random=2"
  },
  {
    id: 3,
    title: "Xây dựng ứng dụng với Gemini API",
    excerpt: "Thêm AI vào trang web cá nhân không khó như bạn nghĩ. Hãy cùng tạo ra nội dung động thú vị.",
    category: "AI",
    date: "10 Th10, 2023",
    imageUrl: "https://picsum.photos/400/250?random=3"
  }
];

export const BlogGrid: React.FC = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-8 border-b-2 border-black pb-4">
        <h2 className="text-4xl font-black uppercase">Bài viết mới nhất</h2>
        <span className="font-bold font-mono text-sm hidden sm:block">LƯU TRỮ // 2023</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_POSTS.map((post) => (
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
              <h3 className="text-2xl font-bold mb-3 leading-tight hover:text-accent cursor-pointer">
                {post.title}
              </h3>
              <p className="text-gray-700 mb-6 flex-grow border-l-4 border-gray-200 pl-3">
                {post.excerpt}
              </p>
              
              <Button variant={ButtonVariant.OUTLINE} fullWidth>
                Đọc bài viết
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};