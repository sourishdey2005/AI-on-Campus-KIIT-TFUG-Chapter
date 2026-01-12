
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CommunityTrustVisualizer: React.FC = () => {
  const [heatmap, setHeatmap] = useState<number[]>(new Array(48).fill(0));
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeatmap(prev => prev.map(() => Math.random()));
      setBalance(Math.sin(Date.now() / 1000) * 10);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const worldNodes = [
    { name: 'SF', x: '15%', y: '30%' },
    { name: 'London', x: '45%', y: '25%' },
    { name: 'Tokyo', x: '85%', y: '35%' },
    { name: 'Sydney', x: '90%', y: '80%' },
    { name: 'KIIT', x: '70%', y: '50%', main: true }
  ];

  return (
    <section id="community-trust" className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-xs uppercase tracking-[0.4em] text-orange-500 font-black mb-6">Social & Ethical Framework</h2>
          <h3 className="text-5xl md:text-6xl font-extrabold tracking-tighter">Community Architecture</h3>
          <p className="text-neutral-500 mt-8 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Beyond the code: visualizing our global presence, community contributions, and the ethical scales that balance our innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. Global TFUG Connection Lines */}
          <div className="glass p-8 rounded-[2.5rem] border-white/5 h-[400px] flex flex-col relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-[10px] font-black uppercase text-blue-500 tracking-widest mb-2">Global Synergy</p>
              <h4 className="text-lg font-bold text-white mb-4 tracking-tight">TFUG Network Nodes</h4>
            </div>
            <div className="flex-1 relative bg-white/[0.02] rounded-3xl mt-2 border border-white/5 overflow-hidden">
              {/* Fake Map Background */}
              <div className="absolute inset-0 opacity-10 grayscale invert pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 800 400">
                  <path d="M100,150 Q200,100 300,150 T500,150" fill="none" stroke="white" strokeWidth="1" />
                  <circle cx="150" cy="120" r="2" fill="white" />
                  <circle cx="450" cy="100" r="2" fill="white" />
                </circle>
              </div>
              
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {worldNodes.filter(n => !n.main).map((node, i) => (
                  <motion.path
                    key={i}
                    d={`M 70 50 L ${node.x.replace('%','')} ${node.y.replace('%','')}`}
                    stroke="rgba(59, 130, 246, 0.3)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  />
                ))}
              </svg>

              {/* World Nodes */}
              {worldNodes.map((node, i) => (
                <div 
                  key={i}
                  className={`absolute w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2 ${node.main ? 'bg-orange-500 shadow-[0_0_15px_#FF6F00]' : 'bg-blue-500'}`}
                  style={{ left: node.x, top: node.y }}
                >
                  <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 text-[6px] font-black uppercase tracking-tighter ${node.main ? 'text-orange-500' : 'text-neutral-600'}`}>
                    {node.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Ethical Balance Scale */}
          <div className="glass p-8 rounded-[2.5rem] border-white/5 h-[400px] flex flex-col group overflow-hidden">
            <div>
              <p className="text-[10px] font-black uppercase text-red-500 tracking-widest mb-2">Responsible AI</p>
              <h4 className="text-lg font-bold text-white mb-4 tracking-tight">Governance Balance</h4>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center relative">
              <motion.div 
                animate={{ rotate: balance }}
                className="w-48 h-1 bg-white/10 relative rounded-full"
              >
                <div className="absolute top-0 left-0 w-12 h-12 glass border-white/10 -translate-y-full -translate-x-1/2 rounded-full flex items-center justify-center">
                   <span className="text-[8px] font-black text-red-500 uppercase">Bias</span>
                </div>
                <div className="absolute top-0 right-0 w-12 h-12 glass border-white/10 -translate-y-full translate-x-1/2 rounded-full flex items-center justify-center">
                   <span className="text-[8px] font-black text-green-500 uppercase">Fair</span>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-neutral-800 border border-white/10"></div>
              </motion.div>
              <div className="w-1 h-20 bg-gradient-to-t from-white/5 to-white/10 mt-[-10px]"></div>
              <div className="w-12 h-2 bg-white/5 rounded-full mt-[-2px]"></div>
            </div>
            <p className="text-[9px] text-neutral-500 text-center font-medium uppercase tracking-widest mt-4">Maintaining Equilibrium in Neural Computation</p>
          </div>

          {/* 3. Contribution Heatmap Fill */}
          <div className="glass p-8 rounded-[2.5rem] border-white/5 h-[400px] flex flex-col group overflow-hidden">
            <div>
              <p className="text-[10px] font-black uppercase text-green-500 tracking-widest mb-2">Code Lifecycle</p>
              <h4 className="text-lg font-bold text-white mb-4 tracking-tight">Contribution Density</h4>
            </div>
            <div className="flex-1 grid grid-cols-8 grid-rows-6 gap-2 p-2 bg-black/20 rounded-2xl border border-white/5">
              {heatmap.map((val, i) => (
                <motion.div 
                  key={i}
                  animate={{ 
                    backgroundColor: val > 0.8 ? '#FF6F00' : val > 0.5 ? 'rgba(255, 111, 0, 0.4)' : 'rgba(255, 255, 255, 0.03)' 
                  }}
                  className="rounded-[2px] w-full h-full"
                />
              ))}
            </div>
            <div className="mt-4 flex justify-between items-center text-[7px] font-black uppercase tracking-widest text-neutral-600">
               <span>Mon</span>
               <div className="flex gap-2">
                 <div className="w-2 h-2 bg-white/5 rounded-[1px]"></div>
                 <div className="w-2 h-2 bg-orange-500/40 rounded-[1px]"></div>
                 <div className="w-2 h-2 bg-orange-500 rounded-[1px]"></div>
               </div>
               <span>Sun</span>
            </div>
          </div>

          {/* 4. Member Progress Ladder */}
          <div className="glass p-8 rounded-[2.5rem] border-white/5 h-[400px] flex flex-col group overflow-hidden">
            <div>
              <p className="text-[10px] font-black uppercase text-amber-500 tracking-widest mb-2">Talent Pipeline</p>
              <h4 className="text-lg font-bold text-white mb-4 tracking-tight">Competency Ladder</h4>
            </div>
            <div className="flex-1 flex flex-col justify-between py-4 relative pl-8">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-white/5"></div>
              {['GDE / Researcher', 'Core Contributor', 'Domain POC', 'TF Learner', 'Observer'].map((level, i) => (
                <div key={i} className="flex items-center gap-4 relative">
                  <div className={`w-3 h-3 rounded-full border-2 border-[#050505] z-10 ${i === 2 ? 'bg-orange-500 shadow-[0_0_10px_#FF6F00]' : 'bg-neutral-800'}`}></div>
                  <span className={`text-[9px] font-black uppercase tracking-widest ${i === 2 ? 'text-white' : 'text-neutral-600'}`}>{level}</span>
                </div>
              ))}
              <motion.div 
                animate={{ y: [160, 80, 160] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute left-4 w-6 h-6 glass border-orange-500/30 rounded-full flex items-center justify-center -translate-x-1/2 z-20 bg-orange-600/20"
              >
                <span className="text-[8px]">👤</span>
              </motion.div>
            </div>
          </div>

          {/* 5. Policy Reveal Animation */}
          <div className="glass p-8 rounded-[2.5rem] border-white/5 h-[400px] flex flex-col group overflow-hidden cursor-pointer hover:border-white/20 transition-all">
             <div>
              <p className="text-[10px] font-black uppercase text-indigo-500 tracking-widest mb-2">Trust Framework</p>
              <h4 className="text-lg font-bold text-white mb-4 tracking-tight">Policy Unfolding</h4>
            </div>
            <div className="flex-1 flex items-center justify-center">
               <motion.div 
                 whileHover={{ rotateX: 0, scale: 1.05 }}
                 className="w-40 h-52 glass border-white/10 rounded-sm relative shadow-2xl origin-bottom [transform:rotateX(20deg)]"
               >
                 <div className="absolute inset-0 p-4 flex flex-col gap-2">
                    <div className="w-full h-1 bg-white/10"></div>
                    <div className="w-4/5 h-1 bg-white/10"></div>
                    <div className="w-full h-1 bg-white/10"></div>
                    <div className="w-3/4 h-1 bg-white/10"></div>
                    <div className="mt-auto w-10 h-10 border border-indigo-500/20 rounded-full self-end flex items-center justify-center opacity-20">
                      📜
                    </div>
                 </div>
               </motion.div>
            </div>
            <p className="text-[8px] text-center font-black text-neutral-600 uppercase tracking-widest mt-4">Institutional Bylaws Section 4.2: Data Integrity</p>
          </div>

          {/* 6. Event Timeline Scroll Preview */}
          <div className="glass p-8 rounded-[2.5rem] border-white/5 h-[400px] flex flex-col group overflow-hidden">
            <div>
              <p className="text-[10px] font-black uppercase text-cyan-500 tracking-widest mb-2">Chronology</p>
              <h4 className="text-lg font-bold text-white mb-4 tracking-tight">Active Milestones</h4>
            </div>
            <div className="flex-1 space-y-4 overflow-hidden relative">
              {[
                { date: 'Dec 15', title: 'Winter Intake 2026', color: 'orange' },
                { date: 'Jan 04', title: 'GAN Masterclass', color: 'blue' },
                { date: 'Jan 18', title: 'TF Summit KIIT', color: 'green' },
                { date: 'Feb 10', title: 'Kaggle Sprint 04', color: 'purple' }
              ].map((ev, i) => (
                <motion.div 
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 glass border-white/5 rounded-2xl group-hover:bg-white/[0.02] transition-all"
                >
                  <div className="text-[8px] font-black text-neutral-500 uppercase shrink-0 w-8">{ev.date}</div>
                  <div className={`w-1 h-6 rounded-full bg-${ev.color}-500`}></div>
                  <div className="text-[10px] font-bold text-white tracking-tight">{ev.title}</div>
                </motion.div>
              ))}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#050505] to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommunityTrustVisualizer;
