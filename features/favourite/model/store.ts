import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { FavouriteItem } from "../type/model";
import type { CartItem } from "@/features/cart/type/model";

/**
 * Wishlist store.
 *
 * `addToFavourite` acts as a toggle — calling it with an item that is already
 * in the list removes it, which maps naturally to a heart-button interaction.
 *
 * Persisted to `localStorage` via zustand persist so the wishlist survives
 * a page refresh.
 */
export const useFavouriteStore = create<FavouriteItem>()(
  persist(
    (set, get) => ({
      items: [],

      /** Returns `true` if the item with the given ID is in the wishlist. */
      findItem: (id: string) => get().items.some((i) => i.id === id),

      /** Toggles the item in/out of the wishlist. */
      addToFavourite: (item: CartItem) => {
        const exists = get().items.some((i) => i.id === item.id);

        if (exists) {
          set((state) => ({
            items: state.items.filter((i) => i.id !== item.id),
          }));
        } else {
          set((state) => ({ items: [...state.items, item] }));
        }
      },

      removeFromFavourite: (id: string) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),
    }),
    {
      name: "favourite-storage",
      partialize: (state) => ({ items: state.items }),
    }
  )
);
