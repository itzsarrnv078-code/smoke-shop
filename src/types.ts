export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price?: string;
  isNew?: boolean;
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
