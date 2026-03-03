
import { ContentStrings, RateItem, Article } from './types';

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/tracywaithera/',
  instagram: 'https://www.instagram.com/tracy_waithera/',
  whatsapp: 'https://wa.me/254702476038',
  email: 'mailto:tracywaithera18@gmail.com',
  facebook: 'https://www.facebook.com/tracywaithera',
  tiktok: 'https://www.tiktok.com/@tracywaithera'
};

export const STRINGS: Record<'en' | 'sw', ContentStrings & {
  revamp: { title: string; subtitle: string; desc: string; book: string };
  gallery: { title: string };
  videos: { title: string };
  articles: { title: string };
  rates: { title: string; subtitle: string; cta: string };
}> = {
  en: {
    nav: {
      services: 'Expertise',
      agency: 'Trouve Marketing',
      about: 'Know Me',
      contact: 'Connect',
      quote: 'Start Project',
      rates: 'Price List',
      insights: 'Insights',
    },
    hero: {
      tag: 'BRAND STRATEGY AI MARKETING EXPERT CREATIVE',
      title1: 'Building Brands.',
      title2: 'Revamping Minds.',
      subtitle: 'Brand Strategy • AI Marketing Expert • Creative. I help professionals and businesses create visible brands using creative strategy, AI, and storytelling while nurturing the mind behind the brand.',
      ctaAgency: 'Agency Services',
    },
    aiTool: {
      title: 'AI Strategy Builder',
      subtitle: 'Input your business goal and let my personal AI build you a 3-step growth plan right now.',
      placeholder: 'Tell me your goal (e.g., I want to grow my real estate leads).',
      button: 'Build Strategy',
      loading: 'Building your path...',
    },
    trouve: {
      title1: 'Trouve',
      title2: 'Agency',
      subtitle: 'A Premium Digital Agency for the Bold.',
      desc: 'Trouve is where we handle the heavy lifting. From content creation to AI automated systems, we build the digital muscle your brand needs to scale in Africa and beyond.',
      partner: 'Scale with Trouve',
    },
    services: {
      title1: 'Strategic',
      title2: 'Expertise',
      subtitle: 'Bridging the gap between traditional marketing and modern AI technology.',
    },
    about: {
      title1: "Know Me",
      title2: 'Better',
      vision: 'My story is one of constant evolution. I began in the roots of traditional marketing, understanding the core of human connection. As the world shifted, so did I moving through digital landscapes, mastering AI strategy, and even diving into the world of code.',
      philosophy: 'I believe a brand is only as strong as the person behind it. That is why my work focuses on both the technical scale of your business and the mental clarity of your leadership. I am here to bridge the gap between human creativity and machine intelligence.',
      dataDriven: 'Smart Systems',
      ethical: 'Real Connection',
    },
    contact: {
      title1: 'Let’s Chat',
      title2: 'Growth',
      subtitle: 'Ready to take your brand to the next level? I am currently accepting new clients for 2025.',
      email: 'Send Email',
      phone: 'Call Me',
      location: 'Office',
      locationDesc: 'Nairobi, Kenya',
      nameLabel: 'Your Name',
      emailLabel: 'Email Address',
      goalLabel: 'Your Business Goal',
      whatsapp: 'Chat on WhatsApp',
    },
    revamp: {
      title: 'Revamp Your Mind',
      subtitle: 'A Content & Mental Growth Ecosystem',
      desc: 'My philosophy and content ecosystem dedicated to personal growth, mental health, and creative thinking. Success starts with the mind behind the brand.',
      book: 'Explore the Book'
    },
    gallery: {
      title: 'Inside My World'
    },
    videos: {
      title: 'Watch Me Create'
    },
    articles: {
      title: 'Articles & Insights'
    },
    rates: {
      title: 'Investment Guide',
      subtitle: 'Transparent pricing for world-class results. All rates in Kenyan Shillings (KES).',
      cta: 'Book This Service'
    }
  },
  sw: {
    nav: {
      services: 'Utaalamu',
      agency: 'Trouve Marketing',
      about: 'Nijue Zaidi',
      contact: 'Nisalimie',
      quote: 'Anza Mradi',
      rates: 'Orodha ya Bei',
      insights: 'Mafunzo',
    },
    hero: {
      tag: 'MKAKATI WA CHAPA METAALAM WA AI UBUNIFU',
      title1: 'Jenga Chapa.',
      title2: 'Badili Fikra.',
      subtitle: 'Mkakati wa Chapa • Mtaalam wa AI • Ubunifu. Nawasaidia wafanyabiashara kutumia AI na chapa za hali ya juu, huku nikijenga uwezo wa akili nyuma ya chapa hiyo.',
      ctaAgency: 'Huduma za Trouve',
    },
    aiTool: {
      title: 'Mjenzi wa Mkakati wa AI',
      subtitle: 'Weka lengo lako na uruhusu AI yangu ikujengee mkakati wa hatua tatu sasa hivi.',
      placeholder: 'Niambie lengo lako...',
      button: 'Jenga Mkakati',
      loading: 'Tunajenga njia yako...',
    },
    trouve: {
      title1: 'Shirika la',
      title2: 'Trouve',
      subtitle: 'Shirika la Dijitali kwa Ajili ya Walio Shupavu.',
      desc: 'Trouve ni mahali ambapo tunashughulikia kazi ngumu. Kuanzia kuunda maudhui hadi mifumo ya AI inayojiendesha, tunajenga misuli ya dijitali unayohitaji.',
      partner: 'Kua na Trouve',
    },
    services: {
      title1: 'Ninacho',
      title2: 'Toa',
      subtitle: 'Huduma rahisi, zenye ufanisi, na athari kubwa kwa wajasiriamali wa kisasa.',
    },
    about: {
      title1: 'Nijue',
      title2: 'Zaidi',
      vision: 'Hadithi yangu ni moja ya mageuzi ya mara kwa mara. Nilianza katika mizizi ya uuzaji wa jadi, kuelewa msingi wa uhusiano wa kibinadamu. Ulimwengu ulipobadilika, mimi pia nilifanya hivyo.',
      philosophy: 'Ninaamini chapa ina nguvu tu kama mtu aliye nyuma yake. Ndio maana kazi yangu inalenga kiufundi na kiakili.',
      dataDriven: 'Mifumo ya Akili',
      ethical: 'Uhusiano wa Kweli',
    },
    contact: {
      title1: 'Tusemezane',
      title2: 'Ukuaji',
      subtitle: 'Uko tayari kukuza chapa yako? Ninakaribisha wateja wapya wa 2025.',
      email: 'Barua Pepe',
      phone: 'Nipigie',
      location: 'Ofisi',
      locationDesc: 'Nairobi, Kenya',
      nameLabel: 'Jina Lako',
      emailLabel: 'Barua Pepe',
      goalLabel: 'Lengo la Biashara',
      whatsapp: 'Tuma WhatsApp',
    },
    revamp: {
      title: 'Revamp Your Mind',
      subtitle: 'Mfumo wa Ukuaji wa Akili',
      desc: 'Falsafa yangu inayojitolea kwa ukuaji wa kibinafsi, afya ya akili, na fikra za kiubunifu.',
      book: 'Gundua Kitabu'
    },
    gallery: {
      title: 'Ulimwengu Wangu'
    },
    videos: {
      title: 'Masomo yangu'
    },
    articles: {
      title: 'Makala na Mafunzo'
    },
    rates: {
      title: 'Mwongozo wa Bei',
      subtitle: 'Bei wazi kwa matokeo ya kiwango cha juu. Bei zote ni kwa Shilingi ya Kenya (KES).',
      cta: 'Weka Huduma Hii'
    }
  },
};

export const SERVICES = [
  {
    icon: 'Sparkles',
    titleEn: 'Personal Branding',
    titleSw: 'Chapa Binafsi',
    descEn: 'I turn your skills into a powerful personal brand that people trust and buy from.',
    descSw: 'Nageuza ujuzi wako kuwa chapa binafsi yenye nguvu ambayo watu wanaiamini.',
    color: 'text-orange-400',
  },
  {
    icon: 'Bot',
    titleEn: 'AI Marketing Setup',
    titleSw: 'Mifumo ya AI',
    descEn: 'We build AI systems that handle your marketing automatically while you focus on business.',
    descSw: 'Tunajenga mifumo ya AI inayoshughulikia masoko yako kiotomatiki.',
    color: 'text-purple-400',
  },
  {
    icon: 'Mic',
    titleEn: 'Workshops & Speaking',
    titleSw: 'Mafunzo na Hotuba',
    descEn: 'High-energy talks on AI, Digital Strategy, and Mental Health for high-performance teams.',
    descSw: 'Hotuba kuhusu AI, Mkakati wa Dijitali, na Afya ya Akili.',
    color: 'text-orange-400',
  },
];

export const RATE_CARD: RateItem[] = [
  {
    service: 'Strategy Consultation',
    price: 'KES 10,000',
    details: '1 Hour deep dive session to solve your immediate branding or AI hurdles.',
  },

  {
    service: 'Personal Brand OS',
    price: 'KES 85,000',
    details: 'Complete 4-week transformation: Identity, Content Pillars, and Automation.',
  },
  {
    service: 'Trouve Agency Retainer',
    price: 'Custom',
    details: 'Full-service marketing & AI management for established firms.',
  },
];

export interface ArticleExtended extends Article {
  image: string;
}

export const ARTICLES: ArticleExtended[] = [
  {
    id: 'personal-branding-101',
    title: 'Personal Branding: How to build your brand online presence',
    image: '/images/personal-branding.jpg',
    excerpt: 'Your online presence is your modern business card. Learn the core pillars of building a personal brand that attracts opportunities.',
    content: `Building a personal brand is no longer a vanity metric. It is a career insurance policy.

Here is how to start:

1. **Define Your Niche:** You cannot be everything to everyone. Pick one thing you want to be known for. For example, "The AI Marketing Expert".

2. **Optimize Your Bio:** Your bio should answer three questions. Who are you? Who do you help? How do you help them?

3. **Content Buckets:** Choose three or four topics you will consistently talk about. For me, it requires AI Strategy, Mental Health, and Entrepreneurship.

4. **Consistency Over Virality:** Do not aim for one viral post. Aim for 100 helpful posts. Trust is built over time.

Start today. Post that first video. Write that first article. Your future self will thank you.`,
    date: 'Current',
    readingTime: '3 min read'
  },
  {
    id: 'marketing-2026',
    title: 'Marketing Tips for 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    excerpt: 'The shift from volume to authority is here. Why your personal brand is your new credit score.',
    content: `In 2026, the digital landscape will be saturated with AI generated content. The brands that thrive will not be the ones that produce the most. They will be the ones that possess the most human authority.

As we look toward the next year, the "Volume Era" is officially ending. We are entering the "Authority Era." Here is why:

1. Search is changing. AI agents will soon browse for us. They will prioritize experts with verified, original thoughts over generic content farms.

2. The Trust Economy. When anyone can generate a perfect video or image, the only thing that cannot be faked is a consistent, human track record. Your history is your brand.

3. Community First Growth. Instead of shouting at millions, the winners will whisper to thousands of highly engaged loyalists.

Building your brand today is no longer an option. It is a necessity for professional survival in the AI age.`,
    date: 'March 15, 2025',
    readingTime: '5 min read'
  },
  {
    id: 'ai-tools-2025',
    title: 'AI Tools for Creatives',
    image: '/images/ai-tools.png',
    excerpt: 'Beyond ChatGPT: How to use specialized AI to scale your creative output without burnout.',
    content: `Creatives often fear AI, but the secret lies in 'Cyborg Creativity'. This is the seamless integration of human intuition and machine efficiency.

Many see AI as a replacement, but the elite see it as a force multiplier. If you spend 80% of your time on administrative friction, you only have 20% for pure genius. AI flips that script.

Key Specialized Tools:
- Gemini 1.5 Pro: For long-context analysis of your voice and strategic planning.
- Flux & Midjourney: For high-end visual direction that pushes artistic boundaries.
- Custom GPTs: Building your own 'Branding Assistant' that knows your style better than anyone.

The goal is not to automate your art. It is to automate the boring parts of being an artist. Scale your output, keep your soul.`,
    date: 'Feb 28, 2025',
    readingTime: '4 min read'
  },
  {
    id: 'mindset-high-performers',
    title: 'Mindset for High Performers',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
    excerpt: 'The psychological shift required to scale a brand in a fast-paced digital world.',
    content: `Success is 20% strategy and 80% psychology. High performers in the digital age face a unique challenge: Constant Input Overload.

We are the first generation that has to actively fight for our focus. To build a world-class brand, you need a world-class mind. This requires:

1. Selective Ignorance. You don't need to know every new trend or every viral sound. Focus only on the 'Vital Few' actions that drive 80% of your results.

2. Emotional Regulation. Branding is a marathon. There will be bad days, low engagement, and harsh feedback. A high performer stays the course because their worth is not tied to an algorithm.

3. The Revamp Cycle. You cannot pour from an empty cup. Real productivity includes scheduled rest, physical movement, and disconnecting from the blue light.

Your brand growth is a direct reflection of your internal clarity. Protect your mind to protect your empire.`,
    date: 'Jan 10, 2025',
    readingTime: '6 min read'
  }
];

export const CONNECT_ITEMS = [
  {
    id: 'youtube',
    title: 'YouTube Channel',
    subtitle: 'Free Marketing Classes',
    icon: 'Play',
    link: 'https://youtube.com/@tracywaithera',
    color: 'bg-red-500'
  },
  {
    id: 'consultancy',
    title: 'Book Consultancy',
    subtitle: '1-on-1 Strategy Session',
    icon: 'Calendar',
    link: 'https://wa.me/254702476038',
    color: 'bg-zinc-900'
  }
];

export const VIDEOS = [
  { title: 'My Latest Video', thumb: 'https://img.youtube.com/vi/9TvWwONzv9I/hqdefault.jpg', link: 'https://www.youtube.com/watch?v=9TvWwONzv9I' },
  { title: 'The Future of AI Branding', thumb: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800', link: 'https://youtube.com/@tracywaithera' },
  { title: 'Mental Health in Tech', thumb: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800', link: 'https://youtube.com/@tracywaithera' },
  { title: 'Marketing Secrets 2025', thumb: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800', link: 'https://youtube.com/@tracywaithera' },
  { title: 'The Power of Personal Authority', thumb: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800', link: 'https://youtube.com/@tracywaithera' },
  { title: 'Building the Trouve Legacy', thumb: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', link: 'https://youtube.com/@tracywaithera' },
  { title: 'Scaling Beyond Borders', thumb: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800', link: 'https://youtube.com/@tracywaithera' },
];
