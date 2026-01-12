import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenPortal: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenPortal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ecosystem', href: '#about' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Governance', href: '#governance' }
  ];

  const logoUrl = "https://res.cloudinary.com/dodhvvewu/image/upload/v1768209453/AI_on_campus_1_tjyhw8.jpg";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      scrolled 
      ? 'bg-[#050505]/40 backdrop-blur-2xl border-b border-white/5 py-4' 
      : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-4 group">
          <div className="w-10 h-10 bg-orange-600/20 backdrop-blur-md border border-orange-500/30 rounded-xl flex items-center justify-center overflow-hidden group-hover:rotate-12 transition-transform shadow-lg shadow-orange-600/10">
            <img src={logoUrl} alt="AI on Campus Logo" className="w-full h-full object-cover" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-black tracking-tighter">AI on Campus</h1>
            <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-500 font-bold group-hover:text-orange-500 transition-colors">KIIT CHAPTER</p>
          </div>
        </a>
        
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-neutral-500">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="hover:text-white transition-all relative group py-2 px-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => onOpenPortal('wiki')}
              className="hover:text-white transition-all py-2 px-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10"
            >
              WIKI
            </button>
          </div>
          <button 
            onClick={() => onOpenPortal('recruitment')}
            className="px-6 py-2.5 glass border-white/10 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 hover:border-orange-500 transition-all shadow-xl"
          >
            Join AI on Campus
          </button>
        </div>

        <button className="md:hidden text-white p-2 glass rounded-lg" onClick={() => onOpenPortal('wiki')}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;