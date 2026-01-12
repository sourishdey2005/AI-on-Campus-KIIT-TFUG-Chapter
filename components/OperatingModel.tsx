import React from 'react';
import { motion } from 'framer-motion';

const OperatingModel: React.FC = () => {
  const steps = [
    { id: '01', title: 'Learn', desc: 'Advanced Architecture Analysis' },
    { id: '02', title: 'Practice', desc: 'Model Implementation' },
    { id: '03', title: 'Build', desc: 'End-to-End Systems' },
    { id: '04', title: 'Review', desc: 'Peer-Driven Auditing' },
    { id: '05', title: 'Deploy', desc: 'Production-Ready Scaling' },
    { id: '06', title: 'Showcase', desc: 'Global Demo/Publishing' }
  ];

  const journeyStages = [
    { stage: 'Observer', icon: '🔭', role: 'Audit sessions & explore ecosystem' },
    { stage: 'Learner', icon: '🧠', role: 'Mastering Keras & TF-Core basics' },
    { stage: 'Contributor', icon: '⚡', role: 'Active PRs to lab-repositories' },
    { stage: 'Project Lead', icon: '💎', role: 'Orchestrating domain clusters' },
    { stage: 'Mentor', icon: '👑', role: 'Guiding the next neural-cohort' }
  ];

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Operating Cycle */}
        <div className="mb-32">
          <div className="max-w-xl mb-16">
            <h2 className="text-xs uppercase tracking-[0.4em] text-orange-500 font-black mb-6">Operating Model</h2>
            <h3 className="text-5xl font-extrabold tracking-tighter">How AI on Campus – KIIT TFUG Functions</h3>
            <p className="text-neutral-500 mt-6 leading-relaxed text-lg font-light">
              We move in a high-fidelity 6-step cycle designed to convert raw talent into industry-standard practitioners.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="glass p-8 rounded-3xl border-white/5 hover:border-orange-500/30 transition-all group">
                <span className="text-xs font-black text-orange-600 mb-4 block group-hover:translate-x-1 transition-transform">{step.id}</span>
                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                <p className="text-neutral-600 text-[10px] uppercase font-bold tracking-widest">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Member Journey */}
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-blue-500 font-black mb-8">Evolution Path</h2>
            <h3 className="text-5xl font-extrabold tracking-tighter mb-10">The Member Journey</h3>
            <div className="space-y-6">
              {journeyStages.map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-xl glass border-white/5 flex items-center justify-center group-hover:bg-blue-600/20 group-hover:border-blue-500/40 transition-all shrink-0">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div className="pb-6 border-b border-white/5 w-full">
                    <h5 className="text-lg font-bold text-white mb-1">{item.stage}</h5>
                    <p className="text-neutral-500 text-sm font-medium">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Theory to Practice Bridge */}
          <div className="glass p-12 rounded-[3.5rem] border-white/5">
            <h4 className="text-3xl font-black mb-8 flex items-center gap-4">
              <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
              The Intelligence Bridge
            </h4>
            <p className="text-neutral-400 font-light leading-relaxed mb-10">
              Theoretical foundations are worthless without deployment-readiness. We bridge the gap through rigorous execution.
            </p>
            <div className="space-y-4">
              {[
                { from: 'CNN Lecture', to: 'Live Visual Perception App' },
                { from: 'Transformer Math', to: 'Fine-Tuned LLM Agent' },
                { from: 'Backprop Logic', to: 'Custom Gradient Tunnels' },
                { from: 'Latency Theory', to: 'Quantized Edge Deployment' }
              ].map((bridge, i) => (
                <div key={i} className="flex items-center justify-between p-5 rounded-2xl glass border-white/5 hover:border-blue-500/20 transition-all">
                  <span className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">{bridge.from}</span>
                  <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  <span className="text-white text-xs font-bold uppercase tracking-tight">{bridge.to}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperatingModel;