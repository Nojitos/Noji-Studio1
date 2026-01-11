
import React from 'react';

const Footer: React.FC = () => {
  const AUDIT_LINK = "https://tally.so/r/QKRKKl";
  const INSTAGRAM_LINK = "https://www.instagram.com/studionoji/";

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/5 blur-[120px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Final CTA */}
        <div className="text-center mb-24 reveal-item">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
            Chaque service sans site efficace est <br/>
            <span className="text-gray-500 italic">une opportunité perdue.</span>
          </h2>
          <a 
            href={AUDIT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-primary text-black px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-brand-primary/20 active:scale-95"
          >
            Audit Gratuit
          </a>
        </div>

        <div className="border-t border-white/10 pt-12 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex flex-col mb-6 cursor-pointer" onClick={scrollToTop}>
              <span className="text-3xl font-light tracking-tighter leading-none mb-1">
                noji<span className="text-brand-primary">.</span>
              </span>
              <span className="text-[7px] text-gray-500 font-black tracking-[0.3em] uppercase">
                STUDIO
              </span>
            </div>
            <p className="text-gray-500 max-w-xs font-inter leading-relaxed text-sm">
              L'agence d'élite dédiée exclusivement aux restaurateurs qui exigent une croissance stratégique et une présence digitale d'exception.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/40">Expertise</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#services" className="hover:text-brand-primary transition-colors">Stratégie Web</a></li>
              <li><a href="#projets" className="hover:text-brand-primary transition-colors">Résultats Projets</a></li>
              <li><a href="#services" className="hover:text-brand-primary transition-colors">Conversion Mobile</a></li>
              <li><a href="#faq" className="hover:text-brand-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/40">Suivez l'Excellence</h4>
            <div className="flex gap-4">
              <a 
                href={INSTAGRAM_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center cursor-pointer hover:bg-brand-primary hover:text-black transition-all border border-white/5 group shadow-xl"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.063-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058-1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© 2026 Noji Studio - Agence Stratégique Restaurants. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors" onClick={scrollToTop}>Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors" onClick={scrollToTop}>Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
