import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface HeroProps {
  onOpenPortal?: (view: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenPortal }) => {
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

  const logoUrl = "https://res.cloudinary.com/dodhvvewu/image/upload/v1768209453/AI_on_campus_1_tjyhw8.jpg";

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden mesh-bg group">
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
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Centralized High-Impact Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2
            }}
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-[3rem] glass border-white/10 p-4 mb-12 overflow-hidden shadow-[0_0_80px_rgba(255,111,0,0.15)] group-hover:shadow-[0_0_120px_rgba(255,111,0,0.25)] transition-all duration-1000 relative bg-white/[0.02]"
          >
            <img
              src={logoUrl}
              alt="AI on Campus Official Logo"
              className="w-full h-full object-contain"
            />
            {/* Gloss Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
          </motion.div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-orange-600/30 text-orange-500 text-[10px] font-black mb-10 uppercase tracking-[0.2em] animate-in fade-in slide-in-from-bottom-2 duration-1000">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            Official TensorFlow Student Society
          </div>
          
          <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold tracking-tighter mb-8 leading-[0.95] transition-all duration-700 whitespace-normal max-w-5xl">
            AI on <span className="tf-gradient">Campus</span>
            <span className="text-white/40"> — KIIT</span> 
          </h1>
          
          <p className="text-lg md:text-2xl text-neutral-400 font-light mb-16 leading-relaxed max-w-3xl mx-auto">
            Engineering the next epoch of intelligence. <br className="hidden md:block"/>
            Official TFUG Student Chapter providing industry-grade mastery of TensorFlow 
            and scalable Machine Learning ecosystems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button 
              onClick={() => onOpenPortal?.('recruitment')}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-orange-600/20 backdrop-blur-xl border border-orange-500/40 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-orange-600 hover:shadow-[0_0_50px_rgba(255,111,0,0.4)] transition-all flex items-center justify-center gap-4 group"
            >
              Join AI on Campus
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </motion.button>
            <motion.button 
              onClick={scrollToArchitecture}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 glass border-white/10 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-white/10 hover:border-white/20 transition-all"
            >
              Explore Domains
            </motion.button>
          </div>

          <div className="mt-28 flex items-center justify-center gap-12 md:gap-24 border-t border-white/5 pt-16 w-full max-w-4xl overflow-x-auto no-scrollbar">
            <div className="group cursor-default shrink-0 text-center">
              <p className="text-3xl md:text-4xl font-black text-white group-hover:text-orange-500 transition-colors">500+</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-3 font-black">Active Minds</p>
            </div>
            <div className="group cursor-default shrink-0 text-center">
              <p className="text-3xl md:text-4xl font-black text-white group-hover:text-blue-500 transition-colors">12+</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-3 font-black">Published Papers</p>
            </div>
            <div className="group cursor-default shrink-0 text-center">
              <p className="text-3xl md:text-4xl font-black text-white group-hover:text-green-500 transition-colors">TFUG</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-3 font-black">Affiliated Hub</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Repositioned Artifacts for Centered Layout */}
      <div className="hidden xl:block pointer-events-none">
        {/* Artifact 1: Confusion Matrix (Left side) */}
        <div className="absolute top-[20%] left-[5%] w-[180px] animate-float pointer-events-auto z-30" style={{ animationDelay: '0.2s' }}>
          <motion.div whileHover={{ scale: 1.05 }} className="glass p-5 rounded-[2rem] border-white/5 bg-black/40 shadow-2xl">
             <p className="text-[9px] font-black uppercase text-neutral-600 tracking-widest mb-4">Confusion Matrix</p>
             <div className="grid grid-cols-3 gap-1.5">
               {Array.from({ length: 9 }).map((_, i) => (
                 <div key={i} className={`h-10 rounded-lg transition-all duration-700 ${activeMatrixCell === i ? 'bg-orange-500 shadow-[0_0_20px_rgba(255,111,0,0.4)] scale-110' : 'bg-white/5'}`}></div>
               ))}
             </div>
          </motion.div>
        </div>

        {/* Artifact 5: Live Sparkline Growth (Right side) */}
        <div className="absolute top-[20%] right-[5%] w-[300px] animate-float pointer-events-auto z-10" style={{ animationDelay: '2.8s' }}>
          <motion.div whileHover={{ scale: 1.05 }} className="glass p-8 rounded-[2.5rem] border-white/10 shadow-2xl bg-gradient-to-br from-blue-500/5 to-transparent">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">📈</div>
                <div>
                   <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Growth Velocity</p>
                   <p className="text-sm font-bold text-white">mAP Optimization</p>
                </div>
             </div>
             <svg className="w-full h-16 stroke-blue-500 fill-none" viewBox="0 0 280 48">
                <path d="M0,40 L30,35 L60,42 L90,20 L120,25 L150,10 L180,15 L210,5 L240,12 L280,0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
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