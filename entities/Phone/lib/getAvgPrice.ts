import type { CardPhone } from "@/entities/Card/type/model";

/**
 * Returns the mean price across all phones.
 * Returns 0 for an empty array to avoid division by zero.
 */
export const getAvgPrice = (phones: CardPhone[]): number => {
  if (phones.length === 0) return 0;
  const total = phones.reduce((sum, phone) => sum + phone.price, 0);
  return total / phones.length;
};
