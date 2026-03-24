export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string | string[];
  price?: string;
  isNew?: boolean;
  flavors?: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface BusinessHours {
  day: string;
  hours: string;
}
