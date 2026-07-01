import type { CardPhone } from "@/entities/Card/type/model";

/**
 * Returns the total number of variants (storage options) across all phones.
 */
export const getTotalVariants = (phones: CardPhone[]): number =>
  phones.reduce((sum, phone) => sum + (phone.variants?.length ?? 0), 0);
