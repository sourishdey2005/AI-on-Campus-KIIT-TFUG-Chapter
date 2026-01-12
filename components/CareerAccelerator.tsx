
import React from 'react';

const CareerAccelerator: React.FC = () => {
  const roadmap = [
    { month: 'Month 01', title: 'Neural Onboarding', task: 'Study jams, TF-Core setup, and cohort-wide onboarding sprints.' },
    { month: 'Month 02', title: 'Domain Sprints', task: 'Kickstarting mini-projects within specialized clusters (CV, NLP, RL).' },
    { month: 'Month 03', title: 'Demo Day & Impact', task: '90-Day Hackathon + Live showcase of production-ready systems.' }
  ];

  return (
    <section className="py-32 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Placement Mapping */}
        <div className="grid lg:grid-cols-2 gap-16 mb-40">
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-green-500 font-black mb-6">Outcome Mapping</h2>
            <h3 className="text-5xl font-extrabold tracking-tighter mb-8">Skill-to-Placement</h3>
            <div className="grid gap-4">
              {[
                { skill: 'TensorFlow Core', role: 'ML Engineer' },
                { skill: 'TF Lite / Edge AI', role: 'Edge AI Developer' },
                { skill: 'tf.data / Pipelines', role: 'Data Engineer' },
                { skill: 'Keras / Research Repo', role: 'Research Associate' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-6 glass rounded-2xl border-white/5 hover:border-green-500/20 transition-all">
                  <span className="text-white font-bold tracking-tight">{item.skill}</span>
                  <span className="text-[10px] font-black text-green-500 uppercase tracking-widest glass bg-green-500/10 px-4 py-2 rounded-lg border border-green-500/20">{item.role}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-purple-500 font-black mb-6">Portfolio Engine</h2>
            <h3 className="text-5xl font-extrabold tracking-tighter mb-8">Resume Validation</h3>
            <div className="glass p-10 rounded-[3rem] border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-[60px] rounded-full"></div>
              <div className="flex flex-col gap-6">
                {[
                  { step: '01', title: 'Project Implementation', detail: 'Solving real-world datasets with Keras' },
                  { step: '02', title: 'GitHub Provenance', detail: 'Clean code, documentation, & version history' },
                  { step: '03', title: 'Live Deployment', detail: 'Functional demo via TF.js or mobile APK' },
                  { step: '04', title: 'Interview Talking Points', detail: 'Deep-dive into architecture choices' }
                ].map((s, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-xl glass border border-purple-500/30 flex items-center justify-center shrink-0 font-black text-purple-500 text-xs">{s.step}</div>
                    <div>
                      <h5 className="font-bold text-white text-md mb-1">{s.title}</h5>
                      <p className="text-neutral-500 text-xs leading-relaxed">{s.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Research & Roadmap */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Research Readiness */}
          <div className="lg:col-span-1 glass p-10 rounded-[2.5rem] border-white/5">
            <h4 className="text-2xl font-black mb-6">Research Track</h4>
            <p className="text-neutral-500 text-sm leading-relaxed mb-8">For students pursuing academic excellence and scientific publishing.</p>
            <ul className="space-y-4">
              {['Reading Advanced Papers', 'Reproducing Architectures', 'Writing Technical Reports', 'Internal Peer-Review'].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-bold text-neutral-400 uppercase tracking-tight">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
                  {text}
                </li>
              ))}
            </ul>
            <div className="mt-12 pt-8 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full glass border border-orange-500/30 flex items-center justify-center text-xl">🤝</div>
                <p className="text-[10px] font-black uppercase text-white tracking-widest">Peer Mentorship Model<br/><span className="text-orange-500">Seniors → Juniors</span></p>
              </div>
            </div>
          </div>

          {/* 90-Day Roadmap */}
          <div className="lg:col-span-2 glass p-12 rounded-[3.5rem] border-white/5">
            <h4 className="text-3xl font-black mb-12">First 90-Day Action Plan</h4>
            <div className="space-y-12">
              {roadmap.map((plan, idx) => (
                <div key={idx} className="flex gap-10 items-start group">
                  <div className="shrink-0">
                    <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-1">{plan.month}</p>
                    <div className="w-16 h-[2px] bg-orange-600 group-hover:w-24 transition-all duration-500"></div>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white mb-2">{plan.title}</h5>
                    <p className="text-neutral-500 text-sm leading-relaxed font-medium italic">"{plan.task}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerAccelerator;
