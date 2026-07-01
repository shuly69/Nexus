import type { CardPhone } from "@/entities/Card/type/model";

/**
 * Sums the stock across all variants and colors for a single phone.
 */
export const getStockByPhone = (phone: CardPhone): number =>
  phone.variants?.reduce((sum, variant) => {
    const colorStock = variant.colors.reduce((cs, c) => cs + c.stock, 0);
    return sum + colorStock;
  }, 0) ?? 0;

/**
 * Sums the total stock across all phones in the catalog.
 */
export const getTotalStock = (phones: CardPhone[]): number =>
  phones.reduce((sum, phone) => sum + getStockByPhone(phone), 0);
