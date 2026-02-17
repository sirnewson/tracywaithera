import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { Logo } from './components/Logo';
import { BRANDS, ARTICLES, SERVICES, SOCIAL_LINKS } from './constants';
import { Article, Service } from './types';



interface TrouveAppProps {
  onBack?: () => void;
}

const TrouveApp: React.FC<TrouveAppProps> = ({ onBack }) => {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openArticle = (id: string) => {
    const art = ARTICLES.find(a => a.id === id);
    if (art) {
      setActiveArticle(art);
      setActiveService(null);
      setIsContactOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openService = (id: string) => {
    const srv = SERVICES.find(s => s.id === id);
    if (srv) {
      setActiveService(srv);
      setActiveArticle(null);
      setIsContactOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openContact = () => {
    setIsContactOpen(true);
    setActiveArticle(null);
    setActiveService(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeAll = () => {
    setActiveArticle(null);
    setActiveService(null);
    setIsContactOpen(false);
  };

  // Dedicated Consultation Page / View
  if (isContactOpen) {
    return (
      <div className="min-h-screen bg-white selection:bg-brand-gold selection:text-brand-navyDark animate-in fade-in duration-500">
        <header className="fixed top-0 left-0 right-0 z-50 ios-blur h-20 border-b border-gray-100 px-6 sm:px-12 flex items-center justify-between">
          <div onClick={closeAll} className="cursor-pointer">
            <Logo />
          </div>
          <button
            onClick={closeAll}
            className="px-6 py-2.5 bg-brand-navy text-white text-[12px] font-bold uppercase tracking-widest rounded-full btn-depth active:scale-95"
          >
            Go Back
          </button>
        </header>

        <main className="pt-40 pb-32 px-6">
          <div className="container mx-auto max-w-2xl text-center">
            <h1 className="text-5xl md:text-7xl font-black text-brand-navyDark mb-8 font-display tracking-tighter">
              Let's Scale <span className="gold-pop-gradient">Together.</span>
            </h1>
            <p className="text-xl text-slate-500 font-semibold mb-16">
              Pick your preferred way to start your growth journey. We usually respond in under 30 minutes.
            </p>

            <div className="grid gap-6">
              <a
                href="https://wa.me/254702476038?text=Hi%20Trouve%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                className="btn-gold-gloss text-white p-10 squircle flex flex-col items-center justify-center gap-4 active:scale-95 group"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-80">Instant Chat</span>
                <span className="text-4xl font-black font-display group-hover:scale-105 transition-transform">WhatsApp Us</span>
              </a>

              <a
                href="https://www.instagram.com/trouve_marketing_solutions/"
                target="_blank"
                className="bg-brand-navy text-white p-10 squircle flex flex-col items-center justify-center gap-4 btn-depth active:scale-95 group"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-60">Visual Support</span>
                <span className="text-3xl font-black font-display group-hover:scale-105 transition-transform">Chat on Instagram</span>
              </a>

              <div className="p-10 bg-slate-50 border-2 border-slate-100 squircle flex flex-col items-center justify-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">Direct Payment (Till)</span>
                <span className="text-4xl font-black font-display text-brand-navyDark">8617088</span>
              </div>
            </div>

            <p className="mt-16 text-slate-400 text-sm font-bold uppercase tracking-widest">
              Available 24/7 for premium brands.
            </p>
          </div>
        </main>
      </div>
    );
  }

  // Article View
  if (activeArticle) {
    return (
      <div className="min-h-screen bg-white selection:bg-brand-gold selection:text-brand-navyDark animate-in fade-in duration-500">
        <header className="fixed top-0 left-0 right-0 z-50 ios-blur h-20 border-b border-gray-100 px-6 sm:px-12 flex items-center justify-between">
          <div onClick={closeAll} className="cursor-pointer">
            <Logo />
          </div>
          <button
            onClick={closeAll}
            className="px-6 py-2.5 bg-brand-navy text-white text-[12px] font-bold uppercase tracking-widest rounded-full btn-depth active:scale-95"
          >
            Back to Hub
          </button>
        </header>

        <main className="pt-32 pb-32">
          <article className="container mx-auto px-6 max-w-4xl">
            <div className="mb-12 text-center">
              <span className="inline-block px-4 py-1.5 gold-bg-gradient text-white text-[10px] font-extrabold uppercase tracking-widest rounded-full mb-6 shadow-md">
                {activeArticle.tag}
              </span>
              <h1 className="text-4xl sm:text-6xl font-black text-brand-navyDark mb-8 leading-tight font-display tracking-tight">
                {activeArticle.title}
              </h1>
              <p className="text-xl font-medium text-slate-500 max-w-2xl mx-auto leading-relaxed italic">
                {activeArticle.excerpt}
              </p>
            </div>

            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 h-[300px] sm:h-[500px]">
              <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-full object-cover" />
            </div>

            <div
              className="prose prose-lg max-w-none text-brand-navyDark/90 leading-[1.7]
                prose-h2:text-3xl prose-h2:font-extrabold prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-brand-navyDark
                prose-h3:text-xl prose-h3:font-bold prose-h3:text-brand-goldDeep
                prose-p:text-lg prose-p:mb-8
                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8 prose-li:mb-2
                prose-blockquote:border-l-brand-gold prose-blockquote:bg-brand-gold/5 prose-blockquote:p-8 prose-blockquote:rounded-r-2xl"
              dangerouslySetInnerHTML={{ __html: activeArticle.content }}
            />

            <div className="mt-20 text-center p-12 bg-slate-50 squircle border border-gray-100">
              <h3 className="text-3xl font-black mb-8 font-display text-brand-navyDark">Ready to Implement This?</h3>
              <button onClick={openContact} className="btn-gold-gloss text-white px-12 py-5 rounded-full font-black uppercase text-[13px] tracking-widest active:scale-95 shadow-lg">
                Secure Your Spot
              </button>
            </div>

            <div className="mt-20 flex justify-center">
              <button
                onClick={closeAll}
                className="btn-gold-gloss text-white px-12 py-5 rounded-full font-black uppercase text-[13px] tracking-widest active:scale-95"
              >
                Back to Growth Hub
              </button>
            </div>
          </article>
        </main>
      </div>
    );
  }

  // Service View
  if (activeService) {
    return (
      <div className="min-h-screen bg-white selection:bg-brand-gold selection:text-brand-navyDark animate-in fade-in duration-500">
        <header className="fixed top-0 left-0 right-0 z-50 ios-blur h-20 border-b border-gray-100 px-6 sm:px-12 flex items-center justify-between">
          <div onClick={closeAll} className="cursor-pointer">
            <Logo />
          </div>
          <button
            onClick={closeAll}
            className="px-6 py-2.5 bg-brand-navy text-white text-[12px] font-bold uppercase tracking-widest rounded-full btn-depth active:scale-95"
          >
            Close
          </button>
        </header>

        <main className="pt-32 pb-32">
          <article className="container mx-auto px-6 max-w-4xl">
            <div className="mb-12 text-center">
              <div className="w-24 h-24 mx-auto bg-brand-navy/5 rounded-full flex items-center justify-center text-brand-navy mb-8">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={activeService.icon} />
                </svg>
              </div>
              <h1 className="text-4xl sm:text-6xl font-black text-brand-navyDark mb-8 leading-tight font-display tracking-tight">
                {activeService.title}
              </h1>
              <p className="text-xl font-medium text-slate-500 max-w-2xl mx-auto leading-relaxed">
                {activeService.description}
              </p>
            </div>

            <div
              className="prose prose-lg max-w-none text-brand-navyDark/90 leading-[1.7]
                prose-h2:text-3xl prose-h2:font-extrabold prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-brand-navyDark
                prose-h3:text-xl prose-h3:font-bold prose-h3:text-brand-goldDeep prose-h3:mt-8
                prose-p:text-lg prose-p:mb-6
                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8 prose-li:mb-2 prose-li:text-slate-600"
              dangerouslySetInnerHTML={{ __html: activeService.detailedContent }}
            />

            <div className="mt-20 flex flex-col items-center gap-6">
              <button
                onClick={openContact}
                className="btn-gold-gloss text-white px-16 py-6 rounded-full font-black uppercase text-[13px] tracking-widest active:scale-95"
              >
                Book This Service
              </button>
              <button
                onClick={closeAll}
                className="text-slate-400 font-bold uppercase text-[11px] tracking-widest hover:text-brand-navy transition-colors"
              >
                View Other Services
              </button>
            </div>
          </article>
        </main>
      </div>
    );
  }

  // Landing Page
  return (
    <div className="min-h-screen bg-white selection:bg-brand-gold selection:text-brand-navyDark">
      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 group ${isScrolled
        ? 'ios-blur h-20 shadow-sm border-b border-white/5 bg-brand-navyDark/90'
        : 'h-28 bg-brand-navyDark'
        } hover:bg-gradient-to-r hover:from-brand-navyDark hover:to-brand-navy`}>
        <nav className="container mx-auto px-6 sm:px-12 h-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            {onBack && (
              <button
                onClick={onBack}
                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors mr-2 flex items-center justify-center w-10 h-10"
                title="Back to Main Site"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
              </button>
            )}
            <Logo light={true} />
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              {[
                { id: 'services', label: 'Services' },
                { id: 'portfolio', label: 'Clients' },
                { id: 'insights', label: 'Growth Hub' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/90 text-[11px] font-bold uppercase tracking-widest hover:bg-white/15 hover:text-brand-gold hover:border-brand-gold/30 transition-all btn-depth active:scale-95 shadow-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Social Icons in Nav */}
            <div className="flex items-center space-x-3 pl-6 border-l border-white/10">
              {[
                { href: SOCIAL_LINKS.instagram, icon: Instagram },
                { href: SOCIAL_LINKS.facebook, icon: Facebook },
                { href: SOCIAL_LINKS.linkedin, icon: Linkedin },
                { href: SOCIAL_LINKS.tiktok, icon: null, svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg> }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-brand-gold hover:bg-white/15 hover:border-brand-gold/30 transition-all btn-depth active:scale-95 shadow-sm flex items-center justify-center"
                >
                  {social.icon ? <social.icon size={18} /> : social.svg}
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={openContact}
            className="btn-gold-gloss text-white px-8 py-3 rounded-full font-bold text-[11px] uppercase tracking-widest active:scale-95 shadow-lg border border-white/10"
          >
            Let's Talk
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative pt-60 pb-48 overflow-hidden px-6 mesh-gradient flex flex-col items-center justify-center text-center">
        <div className="container mx-auto relative z-10">
          <h1 className="text-6xl md:text-[10rem] font-black text-brand-navyDark leading-[0.85] font-display mb-12 tracking-tighter">
            Stop Guessing.<br /><span className="gold-pop-gradient">Start Growing.</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-600 font-semibold max-w-4xl mx-auto leading-snug mb-20">
            We build the marketing your business deserves. Fast, simple, and effective. We bring the customers, you close the deals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-10">
            <a
              href="#services"
              className="bg-brand-navy text-white px-12 py-6 rounded-full font-bold text-[13px] uppercase tracking-widest btn-depth active:scale-95 flex items-center justify-center"
            >
              Explore Services
            </a>
            <button
              onClick={openContact}
              className="bg-white border-2 border-brand-gold/50 text-brand-goldDeep px-12 py-6 rounded-full font-bold text-[13px] uppercase tracking-widest btn-depth active:scale-95 flex items-center justify-center gap-3"
            >
              <img src="https://www.svgrepo.com/show/333552/instagram.svg" className="w-5 h-5" alt="IG" />
              Book Consultation
            </button>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl opacity-30 pointer-events-none hero-animate">
          <div className="w-full h-[500px] bg-gradient-to-t from-brand-gold/30 to-transparent blur-[120px] rounded-full"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-brand-purple font-black uppercase text-[10px] tracking-[0.4em] mb-4">How We Help</h2>
            <h3 className="text-4xl md:text-6xl font-black text-brand-navyDark font-display leading-tight mb-8">Plugins for <span className="gold-pop-gradient">Growth.</span></h3>
            <p className="text-xl text-slate-500 font-semibold">Select a service below to see exactly how we can transform your business.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                onClick={() => openService(service.id)}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-brand-gold/30 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.icon} />
                  </svg>
                </div>
                <h4 className="text-xl font-black font-display text-brand-navyDark mb-4 leading-tight">{service.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100 w-full">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-goldDeep group-hover:text-brand-gold transition-colors flex items-center justify-center gap-2">
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Scroll */}
      <section id="portfolio" className="py-20 bg-white border-y border-gray-50">
        <div className="container mx-auto px-6 mb-12 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-slate-400">Trusted By Local Favorites</span>
        </div>
        <div className="brand-scroll-container">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...BRANDS, ...BRANDS].map((brand, idx) => (
              <div key={idx} className="flex items-center space-x-10 px-16 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <img src={brand.logo} alt={brand.name} className="h-8 w-auto" />
                <span className="text-2xl font-black text-slate-300 font-display uppercase tracking-tighter">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Hub */}
      <section id="insights" className="py-40 bg-[#FBFBFF]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <h2 className="text-brand-purple font-black uppercase text-[10px] tracking-[0.4em] mb-4">The Growth Hub</h2>
            <h3 className="text-5xl md:text-7xl font-black text-brand-navyDark font-display leading-tight mb-8">No Jargon.<br />Just <span className="gold-pop-gradient">Profit.</span></h3>
            <p className="text-xl text-slate-500 font-semibold leading-relaxed">No complex theories. Just simple English and strategies that actually work in Nairobi today.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {ARTICLES.map((article) => (
              <div
                key={article.id}
                onClick={() => openArticle(article.id)}
                className="group bg-white p-10 squircle shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col border border-gray-100/50"
              >
                <div className="mb-8">
                  <span className="inline-block px-4 py-1.5 gold-bg-gradient text-white text-[9px] font-bold uppercase tracking-widest rounded-full mb-6">
                    {article.tag}
                  </span>
                  <h4 className="text-3xl font-extrabold mb-6 font-display text-brand-navyDark leading-tight group-hover:text-brand-gold transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-slate-500 font-medium line-clamp-3 leading-relaxed text-lg">
                    {article.excerpt}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="inline-flex items-center px-6 py-2.5 bg-brand-navy/5 text-brand-navy font-bold text-[11px] uppercase tracking-[0.3em] rounded-full group-hover:bg-brand-navy group-hover:text-white transition-all btn-depth active:scale-95">
                    Start Learning
                    <svg className="w-5 h-5 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 bg-brand-navyDark text-white px-6 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black font-display leading-none mb-16 tracking-tighter">Ready to See Your<br /><span className="gold-pop-gradient">Sales Soar?</span></h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-32">
            <button
              onClick={openContact}
              className="p-12 bg-white/5 squircle border border-white/10 hover:bg-white/10 transition-colors btn-depth cursor-pointer flex flex-col items-center justify-center text-center group"
            >
              <p className="text-brand-gold font-bold uppercase text-[10px] tracking-widest mb-4">Direct Office</p>
              <span className="text-3xl font-black font-display group-hover:scale-105 transition-transform">Get Quote</span>
            </button>
            <a
              href="https://www.instagram.com/trouve_marketing_solutions/"
              target="_blank"
              className="p-12 bg-white/5 squircle border border-white/10 hover:bg-white/10 transition-colors btn-depth cursor-pointer flex flex-col items-center justify-center text-center group"
            >
              <p className="text-brand-gold font-bold uppercase text-[10px] tracking-widest mb-4">Instant Chat</p>
              <span className="text-3xl font-black font-display group-hover:scale-105 transition-transform">DM on Instagram</span>
            </a>
          </div>

          <div className="flex flex-col items-center gap-10">
            <button
              onClick={openContact}
              className="btn-gold-gloss text-white px-16 py-7 rounded-full font-black uppercase text-[13px] tracking-[0.4em] active:scale-95"
            >
              Secure My Growth Spot
            </button>
            <p className="text-white/30 font-bold uppercase tracking-[0.5em] text-[10px]">Simple Marketing. Big Results.</p>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/10 rounded-full blur-[150px] pointer-events-none"></div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-24 border-t border-gray-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <Logo />
            <p className="mt-6 text-slate-400 font-medium text-sm">Grow your brand the easy way.</p>
          </div>
          <div className="flex space-x-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <a href={SOCIAL_LINKS.instagram} className="hover:text-brand-gold transition-colors active:scale-95">Instagram</a>
            <a href={SOCIAL_LINKS.facebook} className="hover:text-brand-gold transition-colors active:scale-95">Facebook</a>
            <a href={SOCIAL_LINKS.tiktok} className="hover:text-brand-gold transition-colors active:scale-95">TikTok</a>
            <a href={SOCIAL_LINKS.linkedin} className="hover:text-brand-gold transition-colors active:scale-95">LinkedIn</a>
            <button onClick={openContact} className="hover:text-brand-gold transition-colors active:scale-95 uppercase font-bold">Contact</button>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
            &copy; 2026 Trouve Marketing.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TrouveApp;
