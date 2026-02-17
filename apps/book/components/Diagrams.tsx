
import React from 'react';

export const FightOrFlightDiagram: React.FC = () => (
  <div className="my-12 p-8 bg-rose-50 rounded-2xl border border-rose-100 shadow-sm">
    <h4 className="text-xl font-bold text-rose-800 text-center mb-6 uppercase tracking-widest">The Fight or Flight Response</h4>
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-rose-500">
          <p className="font-bold text-rose-700">Hypothalamus</p>
          <p className="text-sm">Sends signals to the sympathetic nervous system.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-rose-400">
          <p className="font-bold text-rose-700">Adrenal Medulla</p>
          <p className="text-sm">Releases Norepinephrine and Epinephrine into the blood.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-rose-300">
          <p className="font-bold text-rose-700">Body Impact</p>
          <ul className="text-xs space-y-1 list-disc pl-4 mt-2">
            <li>Pupils Dilate</li>
            <li>Heart Accelerates</li>
            <li>Lungs: Fast Breathing</li>
            <li>Muscles: Tension</li>
            <li>Stomach: Slow Digestion</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <svg viewBox="0 0 200 200" className="w-48 h-48 text-rose-500 fill-current">
          <path d="M100 20C55.8 20 20 55.8 20 100s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 145c-35.9 0-65-29.1-65-65s29.1-65 65-65 65 29.1 65 65-29.1 65-65 65z" />
          <circle cx="100" cy="100" r="40" className="animate-pulse opacity-50" />
        </svg>
      </div>
    </div>
  </div>
);

export const NervousSystemDiagram: React.FC = () => (
  <div className="my-12 p-8 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm">
    <h4 className="text-xl font-bold text-blue-800 text-center mb-8 uppercase tracking-widest">Divisions of the Nervous System</h4>
    <div className="flex flex-col items-center gap-6">
      <div className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-md">Nervous System</div>
      <div className="flex gap-12">
        <div className="flex flex-col items-center">
          <div className="h-8 w-px bg-blue-300"></div>
          <div className="bg-blue-400 text-white px-4 py-2 rounded-lg text-sm">Peripheral</div>
          <div className="h-8 w-px bg-blue-300"></div>
          <div className="bg-blue-200 text-blue-800 px-3 py-1 rounded text-xs">Autonomic</div>
          <div className="flex gap-4 mt-4">
            <div className="bg-rose-200 text-rose-800 p-2 rounded text-[10px] text-center w-24 border border-rose-300">
              <strong>Sympathetic</strong><br />(Stress/Action)
            </div>
            <div className="bg-purple-200 text-purple-800 p-2 rounded text-[10px] text-center w-24 border border-purple-300">
              <strong>Parasympathetic</strong><br />(Rest/Digest)
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-8 w-px bg-blue-300"></div>
          <div className="bg-blue-400 text-white px-4 py-2 rounded-lg text-sm">Central</div>
          <div className="h-8 w-px bg-blue-300"></div>
          <div className="bg-blue-200 text-blue-800 px-3 py-1 rounded text-xs">Brain & Spinal Cord</div>
        </div>
      </div>
    </div>
  </div>
);

export const BrainDiagram: React.FC = () => (
  <div className="my-12 p-8 bg-amber-50 rounded-2xl border border-amber-100 shadow-sm">
    <h4 className="text-xl font-bold text-amber-800 text-center mb-6 uppercase tracking-widest">The Machine of the Mind</h4>
    <div className="flex flex-wrap justify-center gap-4">
      {['Frontal Lobe', 'Cerebrum', 'Cerebellum', 'Brain Stem', 'Hypothalamus', 'Pituitary'].map(lobe => (
        <span key={lobe} className="bg-white border border-amber-300 text-amber-900 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:scale-105 transition-transform cursor-default">
          {lobe}
        </span>
      ))}
    </div>
    <div className="mt-8 text-center text-sm italic text-amber-700">
      "Your RAS (Reticular Activating System) is the bouncer at the club of your brain."
    </div>
  </div>
);
