
import React, { useState } from 'react';
import { generateMarketingStrategy } from '../services/gemini';
import { StrategyResponse, Language, ContentStrings } from '../types';
import { Sparkles, Loader2, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

interface StrategyToolProps {
  lang: Language;
  t: ContentStrings;
}

const StrategyTool: React.FC<StrategyToolProps> = ({ lang, t }) => {
  const [goal, setGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StrategyResponse | null>(null);

  const handleGenerate = async () => {
    if (!goal.trim()) return;
    setLoading(true);
    const strategy = await generateMarketingStrategy(goal, lang);
    setResult(strategy);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-8 md:p-16 rounded-[3rem] bg-white border border-zinc-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] overflow-hidden relative group">
      {/* Subtle brand glow effects for light mode */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] -ml-40 -mb-40" />

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-5">
            <div className="p-5 bg-orange-50 rounded-2xl border border-orange-100">
              <Sparkles className="w-7 h-7 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tighter mb-1 uppercase">{t.aiTool.title}</h2>
              <p className="text-zinc-500 text-base font-medium">{t.aiTool.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder={t.aiTool.placeholder}
            className="flex-1 bg-zinc-50 border border-zinc-200 rounded-2xl px-8 py-6 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all text-lg font-medium placeholder:text-zinc-400"
          />
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="bg-zinc-900 hover:bg-black text-white font-black px-10 py-6 rounded-2xl transition-all flex items-center justify-center gap-3 whitespace-nowrap shadow-xl active:scale-95 disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Zap className="w-6 h-6" />}
            <span className="text-[11px] uppercase tracking-[0.2em]">{loading ? t.aiTool.loading : t.aiTool.button}</span>
          </button>
        </div>

        {result && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 mt-12 p-8 md:p-14 rounded-[2.5rem] bg-zinc-50 border border-zinc-100">
            <div className="flex items-center gap-4 mb-10">
               <div className="h-px flex-1 bg-zinc-200" />
               <span className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.4em]">Engineered Strategy</span>
               <div className="h-px flex-1 bg-zinc-200" />
            </div>
            
            <h3 className="text-3xl font-black text-orange-600 mb-6 tracking-tight uppercase italic">Target Blueprint</h3>
            <p className="text-xl text-zinc-700 mb-12 leading-relaxed font-normal">{result.overview}</p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {result.steps.map((step, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-zinc-100 hover:border-orange-500/20 transition-all group shadow-sm">
                  <span className="text-[10px] font-black text-purple-600 uppercase tracking-[0.3em] mb-6 block">Phase 0{idx + 1}</span>
                  <h4 className="text-xl font-black text-zinc-900 mb-3 uppercase tracking-tight group-hover:text-orange-600 transition-colors">{step.title}</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed font-medium">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-10 border-t border-zinc-200">
              <h4 className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.4em] mb-8 text-center">Success Indicators</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {result.kpis.map((kpi, idx) => (
                  <span key={idx} className="flex items-center gap-3 px-6 py-3 rounded-full bg-white text-zinc-800 text-[10px] font-black border border-zinc-200 uppercase tracking-widest shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" /> {kpi}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StrategyTool;