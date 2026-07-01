import type { CardPhone } from "@/entities/Card/type/model";

/**
 * Filters the phone catalog by a free-text search query.
 *
 * Matches against: model name, brand, storage capacity, and color names.
 * The search is case-insensitive. Returns all phones when `search` is empty.
 */
export function filterBySearch(products: CardPhone[], search?: string): CardPhone[] {
  if (!search) return products;

  const q = search.toLowerCase();

  return products.filter((product) => {
    const matchesModel = product.model.toLowerCase().includes(q);
    const matchesBrand = product.brand.toLowerCase().includes(q);
    const matchesCapacity = product.variants.some((v) =>
      v.capacity.toLowerCase().includes(q)
    );
    const matchesColor = product.variants.some((v) =>
      v.colors.some((c) => c.name.toLowerCase().includes(q))
    );

    return matchesModel || matchesBrand || matchesCapacity || matchesColor;
  });
}
