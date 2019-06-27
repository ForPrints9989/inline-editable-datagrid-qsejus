export interface Sku {
  id: string;
  name: string;
  description: Date;
  quantity: number;
  price: number;
  credits: number;
  pdf: string;

  // Type for dynamic access to specific properties
  [key: string]: any;
}