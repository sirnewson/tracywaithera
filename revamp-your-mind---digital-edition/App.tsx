
import React, { useState, useEffect } from 'react';
import { NavigationSection, Part, Chapter } from './types';
import { CHAPTERS, PARTS } from './constants';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<NavigationSection>(NavigationSection.COVER);
  const [activeChapterId, setActiveChapterId] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showCopyStatus, setShowCopyStatus] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('revamp_last_chapter');
    if (saved) {
      setActiveChapterId(parseInt(saved));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    if (currentSection === NavigationSection.CHAPTER) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  const navigateToChapter = (id: number) => {
    setActiveChapterId(id);
    localStorage.setItem('revamp_last_chapter', id.toString());
    setCurrentSection(NavigationSection.CHAPTER);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const activeChapter = CHAPTERS.find(c => c.id === activeChapterId) || CHAPTERS[0];

  const getPartForChapter = (chapterId: number) => {
    return PARTS.find(p => p.chapters.includes(chapterId));
  };

  const currentPart = activeChapter ? getPartForChapter(activeChapter.id) : null;

  const handleActionableButton = (type: string) => {
    if (type === 'follow') {
      window.open('https://instagram.com/tereswaithera', '_blank');
    } else if (type === 'book') {
      const email = "contact@teresiawaithera.com";
      const subject = "Booking Inquiry: Revamp Your Mind Keynote";
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    } else if (type === 'copy') {
      navigator.clipboard.writeText(window.location.href);
      setShowCopyStatus(true);
      setTimeout(() => setShowCopyStatus(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald-100">
      {/* Progress Bar for Chapters */}
      {currentSection === NavigationSection.CHAPTER && (
        <div className="fixed top-0 left-0 w-full h-2 z-[60] bg-stone-100">
          <div 
            className="h-full bg-emerald-600 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(5,150,105,0.4)]" 
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}

      {/* Dynamic Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${currentSection === NavigationSection.COVER ? 'bg-transparent' : 'bg-white/95 backdrop-blur-xl border-b border-stone-100'}`}>
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <button 
            onClick={() => setCurrentSection(NavigationSection.COVER)}
            className="font-serif font-black text-2xl tracking-tighter hover:text-emerald-700 transition-all active:scale-95"
          >
            REVAMP <span className="gold-text">YOUR MIND</span>
          </button>
          
          <nav className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-stone-400">
            <button onClick={() => setCurrentSection(NavigationSection.TOC)} className="hover:text-emerald-900 transition-colors">Contents</button>
            <button onClick={() => setCurrentSection(NavigationSection.AUTHOR)} className="hover:text-emerald-900 transition-colors">Author</button>
            {activeChapterId && (
               <button onClick={() => setCurrentSection(NavigationSection.CHAPTER)} className="text-emerald-700 border-b border-emerald-500 font-black">Resume Reading</button>
            )}
          </nav>
          
          <div className="flex gap-4">
             <button 
                onClick={() => handleActionableButton('copy')}
                className="hidden sm:block px-4 py-2 border border-stone-200 text-stone-400 text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-stone-50 transition-all"
             >
               {showCopyStatus ? 'Link Copied!' : 'Share'}
             </button>
             <button 
                onClick={() => setCurrentSection(NavigationSection.TOC)}
                className="px-6 py-2 bg-emerald-950 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-emerald-800 transition-all active:scale-95 shadow-lg shadow-emerald-900/20"
              >
                Topics
              </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {currentSection === NavigationSection.COVER && (
          <section className="min-h-screen flex items-center justify-center p-6 md:p-12 animate-fadeIn relative bg-emerald-950">
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
            
            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1 text-left">
                  <span className="text-gold-500 font-black tracking-[0.8em] uppercase text-sm mb-10 block animate-pulse">Official Digital Launch</span>
                  <h1 className="font-serif font-black mb-8 leading-[0.85] tracking-tighter text-white">
                    <span className="text-7xl md:text-8xl lg:text-9xl block mb-2">REVAMP</span>
                    <span className="text-5xl md:text-6xl lg:text-7xl gold-text italic block mb-2">YOUR</span>
                    <span className="text-7xl md:text-8xl lg:text-9xl block">MIND</span>
                  </h1>
                  
                  <div className="h-1.5 w-40 bg-gold-500 mb-12 rounded-full"></div>
                  
                  <p className="text-2xl md:text-3xl text-stone-300 font-light italic mb-16 leading-relaxed max-w-xl">
                    "From Flying and Falling to Soaring on Eagles' Wings"
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-8">
                    <button 
                      onClick={() => {
                        if (activeChapterId) navigateToChapter(activeChapterId);
                        else setCurrentSection(NavigationSection.TOC);
                      }}
                      className="w-full sm:w-auto px-16 py-6 bg-gold-500 text-emerald-950 font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-gold-500/20"
                    >
                      {activeChapterId ? 'Resume Journey' : 'Begin Reading'}
                    </button>
                    <button 
                       onClick={() => setCurrentSection(NavigationSection.AUTHOR)}
                       className="text-stone-400 font-black uppercase tracking-widest text-xs hover:text-white transition-colors"
                    >
                      Teresia Waithera Wanjiru
                    </button>
                  </div>
               </div>
               
               <div className="order-1 lg:order-2 flex justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gold-500/20 blur-[100px] rounded-full animate-pulse"></div>
                    <div className="relative z-10 w-[300px] md:w-[450px] aspect-[2/3] book-shadow transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1">
                      <img 
                        src="https://i.ibb.co/hFPrqCpF/Gemini-Generated-Image-938the938the938t.png" 
                        alt="Revamp Your Mind Book Cover" 
                        className="w-full h-full object-cover rounded-sm"
                      />
                      <div className="absolute inset-0 border-[1px] border-white/20 pointer-events-none rounded-sm"></div>
                    </div>
                  </div>
               </div>
            </div>
          </section>
        )}

        {currentSection === NavigationSection.TOC && (
          <section className="max-w-6xl mx-auto px-8 py-24 animate-fadeIn">
            <div className="text-center mb-32">
              <span className="text-emerald-700 font-black tracking-[0.5em] uppercase text-sm mb-6 block">Structural Map</span>
              <h2 className="text-7xl md:text-[9rem] font-serif font-black mb-8 leading-none tracking-tighter italic text-emerald-950">The <span className="text-stone-300 not-italic">Outline</span></h2>
              <p className="text-stone-500 text-xl font-serif max-w-2xl mx-auto italic mt-10">A carefully architected journey through neurological and spiritual transformation.</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-20">
              {PARTS.map((part, pIdx) => (
                <div key={pIdx} className="bg-white p-16 rounded-[4rem] shadow-[0_20px_80px_rgba(0,0,0,0.04)] border border-stone-100 hover:border-emerald-100 transition-all duration-700 group flex flex-col">
                  <div className="flex flex-col mb-16 relative">
                    <span className="text-emerald-600 font-black tracking-[0.6em] uppercase text-sm mb-4">{part.title}</span>
                    <h3 className="text-4xl font-black font-serif leading-tight group-hover:text-emerald-900 transition-colors tracking-tighter italic uppercase">{part.subtitle}</h3>
                    <div className="absolute -left-10 top-0 w-2 h-full bg-emerald-50 group-hover:bg-gold-500 transition-colors rounded-full"></div>
                  </div>
                  <div className="space-y-8 flex-grow">
                    {part.chapters.map(chId => {
                      const ch = CHAPTERS.find(c => c.id === chId);
                      if (!ch) return null;
                      const isRead = activeChapterId && activeChapterId >= chId;
                      return (
                        <button 
                          key={chId}
                          onClick={() => navigateToChapter(chId)}
                          className="w-full flex items-start group/item text-left py-6 border-b border-stone-50 last:border-0 hover:translate-x-3 transition-all"
                        >
                          <span className={`w-16 font-serif font-black text-5xl mr-6 transition-all ${isRead ? 'text-gold-500' : 'text-stone-100 group-hover/item:text-emerald-200'}`}>0{chId}</span>
                          <div className="flex-grow">
                            <p className="font-black text-2xl text-stone-800 group-hover/item:text-emerald-950 transition-colors mb-2">{ch.title}</p>
                            <p className="text-sm text-stone-400 font-medium tracking-tight line-clamp-1">{ch.subtitle}</p>
                          </div>
                          <span className="opacity-0 group-hover/item:opacity-100 transition-all translate-x-[-15px] group-hover/item:translate-x-0 text-emerald-600 mt-2">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 5l7 7-7 7"></path></svg>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {currentSection === NavigationSection.CHAPTER && (
          <div className="bg-[#f4f2ee] py-12 md:py-24 px-4 md:px-8">
            <section className="max-w-5xl mx-auto animate-fadeIn book-page p-10 md:p-24 lg:p-32 page-turn-animation">
              <div className="mb-32 relative flex flex-col items-center">
                 <div className="text-emerald-700 font-black tracking-[1.5em] uppercase text-sm mb-12">
                   CHAPTER 0{activeChapter.id}
                 </div>
                 
                 <h2 className="text-6xl md:text-[6rem] font-serif font-black mb-10 text-center leading-[0.9] text-emerald-950 tracking-tighter italic">
                   {activeChapter.title}
                 </h2>
                 
                 {activeChapter.subtitle && (
                   <p className="text-2xl md:text-3xl text-stone-400 mb-16 font-light italic max-w-3xl text-center leading-relaxed">
                     {activeChapter.subtitle}
                   </p>
                 )}
                 
                 <div className="h-[2px] w-40 bg-gold-500/50 mb-16"></div>
                 
                 {activeChapter.quote && (
                   <div className="max-w-3xl text-center px-12 border-l-8 border-gold-500/30 italic bg-emerald-50/20 py-10 rounded-r-3xl shadow-sm">
                      <p className="text-3xl font-serif text-emerald-900 leading-relaxed font-light">
                        "{activeChapter.quote}"
                      </p>
                   </div>
                 )}
              </div>
              
              <div className="font-body chapter-content selection:bg-emerald-100">
                {activeChapter.content}
              </div>

              <div className="mt-40 pt-20 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-12">
                 <button 
                   onClick={() => {
                     const available = CHAPTERS.map(c => c.id).sort((a,b) => a-b);
                     const currIdx = available.indexOf(activeChapter.id);
                     if (currIdx > 0) navigateToChapter(available[currIdx - 1]);
                     else setCurrentSection(NavigationSection.TOC);
                   }}
                   className="group flex flex-col items-start active:scale-95 transition-all"
                 >
                   <span className="text-stone-300 text-[10px] font-black uppercase tracking-widest mb-3">Previous</span>
                   <span className="flex items-center gap-4 text-emerald-950 font-black text-2xl group-hover:text-emerald-600 transition-all">
                     <svg className="w-8 h-8 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                     Back
                   </span>
                 </button>

                 <div className="text-emerald-700 font-serif italic text-lg px-8 py-3 bg-emerald-50/50 rounded-full border border-emerald-100">
                   {currentPart?.title}
                 </div>
                 
                 <button 
                   onClick={() => {
                      const available = CHAPTERS.map(c => c.id).sort((a,b) => a-b);
                      const currIdx = available.indexOf(activeChapter.id);
                      if (currIdx < available.length - 1) navigateToChapter(available[currIdx + 1]);
                      else setCurrentSection(NavigationSection.EPILOGUE);
                   }}
                   className="group flex flex-col items-end active:scale-95 transition-all"
                 >
                   <span className="text-stone-300 text-[10px] font-black uppercase tracking-widest mb-3">Next Phase</span>
                   <span className="flex items-center gap-4 text-emerald-950 font-black text-2xl group-hover:text-emerald-600 transition-all">
                     Continue
                     <svg className="w-8 h-8 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                   </span>
                 </button>
              </div>
            </section>
          </div>
        )}

        {currentSection === NavigationSection.AUTHOR && (
          <section className="max-w-7xl mx-auto px-8 py-32 animate-fadeIn">
             <div className="grid lg:grid-cols-2 gap-32 items-center">
                <div className="order-2 lg:order-1">
                  <span className="text-emerald-700 font-black tracking-[0.8em] uppercase text-xs mb-10 block">The Visionary Behind the Message</span>
                  <h2 className="text-7xl md:text-[9rem] font-serif font-black mb-12 leading-[0.85] tracking-tighter text-emerald-950">Teresia Waithera <span className="text-gold-500 italic block">Wanjiru</span></h2>
                  <div className="prose prose-2xl text-stone-600 mb-20 font-body leading-relaxed">
                    <p>Teresia is a multifaceted force in the digital and creative space. A marketer, actress, and dynamic speaker, she has evolved from a brand influencer into a <strong>Think Influencer</strong>.</p>
                    <p>Raised in the streets of Huruma and Githurai, her journey is a testament to the power of tenacity. She overcame trauma, addiction, and high-functioning depression to discover her true identity.</p>
                  </div>
                  <div className="flex flex-wrap gap-10">
                    <button 
                       onClick={() => handleActionableButton('follow')}
                       className="px-16 py-6 bg-emerald-950 text-white rounded-3xl font-black uppercase text-xs tracking-[0.4em] hover:bg-gold-500 hover:text-emerald-950 transition-all hover:scale-105 active:scale-95"
                    >
                      Follow Journey
                    </button>
                    <button 
                       onClick={() => handleActionableButton('book')}
                       className="px-16 py-6 bg-gold-500 text-emerald-950 rounded-3xl font-black uppercase text-xs tracking-[0.4em] hover:bg-emerald-950 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-gold-500/20"
                    >
                      Book Keynote
                    </button>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                   <div className="aspect-[4/5] bg-white p-6 rounded-[5rem] shadow-[0_80px_160px_-40px_rgba(0,0,0,0.15)] relative group overflow-hidden">
                      <div className="w-full h-full rounded-[4rem] overflow-hidden grayscale-0 relative">
                        <img src="https://i.ibb.co/wrp0bk5c/Gemini-Generated-Image-qlt67eqlt67eqlt6.png" alt="Teresia Waithera Wanjiru" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 to-transparent"></div>
                      </div>
                   </div>
                </div>
             </div>
          </section>
        )}
      </main>

      <footer className="py-32 px-8 border-t border-stone-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[11px] font-black uppercase tracking-[0.6em] text-stone-300 gap-16">
           <p>© 2025 Teresia Waithera Wanjiru. Official Digital Edition.</p>
           <div className="flex gap-16">
             <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-emerald-600 transition-colors">Top</button>
             <button onClick={() => setCurrentSection(NavigationSection.TOC)} className="hover:text-emerald-600 transition-colors">Topics</button>
             <button onClick={() => handleActionableButton('book')} className="hover:text-emerald-600 transition-colors">Contact</button>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
