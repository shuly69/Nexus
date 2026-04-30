// features/catalog-filters/model/useCatalogFilters.ts
import { useState } from "react";
import { priceRanges } from "@/shared/config/price";
import { useSearchParams } from "next/navigation";


export function useCatalogFilters() {
  const searchParams = useSearchParams();


  const [searchQuery, setSearchQuery] = useState(() => {
  return searchParams.get("q") ?? "";
});


  const [selectedBrands, setSelectedBrands] = useState<string[]>(() => {
  return searchParams.get("brands")?.split(",") ?? [];
});

;
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [sortBy, setSortBy] = useState("featured");

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedBrands([]);
    setSelectedPriceRange(priceRanges[0]);
    setSortBy("featured");
  };

  return {
    searchQuery,
    setSearchQuery,
    selectedBrands,
    toggleBrand,
    selectedPriceRange,
    setSelectedPriceRange,
    sortBy,
    setSortBy,
    resetFilters,
  };
}