import type { CardPhone } from "@/entities/Card/type/model";

/**
 * Finds a product in the catalog by its URL slug.
 * Returns `undefined` if no match is found — callers should handle the
 * not-found case explicitly (e.g. render <PhoneNotFound />).
 */
export const getProductBySlug = (
  slug: string,
  productCatalog: CardPhone[]
): CardPhone | undefined =>
  productCatalog.find((product) => product.slug === slug);
