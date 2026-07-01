import type { CardPhone, ColorVariant, Variant } from "@/entities/Card/type/model";

/**
 * Returns a new `Variant` with the given field updated on the matching color.
 * Immutable — the original variant is never mutated.
 */
export function updateColorField<K extends keyof ColorVariant>(
  variant: Variant,
  colorId: string,
  field: K,
  value: ColorVariant[K]
): Variant {
  return {
    ...variant,
    colors: variant.colors.map((c) =>
      c.id === colorId ? { ...c, [field]: value } : c
    ),
  };
}

/**
 * Returns a new `Variant` with one top-level field updated.
 * Immutable — the original variant is never mutated.
 */
export function updateVariantField<K extends keyof Variant>(
  variant: Variant,
  field: K,
  value: Variant[K]
): Variant {
  return { ...variant, [field]: value };
}

/** Appends a variant to the form data. */
export function addVariantToForm(
  form: Partial<CardPhone>,
  variant: Variant
): Partial<CardPhone> {
  return {
    ...form,
    variants: [...(form.variants ?? []), variant],
  };
}

/** Removes a variant at the given index from the form data. */
export function removeVariantFromForm(
  form: Partial<CardPhone>,
  index: number
): Partial<CardPhone> {
  return {
    ...form,
    variants: form.variants?.filter((_, i) => i !== index) ?? [],
  };
}
