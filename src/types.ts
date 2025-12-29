export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  content: string; // HTML string
}

export interface LocalizedString {
  vi: string;
  en: string;
}

export interface LocalizedArray {
  vi: string[];
  en: string[];
}

export interface Project {
  id: number;
  title: LocalizedString;
  role: LocalizedString;
  overview: LocalizedString;
  key_tasks: LocalizedArray;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  codeUrl?: string;
}

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINE = 'outline'
}

export type Page = 'home' | 'about' | 'blog' | 'projects' | 'contact';