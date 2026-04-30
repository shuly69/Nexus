// features/catalog-filters/model/useFilteredProducts.ts
import { CardPhone } from "@/entities/Card/type/model";
import { useMemo } from "react";
import { sortProducts } from "../lib/sortProducts";
import { filterByBrand } from "../lib/filterByBrand";
import { filter } from "motion/react-client";
import { filterBySearch } from "../lib/filterBySearch";
import { filterByPrice } from "../lib/filterByPrice";


interface Filters {
  searchQuery?: string;
  selectedBrands?: string[];
  selectedPriceRange?: { min: number; max: number; label: string };
  sortBy?: string;
  inStock?: boolean;
  newArrivalsDays?: number | null;
  onSale?: boolean;

}

export function useFilteredProducts(products: CardPhone[], filters: Filters) {
  const {
    searchQuery,
    selectedBrands,
    selectedPriceRange,
    sortBy,
  } = filters;

  return useMemo(() => {
    let filtered = [...products];
    filtered = filterByBrand(filtered, selectedBrands)
    filtered = filterBySearch(filtered, searchQuery)
    filtered = filterByPrice(filtered, selectedPriceRange)
    filtered = sortProducts(filtered, sortBy);

    return filtered;
  }, [products, searchQuery, selectedBrands, selectedPriceRange, sortBy]);
}