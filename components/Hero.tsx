
import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToJoin = () => document.getElementById('governance')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToArchitecture = () => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });
  const shouldReduceMotion = useReducedMotion();

  // States for mini-animations
  const [activeMatrixCell, setActiveMatrixCell] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMatrixCell(Math.floor(Math.random() * 9));
    }, 2000);

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden mesh-bg group">
      {/* Cursor Aware Glow */}
      {!shouldReduceMotion && (
        <motion.div 
          animate={{ x: mousePos.x - 300, y: mousePos.y - 300 }}
          transition={{ type: "spring", damping: 30, stiffness: 100 }}
          className="pointer-events-none absolute w-[600px] h-[600px] bg-orange-600/5 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
        />
      )}

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-[1600px] mx-auto px-6 w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:max-w-[60%]"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-orange-600/30 text-orange-500 text-[10px] font-black mb-10 uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            Official TensorFlow Student Society
          </div>
          
          <h1 className="text-[clamp(1.5rem,4.5vw,4.5rem)] font-extrabold tracking-tighter mb-8 leading-[1.1] transition-all duration-700 whitespace-nowrap overflow-hidden">
            AI on <span className="tf-gradient">Campus</span>
            <span className="text-white/40"> — KIIT</span> 
            <span className="text-white/20 italic font-light ml-2">chapter</span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 font-light mb-14 leading-relaxed max-w-2xl">
            Engineering the next epoch of intelligence. <br className="hidden md:block"/>
            Official TFUG Student Chapter providing industry-grade mastery of TensorFlow 
            and scalable Machine Learning ecosystems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <motion.button 
              onClick={scrollToJoin}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-orange-600/20 backdrop-blur-xl border border-orange-500/40 text-white rounded-xl font-bold hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(255,111,0,0.3)] transition-all flex items-center justify-center gap-3 group"
            >
              Join TF LAB
              <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </motion.button>
            <motion.button 
              onClick={scrollToArchitecture}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 glass border-white/10 text-white rounded-xl font-bold hover:bg-white/10 hover:border-white/20 transition-all"
            >
              Explore Domains
            </motion.button>
          </div>

          <div className="mt-24 flex items-center gap-16 border-t border-white/5 pt-14 max-w-2xl">
            <div className="group cursor-default">
              <p className="text-3xl font-bold text-white group-hover:text-orange-500 transition-colors">500+</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-2 font-semibold">Active Minds</p>
            </div>
            <div className="group cursor-default">
              <p className="text-3xl font-bold text-white group-hover:text-blue-500 transition-colors">12+</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-2 font-semibold">Published Papers</p>
            </div>
            <div className="group cursor-default">
              <p className="text-3xl font-bold text-white group-hover:text-green-500 transition-colors">TFUG</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-2 font-semibold">Affiliated Hub</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements Infrastructure */}
      <div className="hidden lg:block absolute right-[2%] top-[10%] bottom-[10%] w-[35%] xl:w-[40%] pointer-events-none">
        
        {/* Artifact 1: Confusion Matrix */}
        <div className="absolute top-[5%] left-[5%] w-[160px] animate-float pointer-events-auto z-30" style={{ animationDelay: '0.2s' }}>
          <motion.div whileHover={{ scale: 1.05 }} className="glass p-4 rounded-2xl border-white/5 bg-black/40 shadow-2xl">
             <p className="text-[8px] font-black uppercase text-neutral-600 tracking-widest mb-3">Confusion Matrix</p>
             <div className="grid grid-cols-3 gap-1">
               {Array.from({ length: 9 }).map((_, i) => (
                 <div key={i} className={`h-8 rounded-sm transition-all duration-700 ${activeMatrixCell === i ? 'bg-orange-500 shadow-[0_0_15px_rgba(255,111,0,0.5)] scale-110' : 'bg-white/5'}`}></div>
               ))}
             </div>
             <div className="mt-3 flex justify-between text-[7px] font-black uppercase text-neutral-700">
               <span>P_01</span>
               <span>P_02</span>
               <span>P_03</span>
             </div>
          </motion.div>
        </div>

        {/* Artifact 2: Main Code Card */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[10%] w-[420px] animate-float pointer-events-auto z-20">
          <motion.div whileHover={{ scale: 1.02 }} className="glass rounded-[2rem] p-8 border-white/10 shadow-2xl backdrop-blur-3xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <div className="w-24 h-24 border-[15px] border-orange-500 rounded-full"></div>
            </div>
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/50"></div>
            </div>
            <pre className="mono text-[11px] leading-relaxed text-blue-300/90">
              <code>{`import tensorflow as tf

@tf.function
class NeuralCore(tf.Module):
  def __init__(self):
    self.dense = tf.keras.layers.Dense(1024)
  
  def __call__(self, x):
    return tf.nn.relu(self.dense(x))

# TF LAB Intelligence Hub
hub = NeuralCore()
print("SYS_READY_0x7F")`}</code>
            </pre>
          </motion.div>
        </div>

        {/* Artifact 3: Data Ingestion Stream */}
        <div className="absolute top-[40%] right-[10%] w-[200px] animate-float pointer-events-auto z-10" style={{ animationDelay: '1.5s' }}>
           <motion.div whileHover={{ scale: 1.05 }} className="glass p-4 rounded-xl border-white/5 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between mb-3">
                 <span className="text-[8px] font-black uppercase text-blue-500 tracking-widest">Ingestion Pipeline</span>
                 <div className="flex gap-1">
                    <span className="w-1 h-1 rounded-full bg-blue-500 animate-ping"></span>
                    <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                 </div>
              </div>
              <div className="h-10 relative bg-white/5 rounded-lg flex items-center overflow-hidden">
                 <div className="absolute inset-0 flex justify-around items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-orange-500 animate-ingest-point" style={{ animationDelay: `${i * 0.4}s` }}></div>
                    ))}
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
              </div>
           </motion.div>
        </div>

        {/* Artifact 5: Live Sparkline Growth */}
        <div className="absolute bottom-[5%] right-[5%] w-[280px] animate-float pointer-events-auto z-10" style={{ animationDelay: '2.8s' }}>
          <motion.div whileHover={{ scale: 1.05 }} className="glass p-6 rounded-3xl border-white/10 shadow-2xl bg-gradient-to-br from-blue-500/5 to-transparent">
             <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 text-xs">📈</div>
                <div>
                   <p className="text-[9px] font-black text-neutral-500 uppercase tracking-widest">Growth Velocity</p>
                   <p className="text-xs font-bold text-white">mAP Optimization</p>
                </div>
             </div>
             <svg className="w-full h-12 stroke-blue-500 fill-none" viewBox="0 0 280 48">
                <path d="M0,40 L30,35 L60,42 L90,20 L120,25 L150,10 L180,15 L210,5 L240,12 L280,0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0,40 L30,35 L60,42 L90,20 L120,25 L150,10 L180,15 L210,5 L240,12 L280,0 L280,48 L0,48 Z" fill="url(#blue-grad)" opacity="0.1" />
                <defs>
                   <linearGradient id="blue-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="transparent" />
                   </linearGradient>
                </defs>
             </svg>
          </motion.div>
        </div>

      </div>

      <style>{`
        @keyframes ingest-point {
          0% { transform: translateX(-50px); opacity: 0; scale: 0.5; }
          20% { opacity: 1; scale: 1; }
          80% { opacity: 1; scale: 1; }
          100% { transform: translateX(250px); opacity: 0; scale: 0.5; }
        }
        .animate-ingest-point {
          animation: ingest-point 2s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
