import axios from 'axios';
import { create } from 'zustand';
import { getProductsData, getUsersData } from '../api';

interface UsersStore {
  data: any[]; 
  isLoading: boolean;
  error: string | null;
  getUsers: () => Promise<void>;
}

export const useUsersStore = create<UsersStore>((set) => ({
  data: [],
  isLoading: false,
  error: null,
  getUsers: async () => {
    try {
      set({ isLoading: true }); 
      const response = await getUsersData();
      set({ isLoading: false, data: response });
    } catch (error:any) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

interface ProductsStore {
  data: any[]; 
  isLoading: boolean;
  error: string | null;
  getProducts: () => Promise<void>;
}

export const useProductsStore = create<ProductsStore>((set) => ({
  data: [],
  isLoading: false,
  error: null,
  getProducts: async () => {
    try {
      set({ isLoading: true }); 
      const response = await getProductsData();
      set({ isLoading: false, data: response });
    } catch (error:any) {
      set({ error: error.message, isLoading: false });
    }
  },
}));



