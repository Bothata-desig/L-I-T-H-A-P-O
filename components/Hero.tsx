
import React from 'react';

const Hero: React.FC = () => {
  const scrollToCollection = () => {
    const element = document.getElementById('collection');
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
    <div className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center bg-[#F2EFE9]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1974&auto=format&fit=crop" 
          alt="Premium Basotho Wool Fashion" 
          className="w-full h-full object-cover brightness-[0.8]"
        />
        <div className="absolute inset-0 bg-[#2A211B]/25 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 text-center animate-fade-in max-w-4xl px-6">
        <span className="text-white text-[10px] tracking-[0.8em] uppercase mb-10 block font-light opacity-80 italic">Khotso, Pula, Nala</span>
        <h2 className="text-white text-7xl md:text-9xl font-light mb-12 leading-none tracking-tight">
          L I T H A P O
        </h2>
        <p className="text-white/90 text-lg md:text-xl font-serif italic tracking-wide mb-14 opacity-90 max-w-lg mx-auto leading-relaxed">
          High-altitude wool craft from the heart of the Maloti Mountains.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={scrollToCollection}
            className="px-16 py-5 bg-[#FAF9F6] text-[#2A211B] tracking-[0.5em] text-[10px] uppercase hover:bg-[#2A211B] hover:text-white transition-all shadow-xl font-bold"
          >
            Explore Collection
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30">
        <div className="w-[1px] h-16 bg-[#2A211B]"></div>
      </div>
    </div>
  );
};

export default Hero;
