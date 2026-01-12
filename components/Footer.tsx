import React from 'react';

interface FooterProps {
  onOpenPortal: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPortal }) => {
  const logoUrl = "https://res.cloudinary.com/dodhvvewu/image/upload/v1768216173/aiguild_1_1_lrlfk4.png";

  return (
    <footer className="py-20 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden p-1 shadow-lg">
                <img src={logoUrl} alt="AI Guild on Campus Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">AI Guild on Campus</h1>
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">KIIT Chapter</p>
              </div>
            </div>
            <p className="text-neutral-500 text-sm max-w-sm mb-8">
              Official TensorFlow Student Society at KIIT University. Powered by the TensorFlow Community and KIIT Institute of Industrial Technology.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/tensorflow" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-orange-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-orange-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Resources</h5>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><button onClick={() => onOpenPortal('guidelines')} className="hover:text-white transition-colors text-left">TFUG Guidelines</button></li>
              <li><button onClick={() => onOpenPortal('archive')} className="hover:text-white transition-colors text-left">Research Archive</button></li>
              <li><button onClick={() => onOpenPortal('wiki')} className="hover:text-white transition-colors text-left">Campus Wiki</button></li>
              <li><button onClick={() => onOpenPortal('directory')} className="hover:text-white transition-colors text-left">Member Directory</button></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Selection</h5>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><button onClick={() => onOpenPortal('recruitment')} className="hover:text-white transition-colors text-left">Recruitment 2026</button></li>
              <li><button onClick={() => onOpenPortal('process')} className="hover:text-white transition-colors text-left">Interview Process</button></li>
              <li><button onClick={() => onOpenPortal('bylaws')} className="hover:text-white transition-colors text-left">Society Bylaws</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-600 text-[10px] tracking-widest uppercase text-center md:text-left">© 2026 AI Guild on Campus – KIIT Chapter. All intellectual property remains with the Authorized personals</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8 text-[10px] tracking-widest uppercase font-bold">
            <a 
              href="https://www.tfugbbsr.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-orange-600/50 hover:text-orange-500 transition-colors"
            >
              Powered by TensorFlow Community
            </a>
            <a 
              href="https://kiit.ac.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600/50 hover:text-blue-400 transition-colors"
            >
              KIIT University
            </a>
            <a 
              href="https://www.linkedin.com/in/sourish-dey-20b170206/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-400 hover:text-white transition-all duration-300 flex items-center gap-1 group/author"
            >
              Made by <span className="group-hover/author:text-orange-500 transition-colors">Sourish Dey</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;