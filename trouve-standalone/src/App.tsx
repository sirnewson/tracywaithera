import { useState, useEffect } from 'react';
import { ArrowRight, Check, Star, Compass, Bot, X } from 'lucide-react';
import { ChatBot } from './components/ChatBot';
import { SMM_PACKAGES, AI_ADD_ONS, BRAND_SHOOT } from './constants';

interface PricingFeature {
  name: string;
  bullet?: string;
  bold?: string;
  italic?: boolean;
  textClass?: string;
}

interface PricingTier {
  title: string;
  price: string;
  subtitle: string;
  theme: string;
  bgTitle: string;
  priceColor: string;
  btnClass: string;
  btnText: string;
  link: string;
  popular?: boolean;
  features: PricingFeature[];
}

export default function App() {
  const [activeModal, setActiveModal] = useState<{ type: string; key: string } | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeModal = () => setActiveModal(null);

  const pricingTiers: PricingTier[] = [
    {
      title: "Startup",
      price: "KES 15k - 25k",
      subtitle: "Brand Foundation",
      theme: "border-t-slate-200",
      bgTitle: "text-slate-400",
      priceColor: "text-slate-900",
      btnClass: "border-2 border-slate-100 text-slate-900 hover:bg-slate-50",
      btnText: "Inquire",
      link: "https://wa.me/254702476038?text=Hi%20Trouve,%20I'm%20interested%20in%20the%20Startup%20Package%20(15k-25k).",
      features: [
        { name: "Logo Design Kit", bullet: "trouveBlue" },
        { name: "Color Strategy", bullet: "trouveBlue" },
        { name: "Typography System", bullet: "trouveBlue" },
        { name: "2 Visual Mockups", bullet: "trouveBlue" },
      ]
    },
    {
      title: "Growth",
      price: "KES 50k",
      subtitle: "Identity + Web",
      theme: "border-t-[#0054A6] bg-blue-50/20",
      bgTitle: "text-[#0054A6]",
      priceColor: "text-slate-900",
      btnClass: "bg-[#0054A6] text-white shadow-lg shadow-blue-100 hover:scale-[1.02]",
      btnText: "Select",
      link: "https://wa.me/254702476038?text=Hi%20Trouve,%20I'm%20interested%20in%20the%20Growth%20Package%20(50k).",
      features: [
        { name: "Full Identity", bullet: "trouveBlue" },
        { name: "Brand Guidelines", bullet: "trouveBlue" },
        { name: "Pro Website", bullet: "blue-500", bold: "slate-900" },
        { name: "(No Domain/Hosting)", italic: true, textClass: "text-[9px] text-slate-400 pl-4" },
        { name: "10+ Mockups", bullet: "trouveBlue" },
      ]
    },
    {
      title: "Professional",
      price: "KES 80k",
      subtitle: "Identity + Domain",
      theme: "border-t-slate-800",
      bgTitle: "text-slate-900",
      priceColor: "text-slate-900",
      btnClass: "bg-slate-800 text-white hover:bg-black",
      btnText: "Get Started",
      link: "https://wa.me/254702476038?text=Hi%20Trouve,%20I'm%20interested%20in%20the%20Professional%20Package%20(80k).",
      features: [
        { name: "Full Brand Identity", bullet: "trouveBlue" },
        { name: "Pro Website", bullet: "blue-500", bold: "slate-900" },
        { name: "Custom .com Domain", bullet: "slate-900", bold: "blue-600" },
        { name: "(No Hosting/Maintenance)", italic: true, textClass: "text-[9px] text-slate-400 pl-4" },
        { name: "15+ Premium Mockups", bullet: "trouveBlue" },
      ]
    },
    {
      title: "Corporate",
      price: "KES 100k",
      subtitle: "Total Ecosystem",
      popular: true,
      theme: "border-t-[#d4af37] bg-white ring-2 ring-[#d4af37]/10",
      bgTitle: "text-[#b8860b]",
      priceColor: "golden-gradient",
      btnClass: "bg-gradient-to-br from-[#d4af37] to-[#b8860b] text-white shadow-lg shadow-yellow-100 hover:scale-[1.02]",
      btnText: "Scale Now",
      link: "https://wa.me/254702476038?text=Hi%20Trouve,%20I'm%20interested%20in%20the%20Corporate%20Package%20(100k).",
      features: [
        { name: "Performance Web", bullet: "blue-500", bold: "slate-900" },
        { name: "Custom Domain", bullet: "d4af37" },
        { name: "1 Year Cloud Hosting", bullet: "d4af37", bold: "d4af37" },
        { name: "Identity Kit", bullet: "slate-900" },
        { name: "Social Assets", bullet: "slate-900" },
      ]
    },
    {
      title: "Elite",
      price: "KES 150k",
      subtitle: "Managed Intelligence",
      theme: "border-t-[#0054A6] bg-blue-50/10",
      bgTitle: "text-[#0054A6]",
      priceColor: "text-slate-900",
      btnClass: "bg-[#0054A6] text-white hover:bg-blue-700",
      btnText: "Go Elite",
      link: "https://wa.me/254702476038?text=Hi%20Trouve,%20I'm%20interested%20in%20the%20Elite%20Package%20(150k).",
      features: [
        { name: "Full Corporate Kit", bullet: "blue-600" },
        { name: "Full Maintenance", bullet: "slate-900", bold: "blue-600" },
        { name: "(Updates & Security)", italic: true, textClass: "text-[9px] text-slate-400 pl-4" },
        { name: "Smart Systems", bullet: "blue-600", bold: "slate-900" },
        { name: "Monthly Strategy", bullet: "blue-600" },
      ]
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-[#FDFDFD] relative overflow-hidden selection:bg-[#0054A6] selection:text-white">
      {/* Background Ornaments */}
      <div className="bg-blob w-[500px] h-[500px] bg-[#0070DD] top-[-10%] left-[-10%] animate-blob hidden md:block"></div>
      <div className="bg-blob w-[700px] h-[700px] bg-[#D4AF37] bottom-[-15%] right-[-10%] animate-blob hidden md:block" style={{ animationDelay: '4s' }}></div>
      <div className="fixed inset-0 hero-pattern pointer-events-none z-0"></div>

      {/* Navigation */}
      <header className={`fixed top-0 left-0 w-full z-[100] h-24 transition-all duration-300 ${isScrolled ? 'glass-nav backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 lg:px-12">
          <div className="flex items-center gap-5">
            <a href="https://trouve-ai-marketing.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-5 group cursor-pointer">
              <img src="https://i.ibb.co/Hpn5R6zg/logo-file.png" alt="Trouve Logo" className="h-9 lg:h-10 bold-img hidden sm:block group-hover:scale-105 transition-transform" />
              <div className="hidden md:block h-5 w-[1.5px] bg-slate-200"></div>
              <div className="hidden md:block">
                <p className="text-[11px] text-[#0054A6] font-black tracking-[0.4em] uppercase leading-none group-hover:text-[#D4AF37] transition-colors">Trouve</p>
                <p className="text-[7px] text-slate-400 font-bold tracking-[0.2em] uppercase mt-1">Creative Intelligence</p>
              </div>
            </a>
          </div>

          <nav className="flex items-center gap-4 lg:gap-10">
            <button onClick={() => scrollTo('hero')} className="nav-link nav-text text-[11px] lg:text-sm opacity-60 hover:opacity-100 uppercase font-black">Home</button>
            <button onClick={() => scrollTo('services')} className="nav-link nav-text text-[11px] lg:text-sm opacity-60 hover:opacity-100 whitespace-nowrap uppercase font-black">What we do</button>
            <button onClick={() => scrollTo('pricing')} className="nav-link nav-text text-[11px] lg:text-sm opacity-60 hover:opacity-100 uppercase font-black">Rates</button>
          </nav>

          <a href="https://wa.me/254702476038" target="_blank" rel="noreferrer" className="hidden md:block bg-[#001A33] text-white px-7 py-3 rounded-full font-black text-[11px] tracking-widest hover:bg-[#0054A6] transition-all shadow-lg active:scale-95">
            LET'S TALK
          </a>
        </div>
      </header>

      <main className="pt-24 relative z-10 w-full">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[92vh] flex items-center px-6 lg:px-12 py-12">
          <div className="max-w-6xl mx-auto w-full">
            <div className="ios-card bg-white p-10 lg:p-20 relative overflow-hidden shadow-2xl">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0054A6]/5 rounded-full blur-[80px] animate-float"></div>
              
              <div className="relative z-10 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 bg-[#0054A6]/10 text-[#0054A6] px-5 py-2 rounded-full text-[10px] font-black tracking-widest mb-10">
                  <span className="flex h-2 w-2 rounded-full bg-[#0054A6] animate-pulse"></span>
                  BUILDING BRANDS ACROSS AFRICA
                </div>
                
                <h1 className="text-5xl lg:text-[76px] font-display font-extrabold text-[#001A33] leading-[1] mb-10 tracking-tighter">
                  Building Brands with<br />
                  <span className="golden-gradient">Heart & Logic.</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mb-14 font-semibold leading-relaxed tracking-tight">
                  We help your biashara grow <span className="text-[#001A33] font-extrabold">authentically</span>. Clean designs. Smart systems. Authentic growth. Explore our premium rate card built for the modern African brand.
                </p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                  <button onClick={() => scrollTo('services')} className="bg-[#001A33] text-white px-10 py-5 rounded-[24px] font-black hover:bg-[#0054A6] transition-all shadow-2xl flex items-center gap-3 text-base">
                    What We Do
                    <ArrowRight size={20} />
                  </button>
                  <a href="https://wa.me/254702476038" target="_blank" rel="noreferrer" className="bg-slate-50 text-[#001A33] px-10 py-5 rounded-[24px] font-black hover:bg-white transition-all border-2 border-slate-100 text-base shadow-sm">
                    WhatsApp Strategy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Marquee */}
        <section className="py-12 px-6 max-w-7xl mx-auto">
          <div className="ios-card bg-white py-14 px-8 lg:px-16 overflow-hidden shadow-lg border-slate-100">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
              <h4 className="text-[11px] font-black text-[#D4AF37] uppercase tracking-[0.5em]">Companies we've helped scale</h4>
              <div className="h-[1.5px] flex-grow bg-slate-100 mx-10 hidden md:block opacity-60"></div>
              <p className="text-slate-500 font-extrabold text-[12px] uppercase tracking-widest">Continental trust</p>
            </div>
            
            <div className="relative flex overflow-x-hidden">
              <div className="flex animate-marquee items-center whitespace-nowrap">
                {/* Loop 1 */}
                <div className="flex items-center space-x-16 lg:space-x-36 px-12 opacity-60">
                  <span className="font-black text-4xl tracking-tighter">NCBA</span>
                  <span className="font-black text-4xl tracking-tighter">VIVO</span>
                  <span className="font-black text-4xl tracking-tighter">JUMIA</span>
                  <span className="font-black text-4xl tracking-tighter">BRITAM</span>
                  <span className="font-black text-4xl tracking-tighter">TOTAL</span>
                </div>
                {/* Loop 2 */}
                <div className="flex items-center space-x-16 lg:space-x-36 px-12 opacity-60">
                  <span className="font-black text-4xl tracking-tighter">NCBA</span>
                  <span className="font-black text-4xl tracking-tighter">VIVO</span>
                  <span className="font-black text-4xl tracking-tighter">JUMIA</span>
                  <span className="font-black text-4xl tracking-tighter">BRITAM</span>
                  <span className="font-black text-4xl tracking-tighter">TOTAL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="mb-20 px-6 text-center xl:text-left">
            <h2 className="text-[11px] font-black text-[#0054A6] uppercase tracking-[0.5em] mb-4">What we do</h2>
            <h3 className="text-5xl lg:text-7xl font-extrabold text-[#001A33] tracking-tight leading-none">African Growth <br />Made Simple.</h3>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div onClick={() => setActiveModal({ type: 'detail', key: 'brand-strat' })} className="ios-card bg-white p-10 cursor-pointer shadow-xl border-transparent hover:border-[#0054A6]/20 group">
              <div className="w-14 h-14 bg-[#0054A6]/10 rounded-[22px] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm">
                <Compass className="w-7 h-7 text-[#0054A6]" />
              </div>
              <h3 className="text-2xl font-black text-[#001A33] mb-5">Growth Plan (Mpango)</h3>
              <p className="text-slate-500 text-base leading-relaxed font-bold">We design a clear roadmap to help your brand lead African markets and stay on top.</p>
            </div>
            {/* Service 2 */}
            <div onClick={() => setActiveModal({ type: 'detail', key: 'visual' })} className="ios-card bg-white p-10 cursor-pointer shadow-xl border-transparent hover:border-orange-200 group">
              <div className="w-14 h-14 bg-orange-50 rounded-[22px] flex items-center justify-center mb-8 text-orange-500 group-hover:scale-110 transition-transform shadow-sm">
                <Star className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-[#001A33] mb-5">Visual Brand (Sura)</h3>
              <p className="text-slate-500 text-base leading-relaxed font-bold">Professional designs that make people recognize and trust your business instantly.</p>
            </div>
            {/* Service 3 */}
            <div onClick={() => setActiveModal({ type: 'detail', key: 'ai' })} className="ios-card bg-white p-10 cursor-pointer shadow-xl border-transparent hover:border-emerald-200 group xl:col-span-1 md:col-span-2">
              <div className="w-14 h-14 bg-emerald-50 rounded-[22px] flex items-center justify-center mb-8 text-emerald-500 group-hover:scale-110 transition-transform shadow-sm">
                <Bot className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-[#001A33] mb-5">Smart Systems</h3>
              <p className="text-slate-500 text-base leading-relaxed font-bold">Tools that talk to your customers and close sales while you focus on your work.</p>
            </div>
          </div>
        </section>

        {/* Pricing: Brand Identity */}
        <section id="pricing" className="py-24 max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
             <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-[10px] uppercase tracking-[0.3em] text-[#0054A6] font-black mb-8">Premium Tier</div>
             <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-6">Brand Identity & Digital Rates</h2>
             <p className="text-slate-500 text-lg font-medium leading-relaxed">Structured investment plans to elevate your brand from local startup to continental empire.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
             {pricingTiers.map((tier, idx) => (
                <div key={idx} className={`card-premium p-6 rounded-3xl flex flex-col border-t-8 ${tier.theme} relative`}>
                    {tier.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#d4af37] text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em] shadow-lg">Popular</div>}
                    <div className="mb-6">
                        <h3 className={`text-xs font-black uppercase tracking-widest mb-2 ${tier.bgTitle}`}>{tier.title}</h3>
                        <div className={`text-2xl font-display mb-3 ${tier.priceColor}`}>{tier.price}</div>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">{tier.subtitle}</p>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-700 flex-grow mb-8">
                        {tier.features.map((feat, fidx) => (
                          <li key={fidx} className={`flex items-center gap-2 ${feat.bold ? `font-bold text-${feat.bold}` : ''} ${feat.italic ? 'italic' : ''} ${feat.textClass || ''}`}>
                             {!feat.italic && <span className={`text-[10px] text-${feat.bullet}`}>●</span>}
                             {feat.name}
                          </li>
                        ))}
                    </ul>
                    <a href={tier.link} target="_blank" rel="noreferrer" className={`w-full py-3 rounded-xl transition font-bold text-[10px] uppercase tracking-widest text-center ${tier.btnClass}`}>
                      {tier.btnText}
                    </a>
                </div>
             ))}
          </div>
        </section>

        {/* Branding Insights (from snippet 2) */}
        <section className="bg-slate-50 py-24 px-6 border-y border-slate-100">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-display text-slate-900 mb-6 font-extrabold">Built for <span className="text-[#0054A6]">Authentic</span> Growth.</h2>
                        <p className="text-slate-500 text-lg leading-relaxed mb-8">
                            We don't just do ads; we build trust. Our branding insights help you bridge the gap between "looking good" and "closing deals."
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <div className="text-[#0054A6] font-bold text-2xl mb-1">100%</div>
                                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Custom Design</div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <div className="text-[#d4af37] font-bold text-2xl mb-1">24/7</div>
                                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">System Support</div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-white p-8 rounded-[40px] shadow-2xl border border-blue-50">
                        <div className="flex gap-2 mb-6">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-4 w-3/4 bg-slate-100 rounded-full"></div>
                            <div className="h-4 w-full bg-slate-100 rounded-full"></div>
                            <div className="h-32 w-full bg-blue-50 rounded-2xl flex items-center justify-center">
                                <img src="https://i.ibb.co/Hpn5R6zg/logo-file.png" alt="Trouve" className="h-12 opacity-20" />
                            </div>
                            <div className="h-4 w-1/2 bg-slate-100 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Pricing: Social Media Management */}
        <section id="smm-pricing" className="py-24 px-6 max-w-[1600px] mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
             <div className="inline-block px-4 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-black mb-8">Social Ecosystem</div>
             <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-6">Social Media Management Rates</h2>
             <p className="text-slate-500 text-lg font-medium leading-relaxed">Turn your social media channels into predictable revenue machines with our management packages.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {SMM_PACKAGES.map((pkg, i) => (
              <div key={i} className="card-premium p-8 rounded-3xl border-t-4 border-t-[#0054A6] flex flex-col">
                <h4 className="font-black text-xl text-[#001A33] uppercase mb-2">{pkg.title}</h4>
                <p className="text-[#0054A6] font-bold text-2xl mb-6">{pkg.price}</p>
                <ul className="space-y-4 flex-grow mb-8">
                  <li className="flex items-start gap-3">
                    <Check size={16} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-600 line-clamp-2" title={pkg.platforms}>{pkg.platforms}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={16} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-600 line-clamp-3" title={pkg.description}>{pkg.description}</span>
                  </li>
                </ul>
                <a href={pkg.link} target="_blank" rel="noreferrer" className="w-full bg-[#001A33] text-white text-[11px] font-black py-4 rounded-xl text-center uppercase tracking-widest hover:bg-[#0054A6] transition-colors">Select Package</a>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="ios-card p-10 bg-slate-50 border border-slate-100">
              <h4 className="font-black text-xl text-[#001A33] uppercase mb-4">AI Integration Add-Ons</h4>
              <ul className="space-y-4">
                {AI_ADD_ONS.map((addon, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-[#0054A6] p-1 rounded-full"><Bot size={12} className="text-white" /></div>
                    <span className="text-sm font-medium text-slate-600"><strong className="text-slate-900">{addon.name}</strong> - {addon.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="ios-card p-10 bg-[#001A33] text-white flex flex-col justify-center">
              <h4 className="font-black text-[#D4AF37] uppercase tracking-widest text-xs mb-2">BONUS</h4>
              <h3 className="text-3xl font-display font-extrabold mb-4">{BRAND_SHOOT.title}</h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed opacity-90">{BRAND_SHOOT.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black">{BRAND_SHOOT.investment}</span>
                <a href={BRAND_SHOOT.link} target="_blank" rel="noreferrer" className="text-[10px] uppercase font-black tracking-widest py-3 px-6 rounded-full bg-[#D4AF37] text-[#001A33] hover:scale-105 transition-transform">Book Shoot</a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#001A33] text-white mt-10 relative overflow-hidden shadow-2xl rounded-t-[50px]">
             <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0054A6]/10 -z-10 translate-x-24 -skew-x-12"></div>
             
             <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20">
                 <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
                     <div className="lg:col-span-8 flex flex-col items-start">
                         <a href="https://trouve-ai-marketing.vercel.app/" target="_blank" rel="noreferrer">
                           <img src="https://i.ibb.co/Hpn5R6zg/logo-file.png" alt="Trouve Logo" className="h-16 mb-8 brightness-0 invert hover:scale-105 transition-transform" />
                         </a>
                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-10 text-white font-extrabold">Building Brands Across Africa.</h2>
                         <p className="text-slate-300 text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mb-10">
                             Creative Intelligence for brands that refuse to be ignored. We build trust through heart and logic so your biashara can win.
                         </p>
                     </div>
                     <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
                         <h5 className="font-black text-[11px] uppercase tracking-[0.4em] text-[#D4AF37] mb-8">Contact</h5>
                         <a href="mailto:trouvemarketingsolutions@gmail.com" className="text-white font-bold text-lg mb-4 hover:text-[#D4AF37] transition-colors break-words text-left lg:text-right">trouvemarketingsolutions@gmail.com</a>
                         <a href="https://wa.me/254702476038" target="_blank" className="text-white font-black text-2xl lg:text-3xl hover:text-[#D4AF37] transition-colors mb-2">+254 702 476 038</a>
                         <p className="text-slate-400 text-xs font-black uppercase tracking-widest mt-6">Nairobi, Kenya</p>
                     </div>
                 </div>
                 <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                     <p className="text-[10px] font-black tracking-[0.3em] text-white/50 uppercase">© 2026 TROVE MARKETING SOLUTIONS</p>
                     <p className="text-[10px] font-black tracking-[0.3em] text-[#D4AF37] uppercase">Creative Intelligence Africa</p>
                 </div>
             </div>
        </footer>
      </main>

      {/* Detail Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-[200] p-4 lg:p-12 flex items-center justify-center bg-slate-900/60 backdrop-blur-md" onClick={closeModal}>
           <div className="bg-white max-w-3xl w-full max-h-[90vh] rounded-[48px] shadow-2xl relative overflow-y-auto custom-scrollbar p-10 lg:p-16 flex flex-col text-center" onClick={e => e.stopPropagation()}>
              <button onClick={closeModal} className="absolute top-6 right-6 p-3 bg-slate-100 rounded-full text-slate-400 hover:text-slate-800 transition">
                 <X size={24} />
              </button>
              <div className="w-20 h-20 bg-[#0054A6]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                 <Bot className="w-10 h-10 text-[#0054A6]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#001A33] mb-8 tracking-tight">Growth Plan Integration</h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed mb-10">We integrate deep brand strategy seamlessly into your business. For this capability overview, let's connect on WhatsApp to establish your specific business framework.</p>
              <a href="https://wa.me/254702476038" target="_blank" rel="noreferrer" className="w-full bg-[#001A33] text-white py-5 rounded-2xl text-center font-black tracking-widest hover:scale-105 transition-transform shadow-xl uppercase text-sm">Let's Work</a>
           </div>
        </div>
      )}

      {/* Global SMM ChatBot */}
      <ChatBot type="trouve" initialOpen={true} />
    </div>
  );
};
