import { CardPhone } from "@/entities/Card/type/model";
import { cardPhoneSchema } from "../model/validators";

export function createUpdatedPhone(
  oldPhone: CardPhone,
  form: Partial<CardPhone>
): CardPhone {
  return cardPhoneSchema.parse({
    ...oldPhone,
    ...form,
    updatedAt: new Date().toISOString(),
  });
}

