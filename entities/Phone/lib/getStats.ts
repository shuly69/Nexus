import type { CardPhone } from "@/entities/Card/type/model";
import { getAvgPrice } from "./getAvgPrice";
import { getTotalVariants } from "./getTotalVariants";
import { getTotalStock } from "./getTotalStock";

export const brands = [
  "Apple",
  "Samsung",
  "Google",
  "OnePlus",
  "Xiaomi",
  "Sony",
  "Motorola",
];

export type PhoneStats = {
  totalPhones: number;
  totalVariants: number;
  totalBrands: number;
  averagePrice: number;
  totalStock: number;
  topRated: CardPhone[];
  mostExpensive: CardPhone[];
  brandDistribution: { brand: string; count: number }[];
};

/**
 * Computes aggregate statistics for the admin overview dashboard.
 * All sorting operations return new arrays — the original `phones` array
 * is never mutated.
 */
export const getStats = (phones: CardPhone[]): PhoneStats => ({
  totalPhones: phones.length,
  totalVariants: getTotalVariants(phones),
  totalBrands: new Set(phones.map((p) => p.brand)).size,
  averagePrice: getAvgPrice(phones),
  totalStock: getTotalStock(phones),
  topRated: [...phones]
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
    .slice(0, 5),
  mostExpensive: [...phones].sort((a, b) => b.price - a.price).slice(0, 5),
  brandDistribution: brands
    .map((brand) => ({
      brand,
      count: phones.filter((p) => p.brand === brand).length,
    }))
    .filter((b) => b.count > 0),
});
