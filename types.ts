import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  path: string;
  isButton?: boolean;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}

export interface Program {
  id: string;
  title: string;
  category: 'Apprenticeship' | 'Upskilling' | 'Entrepreneurship';
  description: string;
  duration: string;
  audience: string;
  icon?: LucideIcon;
  features: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  author: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export enum UserType {
  EMPLOYER = 'Employer',
  APPRENTICE = 'Apprentice',
  PARTNER = 'Partner',
  ADMIN = 'Admin'
}