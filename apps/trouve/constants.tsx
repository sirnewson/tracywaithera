import { Article, Brand, Service } from './types';

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/tracywaithera/',
  instagram: 'https://www.instagram.com/tracy_waithera/',
  whatsapp: 'https://wa.me/254702476038',
  email: 'mailto:tracywaithera18@gmail.com',
  facebook: 'https://www.facebook.com/tracywaithera',
  tiktok: 'https://www.tiktok.com/@tracywaithera'
};

export const BRANDS: Brand[] = [
  { name: 'HubSpot', logo: 'https://cdn2.hubspot.net/hubfs/53/image8-2.jpg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Tenacity Locks', logo: 'https://via.placeholder.com/150?text=Tenacity' },
  { name: 'Rubis Kenya', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Rubis_Energie_Logo.svg' },
  { name: 'Vooma', logo: 'https://via.placeholder.com/150?text=Vooma' },
  { name: 'Elan Spa', logo: 'https://via.placeholder.com/150?text=Elan+Spa' },
  { name: 'African Wattle', logo: 'https://via.placeholder.com/150?text=African+Wattle' },
  { name: 'itel', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Itel_Mobile_logo.png' },
];

export const ARTICLES: Article[] = [
  {
    id: 'personal-branding-101',
    tag: 'Personal Branding',
    tagColor: 'bg-brand-gold',
    title: 'Personal Branding: How to build your brand online presence',
    excerpt: 'Your online presence is your modern business card. Learn the core pillars of building a personal brand that attracts opportunities.',
    image: '/images/personal-branding.jpg',
    content: `
      <h2>Building a Personal Brand</h2>
      <p>Building a personal brand is no longer a vanity metric. It is a career insurance policy.</p>
      
      <h3>Here is how to start:</h3>
      <ol>
        <li><strong>Define Your Niche:</strong> You cannot be everything to everyone. Pick one thing you want to be known for. For example, "The AI Marketing Expert".</li>
        <li><strong>Optimize Your Bio:</strong> Your bio should answer three questions. Who are you? Who do you help? How do you help them?</li>
        <li><strong>Content Buckets:</strong> Choose three or four topics you will consistently talk about. For me, it requires AI Strategy, Mental Health, and Entrepreneurship.</li>
        <li><strong>Consistency Over Virality:</strong> Do not aim for one viral post. Aim for 100 helpful posts. Trust is built over time.</li>
      </ol>
      
      <p>Start today. Post that first video. Write that first article. Your future self will thank you.</p>
    `
  },
  {
    id: 'marketing-2026',
    tag: 'Future Trends',
    tagColor: 'bg-brand-purple',
    title: 'Marketing Tips for 2026',
    excerpt: 'The shift from volume to authority is here. Why your personal brand is your new credit score.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    content: `
      <h2>The Authority Era</h2>
      <p>In 2026, the digital landscape will be saturated with AI generated content. The brands that thrive will not be the ones that produce the most. They will be the ones that possess the most human authority.</p>
      
      <h3>Why the "Volume Era" is Ending:</h3>
      <ol>
        <li><strong>Search is changing:</strong> AI agents will soon browse for us. They will prioritize experts with verified, original thoughts over generic content farms.</li>
        <li><strong>The Trust Economy:</strong> When anyone can generate a perfect video or image, the only thing that cannot be faked is a consistent, human track record. Your history is your brand.</li>
        <li><strong>Community First Growth:</strong> Instead of shouting at millions, the winners will whisper to thousands of highly engaged loyalists.</li>
      </ol>
      
      <p>Building your brand today is no longer an option. It is a necessity for professional survival in the AI age.</p>
    `
  },
  {
    id: 'ai-tools-2025',
    tag: 'AI Tools',
    tagColor: 'bg-brand-navy',
    title: 'AI Tools for Creatives',
    excerpt: 'Beyond ChatGPT: How to use specialized AI to scale your creative output without burnout.',
    image: '/images/ai-tools.png',
    content: `
      <h2>Cyborg Creativity</h2>
      <p>Creatives often fear AI, but the secret lies in 'Cyborg Creativity'. This is the seamless integration of human intuition and machine efficiency.</p>
      <p>Many see AI as a replacement, but the elite see it as a force multiplier. If you spend 80% of your time on administrative friction, you only have 20% for pure genius. AI flips that script.</p>
      
      <h3>Key Specialized Tools:</h3>
      <ul>
        <li><strong>Gemini 1.5 Pro:</strong> For long-context analysis of your voice and strategic planning.</li>
        <li><strong>Flux & Midjourney:</strong> For high-end visual direction that pushes artistic boundaries.</li>
        <li><strong>Custom GPTs:</strong> Building your own 'Branding Assistant' that knows your style better than anyone.</li>
      </ul>
      
      <p>The goal is not to automate your art. It is to automate the boring parts of being an artist. Scale your output, keep your soul.</p>
    `
  },
  {
    id: 'mindset-high-performers',
    tag: 'Mindset',
    tagColor: 'bg-green-600',
    title: 'Mindset for High Performers',
    excerpt: 'The psychological shift required to scale a brand in a fast-paced digital world.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
    content: `
      <h2>Success is 80% Psychology</h2>
      <p>High performers in the digital age face a unique challenge: Constant Input Overload.</p>
      <p>We are the first generation that has to actively fight for our focus. To build a world-class brand, you need a world-class mind. This requires:</p>
      
      <ol>
        <li><strong>Selective Ignorance:</strong> You don't need to know every new trend or every viral sound. Focus only on the 'Vital Few' actions that drive 80% of your results.</li>
        <li><strong>Emotional Regulation:</strong> Branding is a marathon. There will be bad days, low engagement, and harsh feedback. A high performer stays the course because their worth is not tied to an algorithm.</li>
        <li><strong>The Revamp Cycle:</strong> You cannot pour from an empty cup. Real productivity includes scheduled rest, physical movement, and disconnecting from the blue light.</li>
      </ol>
      
      <p>Your brand growth is a direct reflection of your internal clarity. Protect your mind to protect your empire.</p>
    `
  }
];

export const SMM_PACKAGES = [
  {
    id: 'authority',
    title: 'The Authority',
    platforms: '2 Platforms Managed',
    description: 'Complete Brand Immersion. High-frequency visibility to turn your expertise into a digital legacy.',
    price: '100,000 KES',
    link: 'https://wa.me/254702476038?text=Hello Trouve SMM, I am interested in The Authority package (100k).'
  },
  {
    id: 'professional',
    title: 'The Professional',
    platforms: '3 Platforms Managed',
    description: 'Accelerated Presence. Expanded content volume and deeper immersion for faster growth.',
    price: '150,000 KES',
    link: 'https://wa.me/254702476038?text=Hello Trouve SMM, I am interested in The Professional package (150k).'
  },
  {
    id: 'icon',
    title: 'The Icon',
    platforms: '3 Platforms Managed',
    description: 'Omnipresent Authority. Deep storytelling across 3 platforms to make you the leader.',
    price: '200,000 KES',
    link: 'https://wa.me/254702476038?text=Hello Trouve SMM, I am interested in The Icon package (200k).'
  },
  {
    id: 'empire',
    title: 'The Empire',
    platforms: 'Market Dominance',
    description: 'The ultimate growth engine. Complete media house support for product-led businesses.',
    price: '350,000 KES+',
    link: 'https://wa.me/254702476038?text=Hello Trouve SMM, I am interested in The Empire package (350k+).'
  }
];

export const AI_ADD_ONS = [
  { name: 'AI Image Generation', price: '2,000 KES' },
  { name: 'AI Video Generation', price: '5,000 KES' }
];

export const BRAND_SHOOT = {
  title: 'Full Brand Shoots',
  description: 'One elite professional session to capture your authentic style. Includes lifestyle, BTS content, and high-value Reels assets.',
  investment: '30,000 KES',
  link: 'https://wa.me/254702476038?text=Hello Trouve SMM, I want to book a Full Brand Shoot session (30k).'
};

export const SERVICES: Service[] = [
  {
    id: 'social-media',
    title: 'Social Media Management',
    icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', // Info icon as placeholder, will be replaced or used in SVG
    description: 'We handle your posts, captions, and community so you can focus on your business.',
    detailedContent: `
      <h2>Consistency Without the Headache</h2>
      <p>Your customers are on social media every single day. If you aren't there, you don't exist. But running a business AND managing an Instagram page is a recipe for burnout.</p>
      
      <h3>What We Do:</h3>
      <ul>
        <li><strong>Content Calendar:</strong> We plan a month of content in advance. No more waking up and wondering "What should I post today?"</li>
        <li><strong>Graphic Design:</strong> Our team creates stunning, on-brand visuals that stop the scroll.</li>
        <li><strong>Caption Copywriting:</strong> We write captions that engage, entertain, and sell.</li>
        <li><strong>Community Management:</strong> We reply to comments and DMs to keep your audience engaged.</li>
        <li><strong>Analytics Reporting:</strong> Monthly reports showing you exactly what's working and how you're growing.</li>
      </ul>
      
      <h3>The Result:</h3>
      <p>A vibrant, growing online community that loves your brand and buys your products.</p>
    `
  },
  {
    id: 'ads',
    title: 'Performance Marketing (Ads)',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', // Currency icon
    description: 'Stop burning cash. Start printing money with targeted Facebook & Instagram ads.',
    detailedContent: `
      <h2>Stop Guessing, Start Scaling</h2>
      <p>Organic growth is great, but it's slow. Paid advertising is the gasoline on the fire. But most businesses waste money boosting posts to the wrong people.</p>
      
      <h3>Our Approach:</h3>
      <ul>
        <li><strong>Audience Targeting:</strong> We find the exact people who are ready to buy your product right now.</li>
        <li><strong>Creative Testing:</strong> We test multiple images and videos to see what gets the cheapest clicks and most sales.</li>
        <li><strong>Retargeting:</strong> We show ads to people who visited your site but didn't buy, reminding them to come back and finish the purchase.</li>
        <li><strong>ROI Focus:</strong> We don't care about "likes." We care about Return on Ad Spend (ROAS). If you spend 1000 KES, we want to make you 5000 KES.</li>
      </ul>
      
      <h3>The Result:</h3>
      <p>A predictable stream of new leads and customers every single day.</p>
    `
  },
  {
    id: 'content',
    title: 'Content Creation',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z', // Video icon
    description: 'Visuals that stop the scroll. High-quality photography and videography.',
    detailedContent: `
      <h2>Visuals That Sell</h2>
      <p>In a split second, a potential customer decides if they trust you based on your visuals. Blurry, dark, or amateur photos scream "amateur business."</p>
      
      <h3>Services Offered:</h3>
      <ul>
        <li><strong>Product Photography:</strong> Clean, crisp images that highlight the quality of your products.</li>
        <li><strong>Reels & TikToks:</strong> Trendy, short-form videos designed to go viral and reach new audiences.</li>
        <li><strong>Brand Story Videos:</strong> Mini-documentaries that tell the story of your business and build deep connection.</li>
        <li><strong>Event Coverage:</strong> Professional capture of your launches, parties, and corporate events.</li>
      </ul>
      
      <h3>The Result:</h3>
      <p>A premium brand image that commands higher prices and attracts better customers.</p>
    `
  },
  {
    id: 'strategy',
    title: 'Strategy Consulting',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-1.447-.894L15 7m0 13V7', // Map icon
    description: 'The roadmap to market dominance. We build the plan, you execute the vision.',
    detailedContent: `
      <h2>The Roadmap to Dominance</h2>
      <p>Activity is not achievement. You can be busy every day and still not grow. Strategy is about choosing what NOT to do so you can focus on what actually moves the needle.</p>
      
      <h3>Consulting Areas:</h3>
      <ul>
        <li><strong>Brand Positioning:</strong> Defining exactly who you are, who you serve, and why you are different.</li>
        <li><strong>Go-to-Market Strategy:</strong> How to launch a new product with a bang.</li>
        <li><strong>Sales Funnel Optimization:</strong> Fixing the holes in your sales process where you are losing customers.</li>
        <li><strong>Team Training:</strong> Teaching your internal team how to think like marketers.</li>
      </ul>
      
      <h3>The Result:</h3>
      <p>Clarity, focus, and a step-by-step plan to reach your revenue goals.</p>
    `
  }
];
