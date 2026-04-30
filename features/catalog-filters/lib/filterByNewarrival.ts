import { CardPhone } from "@/entities/Card/type/model";

export function filterByNewarrival(products: CardPhone[], days?: number | null) {
    if (!days) return products;
    return products.filter(p => {
  if (!p.createdAt) return false;
     const now = Date.now();
     const created = new Date(p.createdAt).getTime();
     return (now - created) / (1000 * 60 * 60 * 24) <= days
    }
    )
}