import { CardPhone, Variant } from "@/entities/Card/type/model";

export const getTotalStock = (phones : CardPhone[]) => phones.reduce((sum : number, phone : CardPhone) => {
  const phoneStock = phone.variants?.reduce((variantSum, variant) => {
    const colorStock = variant.colors.reduce((colorSum, color) => {
      return colorSum + color.stock;
    }, 0);

    return variantSum + colorStock;
  }, 0) ?? 0;

  return sum + phoneStock;
}, 0);

export const getStockByPhone = (phone : CardPhone) => phone.variants?.reduce((sum, variant) => {
  const colorStock = variant.colors.reduce((colorSum, color) => {
    return colorSum + color.stock;
  }, 0);

  return sum + colorStock;
}, 0) ?? 0;