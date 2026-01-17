import React from 'react';
import { NavLink } from 'react-router-dom';
import { Section, Button, FeatureBlock, Card, Accordion, Input } from '../components/Shared';
import { CORE_STATS, TESTIMONIALS, FAQS } from '../constants';
import { ArrowRight, CheckCircle2, Building2, GraduationCap, Users, PlayCircle, Award, Target, Briefcase, Download, TrendingUp, Search } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-50/50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3"></div>

        <div className="container mx-auto px-4 md:px-6 max-w-7xl pt-20 pb-20 md:pt-32 md:pb-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold tracking-wide uppercase shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span>Applications Open for Fall 2024</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight">
                Talent without <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Limits.</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Ascending connects forward-thinking employers with job-ready talent through <span className="font-semibold text-slate-900">industry-led apprenticeships</span>. We bridge the gap between potential and performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <NavLink to="/partnerships">
                  <Button size="lg" icon={ArrowRight} className="w-full sm:w-auto shadow-brand-200 shadow-xl">Hire Talent</Button>
                </NavLink>
                <NavLink to="/programs">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">Browse Programs</Button>
                </NavLink>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-500 font-medium mb-3">Trusted by hiring managers from:</p>
                <div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                   {/* Placeholder Logos */}
                   <div className="h-6 w-20 bg-slate-800 rounded opacity-20"></div>
                   <div className="h-6 w-24 bg-slate-800 rounded opacity-20"></div>
                   <div className="h-6 w-16 bg-slate-800 rounded opacity-20"></div>
                   <div className="h-6 w-20 bg-slate-800 rounded opacity-20"></div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
                 <img 
                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                   alt="Collaborative workspace" 
                   className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                 
                 <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-3xl font-bold">94%</p>
                    <p className="text-sm text-slate-200">Placement Rate</p>
                 </div>
              </div>

              {/* Floating Element */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-bounce-slow">
                 <div className="flex items-start space-x-4">
                   <div className="p-3 bg-brand-50 rounded-lg">
                     <Briefcase className="h-6 w-6 text-brand-600" />
                   </div>
                   <div>
                     <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Just Placed</p>
                     <p className="font-bold text-slate-900">Sarah M.</p>
                     <p className="text-sm text-slate-600">Junior Developer @ FinTech Co</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800">
            {CORE_STATS.map((stat, idx) => (
              <div key={idx} className="text-center py-10 px-4 group hover:bg-slate-800/50 transition-colors">
                <p className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
                <p className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <Section className="!pb-0">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">The Traditional Hiring Model is Broken</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Employers struggle to find ready talent. Learners struggle to gain experience. 
            <br className="hidden md:block"/>We bridge the gap with a proven operational model.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <FeatureBlock 
            icon={Target}
            title="Industry-Led Training"
            description="Curriculum designed directly by hiring managers, ensuring every skill taught is a skill needed on the job immediately."
          />
          <FeatureBlock 
            icon={Users}
            title="Structured Mentorship"
            description="Every apprentice is paired with a senior mentor to guide professional development, technical growth, and soft skills."
          />
          <FeatureBlock 
            icon={Award}
            title="National Certification"
            description="Graduates earn recognized industry credentials that validate their skills and stay with them throughout their career journey."
          />
        </div>
      </Section>

      {/* SEGMENTATION (CLARITY SECTION) */}
      <Section background="gray" className="mt-20">
         <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Who We Serve</h2>
            <p className="text-slate-600">Customized pathways for our two key stakeholders.</p>
         </div>
         
         <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Employer Card */}
            <Card hoverEffect className="relative overflow-hidden border-t-4 border-t-slate-900">
               <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Building2 className="w-32 h-32" />
               </div>
               <div className="relative z-10">
                  <div className="h-12 w-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 text-white">
                     <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">For Employers</h3>
                  <p className="text-slate-600 mb-6 h-12">Build a diverse, loyal, and skilled workforce tailored to your specific tech stack.</p>
                  <ul className="space-y-3 mb-8">
                     {['Reduce hiring costs by ~40%', 'Customized curriculum', 'Try-before-you-hire model'].map((item, i) => (
                        <li key={i} className="flex items-center text-sm font-medium text-slate-700">
                           <CheckCircle2 className="w-4 h-4 text-green-500 mr-3" /> {item}
                        </li>
                     ))}
                  </ul>
                  <NavLink to="/partnerships">
                     <Button variant="secondary" className="w-full">Partner with Us</Button>
                  </NavLink>
               </div>
            </Card>

            {/* Apprentice Card */}
            <Card hoverEffect className="relative overflow-hidden border-t-4 border-t-brand-600">
               <div className="absolute top-0 right-0 p-4 opacity-5">
                  <GraduationCap className="w-32 h-32 text-brand-600" />
               </div>
               <div className="relative z-10">
                  <div className="h-12 w-12 bg-brand-600 rounded-lg flex items-center justify-center mb-6 text-white">
                     <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">For Apprentices</h3>
                  <p className="text-slate-600 mb-6 h-12">Launch your career with paid training, mentorship, and a direct path to employment.</p>
                  <ul className="space-y-3 mb-8">
                     {['No tuition cost to you', 'Paid full-time role', 'Industry recognized certification'].map((item, i) => (
                        <li key={i} className="flex items-center text-sm font-medium text-slate-700">
                           <CheckCircle2 className="w-4 h-4 text-green-500 mr-3" /> {item}
                        </li>
                     ))}
                  </ul>
                  <NavLink to="/programs">
                     <Button variant="primary" className="w-full">Start Your Journey</Button>
                  </NavLink>
               </div>
            </Card>
         </div>
      </Section>

      {/* LEAD MAGNET / RESOURCE */}
      <section className="py-20 bg-brand-700 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="bg-brand-800 rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-12 border border-brand-500/30">
               <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center space-x-2 text-brand-200 mb-4">
                     <Download className="w-5 h-5" />
                     <span className="text-sm font-bold uppercase tracking-wider">Free Industry Report</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">The State of Workforce Development 2024</h2>
                  <p className="text-brand-100 mb-6 leading-relaxed">
                     Discover why 40% of Fortune 500 companies are shifting to skills-based hiring. Get the full breakdown of salary trends, retention metrics, and policy shifts.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                     <Input label="" placeholder="Enter your work email" className="!mb-0 !py-3 !bg-brand-900/50 !border-brand-600 !text-white placeholder:text-brand-400 focus:!ring-brand-400" />
                     <Button variant="white" className="whitespace-nowrap">Download Report</Button>
                  </div>
                  <p className="text-xs text-brand-300 mt-4 opacity-70">We respect your privacy. Unsubscribe at any time.</p>
               </div>
               <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative w-48 aspect-[3/4] bg-white rounded shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 flex items-center justify-center border-t-8 border-brand-500">
                     <div className="text-center p-4">
                        <div className="h-16 w-16 bg-slate-100 rounded-full mx-auto mb-4"></div>
                        <div className="h-4 w-20 bg-slate-100 mx-auto mb-2"></div>
                        <div className="h-2 w-12 bg-slate-100 mx-auto"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ SECTION */}
      <Section>
         <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
               <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
               <p className="text-slate-600 mb-8">
                  Everything you need to know about the Ascending model. Can't find the answer you're looking for?
               </p>
               <NavLink to="/contact">
                  <Button variant="outline" size="sm">Contact Support</Button>
               </NavLink>
            </div>
            <div className="md:col-span-8">
               <Accordion items={FAQS} />
            </div>
         </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section background="gray">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Success Stories</h2>
           <p className="text-slate-600">Hear from the people living the Ascending mission.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           {TESTIMONIALS.map((t) => (
             <Card key={t.id} className="border-none shadow-md">
               <div className="flex space-x-4 mb-6">
                 <img src={t.avatarUrl} alt={t.author} className="w-14 h-14 rounded-full object-cover ring-4 ring-slate-50" />
                 <div>
                   <p className="font-bold text-slate-900 text-lg">{t.author}</p>
                   <p className="text-sm text-slate-500 font-medium">{t.role}, {t.company}</p>
                 </div>
               </div>
               <div className="relative">
                  <span className="absolute -top-4 -left-2 text-6xl text-brand-100 font-serif leading-none">"</span>
                  <p className="text-slate-700 italic text-lg leading-relaxed relative z-10 pl-4">{t.quote}</p>
               </div>
             </Card>
           ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section background="dark" className="text-center !py-32">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Ascend?</h2>
        <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you're looking to launch your career or build your dream team, we have the framework to help you succeed.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <NavLink to="/partnerships">
            <Button variant="primary" size="lg" className="w-full sm:w-auto px-10 shadow-lg shadow-brand-900/50">For Employers</Button>
          </NavLink>
          <NavLink to="/programs">
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 border-slate-600 text-slate-200 hover:bg-slate-800 hover:border-slate-500 hover:text-white">
               For Apprentices
            </Button>
          </NavLink>
        </div>
      </Section>
    </>
  );
};

export default Home;