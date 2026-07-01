import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, CartState } from "../type/model";

/**
 * Global cart store.
 *
 * A cart item is uniquely identified by the combination of (id, colorId, capacity)
 * because the same phone model can exist in multiple configurations — adding a
 * "Space Black 256 GB" and a "Silver 512 GB" should create two separate line items.
 *
 * The `items` array is persisted to `localStorage` via the zustand persist
 * middleware so the cart survives a page refresh.
 */
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      findItem: (id, colorId, capacity) =>
        get().items.find(
          (i) => i.id === id && i.colorId === colorId && i.capacity === capacity
        ),

      addToCart: (item: CartItem) =>
        set((state) => {
          const existing = state.items.find(
            (i) =>
              i.id === item.id &&
              i.colorId === item.colorId &&
              i.capacity === item.capacity
          );

          // Increment quantity if the exact variant is already in the cart.
          if (existing) {
            return {
              items: state.items.map((i) =>
                i === existing ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }

          return { items: [...state.items, item] };
        }),

      removeFromCart: (id, colorId, capacity) =>
        set((state) => ({
          items: state.items.filter(
            (i) =>
              !(i.id === id && i.colorId === colorId && i.capacity === capacity)
          ),
        })),

      increase: (id, colorId, capacity) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id && i.colorId === colorId && i.capacity === capacity
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        })),

      decrease: (id, colorId, capacity) =>
        set((state) => ({
          // Remove the item automatically when quantity reaches zero.
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
      // Only persist `items` — actions are always re-created from the store definition.
      partialize: (state) => ({ items: state.items }),
    }
  )
);
