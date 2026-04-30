import { create } from "zustand";
import { CartItem, CartState } from "../type/model";
import { persist } from "zustand/middleware";


export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (item : CartItem) =>
        set((state : CartState) => {
          const exists = state.items.find(
            (i) =>
              i.id === item.id &&
              i.colorId === item.colorId &&
              i.capacity === item.capacity
          );

          if (exists) {
            return {
              items: state.items.map((i) =>
                i === exists ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }

          return { items: [...state.items, item] };
        }),

      removeFromCart: (id: string | number, colorId: string, capacity: string) =>
        set((state : CartState) => ({
          items: state.items.filter(
            (i) =>
              !(i.id === id && i.colorId === colorId && i.capacity === capacity)
          ),
        })),

      increase: (id: string | number, colorId: string, capacity: string) =>
        set((state : CartState) => ({
          items: state.items.map((i) =>
            i.id === id && i.colorId === colorId && i.capacity === capacity
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        })),

      decrease: (id: string | number, colorId: string, capacity: string) =>
        set((state : CartState) => ({
          items: state.items
            .map((i) =>
              i.id === id && i.colorId === colorId && i.capacity === capacity
                ? { ...i, quantity: i.quantity - 1 }
                : i
            )
            .filter((i) => i.quantity > 0),
        })),

      clearCart: () => set({ items: [] }),
    }),

    {
      name: "cart-storage", 
      partialize: (state : any) => ({ items: state.items }), // 
    }
  )
);
