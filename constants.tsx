
import { ContentStrings, RateItem, Article, Program } from './types';

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
      programs: 'Programs',
    },
    hero: {
      tag: 'BRAND STRATEGY AI MARKETING EXPERT CREATIVE',
      title1: 'Building Brands.',
      title2: 'Revamping Minds.',
      subtitle: 'Are you struggling to stand out and generate revenue without burning cash on ads? I solve this. I build automated AI marketing systems and high-converting strategies that turn your expertise into a magnetic brand, bringing predictable growth while you focus on what you do best.',
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
      vision: 'My journey began in traditional marketing before I transitioned into the digital space. Today, as a global brand strategist and digital marketer, my mission is to help brands grow, build lasting legacies, and become truly memorable. By blending my own experience in influencer marketing and injecting creativity into every sector, I create authentic connections. I also adore sharing everything I learn along the way.',
      philosophy: 'Tracy Waithera is the founder of Trouve Marketing Solutions (Trouve Agency). Operating at the intersection of human creativity and machine intelligence, I architect AI automated systems and digital strategies that handle the heavy lifting of marketing. My proprietary C.A.M. Authority Model focuses not only on technical business scaling but also on the mental clarity and psychological resilience of the leadership behind the brand.',
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
    programs: {
      title: 'Academy & Programs',
      subtitle: 'Premium Masterclasses & Coaching',
      enroll: 'Enroll Now'
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
      programs: 'Programu',
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
    programs: {
      title: 'Programu na Madarasa',
      subtitle: 'Mafunzo ya Kitaalam',
      enroll: 'Jiunge Sasa'
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
    id: 'post-ad-era-2026',
    title: 'The Post-Ad Era: How Brands are Surviving the Collapse of Traditional Marketing in 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    excerpt: 'The golden age of cheap digital advertising is over. To win in 2026, brands must pivot from renting attention to building undeniable authority.',
    content: `The golden age of cheap digital advertising is over. Driven by skyrocketing Customer Acquisition Costs (CAC), privacy regulations, and the rapid rise of AI search engines, traditional marketing funnels are collapsing. 

For the last decade, the marketing playbook was simple: buy ads on major platforms, drive traffic to a landing page, and optimize the conversion rate. Today, that same playbook is bankrupting businesses. Consumers have developed total "ad blindness," and the cost to acquire a single customer has reached historic highs. 

We have officially entered the Post-Ad Era. If your business is still relying purely on paid traffic to survive, you are vulnerable. To win in 2026, brands must pivot from "renting" attention through algorithms to building undeniable real-world and digital authority. Here is how the top 1% of brands are adapting.

## 1. The Shift to "Generative Discovery"
Consumers are no longer clicking on banner ads or scrolling through pages of search links. They are asking AI engines for answers, and those engines are providing instant, zero-click recommendations.

* Algorithmic Authority: AI engines do not recommend who spends the most on ads. They recommend the brands that have the highest factual density and most established trust across the internet. 
* The Human Premium: Because consumers are bombarded with automated spam, their trust in traditional media is incredibly low. The highest-converting asset today is a highly visible, authentic founder who speaks directly to the audience.

## 2. Strategic Collaborations (Borrowing Attention)
Instead of paying tech platforms for expensive clicks, smart brands are paying with value by collaborating with other businesses. 

* Cross-Pollination: We are seeing a massive rise in B2B and B2C brand partnerships. A tech software might partner with a high-end coffee brand for a joint campaign. They share audiences, instantly transferring trust without spending a dollar on traditional ads.
* Creator Mergers: Brands are no longer just hiring influencers for one-off shoutouts. They are bringing them on as creative directors or co-creators, merging the creator's loyal community directly with the brand's product.

## 3. Experiential Activations (Going Direct-to-Consumer)
As the digital world becomes more automated by AI, physical, real-world experiences are becoming a premium luxury. 

* The Offline-to-Online Loop: Brands are investing heavily in offline activations—pop-up shops, exclusive dinners, and live interactive events. These real-world moments create deep emotional connections with consumers.
* Authentic Data Capture: When consumers attend these activations, they naturally take photos, post videos, and talk about the brand online. This creates a massive wave of authentic, user-generated content that AI search engines use to validate the brand's popularity.

## 4. Owning the Ecosystem
Instead of renting space on social media, modern marketing requires building your own data ecosystem. 

* Predictive Systems: Stop using AI just to write blog posts. Use it on the backend to analyze your customer data, predict buying behaviors, and hyper-personalize the client experience.
* The Automated Flywheel: Build a system where your high-level thought leadership automatically trickles down into private communities and automated touchpoints, nurturing leads without requiring an advertising budget.

## The Bottom Line
Advertising is not dead, but the era of lazy, algorithm-dependent marketing is. The future belongs to leaders who pair unbreakable human authenticity—through collaborations and real-world activations—with ruthless AI efficiency. 

At Trouve Marketing Solutions, we don't just run campaigns; we build modern brand ecosystems. If you are ready to stop paying the "ad tax" and start building true authority, it is time to rethink your strategy.`,
    date: 'March 27, 2026',
    readingTime: '5 min read'
  },
  {
    id: 'scaling-brand-2026',
    title: 'The 2026 Framework for Scaling a Personal Brand Using AI (Without Burning Out)',
    image: 'https://i.ibb.co/n8Qjp9QL/Gemini-Generated-Image-cbt3cncbt3cncbt3.png',
    excerpt: 'Scaling a personal brand in the AI era requires a strategic balance of authentic storytelling, automated systems, and psychological resilience.',
    content: `**TL;DR:** Scaling a personal brand in the AI era requires more than just content volume; it requires a strategic balance of authentic storytelling, automated systems, and psychological resilience. The C.A.M. Authority Model (Creative, AI, Mindset) provides a blueprint for leaders to build global authority while protecting their mental clarity.

The digital landscape has fundamentally shifted. We are no longer competing just for human attention; we are competing for AI recognition. As traditional search engines evolve into generative AI platforms, the old rules of marketing no longer apply.

If you are a leader, founder, or creative trying to scale your personal brand, simply pushing out more content will only lead to burnout. To build real authority and handle the heavy lifting of modern marketing, you need a smarter ecosystem.

Here is how you bridge the gap between human creativity and machine intelligence using the C.A.M. Authority Model.

## 1. Creative Storytelling: The Human Anchor
AI can write a perfectly structured post, but it cannot share your unique story or the nuances of your industry experience. Your narrative is your modern business card.

* Stop competing on volume: Instead of posting generic advice, focus on deep, lived experiences.
* The 80/20 Rule: Let AI handle 80% of the research and structure, but reserve the final 20% for your authentic voice, opinions, and personal stories.

## 2. AI Systems: The Heavy Lifting
A brand is a business, and businesses require infrastructure. Attempting to manually manage every digital touchpoint is a recipe for creative exhaustion.

* Automate the routine: Implement smart systems to handle content distribution, data analysis, and audience segmentation.
* Create a "Creative OS": Build a centralized system where your ideas are automatically sorted and deployed using AI tools, allowing you to focus purely on high-level strategy and real connection.

## 3. Mindset & Mental Clarity: The Invisible ROI
A brand is only as strong as the mind behind it. In a hyper-connected, fast-paced digital world, psychological resilience is your ultimate competitive advantage.

* Protect your bandwidth: Scaling a brand often brings imposter syndrome, decision fatigue, and burnout. You must treat your mental health as a core business metric.
* Revamp your mind: Shift your mindset from "doing everything" to "directing everything." You are the strategist; let the tools be the technicians.

## The Bottom Line
The shift from volume to authority is here. By integrating deep creative storytelling, leveraging AI to handle the operational heavy lifting, and fiercely protecting your mental clarity, you can scale your personal brand locally and globally.

At Trouve Marketing Solutions, we build the digital muscle your brand needs to scale. From creative strategy to AI systems, we help you lead with integrity and global vision.`,
    date: 'March 26, 2026',
    readingTime: '4 min read'
  },
  {
    id: 'personal-branding-101',
    title: 'Personal Branding: How to build your brand online presence',
    image: '/images/personal-branding.png',
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

export const PROGRAMS: Program[] = [
  {
    id: 'ai-marketing-beginners',
    title: 'AI Marketing for Beginners',
    description: 'Learn how to leverage Artificial Intelligence to supercharge your marketing efforts. Understand the tools, strategies, and exact workflows that the top 1% use to build modern, automated marketing ecosystems.',
    topics: [
      'Understand core AI concepts',
      'Master prompt engineering for marketers',
      'Automate content creation without losing authenticity',
      'Build predictive lead generation systems'
    ],
    posterUrl: '/images/ai_marketing_poster.png',
    isAvailable: true
  },
  {
    id: 'personal-branding',
    title: 'Personal Branding & Coaching',
    description: 'Become the undisputed go-to authority in your industry. I will coach you on how to build a highly visible personal brand that attracts opportunities and builds lasting trust.',
    topics: [
      'Define your unique brand identity',
      'Develop the C.A.M. Authority Model',
      'Master authoritative storytelling',
      'Scale your audience authentically'
    ],
    posterUrl: '/images/personal_brand_poster.png',
    isAvailable: true
  },
  {
    id: 'digital-marketing-revenue',
    title: 'Digital Marketing & Content to Revenue',
    description: 'Stop posting for likes and start posting for profit. Discover how to turn your digital content into a consistent, predictable revenue stream using proven digital marketing strategies.',
    topics: [
      'Create high-converting content funnels',
      'Turn social media attention into sales',
      'Monetize your expertise effectively',
      'Analyze data to optimize conversions'
    ],
    posterUrl: '/images/digital_revenue_poster.png',
    isAvailable: true
  },
  {
    id: 'advertising-brand-identity',
    title: 'Advertising and Brand Identity',
    description: 'Learn how to construct a premium brand identity and execute high-ROI advertising campaigns. Break through the noise and create ads that actually resonate in the post-ad era.',
    topics: [
      'Design premium brand aesthetics',
      'Run high-converting ad campaigns',
      'Understand consumer psychology',
      'Lower Customer Acquisition Costs'
    ],
    posterUrl: '/images/ad_identity_poster.png',
    isAvailable: true
  },
  {
    id: 'website-creation-hosting',
    title: 'Make & Host Websites for Yourself',
    description: 'Take full control of your digital real estate. A step-by-step masterclass on how to build, deploy, and host your own professional websites without needing to hire a developer.',
    topics: [
      'Understand modern web platforms',
      'Design beautiful, responsive layouts',
      'Set up custom domains and hosting',
      'Implement SEO best practices'
    ],
    posterUrl: '/images/web_creation_poster.png',
    isAvailable: true
  }
];
