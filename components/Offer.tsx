
import React from 'react';

const Offer: React.FC = () => {
  const AUDIT_LINK = "https://tally.so/r/QKRKKl";

  return (
    <section id="offer" className="py-20 md:py-24 relative bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] glass-card overflow-hidden border-brand-primary/30 shadow-2xl group transition-all duration-700 reveal-item">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-40" />
          
          <div className="text-center relative z-10">
            <span className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full text-[9px] md:text-xs font-black uppercase tracking-widest mb-6">Investissement Stratégique</span>
            <h2 className="text-3xl md:text-6xl font-bold mb-5 md:mb-6 px-2 leading-tight">Système de Croissance <br className="hidden md:block"/>Digital Restaurants</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12 max-w-xl mx-auto px-4">Un site web stratégique, pensé pour maximiser vos réservations directes.</p>
            
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-10 md:mb-12">
              {[
                "Design haute conversion",
                "Vitesse éclair & Mobile First",
                "Réservation sans commission",
                "SEO de domination locale",
                "Storytelling gastronomique",
                "Suivi ROI en temps réel"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-gray-300 font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center">
              <a 
                href={AUDIT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-brand-primary text-black px-12 py-5 rounded-full font-black text-xl shadow-2xl shadow-brand-primary/20 active:scale-95 transition-all"
              >
                C'est parti!
              </a>
            </div>
          </div>
          
          <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full group-hover:bg-brand-primary/15 transition-colors duration-700" />
        </div>
      </div>
    </section>
  );
};

export default Offer;
