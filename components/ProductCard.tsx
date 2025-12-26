
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F2EFE9] mb-8 border border-[#D9C5B2]/20">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[#2A211B]/0 group-hover:bg-[#2A211B]/10 transition-colors duration-700"></div>
        <div className="absolute top-4 left-4">
           <span className="bg-[#FAF9F6]/90 backdrop-blur-sm px-3 py-1 text-[8px] tracking-[0.3em] uppercase border border-[#D9C5B2]/40 text-[#2A211B]">
             {product.category}
           </span>
        </div>
      </div>
      <div className="space-y-3 text-center px-4">
        <h3 className="text-2xl font-light tracking-tight text-[#2A211B]">{product.name}</h3>
        <div className="flex items-center justify-center space-x-4">
          <span className="h-[1px] w-4 bg-[#D9C5B2]"></span>
          <p className="text-[10px] tracking-[0.4em] text-[#8C5E45] uppercase font-bold">{product.color}</p>
          <span className="h-[1px] w-4 bg-[#D9C5B2]"></span>
        </div>
        <p className="text-base font-light text-[#2A211B]/60 tracking-widest">LSL {product.price.toLocaleString()}.00</p>
      </div>
    </div>
  );
};

export default ProductCard;
