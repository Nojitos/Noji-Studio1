
import React from 'react';

const projects = [
  {
    name: "Sakura Ramen",
    type: "Gastronomique Japonais",
    result: "+42% de réservations directes",
    stats: "Site Ultra-Rapide",
    img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=1200",
    url: "https://sakuraramen.lovable.app"
  },
  {
    name: "Fan Wun Ramen",
    type: "Cuisine Asiatique Moderne",
    result: "Commissions Plateformes -60%",
    stats: "ROI Immédiat",
    img: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&q=80&w=800",
    url: "https://id-preview--cbf31c88-2ce7-4391-8512-2417b1887a44.lovable.app"
  },
  {
    name: "The American Good Burger",
    type: "Premium Burger Shop",
    result: "+25% CA via Direct Web",
    stats: "Mobile First Design",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
    url: "https://tagb.framer.website"
  },
  {
    name: "Taichi Ramen",
    type: "Expérience Ramen Traditionnelle",
    result: "SEO Local Dominant",
    stats: "Conversion Elevée",
    img: "https://images.unsplash.com/photo-1557872245-741f4a962abc?auto=format&fit=crop&q=80&w=1200",
    url: "https://id-preview--d5e07fc1-a0f3-4a78-8fa5-216e867e69fd.lovable.app"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projets" className="py-24 relative bg-zinc-950/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal-item">
          <span className="text-brand-primary font-bold tracking-widest text-sm uppercase mb-4 block">Nos Réalisations</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Ils nous font confiance.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Découvrez comment nous avons transformé la présence digitale de restaurateurs exigeants en véritables moteurs de croissance.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <a 
              key={i} 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`group cursor-pointer block reveal-item stagger-${(i % 2) + 1}`}
            >
              <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 border border-white/10 shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:border-brand-primary/30">
                <img src={project.img} alt={project.name} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-3">
                    <div className="px-5 py-2 bg-brand-primary text-black rounded-full text-xs font-black shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                      {project.result}
                    </div>
                    <div className="px-5 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-xs font-bold border border-white/20">
                      {project.stats}
                    </div>
                  </div>
                </div>

                {/* External Link Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
              </div>
              <div className="px-4">
                <h3 className="text-3xl font-bold mb-2 group-hover:text-brand-primary transition-colors">{project.name}</h3>
                <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">{project.type}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
