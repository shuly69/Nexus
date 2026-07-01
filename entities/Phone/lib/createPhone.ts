import type { CardPhone } from "@/entities/Card/type/model";
import { cardPhoneSchema } from "../model/validators";
import { phoneFormSchema } from "../model/phoneValidators";
import { useAdminStore } from "@/features/admin/model/adminStore";

/**
 * Validates the form data, assigns a sequential ID and a URL slug,
 * then returns a fully-typed `CardPhone` ready to be stored.
 *
 * Throws a `ZodError` if validation fails — callers should catch it and
 * surface the field-level errors to the user.
 */
export async function createPhone(form: Partial<CardPhone>): Promise<CardPhone> {
  // Validate the user-submitted form data first.
  const parsed = phoneFormSchema.parse(form);

  // Derive the next ID from the current catalog (max + 1).
  const phones = useAdminStore.getState().phones;
  const nextId =
    phones.length > 0
      ? Math.max(...phones.map((p) => Number(p.id))) + 1
      : 1;

  const phone = {
    ...parsed,
    id: nextId,
    slug: `${parsed.brand}-${parsed.model}`.toLowerCase().replace(/\s+/g, "-"),
    status: "new_arrival" as const,
    createdAt: new Date().toISOString(),
  };

  // Run the full schema again to guarantee the returned value is airtight.
  return cardPhoneSchema.parse(phone);
}
