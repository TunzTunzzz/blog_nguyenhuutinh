import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  vi: {
    // NavBar
    'nav.about': 'Giới thiệu',
    'nav.blog': 'Bài viết',
    'nav.projects': 'Dự án',
    'nav.contact': 'Liên hệ',
    
    // Hero
    'hero.status': 'Sẵn sàng nhận dự án',
    'hero.greeting': 'CHÀO, TÔI LÀ',
    'hero.bio': 'Tôi là một lập trình viên Frontend quan tâm đến code sạch, thiết kế brutalist và mì siêu cay.',
    'hero.viewPortfolio': 'Xem Portfolio',
    
    // About Page
    'about.title': 'Về Tôi',
    'about.name': 'Họ Tên',
    'about.birthYear': 'Năm sinh',
    'about.hometown': 'Quê quán',
    'about.hometown.note': '(Hiện nay đã gộp chung với tỉnh Đắk Lắk)',
    'about.connect': 'Kết nối với tôi',
    'about.hobbies': 'Sở thích',
    'about.hobby.game': 'Chơi Game',
    'about.hobby.music': 'Nghe Nhạc',
    'about.hobby.movie': 'Xem Phim',
    'about.pros': 'Ưu điểm',
    'about.pros.val': 'DỄ GẦN',
    'about.cons': 'Nhược điểm',
    'about.cons.val': 'LƯỜI',
    'about.cons.alert': 'CẦN CAFFEINE',
    'about.intro': 'Tôi không chỉ viết code, tôi giải quyết vấn đề. Hiện tại là sinh viên năm 4, tôi tin rằng một sản phẩm tốt phải là sự cân bằng hoàn hảo giữa thẩm mỹ và hiệu năng.',
    'about.skills': 'Kỹ Năng Vũ Khí',
    'about.journey': 'Hành Trình',
    'about.journey.student4': 'Sinh viên năm 4',
    'about.journey.student4.desc': 'Đang là sinh viên năm 4 ngành Công nghệ thông tin, chuyên ngành Công nghệ phần mềm. Tập trung nghiên cứu và phát triển các ứng dụng web thực tế.',
    'about.journey.student1': 'Sinh viên năm nhất',
    'about.journey.student1.desc': 'Nhập học HUTECH ngành Công nghệ thông tin. Bắt đầu hành trình khám phá và đam mê với lập trình.',
    'about.certs': 'Chứng Chỉ & Giải Thưởng',
    'about.certs.desc': 'Các chứng nhận tôi đã tích lũy được trong quá trình học tập (File đính kèm).',
    'about.download': 'TẢI VỀ',

    // Contact Page
    'contact.decoration': 'HÃY NÓI XIN CHÀO!',
    'contact.title': 'Liên Hệ',
    'contact.subtitle': 'Bạn có ý tưởng điên rồ? Hay chỉ muốn rủ tôi đi ăn mì cay? Điền vào form bên dưới nhé.',
    'contact.name': 'Tên của bạn',
    'contact.email': 'Email',
    'contact.subject': 'Chủ đề',
    'contact.message': 'Tin nhắn',
    'contact.submit': 'GỬI TIN NHẮN 🚀',
    'contact.placeholder.name': 'VD: Nguyễn Văn A',
    'contact.placeholder.msg': 'Hãy viết gì đó...',
    
    // Blog Grid
    'blog.latest': 'Bài viết mới nhất',
    'blog.archive': 'LƯU TRỮ // 2023',
    'blog.readMore': 'Đọc bài viết',
    'blog.header.archive': 'Lưu Trữ Blog',
    'blog.header.desc': 'Chia sẻ kiến thức về Frontend, Design và Cuộc sống',

    // Projects
    'projects.title': 'Dự Án Tiêu Biểu',
    'projects.subtitle': 'Những đứa con tinh thần tôi đã dành nhiều đêm thức trắng.',
    'projects.demo': 'Demo',
    'projects.code': 'Code',

    // Footer
    'footer.copyright': '© 2024 Nguyễn Hữu Tịnh',
  },
  en: {
    // NavBar
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.status': 'Open to work',
    'hero.greeting': 'HELLO, I AM',
    'hero.bio': 'I am a Frontend Developer who cares about clean code, brutalist design, and super spicy noodles.',
    'hero.viewPortfolio': 'View Portfolio',
    
    // About Page
    'about.title': 'About Me',
    'about.name': 'Full Name',
    'about.birthYear': 'Birth Year',
    'about.hometown': 'Hometown',
    'about.hometown.note': '(Now merged with Dak Lak province)',
    'about.connect': 'Connect with me',
    'about.hobbies': 'Hobbies',
    'about.hobby.game': 'Gaming',
    'about.hobby.music': 'Music',
    'about.hobby.movie': 'Movies',
    'about.pros': 'Pros',
    'about.pros.val': 'FRIENDLY',
    'about.cons': 'Cons',
    'about.cons.val': 'LAZY',
    'about.cons.alert': 'NEED CAFFEINE',
    'about.intro': 'I don\'t just write code, I solve problems. Currently a senior student, I believe a good product must be a perfect balance between aesthetics and performance.',
    'about.skills': 'Weapon Skills',
    'about.journey': 'The Journey',
    'about.journey.student4': 'Senior Student',
    'about.journey.student4.desc': 'Currently a 4th-year IT student majoring in Software Engineering. Focusing on researching and developing practical web applications.',
    'about.journey.student1': 'Freshman',
    'about.journey.student1.desc': 'Enrolled in HUTECH for IT. Started the journey of discovery and passion for programming.',
    'about.certs': 'Certificates & Awards',
    'about.certs.desc': 'Certifications I have accumulated during my studies (Attached files).',
    'about.download': 'DOWNLOAD',

    // Contact Page
    'contact.decoration': 'SAY HELLO!',
    'contact.title': 'Contact',
    'contact.subtitle': 'Have a crazy idea? Or just want to invite me for spicy noodles? Fill out the form below.',
    'contact.name': 'Your Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.submit': 'SEND MESSAGE 🚀',
    'contact.placeholder.name': 'Ex: John Doe',
    'contact.placeholder.msg': 'Write something...',

    // Blog Grid
    'blog.latest': 'Latest Posts',
    'blog.archive': 'ARCHIVE // 2023',
    'blog.readMore': 'Read Article',
    'blog.header.archive': 'Blog Archives',
    'blog.header.desc': 'Sharing knowledge about Frontend, Design, and Life',

    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'The spiritual children I spent many sleepless nights on.',
    'projects.demo': 'Demo',
    'projects.code': 'Code',

    // Footer
    'footer.copyright': '© 2024 Nguyen Huu Tinh',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'vi' ? 'en' : 'vi');
  };

  const t = (key: string): string => {
    // @ts-ignore
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};