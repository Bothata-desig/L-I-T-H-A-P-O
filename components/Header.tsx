
import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
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
    <nav className="fixed top-0 w-full z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-[#D9C5B2]/30 py-6">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center">
          <div className="hidden md:flex space-x-12">
            <button onClick={() => scrollTo('collection')} className="text-[10px] tracking-[0.4em] font-medium hover:text-[#8C5E45] transition-colors uppercase">Collection</button>
            <button onClick={() => scrollTo('story')} className="text-[10px] tracking-[0.4em] font-medium hover:text-[#8C5E45] transition-colors uppercase">Heritage</button>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-3 mb-1">
               {/* Subtle Mokorotlo Icon */}
               <svg width="20" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#8C5E45] opacity-80">
                 <path d="M12 2L4 14H20L12 2ZM12 4.5L16.5 12H7.5L12 4.5Z" />
                 <rect x="10" y="15" width="4" height="2" rx="0.5" />
                 <path d="M2 18H22V20H2V18Z" />
               </svg>
            </div>
            <h1 className="text-2xl tracking-[0.6em] font-light text-[#2A211B] cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              L I T H A P O
            </h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="p-2 hover:bg-[#D9C5B2]/20 rounded-full transition-colors hidden sm:block">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button className="p-2 hover:bg-[#D9C5B2]/20 rounded-full transition-colors relative">
              <ShoppingBag size={18} strokeWidth={1.5} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-[#FAF9F6] z-50 transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 flex flex-col h-full">
          <button onClick={() => setIsOpen(false)} className="self-end mb-16"><X size={32} strokeWidth={1} /></button>
          <div className="flex flex-col space-y-12">
            <button onClick={() => scrollTo('collection')} className="text-4xl font-serif italic text-left">The Collection</button>
            <button onClick={() => scrollTo('story')} className="text-4xl font-serif italic text-left">Our Heritage</button>
            <div className="pt-12 border-t border-[#D9C5B2]/30 space-y-4">
              <p className="text-[10px] tracking-[0.5em] opacity-40 uppercase">Connect</p>
              <p className="text-sm tracking-widest">@lithapo.couture</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
