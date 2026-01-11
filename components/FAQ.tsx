
import React, { useState } from 'react';

const faqs = [
  {
    q: "Combien de temps faut-il pour créer mon site ?",
    a: "En moyenne, un projet est livré en moins de 6 jours, selon la complexité des intégrations et la rapidité de vos retours."
  },
  {
    q: "Le site est-il compatible avec mon logiciel de réservation ?",
    a: "Oui, nous intégrons nativement tous les outils du marché : Zenchef, TheFork, Guestonline, ou des modules internes sur-mesure."
  },
  {
    q: "Mon site sera-t-il trouvable sur internet ?",
    a: "Absolument. Chaque site est optimisé pour le SEO local afin que vous dominiez les résultats de recherche Google et Maps quand un client cherche un restaurant dans votre zone."
  },
  {
    q: "En quoi consiste l'audit offert ?",
    a: "Il s'agit d'une analyse précise de la conversion du site actuel de votre restaurant. Nous identifions ce qui bloque les réservations, ce qui peut-être améliorer rapidement et nous vous donnons des recommandations concrètes."
  }
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative bg-zinc-950/20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Questions fréquentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                <span className={`transform transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${open === i ? 'max-h-64' : 'max-h-0'}`}>
                <div className="p-6 pt-0 text-gray-400 font-inter leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
