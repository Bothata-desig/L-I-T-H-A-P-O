
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  color: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export type Category = 'All' | 'Knitwear' | 'Outerwear' | 'Accessories';
