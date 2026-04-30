import { CartItem } from "@/features/cart/type/model";

export interface FavouriteItem {
    items: CartItem[];

    addToFavourite: (item: CartItem) => void;

    findItem: (id: string) => boolean;

    removeFromFavourite: (
        id: string,
    ) => void;
}