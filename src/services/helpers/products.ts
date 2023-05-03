import { Product } from '../api/products';

export const calculateTotalPrice = (products: Product[]): number => {
  return products.reduce((total, product) => total + product.price, 0);
};

export const filterProductsByCategory = (
  products: Product[],
  category: string,
): Product[] => {
  return products.filter((product) => product.category === category);
};

export const sortProductsByPrice = (
  products: Product[],
  ascending = true,
): Product[] => {
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);
  return ascending ? sortedProducts : sortedProducts.reverse();
};
