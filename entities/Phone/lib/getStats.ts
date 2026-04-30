import { CardPhone } from "@/entities/Card/type/model";
import { getAvgPrice } from "./getAvgPrice";
import { getTotalVariants } from "./getTotalVariants";
import { getTotalStock } from "./getTotalStock";

export const brands = ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi", "Sony", "Motorola"];

export const stats =(phones : CardPhone[]) => {
    const totalVariants = getTotalVariants(phones);
    const avgPrice = getAvgPrice(phones);
    const totalStock = getTotalStock(phones);

    return {
        totalPhones: phones.length,
        totalVariants: totalVariants,
        totalBrands: new Set(phones.map(p => p.brand)).size,
        averagePrice: avgPrice,
        totalStock: totalStock,
    topRated: [...phones].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0)).slice(0, 5),
    mostExpensive: [...phones].sort((a, b) => b.price - a.price).slice(0, 5),
    brandDistribution: brands
      .map(brand => ({
        brand,
        count: phones.filter(p => p.brand === brand).length
      }))
      .filter(b => b.count > 0)
}}