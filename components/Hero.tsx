
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [notifications, setNotifications] = useState<{id: number, text: string, sub: string, time: string}[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const data = [
      { id: 1, text: "Nouvelle réservation", sub: "2 personnes — 20h30", time: "À l'instant" },
      { id: 2, text: "Paiement reçu", sub: "Menu Signature — Table 12", time: "2 min" },
      { id: 3, text: "Avis 5 étoiles", sub: "Expérience gastronomique incroyable", time: "5 min" },
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
      const offset = 80; // Correspond à la hauteur de la navbar
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
    <section className="relative pt-64 pb-32 overflow-hidden flex flex-col items-center">
      {/* Background Atmosphere - Animated Beams */}
      <div className="aura-beam opacity-20 left-[30%]" />
      <div className="aura-beam opacity-20 left-[70%]" />
      <div className="aura-glow-primary top-[-15%] left-[-10%] scale-150 opacity-40" />
      <div className="aura-glow-primary top-[30%] right-[-15%] !bg-brand-accent/10 opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full liquid-glass text-brand-primary text-[10px] font-black tracking-widest mb-10 border-brand-primary/20 hover:border-brand-primary/40 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            L'AGENCE DIGITALE DES RESTAURATEURS D'ÉLITE
          </div>
        </div>
        
        {/* Main Headline - Fixed visibility */}
        <div className={`transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.85] text-hero-gradient">
            Plus de réservations. <br />
          </h1>
        </div>
        
        {/* Sub-headline */}
        <div className={`transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
            Nous transformons le site de votre restaurant en un <span className="text-white">actif stratégique</span> conçu pour convertir chaque client et maximiser vos réservations.
          </p>
        </div>
        
        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 transition-all duration-1000 delay-700 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a 
            href={AUDIT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto px-10 py-5 rounded-full font-black text-xl overflow-hidden active:scale-95 transition-all shadow-[0_20px_40px_-10px_rgba(0,229,255,0.3)] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-brand-primary transition-all group-hover:brightness-110" />
            <span className="relative text-black">Audit Gratuit</span>
          </a>
          <a 
            href="#projets" 
            onClick={scrollToProjets}
            className="w-full sm:w-auto liquid-glass text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center border border-white/10"
          >
            Voir nos projets
          </a>
        </div>

        {/* Improved Mockup with actual image content */}
        <div className={`relative mx-auto w-full max-w-2xl mt-12 group transition-all duration-1000 delay-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none animate-pulse-slow" />

          {/* Perspective Container */}
          <div className="relative z-20 mx-auto w-[310px] h-[630px] phone-mockup animate-float transition-transform duration-700 hover:rotate-1 hover:scale-105">
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#1a1a1a] rounded-full z-40 flex items-center justify-end px-4 gap-2 border border-white/5">
                <div className="w-2 h-2 rounded-full bg-zinc-800" />
                <div className="w-3 h-3 rounded-full bg-zinc-900 border border-zinc-700" />
            </div>
            
            {/* Screen Content */}
            <div className="relative w-full h-full overflow-hidden rounded-[32px] bg-[#0A0A0A]">
              <div className="phone-screen-glare" />
              
              <div className="p-0 h-full flex flex-col">
                 {/* Realistic Restaurant Site Preview */}
                 <div className="w-full h-full overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=600" 
                      className="w-full h-full object-cover opacity-80" 
                      alt="Jus d'orange frais" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
                    
                    {/* Floating UI Elements */}
                    <div className="absolute top-16 left-6 right-6">
                      <div className="flex justify-between items-center mb-6">
                        <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                          <div className="w-4 h-[1px] bg-white relative before:absolute before:w-4 before:h-[1px] before:bg-white before:-top-1 after:absolute after:w-4 after:h-[1px] after:bg-white after:top-1" />
                        </div>
                        <div className="text-white font-black text-sm tracking-tighter">RESTAURANT</div>
                        <div className="w-8 h-8 rounded-lg bg-brand-primary/20 backdrop-blur-md border border-brand-primary/30 flex items-center justify-center">
                          <div className="w-3 h-3 border-2 border-brand-primary rounded-sm" />
                        </div>
                      </div>
                      
                      <div className="text-left">
                        <div className="h-1 w-12 bg-brand-primary rounded-full mb-2 shadow-[0_0_10px_#00E5FF]" />
                        <h4 className="text-2xl font-black text-white leading-none mb-1">Dégustez <br/> l'excellence.</h4>
                        <p className="text-[10px] text-gray-300 font-medium">Réservez votre table en 30 secondes.</p>
                      </div>
                    </div>

                    <div className="absolute bottom-40 left-6 right-6">
                      <div className="w-full py-3 bg-brand-primary text-black text-center font-black text-xs rounded-xl shadow-[0_10px_20px_-5px_#00E5FF]">
                        RÉSERVER MAINTENANT
                      </div>
                    </div>

                    {/* Notifications Layer */}
                    <div className="absolute bottom-6 left-4 right-4 flex flex-col gap-2 z-50">
                      {notifications.map((notif, idx) => (
                        <div 
                           key={`${notif.id}-${idx}`} 
                           className="p-3 bg-white/95 rounded-xl text-left shadow-2xl backdrop-blur-md animate-scroll-reveal flex items-center gap-3 border border-white"
                           style={{ 
                             animationDelay: `${idx * 150}ms`,
                             opacity: 1 - (idx * 0.15),
                             transform: `scale(${1 - idx * 0.03})`
                           }}
                        >
                           <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center shrink-0 border border-brand-primary/10">
                              <svg className="w-3.5 h-3.5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                           </div>
                           <div className="flex-1 overflow-hidden">
                             <div className="flex justify-between items-center">
                               <p className="text-black text-[9px] font-black truncate">{notif.text}</p>
                               <span className="text-[7px] text-gray-400 font-bold shrink-0">{notif.time}</span>
                             </div>
                             <p className="text-gray-600 text-[8px] font-medium truncate">{notif.sub}</p>
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
