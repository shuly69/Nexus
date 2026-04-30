import { CardPhone, Variant } from "@/entities/Card/type/model";
import { create } from "zustand";

export type VariantDeletePayload = {
  phone: CardPhone;
  variant: Variant;
};

interface AdminStore {
  phones: CardPhone[];
  activeTab: "overview" | "products" | "add" | "edit";
  editingPhone: CardPhone | null;
  phoneToDelete: CardPhone | null;
  variantToDelete: VariantDeletePayload | null;
  successMessage: string;
  showDeleteConfirm: boolean;
  isLoading: boolean;

  setLoading: (value: boolean) => void;
  setActiveTab: (tab: AdminStore["activeTab"]) => void;
  setEditingPhone: (phone: CardPhone | null) => void;
  setPhoneToDelete: (phone: CardPhone | null) => void;
  setVariantToDelete: (payload: VariantDeletePayload | null) => void;
  setSuccessMessage: (msg: string) => void;
  setShowDeleteConfirm: (v: boolean) => void;

  hydrate: () => void;
  setPhones: (phones: CardPhone[]) => void;
  addPhone: (phone: CardPhone) => void;
  updatePhone: (phone: CardPhone) => void;
  deletePhone: (id: number) => void;

  toggleBadge: (phone: CardPhone, badge?: string) => void;
  updateVariantQuantity: (
    phone: CardPhone,
    variantCapacity: string,
    colorId: string,
    stock: number
  ) => void;

  removeVariant: (phone: CardPhone, variantCapacity: string) => void;
}

export const useAdminStore = create<AdminStore>((set) => ({
  phones: [],
  activeTab: "overview",
  editingPhone: null,
  phoneToDelete: null,
  variantToDelete: null,
  successMessage: "",
  showDeleteConfirm: false,
  isLoading: false,

  setLoading: (value) => set({ isLoading: value }),
  setActiveTab: (tab) => set({ activeTab: tab }),
  setEditingPhone: (phone) => set({ editingPhone: phone }),
  setPhoneToDelete: (phone) => set({ phoneToDelete: phone }),
  setVariantToDelete: (payload) => set({ variantToDelete: payload }),
  setSuccessMessage: (msg) => set({ successMessage: msg }),
  setShowDeleteConfirm: (v) => set({ showDeleteConfirm: v }),

  // загрузка из localStorage
  hydrate: () => {
    const raw = localStorage.getItem("phones");
    if (!raw) return;
    set({ phones: JSON.parse(raw) });
  },

  // прямое обновление массива
  setPhones: (phones) => {
    localStorage.setItem("phones", JSON.stringify(phones));
    set({ phones });
  },

  // добавление телефона
  addPhone: (phone) =>
    set((state) => {
      
      const updated = [...state.phones, phone];
      localStorage.setItem("phones", JSON.stringify(updated));
      return { phones: updated };
    }),

  // обновление телефона
  updatePhone: (updatedPhone) =>
    set((state) => {
      const updated = state.phones.map((p) =>
        p.id === updatedPhone.id ? updatedPhone : p
      );
      localStorage.setItem("phones", JSON.stringify(updated));
      return { phones: updated };
    }),

  // удаление телефона
  deletePhone: (id) =>
    set((state) => {
      const updated = state.phones.filter((p) => p.id !== id);
      localStorage.setItem("phones", JSON.stringify(updated));
      return { phones: updated };
    }),

  // обновление бейджа
  toggleBadge: (phone, status) =>
    set((state) => {
      const updated = state.phones.map((p) =>
        p.id === phone.id ? { ...p, status  } : p
      );
      localStorage.setItem("phones", JSON.stringify(updated));
      return { phones: updated };
    }),

  // обновление количества товара в цвете
  updateVariantQuantity: (phone, capacity, colorId, stock) =>
    set((state) => {
      const updated = state.phones.map((p) =>
        p.id !== phone.id
          ? p
          : {
              ...p,
              variants: p.variants.map((v) =>
                v.capacity !== capacity
                  ? v
                  : {
                      ...v,
                      colors: v.colors.map((c) =>
                        c.id === colorId ? { ...c, stock } : c
                      ),
                    }
              ),
            }
      );
      localStorage.setItem("phones", JSON.stringify(updated));
      return { phones: updated };
    }),

  // удаление варианта по capacity
  removeVariant: (phone, capacity) =>
    set((state) => {
      const updated = state.phones.map((p) =>
        p.id !== phone.id
          ? p
          : {
              ...p,
              variants: p.variants.filter((v) => v.capacity !== capacity),
            }
      );
      localStorage.setItem("phones", JSON.stringify(updated));
      return { phones: updated };
    }),
}));