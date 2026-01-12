import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenPortal: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenPortal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleMobileNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
        ? 'bg-[#050505]/60 backdrop-blur-2xl border-b border-white/5 py-3 md:py-4' 
        : 'bg-transparent py-6 md:py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 md:gap-4 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center overflow-hidden group-hover:rotate-12 transition-transform shadow-lg">
              <img src={logoUrl} alt="AI Guild on Campus Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-black tracking-tighter">AI Guild on Campus</h1>
              <p className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-neutral-500 font-bold group-hover:text-orange-500 transition-colors">KIIT CHAPTER</p>
            </div>
          </a>
          
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-6 lg:gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-neutral-500">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="hover:text-white transition-all relative group py-2 px-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10"
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
              Join Society
            </button>
          </div>

          <button 
            className="md:hidden text-white p-2 glass rounded-lg" 
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#050505] flex flex-col p-8 pt-24"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleMobileNavClick(link.href)}
                  className="text-2xl font-black uppercase tracking-widest text-neutral-400 hover:text-orange-500 transition-colors py-4 border-b border-white/5"
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => { setIsMobileMenuOpen(false); onOpenPortal('wiki'); }}
                className="text-2xl font-black uppercase tracking-widest text-neutral-400 hover:text-orange-500 transition-colors py-4 border-b border-white/5"
              >
                WIKI
              </button>
              <button 
                onClick={() => { setIsMobileMenuOpen(false); onOpenPortal('recruitment'); }}
                className="mt-8 px-10 py-6 bg-orange-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-[0_0_40px_rgba(255,111,0,0.3)]"
              >
                Join AI Guild on Campus
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;