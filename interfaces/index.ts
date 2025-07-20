// interfaces/index.ts

// Simple property data
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  image: string;
  rating: number;
}

// Simple card props
export interface CardProps {
  property: Property;
  onClick?: () => void;
}

// Simple button props  
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}