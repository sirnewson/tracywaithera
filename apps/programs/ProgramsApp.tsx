import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Clock, Calendar, Phone } from 'lucide-react';
import { PROGRAMS, SOCIAL_LINKS } from '../../constants';

export const ProgramsApp: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sendWhatsApp = (programName: string) => {
    const message = `Hi Tracy, I am interested in enrolling for the ${programName} program. Could you share more details?`;
    window.open(`${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="font-sans text-zinc-900 bg-zinc-50 min-h-screen relative selection:bg-orange-500 selection:text-white pb-24">
      
      {/* Navigation Layer */}
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-orange-600 transition-colors bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md">
            <ArrowRight size={14} className="rotate-180" /> Back to Main
          </button>
          
          <div className="flex items-center gap-3">
             <BookOpen className="text-orange-500" size={20} />
             <span className="text-[12px] font-black uppercase tracking-[0.3em] text-zinc-900">Tracy Academy</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase mb-6">
               Master Your <span className="text-orange-600 italic">Craft.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
               Premium masterclasses, coaching, and actionable programs designed to turn your expertise into an undeniable authority and predictable revenue.
            </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="max-w-7xl mx-auto px-6">
         <div className="grid lg:grid-cols-2 gap-12">
            {PROGRAMS.map((program) => (
              <div key={program.id} className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-zinc-100 flex flex-col group hover:-translate-y-2 transition-transform duration-500">
                 
                 {/* Poster */}
                 <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-zinc-900">
                    <img 
                      src={program.posterUrl} 
                      alt={program.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent flex items-end p-8">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                           <Clock size={12} /> Seats Filling Fast
                        </div>
                    </div>
                 </div>

                 {/* Content */}
                 <div className="p-8 md:p-12 flex flex-col flex-grow">
                    <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tighter mb-4 leading-tight group-hover:text-orange-600 transition-colors">
                      {program.title}
                    </h2>
                    <p className="text-zinc-500 font-medium text-sm leading-relaxed mb-8">
                      {program.description}
                    </p>

                    <div className="mb-10">
                       <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-4">What You Will Learn</h3>
                       <ul className="space-y-3">
                          {program.topics.map((topic, idx) => (
                             <li key={idx} className="flex items-start gap-3">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></div>
                                <span className="text-sm font-bold text-zinc-700">{topic}</span>
                             </li>
                          ))}
                       </ul>
                    </div>

                    <div className="mt-auto pt-8 border-t border-zinc-100">
                       <button 
                         onClick={() => sendWhatsApp(program.title)}
                         className="w-full bg-zinc-900 hover:bg-orange-600 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-colors uppercase tracking-widest text-[10px] shadow-lg"
                       >
                         <Calendar size={16} /> Enroll Now
                       </button>
                    </div>
                 </div>

              </div>
            ))}
         </div>
      </section>
      
      {/* Contact Banner */}
      <section className="max-w-4xl mx-auto mt-24 px-6">
         <div className="bg-orange-50 rounded-[3rem] p-12 text-center border border-orange-100">
            <h3 className="text-2xl font-black text-zinc-900 uppercase tracking-tighter mb-4">Looking for customized team training?</h3>
            <p className="text-zinc-600 text-sm font-medium mb-8">We offer private workshops and corporate training sessions tailored to your organization's specific needs.</p>
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white text-zinc-900 px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
               <Phone size={14} className="text-orange-500" /> Contact for Teams
            </a>
         </div>
      </section>

    </div>
  );
};

export default ProgramsApp;
