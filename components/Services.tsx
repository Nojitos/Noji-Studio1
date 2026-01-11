
import React from 'react';

const services = [
  {
    title: "Stratégie de Croissance",
    desc: "Nous ne créons pas juste des sites, nous bâtissons des systèmes d'acquisition clients qui boostent votre chiffre d'affaires.",
    icon: "🎯"
  },
  {
    title: "Site Web Stratégique",
    desc: "Un design qui sublime votre établissement, pensé pour maximiser vos réservations et votre rentabilité.",
    icon: "✨"
  },
  {
    title: "Tunnel de Réservation",
    desc: "Une interface fluide qui guide l'utilisateur de l'émerveillement à la réservation en moins de 3 clics.",
    icon: "⚡"
  },
  {
    title: "Liberté Plateforme",
    desc: "Réduisez votre dépendance à TheFork ou Uber Eats en redirigeant le trafic vers votre propre outil de conversion.",
    icon: "🔌"
  },
  {
    title: "Conversion Mobile Pro",
    desc: "Optimisé pour capturer les réservations de dernière minute là où elles se trouvent : dans la poche de vos clients.",
    icon: "📱"
  },
  {
    title: "SEO Local Rentable",
    desc: "Dominez les résultats de recherche locaux pour être le premier choix quand un client a faim à proximité.",
    icon: "🛠️"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 reveal-item">
          <span className="text-brand-primary font-bold tracking-widest text-sm uppercase mb-4 block">Notre Expertise Stratégique</span>
          <h2 className="text-4xl md:text-5xl font-bold">Un arsenal conçu pour <span className="text-brand-primary">votre rentabilité</span>.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div 
              key={i} 
              className={`group glass-card p-8 rounded-[2rem] hover:bg-white/5 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden reveal-item stagger-${(i % 3) + 1}`}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed font-inter">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
