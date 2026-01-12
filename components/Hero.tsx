
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [notifications, setNotifications] = useState<{id: number, text: string, sub: string, time: string}[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const data = [
      { id: 1, text: "Nouvelle réservation", sub: "2 personnes — 20h30", time: "À l'instant" },
      { id: 2, text: "Paiement reçu", sub: "Menu Signature — Table 12", time: "2 min" },
      { id: 3, text: "Avis 5 étoiles", sub: "Expérience incroyable", time: "5 min" },
      { id: 4, text: "Nouvelle réservation", sub: "4 personnes — 19h15", time: "À l'instant" },
    ];
    
    let i = 0;
    const interval = setInterval(() => {
      setNotifications(prev => [data[i % data.length], ...prev].slice(0, 3));
      i++;
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const AUDIT_LINK = "https://tally.so/r/QKRKKl";

  const scrollToProjets = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#projets');
    if (element) {
      const offset = 80;
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

  return (
    <section className="relative pt-32 md:pt-64 pb-24 md:pb-32 overflow-hidden flex flex-col items-center">
      <div className="aura-beam opacity-10 left-[20%] md:left-[30%]" />
      <div className="aura-beam opacity-10 left-[80%] md:left-[70%]" />
      <div className="aura-glow-primary top-[-5%] left-[-10%] scale-150 opacity-40" />
      <div className="aura-glow-primary top-[30%] right-[-15%] !bg-brand-accent/5 opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 w-full">
        <div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 rounded-full liquid-glass text-brand-primary text-[8px] md:text-[10px] font-black tracking-widest mb-6 md:mb-10 border-brand-primary/20">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            L'AGENCE DIGITALE DES RESTAURATEURS D'ÉLITE
          </div>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 md:mb-8 leading-[0.9] text-hero-gradient">
            Plus de <br className="md:hidden" /> réservations.
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 md:mb-14 leading-relaxed font-medium px-2">
            Nous transformons le site de votre restaurant en un <span className="text-white">actif stratégique</span> conçu pour convertir chaque client et maximiser vos réservations.
          </p>
        </div>
        
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-16 md:mb-24 transition-all duration-1000 delay-700 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a 
            href={AUDIT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto px-10 py-4 md:py-5 rounded-full font-black text-lg md:text-xl overflow-hidden active:scale-95 transition-all shadow-2xl flex items-center justify-center bg-brand-primary text-black"
          >
            Audit Gratuit
          </a>
          <a 
            href="#projets" 
            onClick={scrollToProjets}
            className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white px-10 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl active:scale-95 flex items-center justify-center border border-white/10"
          >
            Voir nos projets
          </a>
        </div>

        <div className={`relative mx-auto w-full max-w-sm md:max-w-2xl mt-4 group transition-all duration-1000 delay-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-20 mx-auto w-[280px] h-[570px] md:w-[310px] md:h-[630px] phone-mockup animate-float transition-transform duration-700">
            <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 w-24 md:w-28 h-6 md:h-7 bg-[#1a1a1a] rounded-full z-40 flex items-center justify-end px-3 md:px-4 gap-2 border border-white/5">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-zinc-800" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-zinc-900 border border-zinc-700" />
            </div>
            
            <div className="relative w-full h-full overflow-hidden rounded-[32px] bg-[#0A0A0A]">
              <div className="phone-screen-glare" />
              <div className="p-0 h-full flex flex-col">
                 <div className="w-full h-full overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=600" 
                      className="w-full h-full object-cover opacity-70" 
                      alt="Restaurant Interface" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
                    
                    <div className="absolute top-14 md:top-16 left-5 md:left-6 right-5 md:right-6">
                      <div className="flex justify-between items-center mb-5 md:mb-6">
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                          <div className="w-3.5 h-[1px] bg-white relative before:absolute before:w-3.5 before:h-[1px] before:bg-white before:-top-1 after:absolute after:w-3.5 after:h-[1px] after:bg-white after:top-1" />
                        </div>
                        <div className="text-white font-black text-[10px] md:text-sm tracking-tighter uppercase">Sakura Ramen</div>
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-brand-primary/20 backdrop-blur-md border border-brand-primary/30 flex items-center justify-center">
                          <div className="w-2.5 h-2.5 border-2 border-brand-primary rounded-sm" />
                        </div>
                      </div>
                      
                      <div className="text-left">
                        <div className="h-1 w-10 md:w-12 bg-brand-primary rounded-full mb-2 shadow-[0_0_10px_#00E5FF]" />
                        <h4 className="text-xl md:text-2xl font-black text-white leading-[1.1] mb-1">Dégustez <br/> l'excellence.</h4>
                        <p className="text-[9px] md:text-[10px] text-gray-300 font-medium">En quelques secondes.</p>
                      </div>
                    </div>

                    <div className="absolute bottom-40 md:bottom-40 left-5 md:left-6 right-5 md:right-6">
                      <div className="w-full py-2.5 md:py-3 bg-brand-primary text-black text-center font-black text-[10px] md:text-xs rounded-xl">
                        RÉSERVER UNE TABLE
                      </div>
                    </div>

                    <div className="absolute bottom-5 left-3 right-3 flex flex-col gap-1.5 z-50">
                      {notifications.map((notif, idx) => (
                        <div 
                           key={`${notif.id}-${idx}`} 
                           className="p-2.5 md:p-3 bg-white/95 rounded-xl text-left shadow-2xl backdrop-blur-md flex items-center gap-2.5 border border-white"
                           style={{ 
                             opacity: 1 - (idx * 0.2),
                             transform: `scale(${1 - idx * 0.04})`
                           }}
                        >
                           <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center shrink-0 border border-brand-primary/10">
                              <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                           </div>
                           <div className="flex-1 overflow-hidden">
                             <div className="flex justify-between items-center">
                               <p className="text-black text-[8px] md:text-[9px] font-black truncate">{notif.text}</p>
                               <span className="text-[6px] md:text-[7px] text-gray-400 font-bold shrink-0">{notif.time}</span>
                             </div>
                             <p className="text-gray-600 text-[7px] md:text-[8px] font-medium truncate">{notif.sub}</p>
                           </div>
                        </div>
                      ))}
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
