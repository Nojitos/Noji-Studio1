
import React from 'react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto reveal-item">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
            Un site web n'est pas <br/>
            <span className="text-gray-500">une dépense, c'est un investissement.</span>
          </h2>
          <p className="text-gray-400 text-lg font-medium">Ne laissez plus des milliers d'euros s'échapper chaque mois à cause d'un site web qui ne convertit pas ses visiteurs.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Problem Card */}
          <div className="relative p-12 rounded-[3rem] bg-[#0A0505] border border-red-500/10 group overflow-hidden reveal-item">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500/20" />
            <h3 className="text-3xl font-black text-red-400/80 mb-10 flex items-center gap-4">
              <span className="w-10 h-10 rounded-2xl bg-red-500/10 flex items-center justify-center text-xl">✕</span>
              L'argent perdu
            </h3>
            <ul className="space-y-8">
              {[
                "Visiteurs qui quittent le site sans réserver",
                "Commissions élevées payées aux plateformes tierces",
                "Manque de visibilité sur les recherches stratégiques",
                "Une image bas de gamme qui repousse les clients premium"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5 text-gray-500 group-hover:text-gray-400 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-red-900/50 mt-2 shrink-0" />
                  <span className="text-xl font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Card */}
          <div className="relative p-12 rounded-[3rem] bg-[#050A0A] border border-brand-primary/10 group overflow-hidden reveal-item">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary/30" />
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150">
               <svg className="w-32 h-32 text-brand-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <h3 className="text-3xl font-black text-brand-primary mb-10 flex items-center gap-4">
              <span className="w-10 h-10 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(0,229,255,0.2)]">✓</span>
              La machine à conversion
            </h3>
            <ul className="space-y-8">
              {[
                "Plus de réservations directes sans commission",
                "Augmentation du panier moyen via le storytelling",
                "Acquisition massive de nouveaux clients locaux",
                "Site stratégique qui travaille pour vous 24h/24"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5 text-white">
                  <span className="w-2 h-2 rounded-full bg-brand-primary mt-2 shrink-0 shadow-[0_0_8px_#00E5FF]" />
                  <span className="text-xl font-bold tracking-tight">{item}</span>
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
