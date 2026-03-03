
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
    id: 2,
    title: "The Weight of Expectations",
    subtitle: "The Invisible Armor We Wear",
    quote: "Armor protects you from the arrow, but it also isolates you from the embrace.",
    content: (
      <div className="prose lg:prose-xl max-w-none">
        <p>When you wear a mask for long enough, the edges begin to merge with your own skin. You forget where the performance ends and the reality begins. The weight of societal, familial, and personal expectations forms an invisible armor that we carry into every room, every relationship, and every quiet moment.</p>
        <p>I learned quickly that perfectionism was the ultimate shield. If I could be flawless, I could be unassailable. No one could criticize me if I never gave them a reason to. But perfectionism is a cruel master, demanding an ever-increasing toll of energy, peace, and authenticity.</p>

        <InsightBox title="The Perfectionism Paradox" type="research">
          Studies on perfectionism reveal a strong correlation between unrelenting standards and severe burnout. Perfectionists often exhibit an overactive Default Mode Network (DMN), a brain system associated with self-referential thoughts and rumination. Instead of resting during downtime, a perfectionist's brain loops endlessly on perceived failures and future anxieties.
        </InsightBox>

        <h3 className="text-5xl font-black font-serif mb-10 mt-24 text-stone-900 tracking-tighter italic border-l-8 border-amber-500 pl-10">Living in the Shadows of 'Should'</h3>

        <p>Our lives are often dictated by the "Shoulds"—I should be married by now, I should have that promotion, I should never show weakness. These invisible rules govern our subconscious, keeping us bounded in a prison of our own making.</p>
        <p>The armor is heavy, and underneath it, the soul begins to suffocate. This is the struggle of the caterpillar: the desperate, exhausting crawl toward a destination defined by everyone else, driven by fear rather than purpose.</p>
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
    id: 4,
    title: "The Pause",
    subtitle: "When the Music Stops",
    quote: "Sometimes the bravest thing you can do is absolutely nothing.",
    content: (
      <div className="prose lg:prose-xl max-w-none">
        <p>The caterpillar does not know it is about to transform; it only feels an overwhelming urge to stop eating, find a quiet branch, and hang upside down. The modern world tells us that stopping is quitting. But sometimes, stopping is the prologue to metamorphosis.</p>
        <p>The "Pause" is terrifying. It is the moment you step off the treadmill of productivity and realize the profound emptiness that awaits in the quiet. When the music stopped for me, the silence was deafening. I was face-to-face with all the emotions I had been running from.</p>

        <InsightBox title="The Default Mode Re-engagement" type="science">
          When we consciously 'pause' and remove external stimuli, the brain slowly shifts out of task-positive networks and re-engages the Default Mode Network in a healthy, integrative way. This shift allows the subconscious mind to process unresolved emotional data—a crucial step for psychological healing.
        </InsightBox>

        <h3 className="text-5xl font-black font-serif mb-10 mt-24 text-stone-900 tracking-tighter italic border-l-8 border-amber-500 pl-10">The Cocoon Phase</h3>

        <p>Entering the cocoon is an act of profound surrender. You trade mobility for vulnerability. You give up the illusion of control to trust a process you cannot yet see. In my life, this meant stepping back from commitments, silencing my notifications, and permitting myself to just "be."</p>
      </div>
    )
  },
  {
    id: 5,
    title: "The Breaking",
    subtitle: "Shattering the Illusion of Control",
    quote: "You have to break before you can be built back stronger.",
    content: (
      <div className="prose lg:prose-xl max-w-none">
        <p>Inside the cocoon, a caterpillar does not simply grow wings. It digests itself. It releases enzymes that dissolve its tissues into a nutrient-rich soup. This is the "Breaking." It is the painful, chaotic disintegration of the old self.</p>
        <p>My breaking point felt like a complete collapse of my identity. Everything I thought I knew about myself, my worth, and my future liquefied. It was the darkest night of my soul. I realized that my mask wasn't just hiding me; it was suffocating me. But to remove it meant to lose the only identity I had ever known.</p>

        <InsightBox title="The Anatomy of Ego Death" type="research">
          Psychological "breaking" often mimics the stages of grief. As the ego structure collapses, the individual experiences anger, denial, and eventually, profound sorrow. However, clinical studies on post-traumatic growth reveal that hitting this psychological 'rock bottom' is often the necessary catalyst for radical structural reorganization of the self.
        </InsightBox>

        <h3 className="text-5xl font-black font-serif mb-10 mt-24 text-stone-900 tracking-tighter border-l-8 border-amber-500 pl-10">Embracing the Void</h3>

        <p>The Breaking requires us to sit in the ruins of our former selves without rushing to rebuild. We must grieve the illusions we held. We must cry for the exhaustion of the caterpillar who thought crawling was all there was.</p>

        <InsightBox title="A Divine Tearing Down" type="faith">
          In Jeremiah 1:10, God says, "See, today I appoint you over nations and kingdoms to uproot and tear down, to destroy and overthrow, to build and to plant." The tearing down is deeply painful, but it is a divine prerequisite for the building. God strips us of our self-reliance so He can reconstruct us on a foundation of grace.
        </InsightBox>
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
    id: 7,
    title: "The Liquefaction",
    subtitle: "The Messy Middle and the Dawn of Rebirth",
    quote: "To become something entirely new, you must be willing to let go of everything you ever were.",
    content: (
      <div className="prose lg:prose-xl max-w-none">
        <p>If you break open a cocoon midway through metamorphosis, you will not find a half-caterpillar, half-butterfly. You will find goo. Utterly unformed, chaotic, formless liquid. This is the messy middle of The Liquefaction, and it is the most crucial, vulnerable phase of the revamp.</p>
        <p>After the breaking and the silence, my mind felt malleable. The old neural pathways were disintegrating, but the new ones hadn't fully formed yet. I felt confused, disjointed, and unsure of my next steps. It is in this exact moment of formlessness that absolute potential is birthed.</p>

        <InsightBox title="The Imaginal Cells" type="science">
          Inside the liquid soup of the cocoon, tiny structures called "Imaginal Cells" begin to form. At first, the caterpillar's immune system attacks them as foreign bodies. But the imaginal cells persist, multiplying and syncing up until they form the blueprint for the butterfly. New thoughts—positive affirmations, grounded beliefs—behave like imaginal cells in our minds, fighting against the old immune responses of negativity until they take over and form a new mindset.
        </InsightBox>

        <h3 className="text-5xl font-black font-serif mb-10 mt-24 text-stone-900 tracking-tighter italic border-l-8 border-amber-500 pl-10">Bridging the Gap</h3>

        <p>The Liquefaction is the bridge. It is the necessary bridge that takes us from the trauma of the "Fight or Flight" response, directly into the physical rewiring of the brain. As my old coping mechanisms melted away, I realized that I now had the incredible opportunity to choose how I would reconstruct my neural architecture.</p>
        <p>This led to the beginning of true cognitive restructuring. To go from goo to a butterfly requires a blueprint, and that blueprint is laid down upon the neural highways of the mind.</p>

        <BrainDiagram />
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
  },
  {
    id: 9,
    title: "The Science of Rest",
    subtitle: "The Cellular Rebirth Through Healing",
    quote: "Rest is not the absence of progress. It is the incubator of power.",
    content: (
      <div className="prose lg:prose-xl max-w-none">
        <p>Once you begin paving new neural highways, an incredible shift occurs in the body. The mind informs the flesh. As I adopted healthier thought patterns, my physical body began a period of deep restorative rest. For the first time in my adult life, I allowed myself to sleep without guilt.</p>

        <InsightBox title="The Glymphatic System" type="research">
          Discovered only recently, the glymphatic system is the brain's waste clearance system. It is most active during deep, slow-wave sleep. During this time, cerebrospinal fluid washes through the brain, clearing away toxic proteins and metabolic waste that accumulate during waking hours. To deprive oneself of rest is to literally suffocate the brain in its own toxins. Taking the pause allows the brain to physically clean and heal itself.
        </InsightBox>

        <h3 className="text-5xl font-black font-serif mb-10 mt-24 text-stone-900 tracking-tighter italic border-l-8 border-amber-500 pl-10">Awakening the Butterfly Frame</h3>

        <p>Rest became my secret weapon. Instead of burning out on endless exertion, I learned that periods of deep rest were where the "imaginal cells" finalized their work. Rest isn't a reward for burning yourself out; it is the fundamental requirement for sustaining flight.</p>
      </div>
    )
  },
  {
    id: 10,
    title: "The Butterfly",
    subtitle: "Emergence from the Depths",
    quote: "To have wings is not just an ability to fly, but the courage to leave the branch.",
    content: (
      <div className="prose lg:prose-xl max-w-none">
        <p>The moment of emergence is delicate. When the butterfly finally breaks open the chrysalis, its wings are wet, crumpled, and frail. It cannot fly immediately. It must hang upside down and pump fluid from its body into the veins of its wings, waiting for them to dry and expand.</p>
        <p>This was what it felt like to step back into the world after my season of quiet. I felt incredibly vulnerable. The armor was gone. The mask was destroyed. I was simply me—raw, authentic, and terrifyingly visible.</p>

        <InsightBox title="The Courage of Vulnerability" type="research">
          Dr. Brené Brown's research defines vulnerability not as weakness, but as our greatest measure of courage. It is the birthplace of innovation, creativity, and change. Breaking the chrysalis means leaning into the discomfort of being seen for who we truly are, which chemically stimulates oxytocin, fostering deep, meaningful human connections.
        </InsightBox>

        <h3 className="text-5xl font-black font-serif mb-10 mt-24 text-stone-900 tracking-tighter border-l-8 border-amber-500 pl-10">Pumping the Wings</h3>

        <p>Before you fly, you must prepare. Every boundary I set, every "no" I offered gracefully, was me pumping fluid into my new wings. I was establishing the structure that would support my authentic life.</p>
      </div>
    )
  },
  {
    id: 11,
    title: "The Flight",
    subtitle: "Resilience: Navigating the Storms",
    quote: "Resilience is not the absence of hardship; it is discovering the strength to keep flying when the winds are ruthless.",
    content: (
      <div className="prose lg:prose-xl max-w-none">
        <p>Taking flight does not guarantee a cloudless sky. When you finally step off the branch, you will encounter storms. There will be days that are incredibly hard, days when the headwinds of life push against you so fiercely that you feel like you are flying backward. But it is in these very storms that resilience is forged.</p>
        <p>Resilience is the quiet voice at the end of a grueling day that whispers, "I will try again tomorrow." It is the profound courage to keep going even when you don't have all the answers. The turbulence is not there to break you; it is there to teach you how to adjust your wings.</p>

        <InsightBox title="The Biology of Resilience" type="science">
          Neuroscience reveals that resilience is a muscle we can build. Experiencing manageable stress and overcoming it thickens the neural pathways between the prefrontal cortex and the amygdala. This means that every time you choose to keep going during a hard day, you are literally rewiring your brain to handle future challenges with greater calm and focus.
        </InsightBox>

        <h3 className="text-5xl font-black font-serif mb-10 mt-24 text-stone-900 tracking-tighter border-l-8 border-amber-500 pl-10">Faith in the Freefall</h3>

        <p>When the days are darkest, resilience must be paired with faith. Faith is the deep, unwavering trust that even when you cannot see the sun behind the clouds, it is still shining. It is the belief that your struggle has a purpose, and that the same God who brought you out of the cocoon will not abandon you in the storm.</p>
      </div>
    )
  },
  {
    id: 12,
    title: "The Legacy",
    subtitle: "Faith and the Promise to Keep Going",
    quote: "Your darkest days were never meant to be your final chapter.",
    content: (
      <div className="prose lg:prose-xl max-w-none">
        <p>We do not endure the breaking, the silence, and the storms simply for our own survival. True transformation turns our deepest pain into our most profound purpose. When you keep going through the hard days, you become a beacon of hope for someone else who is still trapped in their cocoon.</p>

        <InsightBox title="Anchored in Faith" type="faith">
          In Isaiah 40:31, we are promised: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint." Faith is the eternal updraft. It is the spiritual wind beneath your wings that sustains you when your own strength fails.
        </InsightBox>

        <h3 className="text-5xl font-black font-serif mb-10 mt-24 text-stone-900 tracking-tighter border-l-8 border-amber-500 pl-10">The Unfinished Story</h3>

        <p>The journey of faith and resilience is rarely linear. There will still be moments of doubt, days you forget you have wings, and nights when the memory of the mask feels safer than the vastness of the sky. But the transformation is permanent. Once you know how to fly, you can never settle for crawling.</p>
        <p>To anyone reading this who is currently in a season of hardship: Keep going. The storms will pass. Your resilience is building a legacy of strength, and your faith is lighting the way. The skies are vast. It is time to fly.</p>
      </div>
    )
  }
];
