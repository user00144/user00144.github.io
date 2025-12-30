
export enum SectionId {
  ABOUT = 'about',
  PROJECTS = 'projects',
  PUBLICATIONS = 'publications',
  RESUME = 'resume'
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  category: 'Paper' | 'Project' | 'Talk' | 'Award' | 'Experience';
  description: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  tags: string[];
  description: string;
  problem: string;
  approach: string;
  outcome: string;
  image?: string;
  link?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  links: { label: string; url: string }[];
  type: 'International' | 'Domestic';
  citationCount?: number;
}

export interface Photo {
  id: string;
  url: string;
  location: string;
  year: string;
  aspectRatio: 'aspect-square' | 'aspect-video' | 'aspect-[3/4]';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  year: string;
  details?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  date: string;
  type: 'Award' | 'Scholarship' | 'Certification';
}

export interface TeachingExperience {
  id: string;
  role: string;
  institution: string;
  period: string;
  description: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
