
import React from 'react';

const steps = [
  {
    title: "Analyse & Immersion",
    desc: "Nous étudions l'âme de votre restaurant, votre carte et les habitudes de vos clients.",
    color: "bg-blue-500"
  },
  {
    title: "Stratégie de Conversion",
    desc: "Architecture UX pensée pour guider le visiteur vers le bouton 'Réserver' sans hésitation.",
    color: "bg-cyan-500"
  },
  {
    title: "Design & Développement",
    desc: "Codage sur-mesure pour une fluidité absolue et une identité visuelle marquante.",
    color: "bg-teal-500"
  },
  {
    title: "Lancement & Suivi",
    desc: "Mise en ligne, formation et monitoring des performances pour garantir le ROI.",
    color: "bg-emerald-500"
  }
];

const Method: React.FC = () => {
  return (
    <section id="method" className="py-24 relative overflow-hidden">
       <div className="aura-beam opacity-10 left-[20%] lg:left-[50%]" />
       
       <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20 text-center lg:text-left reveal-item">
            <h2 className="text-4xl md:text-5xl font-bold">Notre méthode <br/><span className="text-gray-500">en 4 temps.</span></h2>
          </div>

          <div className="relative pl-8 lg:pl-0">
             {/* Desktop Timeline Line */}
             <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 -translate-y-1/2" />
             
             <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
               {steps.map((step, i) => (
                 <div key={i} className={`relative group reveal-item stagger-${i + 1}`}>
                    <div className={`w-12 h-12 ${step.color} rounded-2xl flex items-center justify-center text-black font-bold text-xl mb-8 shadow-[0_0_30px_-5px_rgba(0,0,0,0.5)] z-20 relative group-hover:scale-110 transition-transform`}>
                      {i + 1}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-400 font-inter leading-relaxed">{step.desc}</p>
                 </div>
               ))}
             </div>
          </div>
       </div>
    </section>
  );
};

export default Method;
