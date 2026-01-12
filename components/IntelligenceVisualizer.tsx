
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntelligenceVisualizer: React.FC = () => {
  const [latencyRace, setLatencyRace] = useState([40, 60, 25, 90]);
  const [activeStep, setActiveStep] = useState(0);
  const [alertGlow, setAlertGlow] = useState(false);
  const [versions, setVersions] = useState(['v1.0.0', 'v1.1.0', 'v2.0.1']);

  useEffect(() => {
    const timer = setInterval(() => {
      setLatencyRace(prev => prev.map(() => Math.floor(Math.random() * 80) + 20));
      setActiveStep(s => (s + 1) % 5);
      if (Math.random() > 0.8) setAlertGlow(true);
      else setAlertGlow(false);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="intelligence-viz" className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-xs uppercase tracking-[0.4em] text-blue-500 font-black mb-6">Execution & Operations</h2>
          <h3 className="text-5xl md:text-6xl font-extrabold tracking-tighter">Production Intelligence</h3>
          <p className="text-neutral-500 mt-8 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Visualizing the industrial lifecycle of AI. From model training and CI/CD automation to edge-cloud synchronization and real-time inference monitoring.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. Model-to-Device Flow */}
          <div className="glass p-8 rounded-[2.5rem] border-white/5 flex flex-col justify-between h-[320px] group overflow-hidden">
            <div>
              <p className="text-[10px] font-black uppercase text-blue-500 tracking-widest mb-2">Model Propagation</p>
              <h4 className="text-lg font-bold text-white mb-4 tracking-tight">Deployment Flow</h4>
            </div>
            <div className="relative flex justify-between items-center px-4">
              {['☁️', '🌐', '📱', '📡'].map((icon, i) => (
                <div key={i} className="relative z-10 w-10 h-10 rounded-xl glass border-white/10 flex items-center justify-center text-xl bg-black/40">
                  {icon}
                </div>
              ))}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -translate-y-1/2"></div>
              <motion.div 
                animate={{ x: [0, 200, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-4 w-2 h-2 rounded-full bg-blue-500 -translate-y-1/2 shadow-[0_0_10px_#3B82F6]"
              />
            </div>
            <p className="text-[9px] text-neutral-500 font-medium uppercase tracking-tighter mt-4">Cloud → Web → Mobile → Edge</p>
          </div>

          {/* 2. Inference Speed Race */}
          <div className="glass p-8 rounded-[2.5rem] border-white/5 flex flex-col justify-between h-[320px] group">
            <div>
              <p className="text-[10px] font-black uppercase text-orange-500 tracking-widest mb-2">Performance Bench</p>
              <h4 className="text-lg font-bold text-white mb-4 tracking-tight">Inference Latency</h4>
            </div>
            <div className="space-y-4">
              {['TF-Core', 'TF-Lite', 'TF-JS', 'XLA'].map((label, i) => (
                <div key={i}>
                  <div className="flex justify-between text-[8px] font-black text-neutral-600 mb-1">
                    <span>{label}</span>
                    <span>{latencyRace[i]}ms</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ width: `${latencyRace[i]}%` }}
                      className="h-full bg-orange-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. API Call Pulse & Versioning */}
          <div className="glass p-8 rounded-[2.5rem] border-white/5 flex flex-col justify-between h-[320px] group relative overflow-hidden">
            <div>
              <p className="text-[10px] font-black uppercase text-green-500 tracking-widest mb-2">Lifecycle Management</p>
              <h4 className="text-lg font-bold text-white mb-4 tracking-tight">Version Evolution</h4>
            </div>
            <div className="flex flex-col-reverse gap-2">
              {versions.map((v, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={v}
                  className="p-3 glass border-white/10 rounded-xl flex items-center justify-between group-hover:border-green-500/30 transition-all"
                >
                  <span className="text-[10px] font-mono font-bold text-white">{v}</span>
                  <span className="text-[8px] font-black text-green-500 uppercase">Stable</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 4. CI/CD Pipeline */}
          <div className="glass p-8 rounded-[2.5rem] border-white/5 flex flex-col justify-between h-[320px] group">
            <div>
              <p className="text-[10px] font-black uppercase text-purple-500 tracking-widest mb-2">Automated SRE</p>
              <h4 className="text-lg font-bold text-white mb-4 tracking-tight">CI/CD Lifecycle</h4>
            </div>
            <div className="grid grid-cols-5 gap-1 items-center h-20">
              {['CODE', 'BUILD', 'TRAIN', 'TEST', 'PROD'].map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500 ${activeStep === i ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.5)] scale-110' : 'bg-white/5 text-neutral-600'}`}>
                    <div className="w-1 h-1 rounded-full bg-current"></div>
                  </div>
                  <span className="text-[7px] font-black uppercase tracking-tighter text-neutral-500">{step}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[9px] font-black text-neutral-600 uppercase">Pipeline Status: Nominal</span>
            </div>
          </div>

          {/* 5. Auto-Retraining Loop */}
          <div className="glass p-8 rounded-[2.5rem] border-white/5 flex flex-col justify-between h-[320px] group relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div>
              <p className="text-[10px] font-black uppercase text-amber-500 tracking-widest mb-2">Drift Detection</p>
              <h4 className="text-lg font-bold text-white mb-4 tracking-tight">Retraining Loop</h4>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border border-dashed border-white/10 relative flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-t-2 border-amber-500 rounded-full"
                />
                <div className="text-center">
                  <span className="text-[8px] font-black text-amber-500 block">MODEL</span>
                  <span className="text-[10px] font-bold text-white">RE-OPTIM</span>
                </div>
              </div>
            </div>
            <p className="text-[9px] text-neutral-600 font-medium uppercase tracking-tighter text-center">Triggered by Data Drift &lt; 0.95</p>
          </div>

          {/* 6. Monitoring Alert Pulse */}
          <div className={`glass p-8 rounded-[2.5rem] transition-all duration-500 flex flex-col justify-between h-[320px] group ${alertGlow ? 'border-red-500/50 bg-red-500/5' : 'border-white/5'}`}>
            <div>
              <p className="text-[10px] font-black uppercase text-red-500 tracking-widest mb-2">Health Checks</p>
              <h4 className="text-lg font-bold text-white mb-4 tracking-tight">Real-time Metrics</h4>
            </div>
            <div className="h-24 flex items-end gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ height: alertGlow ? [20, 80, 20] : [30, 50, 40] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                  className={`flex-1 rounded-t-sm ${alertGlow ? 'bg-red-500' : 'bg-white/10'}`}
                />
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-[9px] font-black text-neutral-600 uppercase">Latency Threshold</span>
              <span className={`text-[10px] font-bold ${alertGlow ? 'text-red-500 animate-pulse' : 'text-green-500'}`}>
                {alertGlow ? 'ALERT: 504' : 'STATUS: 200'}
              </span>
            </div>
          </div>

          {/* 7. Edge-Cloud Sync */}
          <div className="glass p-8 rounded-[2.5rem] border-white/5 flex flex-col justify-between h-[320px] group">
            <div>
              <p className="text-[10px] font-black uppercase text-cyan-500 tracking-widest mb-2">Federated Ops</p>
              <h4 className="text-lg font-bold text-white mb-4 tracking-tight">Edge-Cloud Sync</h4>
            </div>
            <div className="flex justify-around items-center h-20">
              <div className="w-12 h-12 rounded-2xl glass border-white/10 flex flex-col items-center justify-center">
                <span className="text-[8px] text-neutral-500 mb-1">CLOUD</span>
                <span className="text-xs">☁️</span>
              </div>
              <div className="flex flex-col gap-1">
                <motion.div animate={{ x: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-cyan-500">⇄</motion.div>
              </div>
              <div className="w-12 h-12 rounded-2xl glass border-white/10 flex flex-col items-center justify-center">
                 <span className="text-[8px] text-neutral-500 mb-1">EDGE</span>
                 <span className="text-xs">📱</span>
              </div>
            </div>
            <div className="space-y-2 mt-4">
               <div className="h-1 bg-cyan-500/20 rounded-full overflow-hidden">
                  <motion.div animate={{ width: ['0%', '100%'] }} transition={{ repeat: Infinity, duration: 3 }} className="h-full bg-cyan-500" />
               </div>
               <p className="text-[8px] text-center font-black text-cyan-500 uppercase tracking-widest">Weights Synchronizing...</p>
            </div>
          </div>

          {/* 8. API Call Pulse */}
          <div className="glass p-8 rounded-[2.5rem] border-white/5 flex flex-col justify-between h-[320px] group overflow-hidden">
            <div>
              <p className="text-[10px] font-black uppercase text-indigo-500 tracking-widest mb-2">Backend Hub</p>
              <h4 className="text-lg font-bold text-white mb-4 tracking-tight">API Telemetry</h4>
            </div>
            <div className="relative h-20 flex items-center justify-center">
               <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_20px_#6366f1]"></div>
               {Array.from({ length: 4 }).map((_, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, scale: 0 }}
                   animate={{ opacity: [1, 0], scale: [1, 4] }}
                   transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                   className="absolute w-6 h-6 border border-indigo-500/40 rounded-full"
                 />
               ))}
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
               <div className="p-3 glass border-white/5 rounded-xl text-center">
                  <p className="text-[8px] font-black text-neutral-500 uppercase tracking-widest mb-1">Throughput</p>
                  <p className="text-xs font-bold text-white tracking-tighter">84.2k req/s</p>
               </div>
               <div className="p-3 glass border-white/5 rounded-xl text-center">
                  <p className="text-[8px] font-black text-neutral-500 uppercase tracking-widest mb-1">Success Rate</p>
                  <p className="text-xs font-bold text-green-500 tracking-tighter">99.98%</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntelligenceVisualizer;
