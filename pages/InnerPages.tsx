import React, { useState } from 'react';
import { Section, Button, Card, FeatureBlock, Input, TextArea } from '../components/Shared';
import { PROGRAMS, BLOG_POSTS } from '../constants';
import { Briefcase, Check, Users, Globe, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

// --- ABOUT PAGE ---
export const About: React.FC = () => (
  <>
    <div className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          To democratize access to high-growth careers while solving the talent shortage for mission-driven enterprises.
        </p>
      </div>
    </div>
    <Section>
      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Who We Are</h2>
          <p className="text-slate-600 leading-relaxed">
            Ascending is a workforce development accelerator. We don't just teach skills; we build pathways. Inspired by the EARN model, we operate at the intersection of education, industry, and social impact. Our team is composed of former hiring managers, educators, and policy experts committed to fixing the broken rung on the career ladder.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
           <Card className="bg-blue-50">
             <h3 className="text-xl font-bold mb-2">Vision</h3>
             <p className="text-slate-700">A world where potential, not pedigree, determines professional success.</p>
           </Card>
           <Card className="bg-indigo-50">
             <h3 className="text-xl font-bold mb-2">Governance</h3>
             <p className="text-slate-700">Guided by an advisory board of industry leaders to ensure curriculum relevance.</p>
           </Card>
        </div>
      </div>
    </Section>
  </>
);

// --- PROGRAMS PAGE ---
export const Programs: React.FC = () => (
  <div className="bg-slate-50 min-h-screen">
    <Section>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Programs</h1>
        <p className="text-lg text-slate-600">Structured pathways designed for real-world impact.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {PROGRAMS.map((program) => (
          <Card key={program.id} hoverEffect className="flex flex-col h-full">
            <div className="mb-4">
              <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2 py-1 rounded uppercase tracking-wide">
                {program.category}
              </span>
            </div>
            {program.icon && <program.icon className="h-10 w-10 text-slate-900 mb-4" />}
            <h3 className="text-xl font-bold text-slate-900 mb-2">{program.title}</h3>
            <p className="text-slate-600 mb-4 flex-grow">{program.description}</p>
            
            <div className="border-t border-slate-100 pt-4 mb-6">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Features:</h4>
              <ul className="space-y-1">
                {program.features.map((feat, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-center">
                    <Check className="h-3 w-3 text-green-500 mr-2" /> {feat}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-between items-center mt-auto pt-4">
              <span className="text-sm font-medium text-slate-500">{program.duration}</span>
              <Button size="sm" variant="outline">Learn More</Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  </div>
);

// --- PARTNERSHIPS PAGE ---
export const Partnerships: React.FC = () => (
  <>
    <Section background="gray">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900">Partner With Ascending</h1>
        <p className="text-lg text-slate-600 mt-4">Solutions for every stakeholder in the workforce ecosystem.</p>
      </div>

      <div className="space-y-16">
        {/* Employer Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div>
             <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
               <Briefcase className="mr-3 text-brand-600" /> For Employers
             </h2>
             <p className="text-slate-600 mb-6">
               Stop struggling with unfilled roles. We provide a pipeline of pre-vetted, trained, and diverse talent ready to contribute.
             </p>
             <ul className="space-y-3 mb-8">
               <li className="flex items-center text-slate-700"><Check className="mr-2 text-green-500 h-5 w-5"/> Cost-effective hiring model</li>
               <li className="flex items-center text-slate-700"><Check className="mr-2 text-green-500 h-5 w-5"/> Reduced turnover risk</li>
               <li className="flex items-center text-slate-700"><Check className="mr-2 text-green-500 h-5 w-5"/> Access to tax incentives</li>
             </ul>
             <Button>Hire Apprentices</Button>
           </div>
           <div className="bg-white p-6 rounded-xl shadow-lg">
             <h3 className="text-lg font-bold mb-4">Request Talent Info</h3>
             <form className="space-y-4">
               <Input label="Company Name" placeholder="Acme Corp" />
               <Input label="Work Email" type="email" placeholder="hr@acme.com" />
               <Button className="w-full">Get Info Kit</Button>
             </form>
           </div>
        </div>

        <div className="border-t border-slate-200"></div>

        {/* Apprentice Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="order-2 md:order-1">
             <img src="https://picsum.photos/600/400?random=8" className="rounded-xl shadow-md" alt="Students" />
           </div>
           <div className="order-1 md:order-2">
             <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
               <Users className="mr-3 text-brand-600" /> For Apprentices
             </h2>
             <p className="text-slate-600 mb-6">
               Earn while you learn. Our programs are tuition-free for accepted applicants, paid for by employer sponsors.
             </p>
             <Button variant="outline">Apply for Training</Button>
           </div>
        </div>
      </div>
    </Section>
  </>
);

// --- BLOG PAGE ---
export const Blog: React.FC = () => (
  <Section>
    <h1 className="text-4xl font-bold text-slate-900 mb-8">Insights & Analysis</h1>
    <div className="grid md:grid-cols-3 gap-8">
      {BLOG_POSTS.map((post) => (
        <div key={post.id} className="group cursor-pointer">
          <div className="overflow-hidden rounded-xl mb-4">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" 
            />
          </div>
          <p className="text-sm text-brand-600 font-semibold mb-2">{post.category} • {post.date}</p>
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">{post.title}</h3>
          <p className="text-slate-600 line-clamp-2">{post.excerpt}</p>
        </div>
      ))}
    </div>
  </Section>
);

// --- CONTACT PAGE ---
export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section background="gray">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Get in Touch</h1>
          <p className="text-slate-600 mb-8">
            Whether you have questions about our programs, partnership opportunities, or just want to say hello, we're here to help.
          </p>
          
          <div className="space-y-6">
             <div className="flex items-start space-x-4">
               <div className="bg-white p-3 rounded-lg shadow-sm"><MapPin className="text-brand-600" /></div>
               <div>
                 <h4 className="font-bold text-slate-900">Headquarters</h4>
                 <p className="text-slate-600">123 Innovation Drive<br/>Tech Park, Suite 400<br/>New York, NY 10001</p>
               </div>
             </div>
             <div className="flex items-start space-x-4">
               <div className="bg-white p-3 rounded-lg shadow-sm"><Mail className="text-brand-600" /></div>
               <div>
                 <h4 className="font-bold text-slate-900">Email Us</h4>
                 <p className="text-slate-600">partnerships@ascending.com</p>
               </div>
             </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          {submitted ? (
             <div className="text-center py-12">
               <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                 <Check className="h-8 w-8 text-green-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
               <p className="text-slate-600 mt-2">We'll get back to you within 24 hours.</p>
               <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>Send Another</Button>
             </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Send a Message</h3>
              <Input label="Full Name" placeholder="Jane Doe" required />
              <Input label="Email Address" type="email" placeholder="jane@example.com" required />
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-1">I am a...</label>
                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none">
                  <option>Employer looking for talent</option>
                  <option>Prospective Apprentice</option>
                  <option>Government/NGO Partner</option>
                  <option>Other</option>
                </select>
              </div>
              <TextArea label="Message" placeholder="How can we help you?" required />
              <Button type="submit" className="w-full">Submit Inquiry</Button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};