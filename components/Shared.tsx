import React, { useState } from 'react';
import { LucideIcon, ArrowRight, ChevronDown } from 'lucide-react';

// --- BUTTON ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95";
  
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/25 focus:ring-brand-500 shadow-sm border border-transparent",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/25 focus:ring-slate-500 shadow-sm border border-transparent",
    outline: "border-2 border-slate-200 text-slate-700 bg-transparent hover:bg-slate-50 hover:border-slate-300 focus:ring-slate-400",
    ghost: "text-brand-600 hover:bg-brand-50 hover:text-brand-700",
    white: "bg-white text-slate-900 hover:bg-slate-50 shadow-sm focus:ring-white/50"
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon className="ml-2 h-4 w-4" />}
    </button>
  );
};

// --- SECTION WRAPPER ---
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'brand' | 'dark';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id, 
  background = 'white' 
}) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    brand: 'bg-brand-600 text-white',
    dark: 'bg-slate-900 text-white'
  };

  return (
    <section id={id} className={`py-16 md:py-24 relative overflow-hidden ${bgColors[background]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {children}
      </div>
    </section>
  );
};

// --- CARD ---
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <div className={`bg-white rounded-xl border border-slate-200/60 shadow-sm p-6 ${hoverEffect ? 'hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300' : ''} ${className}`}>
      {children}
    </div>
  );
};

// --- ACCORDION ---
interface AccordionItem {
  question: string;
  answer: string;
}

export const Accordion: React.FC<{ items: AccordionItem[] }> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className={`border rounded-xl transition-all duration-200 ${activeIndex === idx ? 'border-brand-200 bg-brand-50/30' : 'border-slate-200 bg-white'}`}>
          <button
            className="w-full flex justify-between items-center p-5 text-left"
            onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
          >
            <span className={`font-semibold text-lg ${activeIndex === idx ? 'text-brand-800' : 'text-slate-800'}`}>
              {item.question}
            </span>
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeIndex === idx ? 'rotate-180 text-brand-600' : 'text-slate-400'}`} />
          </button>
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <p className="px-5 pb-5 text-slate-600 leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- INPUT FIELD ---
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, id, className = '', ...props }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <input
        id={id}
        className={`w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all shadow-sm ${className}`}
        {...props}
      />
    </div>
  );
};

// --- TEXTAREA ---
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, id, className = '', ...props }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <textarea
        id={id}
        rows={4}
        className={`w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all shadow-sm ${className}`}
        {...props}
      />
    </div>
  );
};

// --- FEATURE BLOCK ---
interface FeatureBlockProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureBlock: React.FC<FeatureBlockProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-start space-y-4 group">
    <div className="p-3 bg-brand-50 rounded-xl group-hover:bg-brand-100 transition-colors duration-300">
      <Icon className="h-6 w-6 text-brand-600" />
    </div>
    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);