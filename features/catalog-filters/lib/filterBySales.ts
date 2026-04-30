import { CardPhone } from "@/entities/Card/type/model";

export function filterBySales(products: CardPhone[], filter?: boolean) {
    if (filter === false) return products;
    return products.filter(p => p.oldPrice && p.oldPrice > 0);
}