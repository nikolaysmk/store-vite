import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3333';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get(API_URL);
    return response.data as Product[];
  },
);

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (product: Product) => {
    const response = await axios.post(API_URL, product);
    return response.data as Product;
  },
);

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (product: Product) => {
    const response = await axios.put(`${API_URL}/${product.id}`, product);
    return response.data as Product;
  },
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (productId: number) => {
    await axios.delete(`${API_URL}/${productId}`);
    return productId;
  },
);
