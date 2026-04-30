import { CardPhone } from "@/entities/Card/type/model";

export const getTotalVariants = (phones : CardPhone[]) => phones.reduce((sum : number, phone : CardPhone) => {
  const phoneVariants = phone.variants?.length ?? 0;
  return sum + phoneVariants;
}, 0);