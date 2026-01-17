import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Linkedin, Youtube, MessageCircle, BarChart3 } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Button } from './Shared';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform">
             <BarChart3 className="text-white h-5 w-5" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">Ascending</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.filter(item => item.label !== 'Admin').map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="flex items-center space-x-4 ml-4">
             <NavLink to="/admin">
               <span className="text-xs font-semibold text-slate-400 hover:text-brand-600 uppercase tracking-wider">Staff Login</span>
             </NavLink>
             <NavLink to="/contact">
                <Button size="sm" variant="primary">Partner With Us</Button>
             </NavLink>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl md:hidden p-4 flex flex-col space-y-4">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `block px-4 py-2 text-base font-medium rounded-md ${
                  isActive ? 'bg-brand-50 text-brand-600' : 'text-slate-600 hover:bg-slate-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
             <NavLink to="/contact" className="w-full">
                <Button className="w-full">Get Started</Button>
             </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <BarChart3 className="h-6 w-6" />
              <span className="text-xl font-bold">Ascending</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering the workforce of tomorrow through industry-led apprenticeships, mentorship, and outcome-driven training.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Youtube className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><MessageCircle className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li><NavLink to="/about" className="hover:text-white transition-colors">About Us</NavLink></li>
              <li><NavLink to="/programs" className="hover:text-white transition-colors">Apprenticeships</NavLink></li>
              <li><NavLink to="/programs" className="hover:text-white transition-colors">Upskilling</NavLink></li>
              <li><NavLink to="/partnerships" className="hover:text-white transition-colors">For Employers</NavLink></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><NavLink to="/blog" className="hover:text-white transition-colors">Industry Insights</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-white transition-colors">Success Stories</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white transition-colors">Help Center</NavLink></li>
              <li><NavLink to="/terms" className="hover:text-white transition-colors">Privacy Policy</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <span>123 Innovation Drive,<br/>Tech Park, Suite 400</span>
              </li>
              <li><a href="mailto:hello@ascending.com" className="hover:text-white">hello@ascending.com</a></li>
              <li><a href="tel:+15551234567" className="hover:text-white">+1 (555) 123-4567</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {currentYear} Ascending Workforce Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <NavLink to="/terms" className="hover:text-white">Terms of Service</NavLink>
             <NavLink to="/privacy" className="hover:text-white">Privacy Policy</NavLink>
             <NavLink to="/cookies" className="hover:text-white">Cookie Settings</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};