import { CardPhone } from "@/entities/Card/type/model";
import { cardPhoneSchema } from "../model/validators";
import { phoneFormSchema } from "../model/phoneValidators";
import { uploadImage } from "@/shared/lib/photos/uploadPhoto";
import { useAdminStore } from "@/features/admin/model/adminStore";



export async function createPhone(form: Partial<CardPhone>): Promise<CardPhone> {
const parsed = phoneFormSchema.parse(form);
  const imageUrl = await uploadImage(parsed.imageFile);
  

const phones = useAdminStore.getState().phones;
  const lastId = phones.length > 0
    ? Math.max(...phones.map(p => Number(p.id)))
    : 0;

  const phone = {
    ...parsed,
    id: lastId + 1,
    slug: `${parsed.brand}-${parsed.model}`.toLowerCase().replace(/\s+/g, "-"),
    status: "new_arrival",
    imageUrl,
    createdAt: new Date().toISOString(),
  };
  

  return cardPhoneSchema.parse(phone);
}
