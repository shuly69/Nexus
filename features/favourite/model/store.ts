import { create } from "zustand";
import { FavouriteItem } from "../type/model";
import { persist } from "zustand/middleware";
import { CartItem } from "@/features/cart/type/model";


export const useFavouriteStore = create(
    persist(
        (set, get) => ({
            items: [],
            findItem: (id: string) => {
                const state = get();
                return state.items.some((i) => i.id === id) ;
            },
            addToFavourite: (item: CartItem) =>
                {
                   const exists = get().items.some((i) => i.id === item.id);

                if (exists) {
                    // удалить
                    set((state: FavouriteItem) => ({
                        items: state.items.filter((i) => i.id !== item.id)
                    }));
                } else {
                    // добавить
                    set((state: FavouriteItem) => ({
                        items: [...state.items, item]
                    }));
                }

                    
            },
            removeFromFavourite: (id: string) =>
                set((state: FavouriteItem) => ({
                    items: state.items.filter((i) => i.id !== id)
                })),
            
        }),
        {
            name: "favourite-storage",
            partialize: (state: FavouriteItem) => ({ items: state.items })
        }
    )
);