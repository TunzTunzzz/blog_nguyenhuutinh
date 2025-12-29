import type { Project } from '../types';

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: {
            vi: "Blog Cá Nhân & Portfolio",
            en: "Personal Blog & Portfolio"
        },
        role: {
            vi: "Lập trình viên Frontend",
            en: "Frontend Developer"
        },
        overview: {
            vi: "Blog cá nhân hiệu năng cao, nơi chia sẻ kiến thức và portfolio. Chuyển đổi từ React SPA sang Astro SSG để tối ưu SEO và tốc độ tải trang.",
            en: "High-performance personal blog sharing knowledge and portfolio. Migrated from React SPA to Astro SSG for optimized SEO and page load speed."
        },
        key_tasks: {
            vi: [
                "Xây dựng kiến trúc Hybrid (Astro + React Islands) giúp giảm 70% JS bundle.",
                "Thiết kế UI phong cách Neo-Brutalism độc đáo với TailwindCSS.",
                "Tối ưu State Management đa ngôn ngữ dùng Nano Stores (nhẹ hơn Context API).",
                "Triển khai Dark/Light mode và hiệu ứng chuyển động mượt mà."
            ],
            en: [
                "Built Hybrid Architecture (Astro + React Islands) reducing JS bundle by 70%.",
                "Designed unique Neo-Brutalist UI with TailwindCSS.",
                "Optimized multilingual State Management using Nano Stores (lighter than Context API).",
                "Implemented Dark/Light mode and smooth transition effects."
            ]
        },
        technologies: ["Astro", "React 19", "TypeScript", "TailwindCSS", "Nano Stores"],
        imageUrl: "/images/projects/blog_portfolio.png",
        demoUrl: "https://blog-nguyenhuutinh.vercel.app/",
        codeUrl: "https://github.com/TunzTunzzz/blog_nguyenhuutinh"
    },
    {
        id: 2,
        title: {
            vi: "Trợ Lý Gọi Món Nhà Hàng AI",
            en: "AI-powered Restaurant Ordering Assistant"
        },
        role: {
            vi: "Lập trình viên Frontend (UI/UX)",
            en: "Frontend Developer (UI/UX)"
        },
        overview: {
            vi: "Hệ thống gọi món thông minh tích hợp AI Chatbot. Giúp khách hàng đặt món tự nhiên qua hội thoại và đề xuất món ăn theo sở thích.",
            en: "Smart ordering system integrated with AI Chatbot. Enables natural food ordering via conversation and personalized recommendations."
        },
        key_tasks: {
            vi: [
                "Phát triển giao diện Chat-based UI tương tác thời gian thực.",
                "Thiết kế luồng UX đặt món tối ưu cho hành vi người Việt.",
                "Xử lý cập nhật Giỏ hàng Real-time (Optimistic UI updates).",
                "Tích hợp API backend và luồng xử lý AI (Natural Language Processing)."
            ],
            en: [
                "Developed real-time conversational Chat-based UI.",
                "Designed ordering UX flows optimized for Vietnamese behaviors.",
                "Handled Real-time Cart updates (Optimistic UI updates).",
                "Integrated Backend APIs and AI processing workflows (NLP)."
            ]
        },
        technologies: ["ReactJS", "Bootstrap 5", "REST API", "UI/UX Design"],
        imageUrl: "/images/projects/ice_restaurant.png",
        codeUrl: "https://github.com/lamquangloc/Project_DACS.git"
    }
];
