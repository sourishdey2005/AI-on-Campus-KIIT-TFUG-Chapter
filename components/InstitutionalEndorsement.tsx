import React from 'react';
import { motion } from 'framer-motion';

const InstitutionalEndorsement: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass rounded-[3rem] md:rounded-[4rem] p-10 md:p-24 border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] relative overflow-hidden group">
          
          {/* Subtle Watermark */}
          <div className="absolute -bottom-10 -right-10 text-[8rem] md:text-[12rem] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
            KIIT
          </div>

          <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-center">
            
            {/* Left: Official Quote Marks & Identity */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-600/10 border border-orange-500/20 rounded-2xl md:rounded-3xl flex items-center justify-center mb-8 shadow-2xl group-hover:scale-105 transition-transform duration-700">
                <span className="text-3xl md:text-4xl text-orange-500">“</span>
              </div>
              
              <div className="space-y-4">
                <p className="text-xl md:text-2xl font-black text-white tracking-tight">Office of Faculty In-Charge</p>
                <div className="h-px w-12 bg-orange-500/40 mx-auto lg:mx-0"></div>
                <p className="text-neutral-500 text-[10px] uppercase tracking-[0.4em] font-black leading-relaxed">
                  KIIT School of <br/>Computer Engineering
                </p>
              </div>

              <div className="mt-10 md:mt-12 flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                <div className="flex items-center gap-3 px-4 py-2 md:px-5 md:py-2.5 glass rounded-2xl border-orange-500/30 group/badge transition-all hover:bg-orange-500/5 cursor-default">
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                  <span className="text-[9px] font-black text-orange-500 uppercase tracking-widest">Global Affiliate</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 md:px-5 md:py-2.5 glass rounded-2xl border-blue-500/30 group/badge transition-all hover:bg-blue-500/5 cursor-default">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest">Research Certified</span>
                </div>
              </div>
            </div>

            {/* Right: The Statement */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="relative">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-2xl md:text-4xl lg:text-5xl font-extralight text-neutral-100 italic leading-[1.3] tracking-tight max-w-4xl"
                >
                  "We are bridging the void between <span className="text-white font-normal underline decoration-orange-500/30 underline-offset-8">academic ambition</span> and industrial AI leadership. 
                  <span className="text-white font-normal"> AI Guild on Campus – KIIT Chapter</span> is where theoretical curiosities become <span className="text-orange-500 font-semibold italic">production-grade realities</span>."
                </motion.p>
                
                <div className="mt-10 md:mt-12 flex items-center gap-6 opacity-40">
                   <div className="flex -space-x-4">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#050505] bg-neutral-800"></div>
                      ))}
                   </div>
                   <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-neutral-500">Endorsed by Executive Council</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        {/* Footer Institutional Logos Strip */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-20 hover:opacity-40 transition-opacity grayscale duration-500">
           <span className="text-sm md:text-lg font-black tracking-tighter uppercase">TensorFlow</span>
           <div className="w-px h-6 bg-white/20"></div>
           <span className="text-sm md:text-lg font-black tracking-tighter uppercase">KIIT University</span>
           <div className="w-px h-6 bg-white/20"></div>
           <span className="text-sm md:text-lg font-black tracking-tighter uppercase">TFUG Global</span>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalEndorsement;