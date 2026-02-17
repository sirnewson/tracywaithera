
import React from 'react';
import { Chapter, Part } from './types';
import { FightOrFlightDiagram, NervousSystemDiagram, BrainDiagram } from './components/Diagrams';

export const PARTS: Part[] = [
  { title: "PART I", subtitle: "THE CATERPILLAR: THE MASK & THE STRUGGLE", chapters: [1, 2, 3] },
  { title: "PART II", subtitle: "THE COCOON: THE PAUSE & THE BREAKING", chapters: [4, 5, 6] },
  { title: "PART III", subtitle: "THE LIQUEFACTION: THE REVAMP & THE SCIENCE", chapters: [7, 8, 9] },
  { title: "PART IV", subtitle: "THE BUTTERFLY: THE FLIGHT", chapters: [10, 11, 12] }
];

const InsightBox: React.FC<{ title: string; children: React.ReactNode; type: 'science' | 'research' | 'faith' }> = ({ title, children, type }) => {
  const styles = {
    science: 'bg-blue-50/50 border-blue-200 text-blue-900',
    research: 'bg-indigo-50/50 border-indigo-200 text-indigo-900',
    faith: 'bg-amber-50/50 border-amber-200 text-stone-800'
  };
  
  const icons = {
    science: '🧬',
    research: '📊',
    faith: '✨'
  };

  return (
    <div className={`my-20 p-12 rounded-3xl border ${styles[type]} shadow-sm relative group transition-all hover:shadow-md clear-both`}>
      <div className="absolute -top-6 left-12 bg-white border-2 border-inherit px-5 py-2 rounded-2xl text-2xl shadow-sm">
        {icons[type]}
      </div>
      <h5 className="text-2xl font-black font-serif mb-6 mt-4 tracking-tight uppercase">{title}</h5>
      <div className="leading-relaxed text-lg font-body opacity-95">
        {children}
      </div>
    </div>
  );
};

export const CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: "The Girl with the Mask",
    subtitle: "High-Functioning Survival & The Autopilot Trap",
    quote: "I call it dying on the inside pretending to be alive.",
    content: (
      <div className="prose lg:prose-xl max-w-none">
        <p>There is a specific kind of exhaustion that comes from carrying heavy luggage that no one else can see. It is not a physical tiredness that a good night’s sleep can fix; it is a soul-tiredness. It is the exhaustion of being an actor in your own life, performing a script you never wrote, for an audience that only claps for the mask, not the human being behind it.</p>
        <p>For years, I was the master of the "High-Functioning" disguise. Have you ever felt like you are falling, but you are telling yourself and the world that you are flying? I know that feeling well. It is the sensation of drowning while standing on dry land. It is the art of smiling for the camera while screaming in your soul.</p>
        
        <InsightBox title="The Cortisol Loop" type="science">
          High-Functioning individuals often live in a perpetual state of "Alertness" fueled by the Amygdala. While most people experience stress as a spike, high-performers often experience it as a plateau. This chronic elevation of cortisol prevents the Prefrontal Cortex from entering "creative" or "restorative" modes, essentially locking the brain into a purely transactional, task-oriented existence.
        </InsightBox>

        <h3 className="text-5xl font-black font-serif mb-10 mt-24 text-stone-900 tracking-tighter italic border-l-8 border-amber-500 pl-10">The Science of the Mask</h3>
        
        <p>In the world of psychology, there is a term for what I was experiencing: <strong>High-Functioning Depression</strong>. It is a silent epidemic. It describes people who, to the outside observer, have it all together. They are the CEOs, the hustlers, the "Life of the Party."</p>
        <p>I lived a life of reaction, not intention. I was moving at the speed of light because I was terrified of what would catch me if I slowed down. When your brain is in survival mode, it switches to a mechanism that disconnects your emotions from your actions so you can just "get through the day." This is known as <em>dissociative coping</em>.</p>
        
        <div className="section-accent"></div>
        
        <h3 className="text-5xl font-black font-serif mb-10 mt-24 text-stone-900 tracking-tighter">The Poverty Trauma</h3>
        
        <p>Growing up, utility was survival. I internalized a dangerous belief: <em>I am only worthy of love if I am useful.</em> This created a "scarcity mindset." My nervous system was stuck in what scientists call the <strong>Sympathetic State</strong>—the "Fight or Flight" mode.</p>
        
        <InsightBox title="Worth Beyond Utility" type="faith">
          "For I know the plans I have for you," declares the Lord. In the kingdom of God, your value is assigned by your Creator, not your productivity. The "Mask" is a human attempt to earn what God has already freely given: unconditional acceptance. Revamping the mind begins by shifting from a 'performance-based' identity to a 'presence-based' identity.
        </InsightBox>

        <FightOrFlightDiagram />
      </div>
    )
  },
  {
    id: 3,
    title: "The Hunger",
    subtitle: "Digital Validation and the Void Within",
    quote: "Social media is a buffet where everyone is hungry but no one is eating.",
    content: (
      <div className="prose lg:prose-xl max-w-none">
        <p>We are the first generation in human history to carry a 24/7 validation machine in our pockets. Every notification is a digital 'tap on the shoulder,' a reminder that we are seen, but not necessarily known. I became a victim of the algorithm before I realized I was its product.</p>
        
        <InsightBox title="The Dopamine Feedback Loop" type="research">
          Neuroimaging studies show that 'likes' and notifications activate the Ventral Striatum, the same part of the brain that responds to slot machines and cocaine. This creates a <strong>Variable Reward Schedule</strong>. Because you don't know when the next 'like' is coming, your brain stays in a state of high-alert craving. This "Hunger" is not emotional; it is a neurological hijacking of your survival circuits.
        </InsightBox>

        <p>The digital age has created a new kind of mirror. We no longer look at ourselves to see who we are; we look at the 'likes' to see if we exist. I became an addict of the 'Red Dot.' My self-worth was directly correlated with my engagement metrics. If a post didn't perform, I felt I had failed as a human being.</p>

        <h3 className="text-5xl font-black font-serif mb-10 mt-24 text-stone-900 tracking-tighter border-l-8 border-amber-500 pl-10">The Ghost in the Screen</h3>
        
        <p>We compare our 'behind the scenes' with everyone else's 'highlight reel.' This creates a neurochemical imbalance known as <em>Social Rank Distress</em>. When your brain perceives others as "winning" more than you, it decreases Serotonin production, leading to feelings of inadequacy and depression.</p>
      </div>
    )
  },
  {
    id: 6,
    title: "The Silence",
    subtitle: "Learning to Hear the Birds Again",
    quote: "You cannot heal in a hurricane.",
    content: (
      <div className="prose lg:prose-xl max-w-none">
        <p>We live in a world that is terrified of silence. We fill every gap with noise—music, podcasts, mindless scrolling—because silence is a mirror. In silence, we have to face the person we have become when the mask is off. For me, the noise was a shield. But you cannot heal in a hurricane.</p>
        
        <InsightBox title="Polyvagal Theory & The Vagus Nerve" type="science">
          The Vagus nerve is the "highway" of the parasympathetic nervous system. It runs from the brainstem to the gut. When we are constantly busy, this nerve is suppressed. Silence and deep breathing literally "tune" the Vagus nerve, moving the body from a <strong>Dorsal Vagal</strong> (shutdown/numb) or <strong>Sympathetic</strong> (fight/flight) state into the <strong>Social Engagement</strong> state. This is where physical healing of cellular inflammation begins.
        </InsightBox>

        <h3 className="text-5xl font-black font-serif mb-10 mt-24 text-stone-900 tracking-tighter border-l-8 border-amber-500 pl-10">The Practice of Stillness</h3>
        
        <p>I was learning to regulate my nervous system. When you live in survival mode, your body is flooded with cortisol. By pausing, I was moving from Stress to Rest. I started with five minutes of intentional silence. No phone. No music. Just the sound of my breath.</p>
        
        <NervousSystemDiagram />

        <InsightBox title="Be Still and Know" type="faith">
          Psalm 46:10 says, "Be still, and know that I am God." The Hebrew word for 'be still' is <em>raphah</em>, which means to 'let go' or 'release.' The revamp of the mind requires a physical release of our grip on control so that we can receive the peace that transcends understanding.
        </InsightBox>
      </div>
    )
  },
  {
    id: 8,
    title: "The Neural Highway",
    subtitle: "Rewiring the Habitual Mind",
    quote: "You don't rise to the level of your goals, you fall to the level of your systems.",
    content: (
      <div className="prose lg:prose-xl max-w-none">
        <p>Your brain is like a dense jungle. If you walk the same path every day, it becomes a wide, clear highway. If you stop walking it, the jungle grows back. This is the physical reality of thought. Most of us are driving down highways of self-sabotage that we didn't even realize we built.</p>
        
        <InsightBox title="Synaptic Pruning & Neuroplasticity" type="science">
          Every thought you have strengthens a synapse. Through <strong>Long-Term Potentiation (LTP)</strong>, the brain makes frequently used paths more efficient. Conversely, <strong>Synaptic Pruning</strong> allows the brain to 'delete' unused connections. When we refuse to engage in negative self-talk, those old neural highways literally begin to wither away from lack of use.
        </InsightBox>

        <h3 className="text-5xl font-black font-serif mb-10 mt-24 text-stone-900 tracking-tighter border-l-8 border-amber-500 pl-10">The Construction Site</h3>
        
        <p>Building a new Teresia was like starting a construction project on a busy road. It was messy. It was slow. It caused traffic jams in my head. But every time I replaced a "I am not enough" with a "I am fearfully and wonderfully made," I was laying a new brick. I was paving a new road.</p>
        
        <div className="bg-stone-50 p-16 rounded-[4rem] border border-stone-200 my-20 shadow-inner">
          <h4 className="text-3xl font-black font-serif mb-8 text-amber-800 italic">The 21-Day Myth vs. The Reality</h4>
          <p className="text-xl leading-relaxed text-stone-600 italic">
            "Research from University College London shows that on average, it takes <strong>66 days</strong> for a new mental habit to become automatic. The 'Revamp' isn't a quick fix; it's a marathon of neural endurance."
          </p>
        </div>
      </div>
    )
  }
];
