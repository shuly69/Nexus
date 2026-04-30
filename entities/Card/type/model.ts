export type CardPhone = {
    id?: number | string,
  brand: string,
  model: string,
  imageUrl: string,
  price: number,
  oldPrice?: number,
  rating?: number,
  reviews?: number,
  variants: Variant[],
  status?: string,
  category?: string,
  createdAt?: string,
  slug?: string,
  specs: ProductSpecs,
  description: string,
  features: string[],
  fullName?: string,

}

export interface ProductColor {
  name?: string;
}

export interface Variant {
  capacity: string;
  colors: ColorVariant[];
  sku?: string;
}

export interface ColorVariant {
  id?: string 
  name: string;
  stock: number;

}

export interface ProductSpecs {
  display: string;
  resolution?: string;
  refreshRate?: string;
  processor: string;
  battery: string;
  camera: string;
  frontCamera?: string;
  os?: string;
  connectivity?: string[];
}


export type VariantForm = {
  capacity?: string;
  colors?: ColorVariant[];
  sku?: string;
};
