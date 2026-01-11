
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import Projects from './components/Projects';
import Method from './components/Method';
import Offer from './components/Offer';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.reveal-item');
    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen font-sans selection:bg-brand-primary selection:text-black">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-50" />
        <div className="aura-glow-primary top-[10%] left-[5%] animate-pulse-slow" />
        <div className="aura-glow-primary bottom-[10%] right-[5%] !bg-brand-accent/5" />
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        <div className="space-y-32">
          <ProblemSolution />
          <Services />
          <Projects />
          <Method />
          <Offer />
          <FAQ />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
