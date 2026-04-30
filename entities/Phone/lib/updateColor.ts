import { CardPhone, ColorVariant, Variant } from "@/entities/Card/type/model";

export function updateColorField(
  variant: Variant,
  colorId: string,
  field: keyof ColorVariant,
  value: any
): Variant{
  return {
    ...variant,
    colors: variant.colors.map(c =>
      c.id === colorId ? { ...c, [field]: value } : c
    )
  };
}



export function updateVariantField(
  variant: Variant,
  field: keyof Variant,
  value: any
): Variant {
  return {
    ...variant,
    [field]: value
  };
}

export function addVariantToForm(
  form: Partial<CardPhone>,
  variant: Variant
): Partial<CardPhone> {
  return {
    ...form,
    variants: [...(form.variants ?? []), variant]
  };
}

export function removeVariantFromForm(
  form: Partial<CardPhone>,
  index: number
): Partial<CardPhone> {
  return {
    ...form,
    variants: form.variants?.filter((_, i) => i !== index) ?? []
  };
}

