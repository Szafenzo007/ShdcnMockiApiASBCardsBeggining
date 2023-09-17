// utils/fetchData.ts

import { Product } from '@/types';

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch('https://6504321dc8869921ae24ac07.mockapi.io/products');
    const data = await response.json();
    console.log(data);
    
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
