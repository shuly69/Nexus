import { CardPhone } from "@/entities/Card/type/model";

export function filterByPrice(products: CardPhone[], filter?: { min: number; max: number; label: string }) {
    if(!filter) return products;
    return products.filter(product =>
      product.price >= filter.min &&
      product.price <= filter.max
    );
}