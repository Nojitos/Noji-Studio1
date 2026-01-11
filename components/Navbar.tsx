
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projets', href: '#projets' },
    { name: 'Méthode', href: '#method' },
    { name: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const offset = 80; // Account for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const AUDIT_LINK = "https://tally.so/r/QKRKKl";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 flex justify-center ${scrolled ? 'py-4' : 'py-8'}`}>
      {/* Centered Pill Container */}
      <div className={`
        relative flex items-center justify-between w-full transition-all duration-500
        ${scrolled 
          ? 'max-w-4xl mx-4 px-6 py-3 rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
          : 'max-w-7xl mx-auto px-6 py-0 bg-transparent border-transparent'
        }
      `}>
        {/* Scroll Progress Bar (Inside Pill) */}
        {scrolled && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-brand-primary/50 transition-all duration-300 z-10 rounded-full" style={{ width: `${scrollProgress * 0.8}%` }} />
        )}

        {/* Brand/Logo */}
        <div 
          className="flex items-center gap-3 group cursor-pointer z-[110]" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-light tracking-tighter leading-none group-hover:text-brand-primary transition-all duration-500">
              noji<span className="text-brand-primary">.</span>
            </span>
            {!scrolled && (
              <span className="text-[7px] text-gray-500 font-black tracking-[0.3em] uppercase mt-1 opacity-60 group-hover:opacity-100 transition-opacity">
                STUDIO
              </span>
            )}
          </div>
        </div>

        {/* Desktop Navigation Links - Centered in space */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollToSection(link.href)}
              className="group relative text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-300"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="flex items-center gap-4">
          <a 
            href={AUDIT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              hidden sm:block relative transition-all duration-500 overflow-hidden group rounded-full
              ${scrolled ? 'px-6 py-2 text-[9px]' : 'px-8 py-3 text-[10px]'}
              font-black uppercase tracking-widest
            `}
          >
            <div className="absolute inset-0 bg-white group-hover:bg-brand-primary transition-colors duration-500" />
            <span className="relative text-black">Audit Gratuit</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/98 backdrop-blur-3xl z-[105] transition-all duration-500 md:hidden ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollToSection(link.href)}
              className="text-4xl font-light tracking-tighter text-gray-400 hover:text-brand-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <a 
            href={AUDIT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 bg-brand-primary text-black px-12 py-5 rounded-full font-black text-xl shadow-[0_0_50px_rgba(0,229,255,0.4)]"
          >
            Audit Gratuit
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
