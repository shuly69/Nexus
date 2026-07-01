import type { CardPhone } from "@/entities/Card/type/model";

export type SortOption = "price-low" | "price-high" | "rating" | "name" | "featured";

/**
 * Returns a new sorted array of phones without mutating the original.
 * Unrecognised `sortBy` values fall through to the default (featured) order.
 */
export function sortProducts(products: CardPhone[], sortBy: SortOption | string): CardPhone[] {
  const sorted = [...products];

  switch (sortBy) {
    case "price-low":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-high":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating":
      return sorted.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    case "name":
      return sorted.sort((a, b) => a.model.localeCompare(b.model));
    default:
      // "featured" — preserve the original catalog order.
      return sorted;
  }
}
