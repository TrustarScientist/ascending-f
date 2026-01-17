import { NavItem, Program, BlogPost, Testimonial, Stat } from './types';
import { Briefcase, GraduationCap, Users, TrendingUp, Award, Building2 } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Partnerships', path: '/partnerships' },
  { label: 'Insights', path: '/blog' },
  { label: 'Contact', path: '/contact' },
  { label: 'Admin', path: '/admin' }, // Hidden in real prod, shown here for demo
];

export const CORE_STATS: Stat[] = [
  { label: 'Placement Rate', value: '94%', description: 'Graduates placed in full-time roles' },
  { label: 'Employer Partners', value: '250+', description: 'Active hiring companies' },
  { label: 'Apprentices Trained', value: '1,200+', description: 'Skilled talent deployed' },
  { label: 'Retention Rate', value: '88%', description: 'At 12-months post-hire' },
];

export const PROGRAMS: Program[] = [
  {
    id: 'p1',
    title: 'Enterprise Software Apprenticeship',
    category: 'Apprenticeship',
    description: 'A rigorous 6-month work-study program integrating full-stack development with live corporate projects.',
    duration: '6 Months',
    audience: 'Early-career Technologists',
    icon: Briefcase,
    features: ['Java/Spring & React Stack', 'Agile Methodology', 'Corporate Mentorship', 'Paid Stipend']
  },
  {
    id: 'p2',
    title: 'Digital Marketing & Growth',
    category: 'Upskilling',
    description: 'Advanced analytics, SEO, and performance marketing training for modern business growth.',
    duration: '12 Weeks',
    audience: 'Marketing Professionals',
    icon: TrendingUp,
    features: ['Google Analytics 4', 'CRM Management', 'Paid Social Strategy', 'Content Operations']
  },
  {
    id: 'p3',
    title: 'Management Leadership Track',
    category: 'Entrepreneurship',
    description: 'Bridging the gap between technical skill and team leadership for emerging managers.',
    duration: '4 Months',
    audience: 'Team Leads & Founders',
    icon: Users,
    features: ['Conflict Resolution', 'Financial Planning', 'Strategic Hiring', 'Operational Excellence']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The ROI of Apprenticeships vs. Traditional Hiring',
    category: 'Workforce Trends',
    date: 'October 12, 2023',
    excerpt: 'Why leading enterprises are shifting 30% of their entry-level hiring to structured apprenticeship models.',
    author: 'Sarah Jenkins, CEO',
    imageUrl: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: 'b2',
    title: 'Closing the Digital Skills Gap in Manufacturing',
    category: 'Sector Analysis',
    date: 'September 28, 2023',
    excerpt: 'How IoT and data literacy are becoming prerequisites for the modern factory floor.',
    author: 'David Chen, Director of Training',
    imageUrl: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: 'b3',
    title: 'Soft Skills: The Missing Link in Technical Training',
    category: 'Pedagogy',
    date: 'September 15, 2023',
    excerpt: 'Technical competence gets the interview, but emotional intelligence keeps the job. How we teach both.',
    author: 'Maria Rodriguez',
    imageUrl: 'https://picsum.photos/800/600?random=3'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "Ascending provided us with developers who were productive from day one. The mentorship model saves our senior engineers hundreds of hours.",
    author: "James Wilson",
    role: "CTO",
    company: "FinTech Solutions Ltd",
    avatarUrl: "https://picsum.photos/100/100?random=4"
  },
  {
    id: 't2',
    quote: "The structured curriculum gave me the confidence to transition from retail to data analysis. I doubled my income in 8 months.",
    author: "Amara Okeke",
    role: "Data Analyst",
    company: "Global Logistics Co",
    avatarUrl: "https://picsum.photos/100/100?random=5"
  }
];

export const FAQS = [
  {
    question: "Is this a paid apprenticeship?",
    answer: "Yes. All Ascending apprenticeships are paid full-time positions with benefits. We believe in learning while earning, not unpaid internships."
  },
  {
    question: "How much does it cost for employers?",
    answer: "Our model is comparable to standard recruitment fees, but includes 6 months of training and mentorship. Partners typically see a 40% reduction in total hiring costs compared to senior hires."
  },
  {
    question: "Do I need a university degree to apply?",
    answer: "No. We focus on aptitude, grit, and potential. While some backgrounds help, our assessment process is designed to find talent regardless of traditional pedigree."
  },
  {
    question: "How long is the program?",
    answer: "Most tracks are 6-12 months. The first 3 months are intensive training (bootcamp style), followed by on-the-job application with structured mentorship."
  },
  {
    question: "What industries do you cover?",
    answer: "We currently specialize in Technology (Software, Data, Cyber), Digital Marketing, and Advanced Manufacturing."
  }
];