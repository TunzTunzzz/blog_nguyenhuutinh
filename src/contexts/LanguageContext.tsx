import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useStore } from '@nanostores/react';
import { languageStore, toggleLanguage } from '../stores/languageStore';

type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  vi: {
    'common.name': 'Nguyễn Hữu Tịnh',

    // NavBar
    'nav.home': 'Trang chủ',
    'nav.about': 'Giới thiệu',
    'nav.blog': 'Bài viết',
    'nav.projects': 'Dự án',
    'nav.contact': 'Liên hệ',

    // Hero
    'hero.status': 'Sẵn sàng nhận dự án',
    'hero.greeting': 'XIN CHÀO, TÔI LÀ',
    'hero.bio': '"Logic sẽ đưa bạn từ A đến B. Trí tưởng tượng sẽ đưa bạn đến mọi nơi."',
    'hero.viewPortfolio': 'Xem Portfolio',

    // About Page
    'about.title': 'Về Tôi',
    'about.myname': 'Nguyễn Hữu Tịnh',
    'about.sticker': 'SINH VIÊN IT',
    'about.name': 'Họ Tên',
    'about.nickname': 'Biệt danh',
    'about.nickname.val': 'Tũn',
    'about.birthYear': 'Năm sinh',
    'about.hometown': 'Quê quán',
    'about.hometown.val': 'Tỉnh Phú Yên cũ',
    'about.hometown.note': '(Hiện nay đã gộp chung với tỉnh Đắk Lắk)',
    'about.connect': 'Kết nối với tôi',
    'about.cv': 'Hồ sơ năng lực (CV)',
    'about.hobbies': 'Sở thích',
    'about.hobby.game': 'Chơi Game',
    'about.hobby.music': 'Nghe Nhạc',
    'about.hobby.movie': 'Xem Phim',
    'about.pros': 'Ưu điểm',
    'about.pros.val': 'DỄ GẦN',
    'about.cons': 'Nhược điểm',
    'about.cons.val': 'LƯỜI',
    'about.cons.alert': 'CẦN CAFFEINE',
    'about.intro': 'Chào bạn, mình là Tịnh! Hiện là sinh viên năm 4 chuyên ngành CNPM tại ĐH HUTECH. Mình đã học tập và sinh sống tại TP.HCM được gần 4 năm, luôn theo đuổi sự cân bằng giữa tư duy logic và cảm xúc thẩm mỹ (UI/UX).',
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

    // Contact Options
    'contact.subject.collab': 'Hợp tác dự án',
    'contact.subject.recruit': 'Tuyển dụng',
    'contact.subject.faq': 'Hỏi đáp chung',
    'contact.subject.other': 'Khác',

    // Blog Grid
    'blog.latest': 'Bài viết mới nhất',
    'blog.archive': 'LƯU TRỮ // 2025',
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
    'common.name': 'Nguyen Huu Tinh',

    // NavBar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.status': 'Open to work',
    'hero.greeting': 'HELLO, I AM',
    'hero.bio': '"Logic will get you from A to B. Imagination will take you everywhere."',
    'hero.viewPortfolio': 'View Portfolio',

    // About Page
    'about.title': 'About Me',
    'about.myname': 'Nguyen Huu Tinh',
    'about.sticker': 'IT STUDENT',
    'about.name': 'Full Name',
    'about.nickname': 'Nickname',
    'about.nickname.val': 'Tun',
    'about.birthYear': 'Birth Year',
    'about.hometown': 'Hometown',
    'about.hometown.val': 'Old Phu Yen Province',
    'about.hometown.note': '(Now merged with Dak Lak province)',
    'about.connect': 'Connect with me',
    'about.cv': 'Curriculum Vitae',
    'about.hobbies': 'Hobbies',
    'about.hobby.game': 'Gaming',
    'about.hobby.music': 'Music',
    'about.hobby.movie': 'Movies',
    'about.pros': 'Pros',
    'about.pros.val': 'FRIENDLY',
    'about.cons': 'Cons',
    'about.cons.val': 'LAZY',
    'about.cons.alert': 'NEED CAFFEINE',
    'about.intro': 'Hi, I\'m Tinh! A final-year Software Engineering student at HUTECH University. I have been living and studying in HCMC for nearly 4 years. I strive to balance logical problem-solving with aesthetic UI/UX storytelling.',
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

    // Contact Options
    'contact.subject.collab': 'Project Collaboration',
    'contact.subject.recruit': 'Recruitment',
    'contact.subject.faq': 'General Inquiry',
    'contact.subject.other': 'Other',

    // Blog Grid
    'blog.latest': 'Latest Posts',
    'blog.archive': 'Latest Posts',
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
  return <>{children}</>;
};

export const useLanguage = () => {
  const storeLanguage = useStore(languageStore);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Force 'vi' on first render to match server HTML (SSR)
  // After mount, switch to storeLanguage (which may be 'en' from localStorage)
  const language = isMounted ? storeLanguage : 'vi';

  const t = (key: string): string => {
    // @ts-ignore
    return translations[language][key] || key;
  };

  return { language, toggleLanguage, t };
};
