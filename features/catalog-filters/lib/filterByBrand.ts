import { CardPhone } from "@/entities/Card/type/model";

export function filterByBrand(products : CardPhone[], filter? : string[]) {
    if (!filter || filter.length === 0) return products;
    return products.filter(p => filter.includes(p.brand));
}