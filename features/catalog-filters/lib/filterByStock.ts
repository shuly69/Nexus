import { CardPhone } from "@/entities/Card/type/model";

export function filterByStock(products: CardPhone[], stock?: boolean) {
    if (!stock) return products;
    return products.filter(p => p.variants.some(v => v.colors.some(c => c.stock > 0)));
}