import { CardPhone } from "@/entities/Card/type/model";
import { filterByNewarrival } from "@/features/catalog-filters/lib/filterByNewarrival";
import { filterBySales } from "@/features/catalog-filters/lib/filterBySales";
import { filterByStock } from "@/features/catalog-filters/lib/filterByStock";
import { sortProducts } from "@/features/catalog-filters/lib/sortProducts";
import { useMemo } from "react";

interface Filters {
  selectedFilter?: string,
  sortBy?: string;
}
export function useFilteredProducts(products: CardPhone[], filters: Filters) {
    const {selectedFilter, sortBy} = filters;
    return useMemo(() => {
        let filtered = [...products]
        switch(selectedFilter) {
            case "under-500" : 
            filtered = filtered.filter(p => p.price < 500)
            break;

            case "500-1000" :
            filtered = filtered.filter(p => p.price >= 500 && p.price <= 1000)
            break;

            case "above-1000" :
            filtered = filtered.filter(p => p.price > 1000)
            break;

            case "on-sale" :
            filtered = filterBySales(filtered, true)
            break;

            case "in-stock" :
            filtered = filterByStock(filtered, true)
            break;

            case "new-arrivals" :
            filtered = filterByNewarrival(filtered, 30)
            break;

            default:
            break;// "all"
        }

        filtered = sortProducts(filtered, sortBy)
        return filtered
    }, [products, selectedFilter, sortBy])
}