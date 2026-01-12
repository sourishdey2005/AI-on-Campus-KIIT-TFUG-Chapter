
import React from 'react';

const ResearchRigor: React.FC = () => {
  const failures = [
    { model: 'GAN-Visual-2.0', error: 'Mode Collapse during high-res training', fix: 'Transitioned to Diffusion Latent sampling.' },
    { model: 'KIIT-NLP-Agent', error: 'Excessive hallucination on RAG retrieval', fix: 'Hyper-parameter tuning of Cross-Encoder rerankers.' }
  ];

  return (
    <section id="research-rigor" className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Proposal Templates */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-purple-500 font-black mb-8">Engineering Maturity</h2>
            <h3 className="text-5xl font-extrabold tracking-tighter mb-10">Research Rigor</h3>
            <p className="text-neutral-400 text-lg font-light leading-relaxed mb-12">
              We enforce high-tier project submission standards. Every model begins with a technical specification, not just a line of code.
            </p>
            
            <div className="glass p-12 rounded-[3rem] border-white/10 bg-purple-600/[0.01]">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-500 mb-8">Standard Proposal Template</h4>
              <div className="space-y-6">
                {['Problem Statement & Global Context', 'Dataset Origin & Bias Audit', 'Primary Metric (F1, BLEU, mAP)', 'Ethical Boundary Constraints'].map((step, i) => (
                  <div key={i} className="flex gap-4 items-center group">
                    <div className="w-8 h-8 rounded-full glass border-white/10 flex items-center justify-center shrink-0 text-[10px] font-black text-white group-hover:bg-purple-600 group-hover:border-purple-500 transition-all">{i+1}</div>
                    <span className="text-neutral-500 font-medium group-hover:text-white transition-colors">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Failure Wall */}
          <div className="relative">
            <div className="absolute inset-0 bg-orange-600/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="relative glass p-10 rounded-[3.5rem] border-white/5 bg-black/[0.2]">
              <div className="flex items-center gap-4 mb-10">
                <span className="px-4 py-1 rounded-full bg-orange-600/10 text-orange-500 text-[9px] font-black uppercase tracking-widest border border-orange-500/20">Audit Trail</span>
                <h4 className="text-2xl font-black">The Failure Wall</h4>
              </div>
              <p className="text-neutral-500 text-sm italic mb-10 leading-relaxed">
                "Growth is hidden within failed experiments. We document the autopsies of our model errors to ensure collective intelligence."
              </p>
              
              <div className="space-y-6">
                {failures.map((f, i) => (
                  <div key={i} className="glass p-8 rounded-2xl border-white/5 group hover:border-orange-500/20 transition-all">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-white font-bold">{f.model}</span>
                      <span className="text-[8px] font-black text-red-500 uppercase tracking-widest bg-red-500/10 px-3 py-1.5 rounded border border-red-500/20">Critical Failure</span>
                    </div>
                    <div className="grid gap-3">
                       <p className="text-xs text-neutral-400 leading-relaxed"><span className="text-neutral-600 font-black uppercase tracking-tighter mr-2">Issue:</span> {f.error}</p>
                       <p className="text-xs text-green-500 leading-relaxed"><span className="text-neutral-600 font-black uppercase tracking-tighter mr-2">Lesson:</span> {f.fix}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResearchRigor;
