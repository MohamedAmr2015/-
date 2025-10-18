
export interface Product {
  id: number;
  name: string;
  description: string;
  pricePerDay: number;
  imageUrl: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export type UserRole = 'customer' | 'merchant' | null;

export type View = 'home' | 'login' | 'categories' | 'products' | 'booking';
