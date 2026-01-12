import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface HeroProps {
  onOpenPortal?: (view: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenPortal }) => {
  const scrollToArchitecture = () => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });
  const shouldReduceMotion = useReducedMotion();

  // States for mini-animations
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
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
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const logoUrl = "https://res.cloudinary.com/dodhvvewu/image/upload/v1768216173/aiguild_1_1_lrlfk4.png";
  const tensorflowUrl = "https://res.cloudinary.com/dodhvvewu/image/upload/v1768217422/Tensorflow_ddxbsg.jpg";
  const kiitUrl = "https://res.cloudinary.com/dodhvvewu/image/upload/v1768217413/KIIT_c2jkgi.jpg";

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-28 md:pt-32 pb-20 overflow-hidden mesh-bg group">
      {/* Cursor Aware Glow */}
      {!shouldReduceMotion && (
        <motion.div 
          animate={{ x: mousePos.x - 300, y: mousePos.y - 300 }}
          transition={{ type: "spring", damping: 30, stiffness: 100 }}
          className="pointer-events-none absolute w-[600px] h-[600px] bg-orange-600/5 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 hidden md:block"
        />
      )}

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-orange-600/10 blur-[150px] rounded-full animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 -right-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Triple Institutional Branding Logos */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 lg:gap-12 mb-8 md:mb-12">
            {/* KIIT Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-[1.5rem] md:rounded-[2rem] glass border-white/10 overflow-hidden shadow-2xl relative bg-white"
            >
              <img
                src={kiitUrl}
                alt="KIIT University Logo"
                className="w-full h-full object-contain p-2 md:p-4"
              />
            </motion.div>

            {/* AI Guild Logo (Central Focus) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-[2rem] md:rounded-[3rem] glass border-white/10 p-4 overflow-hidden shadow-[0_0_80px_rgba(255,111,0,0.15)] relative bg-white/[0.02] z-20"
            >
              <img
                src={logoUrl}
                alt="AI Guild Logo"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* TensorFlow Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-[1.5rem] md:rounded-[2rem] glass border-white/10 overflow-hidden shadow-2xl relative bg-white"
            >
              <img
                src={tensorflowUrl}
                alt="TensorFlow Official Logo"
                className="w-full h-full object-contain p-2 md:p-4"
              />
            </motion.div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-orange-600/30 text-orange-500 text-[9px] md:text-[10px] font-black mb-6 md:mb-10 uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            Official TensorFlow Student Society
          </div>
          
          <h1 className="text-[clamp(2rem,8vw,5.5rem)] font-extrabold tracking-tighter mb-6 md:mb-8 leading-[1] transition-all duration-700 whitespace-normal max-w-5xl">
            AI Guild on <span className="tf-gradient">Campus</span>
            <span className="text-white/40"> — KIIT Chapter</span> 
          </h1>
          
          <p className="text-base md:text-xl lg:text-2xl text-neutral-400 font-light mb-10 md:mb-16 leading-relaxed max-w-3xl mx-auto px-4">
            Engineering the next epoch of intelligence. <br className="hidden md:block"/>
            Official TFUG Student Chapter providing industry-grade mastery of TensorFlow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full sm:w-auto px-6">
            <motion.button 
              onClick={() => onOpenPortal?.('recruitment')}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 md:px-12 py-5 md:py-6 bg-orange-600/20 backdrop-blur-xl border border-orange-500/40 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-orange-600 hover:shadow-[0_0_50px_rgba(255,111,0,0.4)] transition-all flex items-center justify-center gap-3 md:gap-4 group"
            >
              Join Society
              <svg className="w-4 h-4 md:w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </motion.button>
            <motion.button 
              onClick={scrollToArchitecture}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 md:px-12 py-5 md:py-6 glass border-white/10 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-white/10 hover:border-white/20 transition-all"
            >
              Explore Domains
            </motion.button>
          </div>

          <div className="mt-16 md:mt-28 flex items-center justify-center gap-8 md:gap-24 border-t border-white/5 pt-12 md:pt-16 w-full max-w-4xl overflow-x-auto no-scrollbar scroll-smooth snap-x">
            <div className="group cursor-default shrink-0 text-center snap-center">
              <p className="text-2xl md:text-4xl font-black text-white group-hover:text-orange-500 transition-colors">500+</p>
              <p className="text-[8px] md:text-[10px] text-neutral-500 uppercase tracking-widest mt-2 md:mt-3 font-black">Active Minds</p>
            </div>
            <div className="group cursor-default shrink-0 text-center snap-center">
              <p className="text-2xl md:text-4xl font-black text-white group-hover:text-blue-500 transition-colors">12+</p>
              <p className="text-[8px] md:text-[10px] text-neutral-500 uppercase tracking-widest mt-2 md:mt-3 font-black">Published Papers</p>
            </div>
            <div className="group cursor-default shrink-0 text-center snap-center">
              <p className="text-2xl md:text-4xl font-black text-white group-hover:text-green-500 transition-colors">TFUG</p>
              <p className="text-[8px] md:text-[10px] text-neutral-500 uppercase tracking-widest mt-2 md:mt-3 font-black">Affiliated Hub</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hidden lg:block pointer-events-none">
        <div className="absolute top-[25%] left-[3%] xl:left-[5%] w-[180px] xl:w-[220px] animate-float pointer-events-auto z-20" style={{ animationDelay: '0.2s' }}>
          <motion.div whileHover={{ scale: 1.05 }} className="glass p-5 rounded-[2rem] border-white/5 bg-black/40 shadow-2xl relative overflow-hidden group/card">
             <div className="flex justify-between items-center mb-4">
               <p className="text-[9px] font-black uppercase text-neutral-600 tracking-widest">Loss Logic</p>
               <div className="flex gap-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-red-500 opacity-40"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-40"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-40"></div>
               </div>
             </div>
             <div className="bg-black/40 rounded-xl p-4 border border-white/5 mono text-[9px] leading-relaxed text-orange-500/80 group-hover/card:text-orange-500 transition-colors">
                <code className="block">
                  <span className="text-blue-400">def</span> <span className="text-white">cce_loss</span>(y_true, y_pred):<br/>
                  &nbsp;&nbsp;eps = <span className="text-purple-400">1e-15</span><br/>
                  &nbsp;&nbsp;y_pred = clip(y_pred, eps)<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">return</span> -sum(y_true * log(y_pred))
                </code>
             </div>
             <div className="absolute -right-4 -bottom-4 opacity-5 group-hover/card:opacity-10 transition-opacity">
               <div className="w-16 h-16 border-4 border-white rounded-full"></div>
             </div>
          </motion.div>
        </div>

        <div className="absolute top-[20%] right-[3%] xl:right-[5%] w-[180px] xl:w-[220px] animate-float pointer-events-auto z-10" style={{ animationDelay: '2.8s' }}>
          <motion.div whileHover={{ scale: 1.05 }} className="glass p-5 rounded-[2rem] border-white/10 shadow-2xl bg-gradient-to-br from-blue-500/5 to-transparent">
             <div className="flex items-center gap-3 mb-4 xl:mb-5">
                <div className="w-6 h-6 xl:w-8 xl:h-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-sm">📈</div>
                <div>
                   <p className="text-[8px] xl:text-[9px] font-black text-neutral-500 uppercase tracking-widest">Growth Velocity</p>
                   <p className="text-[10px] xl:text-xs font-bold text-white">mAP Optimization</p>
                </div>
             </div>
             <svg className="w-full h-10 xl:h-12 stroke-blue-500 fill-none" viewBox="0 0 280 48">
                <path d="M0,40 L30,35 L60,42 L90,20 L120,25 L150,10 L180,15 L210,5 L240,12 L280,0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
             </svg>
          </motion.div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Hero;