export interface NavLink {
  name: string;
  href: string;
}

export interface Project {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  documentationUrl?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  tasks: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  date: string;
}

export interface Certification {
  name: string;
  provider: string; // Changed to string for flexibility
  date: string;
}

export interface SkillCategory {
    category: string;
    skills: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}