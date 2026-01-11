
import React from 'react';

const Offer: React.FC = () => {
  const AUDIT_LINK = "https://tally.so/r/QKRKKl";

  return (
    <section id="offer" className="py-24 relative bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative p-12 lg:p-16 rounded-[3rem] glass-card overflow-hidden border-brand-primary/30 shadow-[0_0_100px_-20px_rgba(0,229,255,0.15)] group transition-all duration-700 reveal-item">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-50" />
          
          <div className="text-center relative z-10">
            <span className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">Investissement Stratégique</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Système de Croissance <br/>Digital pour Restaurants</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">Un site web stratégique, pensé pour maximiser vos réservations.</p>
            
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-12">
              {[
                "Design stratégique haute conversion",
                "Vitesse éclair & Mobile First",
                "Réservation directe sans commission",
                "SEO de domination locale",
                "Storytelling gastronomique",
                "Tableau de bord ROI en temps réel"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-6">
              <a 
                href={AUDIT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-black px-12 py-5 rounded-full font-bold text-xl hover:bg-brand-primary transition-all shadow-2xl active:scale-95 flex items-center justify-center"
              >
                C'est parti!
              </a>
            </div>
          </div>
          
          {/* Animated Glow behind card */}
          <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full group-hover:bg-brand-primary/20 transition-colors duration-700" />
        </div>
      </div>
    </section>
  );
};

export default Offer;
