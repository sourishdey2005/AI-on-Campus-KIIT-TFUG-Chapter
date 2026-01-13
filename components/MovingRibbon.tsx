import React from 'react';
import { motion } from 'framer-motion';

const MovingRibbon: React.FC = () => {
  const items = ['Learn', 'Grow', 'Collaborate'];
  // Duplicate many times to fill width and allow smooth loop
  const listItems = Array(12).fill(items).flat();

  return (
    <div className="w-full bg-[#050505] border-y border-white/5 overflow-hidden py-6 md:py-8 flex items-center relative group">
      {/* Edge Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>

      <motion.div
        animate={{ x: [0, -1920] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        className="flex whitespace-nowrap items-center"
      >
        {listItems.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="text-2xl md:text-4xl font-black uppercase tracking-[0.2em] text-neutral-700 group-hover:text-neutral-500 transition-colors duration-700 mx-12 md:mx-20 cursor-default select-none">
              {item}
            </span>
            {/* Decorative Star Separator */}
            <div className="w-10 h-10 md:w-14 md:h-14 relative flex items-center justify-center">
               <div className="absolute inset-0 bg-white/[0.02] rounded-full scale-150"></div>
               <div className="w-px h-full bg-white/10 absolute rotate-45"></div>
               <div className="w-px h-full bg-white/10 absolute -rotate-45"></div>
               <div className="w-1.5 h-1.5 bg-orange-600 rounded-full shadow-[0_0_15px_#ea580c] z-10"></div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MovingRibbon;