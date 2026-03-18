
import React, { useState, useEffect } from 'react';
import {
  Menu, X, Sparkles, ShieldCheck, Compass, Mail, Phone, MapPin, Calendar,
  Award, Heart, Bot, Mic, Wallet, BookOpen, FileText, Clock, Zap, ArrowRight, MessageSquare, Play
} from 'lucide-react';
import { STRINGS, SERVICES, VIDEOS, RATE_CARD, ARTICLES, SOCIAL_LINKS, CONNECT_ITEMS } from './constants';
import { Language, Article } from './types';
import { TrouveApp } from './apps/trouve/TrouveApp';
import BookApp from './apps/book/BookApp';
import { ChatBot } from './apps/trouve/components/ChatBot';

type AppView = 'main' | 'trouve' | 'book';

interface ArticleExtended extends Article {
  image: string;
}

const LOGO_URL = "https://i.ibb.co/wrp0bk5c/Gemini-Generated-Image-qlt67eqlt67eqlt6.png";
const HERO_IMAGE_URL = "https://i.ibb.co/wrp0bk5c/Gemini-Generated-Image-qlt67eqlt67eqlt6.png";
const BOOK_IMAGE_URL = "https://i.ibb.co/hFPrqCpF/Gemini-Generated-Image-938the938the938t.png";
const ABOUT_IMAGE_URL = "https://i.ibb.co/0ytBb3Lh/tracywaithera-2025-04-01-T070018-000-Z.jpg";

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('main');
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showRateCard, setShowRateCard] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<ArticleExtended | null>(null);
  const [formData, setFormData] = useState({ name: '', goal: '' });

  const t = STRINGS[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'sw' : 'en');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const sendWhatsApp = (messageOverride?: string) => {
    let message = messageOverride || (formData.name || formData.goal
      ? `Hi Tracy, my name is ${formData.name || 'Anonymous'}. I'm reaching out about my goal: ${formData.goal || 'General inquiry'}.`
      : `Hi Tracy, I'd like to chat about scaling my brand.`);
    window.open(`${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleRateCardToggle = () => {
    setShowRateCard(!showRateCard);
    document.body.style.overflow = !showRateCard ? 'hidden' : 'auto';
  };

  const handleArticleClick = (article: ArticleExtended) => {
    setSelectedArticle(article);
    document.body.style.overflow = 'hidden';
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'auto';
  };

  if (view === 'trouve') {
    return <TrouveApp onBack={() => setView('main')} />;
  }

  if (view === 'book') {
    return <BookApp onBack={() => setView('main')} />;
  }

  return (
    <div className="relative min-h-screen bg-white text-zinc-800 selection:bg-orange-500 selection:text-white font-sans">
      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[400] bg-zinc-900/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-300">
          <div className="w-full max-w-4xl bg-white rounded-[2.5rem] relative overflow-hidden flex flex-col md:flex-row max-h-[90vh] shadow-2xl">
            <button onClick={closeArticle} className="absolute top-6 right-6 z-50 p-2 bg-white/80 backdrop-blur rounded-full text-zinc-400 hover:text-zinc-900 transition-all hover:rotate-90">
              <X size={24} />
            </button>
            <div className="md:w-2/5 relative h-48 md:h-auto overflow-hidden bg-zinc-100">
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
            </div>
            <div className="md:w-3/5 p-8 md:p-12 overflow-y-auto">
              <span className="text-[9px] font-black text-orange-600 tracking-[0.3em] uppercase mb-4 block">Knowledge Depth</span>
              <h2 className="text-3xl font-black text-zinc-900 mb-6 leading-tight uppercase tracking-tighter">{selectedArticle.title}</h2>
              <div className="space-y-6 text-zinc-600 leading-relaxed">
                {selectedArticle.content.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
              </div>
              <button onClick={() => sendWhatsApp()} className="mt-8 bg-zinc-900 text-white font-black px-8 py-4 rounded-xl hover:bg-orange-600 transition-all uppercase tracking-widest text-[10px]">Discuss Insights</button>
            </div>
          </div>
        </div>
      )}

      {/* Rate Card Modal */}
      {showRateCard && (
        <div className="fixed inset-0 z-[300] bg-zinc-900/95 backdrop-blur-2xl flex items-center justify-center p-6 animate-in fade-in zoom-in duration-300">
          <div className="w-full max-w-4xl bg-white rounded-[2.5rem] p-8 md:p-14 relative overflow-y-auto max-h-[90vh] shadow-2xl">
            <button onClick={handleRateCardToggle} className="absolute top-8 right-8 text-zinc-400 hover:text-zinc-900 transition-colors"><X size={28} /></button>
            <h2 className="text-4xl font-black text-zinc-900 mb-8 uppercase tracking-tighter text-center">{t.rates.title}</h2>
            <div className="grid gap-4">
              {RATE_CARD.map((item, i) => (
                <div key={i} className={`p-8 rounded-3xl border ${item.popular ? 'bg-orange-50/50 border-orange-200' : 'bg-zinc-50 border-zinc-100'} flex flex-col md:flex-row justify-between items-center gap-6`}>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-black text-zinc-900 uppercase">{item.service}</h3>
                    <p className="text-zinc-500 text-sm max-w-md">{item.details}</p>
                  </div>
                  <div className="text-center md:text-right">
                    <span className="text-2xl font-black text-orange-600 block mb-3">{item.price}</span>
                    <button onClick={() => sendWhatsApp()} className="px-6 py-3 bg-zinc-900 text-white text-[10px] font-black uppercase rounded-xl hover:bg-orange-600 transition-all">{t.rates.cta}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Navigation - Professional White Pill */}
      <header className={`fixed top-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 w-[94%] max-w-5xl ${isScrolled ? 'top-4 opacity-100 scale-95' : 'top-8 opacity-95 scale-100'}`}>
        <nav className="pill-nav flex items-center justify-between px-6 py-3 rounded-full bg-white/80 border border-zinc-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('hero')}>
            <img src={LOGO_URL} alt="TW Logo" className="w-8 h-8 rounded-lg object-cover shadow-sm group-hover:rotate-6 transition-transform" />
            <span className="hidden sm:block text-[10px] font-black tracking-widest text-zinc-900 uppercase opacity-80">Tracy Waithera</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['services', 'agency', 'about', 'insights'].map((id) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-[10px] font-black text-zinc-900 hover:text-orange-600 transition-all uppercase tracking-widest relative group">
                {t.nav[id as keyof typeof t.nav]}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-600 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button onClick={handleRateCardToggle} className="text-[10px] font-black text-zinc-900 hover:text-orange-600 transition-all uppercase tracking-widest">
              {t.nav.rates}
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={toggleLang} className="hidden sm:block text-[9px] font-black px-4 py-1.5 rounded-full border border-zinc-200 text-zinc-500 hover:bg-zinc-50 transition-all uppercase">
              {lang === 'en' ? 'SW' : 'EN'}
            </button>
            <button onClick={() => scrollTo('contact')} className="bg-zinc-900 text-white text-[10px] font-black px-6 py-2.5 rounded-full hover:bg-black hover:shadow-xl active:scale-95 transition-all uppercase tracking-widest">
              {t.nav.quote}
            </button>
            <button className="md:hidden text-zinc-900 p-2" onClick={() => setIsMenuOpen(true)}>
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[500] bg-white p-12 flex flex-col justify-between animate-in fade-in duration-300 text-zinc-900">
          <div className="flex justify-between items-center">
            <img src={LOGO_URL} alt="Logo" className="w-12 h-12 rounded-xl shadow-lg" />
            <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
          </div>
          <div className="flex flex-col gap-8">
            {['services', 'agency', 'about', 'insights', 'contact'].map((id) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-4xl font-black text-zinc-300 hover:text-zinc-900 text-left uppercase transition-colors tracking-tighter">
                {t.nav[id as keyof typeof t.nav] || id}
              </button>
            ))}
          </div>
          <button onClick={toggleLang} className="text-orange-600 font-black uppercase text-sm tracking-widest text-left">Switch to {lang === 'en' ? 'Swahili' : 'English'}</button>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center px-6 py-20 overflow-hidden bg-magical">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">

          <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">


            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tighter mb-8 text-zinc-900 uppercase">
              {t.hero.title1} <br />
              <span className="gradient-text italic">
                {lang === 'en' ? 'Revamping Minds.' : 'Badili Fikra.'}
              </span>
            </h1>

            <p className="text-lg text-zinc-600 mb-12 max-w-xl leading-relaxed font-semibold">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <button onClick={() => scrollTo('agency')} className="w-full sm:w-auto bg-white/80 backdrop-blur hover:bg-zinc-100 text-zinc-900 border border-zinc-200 font-black px-12 py-5 rounded-2xl flex items-center justify-center gap-3 transition-all uppercase tracking-widest text-[10px] shadow-sm">
                {t.hero.ctaAgency} <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/5] overflow-hidden rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border-8 border-white bg-white group animate-in fade-in slide-in-from-right-12 duration-1000 delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-600/10 rounded-full blur-[80px] -z-10 animate-pulse" />
              <img
                src={HERO_IMAGE_URL}
                className="w-full h-full object-cover object-top scale-[1.05] transition-all duration-1000 group-hover:scale-[1.1]"
                alt="Tracy Waithera Portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

      {/* Insights Section (Moved to Top) */}
      <section id="insights" className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[10px] font-black text-orange-600 tracking-[0.4em] uppercase mb-4 block">Marketing Insights by Me</span>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase tracking-tighter leading-tight">
                {t.articles.title}
              </h2>
            </div>
            <button onClick={() => scrollTo('contact')} className="hidden md:flex text-[10px] font-black text-zinc-400 hover:text-orange-600 uppercase tracking-widest transition-colors items-center gap-2">
              View All <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ARTICLES.map((article, i) => (
              <div key={i} onClick={() => handleArticleClick(article)} className="group cursor-pointer flex flex-col rounded-[2rem] bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden bg-zinc-200">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-4 flex justify-between items-center text-[8px] font-black text-zinc-400 uppercase tracking-widest">
                    <span className="bg-white px-2 py-1 rounded-md shadow-sm border border-zinc-100">{article.readingTime}</span>
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-3 uppercase tracking-tight group-hover:text-orange-600 transition-colors leading-tight line-clamp-2">{article.title}</h3>
                  <p className="text-zinc-500 text-xs font-medium mb-6 leading-relaxed line-clamp-3">{article.excerpt}</p>
                  <div className="mt-auto flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-zinc-900 group-hover:gap-4 transition-all">
                    Read Article <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Hub (Move to Top/After Insights) */}
      <section id="connect" className="py-20 px-6 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tighter mb-4">Connect & Learn</h2>
            <p className="text-zinc-500 text-sm font-medium">Join my community or work with me directly.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {CONNECT_ITEMS.map((item, i) => (
              <a href={item.link} target="_blank" key={i} className={`relative overflow-hidden rounded-[2.5rem] p-8 text-white ${item.color} group hover:scale-[1.02] transition-transform shadow-xl`}>
                <div className="relative z-10 flex flex-col h-full justify-between min-h-[160px]">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                    {item.icon === 'Play' && <Play size={20} className="fill-white" />}
                    {item.icon === 'Calendar' && <Calendar size={20} />}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-2">{item.subtitle}</p>
                    <h3 className="text-2xl font-black uppercase tracking-tight">{item.title}</h3>
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  {item.icon === 'Play' && <Play size={120} className="fill-white" />}
                  {item.icon === 'Calendar' && <Calendar size={120} />}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Section - Bright Trouve Theme Accent */}
      <section id="agency" className="py-32 px-6 bg-[#f8f9fa] text-brand-navyDark relative overflow-hidden border-y border-brand-gold/20 shadow-inner">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <span className="text-brand-gold font-black tracking-widest text-[10px] uppercase block mb-6 px-4 py-1.5 bg-brand-gold/10 inline-block rounded-full">Trouve Agency</span>
            <h2 className="text-6xl md:text-8xl font-black mb-10 uppercase tracking-tighter text-brand-navyDark">
              {t.trouve.title1} <span className="text-brand-gold italic">{t.trouve.title2}</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 mb-12 font-medium leading-relaxed">{t.trouve.desc}</p>
            <button onClick={() => setView('trouve')} className="bg-brand-navyDark text-white font-black px-10 py-5 rounded-2xl hover:bg-brand-gold hover:text-brand-navyDark transition-all uppercase tracking-widest text-[10px] shadow-xl shadow-brand-navyDark/10">
              {t.trouve.partner} (Enter Site)
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 rounded-[2.5rem] bg-white border border-brand-navyDark/10 shadow-xl flex flex-col justify-end p-8 group hover:bg-brand-navyDark transition-all duration-300">
                <Bot className="mb-4 text-brand-gold group-hover:text-white transition-colors" size={40} />
                <p className="font-black uppercase tracking-widest text-[10px] text-brand-navyDark group-hover:text-white transition-colors">AI Systems</p>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="h-64 rounded-[2.5rem] bg-white border border-brand-navyDark/10 shadow-xl flex flex-col justify-end p-8 group hover:bg-brand-gold transition-all duration-300">
                <Compass className="mb-4 text-brand-navyDark group-hover:text-white transition-colors" size={40} />
                <p className="font-black uppercase tracking-widest text-[10px] text-brand-navyDark group-hover:text-white transition-colors">Creative OS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-[10px] font-black text-orange-600 tracking-[0.5em] uppercase mb-4 block">The Narrative</span>
            <h2 className="text-4xl md:text-6xl font-black mb-10 text-zinc-900 leading-[1.1] uppercase tracking-tighter">
              {t.about.title1} <br /><span className="gradient-text italic">{t.about.title2}</span>
            </h2>
            <div className="space-y-8 text-lg text-zinc-500 font-normal leading-relaxed mb-12">
              <p className="border-l-4 border-orange-500 pl-6">{t.about.vision}</p>
              <p>{t.about.philosophy}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { icon: ShieldCheck, title: t.about.dataDriven, desc: 'Strategy rooted in measurable performance.' },
                { icon: Compass, title: t.about.ethical, desc: 'Leading with integrity and a global vision.' }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100 shadow-sm group hover:border-orange-500/20 transition-all">
                  <div className="mb-6 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-orange-600 shadow-sm group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <h4 className="text-lg font-black text-zinc-900 mb-2 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-sm text-zinc-400 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <button onClick={() => sendWhatsApp()} className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-zinc-900 active:scale-95 transition-transform">
              Connect for Collaboration <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all"><ArrowRight size={18} /></div>
            </button>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-10 bg-orange-500/5 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="relative group overflow-hidden rounded-[3.5rem] shadow-2xl border-4 border-white bg-white">
              <img
                src={ABOUT_IMAGE_URL}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                alt="Tracy Waithera - Portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Revamp Section */}
      <section id="revamp" className="py-32 px-6 bg-zinc-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 text-center lg:text-left">
          <div className="order-2 lg:order-1">
            <span className="text-[10px] font-black text-purple-600 tracking-[0.6em] uppercase mb-6 block">{t.revamp.subtitle}</span>
            <h2 className="text-4xl md:text-6xl font-black text-zinc-900 mb-10 tracking-tighter uppercase">{t.revamp.title}</h2>
            <p className="text-xl md:text-2xl text-zinc-500 mb-12 font-medium italic leading-relaxed max-w-2xl mx-auto lg:mx-0">
              "{t.revamp.desc}"
            </p>
            <button onClick={() => setView('book')} className="group px-10 py-5 bg-white border-2 border-purple-600 rounded-2xl text-[10px] font-black uppercase tracking-widest text-purple-900 shadow-xl shadow-purple-500/10 hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center lg:justify-start gap-3 active:scale-95 mx-auto lg:mx-0">
              <BookOpen className="text-purple-600 group-hover:text-white transition-colors" size={18} /> {t.revamp.book}
            </button>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              <img
                src={BOOK_IMAGE_URL}
                className="w-full max-w-sm rounded-xl shadow-[20px_40px_80px_rgba(0,0,0,0.15)] border-4 border-white transition-all duration-700 group-hover:rotate-2"
                alt="Revamp Your Mind Book"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-32 px-6 bg-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-14">
          <h2 className="text-3xl font-black text-white uppercase tracking-widest flex items-center gap-4">
            <Play size={24} className="text-orange-500" /> {t.videos.title}
          </h2>
        </div>
        <div className="netflix-scroll flex gap-6 overflow-x-auto px-10 pb-10 snap-x">
          {VIDEOS.map((video, i) => (
            <a href={video.link} target="_blank" rel="noopener noreferrer" key={i} className="flex-none w-[300px] md:w-[420px] snap-center group cursor-pointer block">
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 group-hover:scale-105">
                <img src={video.thumb} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0" alt={video.title} />
                <div className="absolute inset-0 bg-black/30 transition-all flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-all">
                    <Play className="fill-white text-white" size={20} />
                  </div>
                </div>
              </div>
              <h3 className="mt-5 text-base font-black text-white uppercase group-hover:text-orange-500 transition-colors tracking-tighter">{video.title}</h3>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-grid">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] text-zinc-900 uppercase tracking-tighter">
              {t.contact.title1} <br /><span className="gradient-text italic">{t.contact.title2}</span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 mb-16 font-normal leading-relaxed">{t.contact.subtitle}</p>

            <div className="space-y-10">
              <a href={SOCIAL_LINKS.email} className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-zinc-200 group-hover:border-orange-500 group-hover:bg-orange-50 transition-all shadow-sm">
                  <Mail className="text-orange-600" size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] mb-1">Email</p>
                  <p className="text-lg text-zinc-900 font-bold tracking-tight">tracywaithera18@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="p-10 md:p-16 rounded-[3rem] bg-white border border-zinc-100 shadow-2xl space-y-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-2">{t.contact.nameLabel}</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-6 py-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-orange-500/10"
                placeholder="Your Full Name"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-2">{t.contact.goalLabel}</label>
              <textarea
                rows={4}
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-6 py-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-orange-500/10"
                placeholder="Tell me about your business goal..."
              />
            </div>
            <button
              onClick={() => sendWhatsApp()}
              className="w-full bg-zinc-900 hover:bg-orange-600 text-white font-black py-6 rounded-2xl flex items-center justify-center gap-4 transition-all shadow-xl active:scale-[0.98] uppercase tracking-widest text-[10px]"
            >
              <MessageSquare size={20} /> {t.contact.whatsapp}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-zinc-100 bg-zinc-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img src={LOGO_URL} alt="Logo" className="w-12 h-12 rounded-xl shadow-md" />
              <span className="text-3xl font-black tracking-tighter text-zinc-900">TRACY <span className="gradient-text italic">WAITHERA</span></span>
            </div>
            <p className="text-zinc-500 mt-2 text-[9px] font-black uppercase tracking-widest max-w-xs">&copy; 2025 TRACY WAITHERA STUDIO • NAIROBI, KENYA</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-xs font-bold text-zinc-400 uppercase tracking-widest">
            <div className="flex flex-col gap-4">
              <p className="text-zinc-900 text-[10px] font-black">Navigation</p>
              <button onClick={() => scrollTo('hero')} className="hover:text-orange-600 text-left">Home</button>
              <button onClick={() => scrollTo('insights')} className="hover:text-orange-600 text-left">Insights</button>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-zinc-900 text-[10px] font-black">Social</p>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" className="hover:text-orange-600">LinkedIn</a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" className="hover:text-orange-600">Instagram</a>
            </div>
            <button onClick={handleRateCardToggle} className="p-5 rounded-2xl bg-white border border-zinc-200 hover:border-orange-500 transition-all text-left shadow-sm">
              <p className="text-zinc-900 text-[10px] font-black">Investment</p>
              <p className="text-[8px] mt-1">Rates & Booking</p>
            </button>
          </div>
        </div>
      </footer>
      <ChatBot />
    </div>
  );
};

export default App;
