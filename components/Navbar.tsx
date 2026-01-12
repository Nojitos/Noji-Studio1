
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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
      const offset = scrolled ? 70 : 100;
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
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center ${scrolled ? 'py-2 md:py-4' : 'py-6 md:py-8'}`}>
      <div className={`
        relative flex items-center justify-between w-full transition-all duration-500 px-4
        ${scrolled 
          ? 'max-w-[95%] md:max-w-4xl py-2.5 rounded-full bg-black/60 backdrop-blur-2xl border border-white/10 shadow-2xl' 
          : 'max-w-7xl py-0 bg-transparent border-transparent'
        }
      `}>
        {scrolled && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-brand-primary/40 transition-all duration-300 z-10 rounded-full" style={{ width: `${scrollProgress * 0.8}%` }} />
        )}

        <div 
          className="flex items-center gap-3 group cursor-pointer z-[110]" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <div className="flex flex-col">
            <span className={`font-light tracking-tighter leading-none transition-all duration-500 ${scrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'}`}>
              noji<span className="text-brand-primary">.</span>
            </span>
            {!scrolled && (
              <span className="text-[6px] md:text-[7px] text-gray-500 font-black tracking-[0.3em] uppercase mt-1 opacity-60">
                STUDIO
              </span>
            )}
          </div>
        </div>

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

        <div className="flex items-center gap-3">
          {/* CTA visible uniquement sur Desktop dans la navbar */}
          <a 
            href={AUDIT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              hidden md:block relative transition-all duration-500 overflow-hidden group rounded-full
              ${scrolled ? 'px-6 py-2 text-[9px]' : 'px-8 py-3 text-[10px]'}
              font-black uppercase tracking-widest bg-white text-black active:scale-95
            `}
          >
            Audit Gratuit
          </a>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden z-[110] w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-full bg-white/5 active:bg-white/10 transition-colors"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Menu Mobile Full-Screen */}
      <div className={`fixed inset-0 bg-black/98 backdrop-blur-3xl z-[105] transition-all duration-500 md:hidden ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-10 px-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollToSection(link.href)}
              className="text-4xl font-light tracking-tighter text-white/80 active:text-brand-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <a 
            href={AUDIT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full mt-6 bg-brand-primary text-black px-8 py-5 rounded-full font-black text-center text-xl shadow-[0_20px_40px_rgba(0,229,255,0.25)] active:scale-95 transition-transform"
          >
            Audit Gratuit
          </a>
          
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 text-gray-500 uppercase text-[10px] font-black tracking-widest border-b border-gray-800 pb-1"
          >
            Fermer
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
