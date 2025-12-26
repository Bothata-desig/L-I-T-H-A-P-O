
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import { PRODUCTS } from './constants';
import { Category } from './types';
import { ArrowRight, Instagram, Twitter, Facebook, Leaf, Wind, Globe } from 'lucide-react';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />
      
      <main>
        <Hero />

        {/* Brand Marquee */}
        <section className="bg-[#2A211B] py-6 overflow-hidden border-y border-white/5">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-[#D9C5B2] text-[10px] tracking-[0.6em] mx-16 uppercase font-light">
                Maloti Highlands Wool • Seanamarena Heritage • Crafted in Lesotho • Sustainable Mohair • Basotho Craftsmanship
              </span>
            ))}
          </div>
        </section>

        {/* Collection Section */}
        <section id="collection" className="max-w-7xl mx-auto px-8 lg:px-12 py-32 scroll-mt-24">
          <div className="text-center mb-28">
            <span className="text-[#8C5E45] text-[10px] tracking-[0.6em] uppercase mb-6 block font-bold">The Highland Series</span>
            <h2 className="text-5xl md:text-7xl font-light text-[#2A211B]">Highland Threads</h2>
            <div className="w-16 h-[1px] bg-[#2A211B]/20 mx-auto mt-12"></div>
            
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mt-16">
              {(['All', 'Knitwear', 'Outerwear', 'Accessories'] as Category[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[11px] tracking-[0.4em] uppercase transition-all pb-3 border-b-2 font-bold ${
                    activeCategory === cat ? 'text-[#2A211B] border-[#2A211B]' : 'text-[#2A211B]/30 border-transparent hover:text-[#2A211B]/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-32">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Heritage Section - Basotho Specific */}
        <section id="story" className="bg-[#F2EFE9] py-40 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="aspect-[4/5] bg-stone-200 overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                <img 
                  src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Basotho Highland Landscape" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-12">
                <div className="space-y-6">
                  <span className="text-[10px] tracking-[0.6em] text-[#8C5E45] uppercase font-bold">Heirloom Craft</span>
                  <h2 className="text-5xl md:text-7xl font-light leading-tight text-[#2A211B]">Woven in the <br /> <span className="italic font-serif text-[#8C5E45]">Kingdom's Soul</span></h2>
                </div>
                <p className="text-lg text-[#2A211B]/70 font-serif italic leading-relaxed max-w-lg">
                  "At Lithapo, we honor the legacy of the Basotho blanket—the Seanamarena. Every piece is an evolution of our ancestors' warmth, reimagined with the finest Maloti wool for the modern world."
                </p>
                <div className="pt-8">
                  <button className="flex items-center space-x-6 text-[11px] tracking-[0.5em] border-b-2 border-[#2A211B] pb-3 hover:text-[#8C5E45] hover:border-[#8C5E45] transition-all group uppercase font-bold">
                    <span>Explore Our Heritage</span>
                    <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Icons */}
        <section className="py-40 bg-[#FAF9F6]">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              <div className="space-y-6 text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-[#5E6146]/10 text-[#5E6146] mx-auto rounded-full">
                  <Leaf size={32} strokeWidth={1} />
                </div>
                <h3 className="text-xl font-serif italic">Maloti Wool</h3>
                <p className="text-[11px] text-[#2A211B]/50 tracking-widest uppercase leading-loose">Sourced from resilient high-altitude Merino herds.</p>
              </div>
              <div className="space-y-6 text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-[#8C5E45]/10 text-[#8C5E45] mx-auto rounded-full">
                  <Wind size={32} strokeWidth={1} />
                </div>
                <h3 className="text-xl font-serif italic">Artisan Communities</h3>
                <p className="text-[11px] text-[#2A211B]/50 tracking-widest uppercase leading-loose">Preserving the weaving traditions of Highland families.</p>
              </div>
              <div className="space-y-6 text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-[#D9C5B2]/20 text-[#2A211B] mx-auto rounded-full">
                  <Globe size={32} strokeWidth={1} />
                </div>
                <h3 className="text-xl font-serif italic">Sustainable Future</h3>
                <p className="text-[11px] text-[#2A211B]/50 tracking-widest uppercase leading-loose">Committed to ethical production in Lesotho.</p>
              </div>
             </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-[#2A211B] py-40 text-center text-white relative overflow-hidden">
          <div className="max-w-2xl mx-auto px-8 relative z-10">
            <h2 className="text-4xl md:text-6xl font-light mb-10 tracking-tight">The Loti Journal</h2>
            <p className="text-[#D9C5B2]/60 mb-16 tracking-[0.3em] font-light text-sm uppercase">Insights from the Mountain Kingdom.</p>
            <div className="flex flex-col sm:flex-row items-stretch border border-white/20 p-2 focus-within:border-white transition-all">
              <input 
                type="email" 
                placeholder="ADDRESS@EMAIL.COM" 
                className="flex-1 bg-transparent py-5 px-8 focus:outline-none tracking-[0.5em] text-[10px] uppercase text-white"
              />
              <button className="px-12 py-5 bg-[#FAF9F6] text-[#2A211B] tracking-[0.5em] text-[10px] hover:bg-[#8C5E45] hover:text-white transition-all uppercase font-bold">
                Join
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#FAF9F6] py-32 border-t border-[#D9C5B2]/30">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
            <div className="col-span-1 space-y-10">
              <h3 className="text-3xl tracking-[0.6em] font-light text-[#2A211B]">L I T H A P O</h3>
              <p className="text-[#2A211B]/60 text-xs leading-loose tracking-widest uppercase font-medium">
                Woolen craft from the heart of the <br /> Mountain Kingdom.
              </p>
              <div className="flex space-x-8 text-[#2A211B]/40">
                <Instagram size={20} className="hover:text-[#8C5E45] cursor-pointer transition-colors" />
                <Twitter size={20} className="hover:text-[#8C5E45] cursor-pointer transition-colors" />
                <Facebook size={20} className="hover:text-[#8C5E45] cursor-pointer transition-colors" />
              </div>
            </div>
            
            {['Shop', 'Our Story', 'Help'].map((title, i) => (
              <div key={i}>
                <h4 className="text-[11px] tracking-[0.3em] uppercase mb-10 text-[#2A211B]/50 font-bold">{title}</h4>
                <ul className="space-y-5 text-[11px] tracking-widest font-medium text-[#2A211B]/80 uppercase">
                  {i === 0 && (
                    <>
                      <li><a href="#" className="hover:text-[#8C5E45] transition-colors">Maloti Series</a></li>
                      <li><a href="#" className="hover:text-[#8C5E45] transition-colors">Outerwear</a></li>
                      <li><a href="#" className="hover:text-[#8C5E45] transition-colors">Highland Accessories</a></li>
                    </>
                  )}
                  {i === 1 && (
                    <>
                      <li><a href="#" className="hover:text-[#8C5E45] transition-colors">Heritage</a></li>
                      <li><a href="#" className="hover:text-[#8C5E45] transition-colors">Sustainability</a></li>
                      <li><a href="#" className="hover:text-[#8C5E45] transition-colors">Maseru Studio</a></li>
                    </>
                  )}
                  {i === 2 && (
                    <>
                      <li><a href="#" className="hover:text-[#8C5E45] transition-colors">Shipping (LSL)</a></li>
                      <li><a href="#" className="hover:text-[#8C5E45] transition-colors">Returns</a></li>
                      <li><a href="#" className="hover:text-[#8C5E45] transition-colors">Care Guide</a></li>
                    </>
                  )}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-40 pt-10 border-t border-[#D9C5B2]/30 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.4em] text-[#2A211B]/50 uppercase font-medium">
            <p>&copy; 2025 LITHAPO COUTURE. CRAFTED IN LESOTHO.</p>
            <div className="flex space-x-12 mt-6 md:mt-0">
              <a href="#" className="hover:text-[#8C5E45] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#8C5E45] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#8C5E45] transition-colors">Basotho Heritage Fund</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
