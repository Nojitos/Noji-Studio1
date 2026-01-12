
import React from 'react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto reveal-item">
          <h2 className="text-3xl md:text-6xl font-extrabold mb-6 md:mb-8 tracking-tight px-4">
            Un site web n'est pas <br className="hidden md:block"/>
            <span className="text-gray-500">une dépense, c'est un investissement.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-medium px-4">Ne laissez plus des milliers d'euros s'échapper chaque mois à cause d'un site web qui ne convertit pas ses visiteurs.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
          <div className="relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] bg-[#0A0505] border border-red-500/10 group overflow-hidden reveal-item">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500/20" />
            <h3 className="text-2xl md:text-3xl font-black text-red-400/80 mb-8 flex items-center gap-4">
              <span className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-red-500/10 flex items-center justify-center text-base md:text-xl">✕</span>
              L'argent perdu
            </h3>
            <ul className="space-y-6 md:space-y-8">
              {[
                "Visiteurs qui quittent le site sans réserver",
                "Commissions élevées payées aux plateformes",
                "Manque de visibilité sur les recherches locales",
                "Image bas de gamme qui repousse l'élite"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-500 group-hover:text-gray-400 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-900/50 mt-2 shrink-0" />
                  <span className="text-lg md:text-xl font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] bg-[#050A0A] border border-brand-primary/10 group overflow-hidden reveal-item">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary/30" />
            <div className="absolute top-0 right-0 p-8 md:p-12 opacity-5 scale-125 md:scale-150">
               <svg className="w-24 h-24 md:w-32 md:h-32 text-brand-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-brand-primary mb-8 flex items-center gap-4">
              <span className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-brand-primary/10 flex items-center justify-center text-base md:text-xl shadow-[0_0_15px_rgba(0,229,255,0.2)]">✓</span>
              Croissance directe
            </h3>
            <ul className="space-y-6 md:space-y-8">
              {[
                "Plus de réservations directes sans commission",
                "Augmentation immédiate du panier moyen",
                "Acquisition massive de nouveaux clients",
                "Actif stratégique qui travaille 24h/24"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0 shadow-[0_0_8px_#00E5FF]" />
                  <span className="text-lg md:text-xl font-bold tracking-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
