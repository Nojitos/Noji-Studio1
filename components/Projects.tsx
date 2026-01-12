
import React from 'react';

const projects = [
  {
    name: "Sakura Ramen",
    type: "Gastronomique Japonais",
    result: "+42% réservations",
    stats: "Site Ultra-Rapide",
    img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=1200",
    url: "https://sakuraramen.lovable.app"
  },
  {
    name: "Fan Wun Ramen",
    type: "Cuisine Asiatique Moderne",
    result: "-60% commissions",
    stats: "ROI Immédiat",
    img: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&q=80&w=800",
    url: "https://fanwuramen.lovable.app"
  },
  {
    name: "The American Good Burger",
    type: "Premium Burger Shop",
    result: "+25% CA Direct",
    stats: "Mobile Design",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
    url: "https://tagb.framer.website"
  },
  {
    name: "Taichi Ramen",
    type: "Expérience Traditionnelle",
    result: "SEO Dominant",
    stats: "Haute Conversion",
    img: "https://www.kikkoman.fr/fileadmin/_processed_/d/2/csm_1107-recipe-page-Mexican-ramen_desktop_0c7ddb8608.jpg",
    url: "https://taichi-ramen-experience.lovable.app"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projets" className="py-20 md:py-24 relative bg-zinc-950/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20 reveal-item">
          <span className="text-brand-primary font-bold tracking-widest text-xs md:text-sm uppercase mb-3 block">Nos Réalisations</span>
          <h2 className="text-3xl md:text-6xl font-extrabold mb-5 px-2">Ils nous font confiance.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-4">Transformer la présence digitale de restaurateurs exigeants en véritables moteurs de croissance.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
          {projects.map((project, i) => (
            <a 
              key={i} 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`group cursor-pointer block reveal-item stagger-${(i % 2) + 1}`}
            >
              <div className="relative aspect-[16/10] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-6 border border-white/10 shadow-2xl transition-all duration-500">
                <img src={project.img} alt={project.name} className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                
                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                  <div className="px-4 py-1.5 bg-brand-primary text-black rounded-full text-[10px] md:text-xs font-black">
                    {project.result}
                  </div>
                  <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white rounded-full text-[10px] md:text-xs font-bold border border-white/10">
                    {project.stats}
                  </div>
                </div>

                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center md:opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-2xl md:text-3xl font-bold mb-1 group-hover:text-brand-primary transition-colors">{project.name}</h3>
                <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[9px] md:text-xs">{project.type}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
