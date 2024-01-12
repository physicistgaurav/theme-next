import { create } from "zustand";
import { getProductsData, getUsersData } from "../api";
import { persist } from "zustand/middleware";
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
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

interface ProductItem {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductsStore {
  data: ProductItem[];
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
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

interface CartItem extends ProductItem {
  count: number;
}

type CartStore = {
  cart: CartItem[];
  isLoading: boolean;
  error: string | null;
  count: number;
  add: (product: CartItem) => void;
  remove: (idProduct: number) => void;
  removeAll: () => void;
};

// persist for localstorage
export const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      cart: [],
      isLoading: false,
      count: 0,
      error: null,
      add: (product: CartItem) => {
        const { cart } = get();
        const updatedCart = updateCart(product, cart);
        set({ cart: updatedCart });
      },
      remove: (idProduct: number) => {
        const { cart } = get();
        const updatedCart = removeCart(idProduct, cart);
        set({ cart: updatedCart });
      },
      removeAll: () => set({ cart: [] }),
    }),
    {
      name: "cart-store",
      getStorage: () => localStorage,
    }
  )
);

function updateCart(product: CartItem, cart: CartItem[]): CartItem[] {
  const productOnCart = cart.some((item) => item.id === product.id);
  if (!productOnCart) {
    return [...cart, { ...product, count: 1 }];
  } else {
    return cart.map((item) =>
      item.id === product.id ? { ...item, count: item.count + 1 } : item
    );
  }
}

function removeCart(idProduct: number, cart: CartItem[]): CartItem[] {
  return cart
    .map((item) => {
      if (item.id === idProduct) return { ...item, count: item.count - 1 };
      return item;
    })
    .filter((item) => {
      return item.count;
    });
}

// minimal
// interface CartStore {
//   data: any[];
//   isLoading: boolean;
//   error: string | null;
//   addToCart: (product: any) => void;
// }

// export const useCartStore = create<CartStore>((set) => ({
//   data: [],
//   isLoading: false,
//   error: null,
//   addToCart: (product) => {
//     console.log("okayyy... here with product", product);
//     set((state) => ({ isLoading: true, data: [...state.data, product] }));
//   },
// }));
