
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'The Maloti Cardigan',
    price: 4400,
    category: 'Knitwear',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop',
    description: 'Heavy-weight Maloti wool cardigan inspired by traditional Basotho drape.',
    color: 'Sandstone'
  },
  {
    id: '2',
    name: 'Kingdom Overcoat',
    price: 10500,
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=1000&auto=format&fit=crop',
    description: 'Structured wool coat inspired by the iconic Seanamarena blanket silhouette.',
    color: 'Umber'
  },
  {
    id: '3',
    name: 'Loti Ribbed Scarf',
    price: 1550,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1000&auto=format&fit=crop',
    description: 'Extra long mohair-wool blend, reflecting the winding paths of the highlands.',
    color: 'Basotho Blue'
  },
  {
    id: '4',
    name: 'Highland Turtleneck',
    price: 3500,
    category: 'Knitwear',
    image: 'https://images.unsplash.com/photo-1611312449412-6cefac56399e?q=80&w=1000&auto=format&fit=crop',
    description: 'Traditional heavy knit in charcoal, reminiscent of the Maloti winter nights.',
    color: 'Night'
  },
  {
    id: '5',
    name: 'Mokorotlo Beanie',
    price: 980,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1576871337622-983ef323708a?q=80&w=1000&auto=format&fit=crop',
    description: 'Soft cashmere-wool blend with a subtle peaked crown silhouette.',
    color: 'Terracotta'
  },
  {
    id: '6',
    name: 'Thaba Woolen Blazer',
    price: 7600,
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1445205170230-053b830c6039?q=80&w=1000&auto=format&fit=crop',
    description: 'Tailored wool-linen blend for the modern nomad.',
    color: 'Ochre'
  }
];

export const COLORS = {
  linen: '#FAF9F6',
  umber: '#2A211B',
  sand: '#D9C5B2',
  terracotta: '#8C5E45',
  moss: '#5E6146',
  sky: '#4A6FA5'
};
