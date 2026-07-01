import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CardPhone, Variant } from "@/entities/Card/type/model";

export type VariantDeletePayload = {
  phone: CardPhone;
  variant: Variant;
};

interface AdminStore {
  /** Full list of phones managed by the admin. Persisted to localStorage. */
  phones: CardPhone[];

  /** Phone currently open in the edit form (`null` when adding a new phone). */
  editingPhone: CardPhone | null;

  /** Phone staged for deletion — shown in the confirmation modal. */
  phoneToDelete: CardPhone | null;

  /** Variant staged for deletion — shown in the confirmation modal. */
  variantToDelete: VariantDeletePayload | null;

  /** Transient success message displayed after a CRUD operation. */
  successMessage: string;

  /** Controls visibility of the delete confirmation modal. */
  showDeleteConfirm: boolean;

  /** UI loading state while an async operation (e.g. image upload) is in progress. */
  isLoading: boolean;

  setLoading: (value: boolean) => void;
  setActiveTab: (tab: AdminStore["activeTab"]) => void;
  setEditingPhone: (phone: CardPhone | null) => void;
  setPhoneToDelete: (phone: CardPhone | null) => void;
  setVariantToDelete: (payload: VariantDeletePayload | null) => void;
  setSuccessMessage: (msg: string) => void;
  setShowDeleteConfirm: (v: boolean) => void;

  addPhone: (phone: CardPhone) => void;
  updatePhone: (phone: CardPhone) => void;
  deletePhone: (id: number | string) => void;

  /** Cycles through the available status badges (`limited_time_offer`, `best_seller`, `new_arrival`). */
  toggleBadge: (phone: CardPhone, status?: string) => void;

  /** Updates the stock count for a specific (phone, variant, color) combination. */
  updateVariantQuantity: (
    phone: CardPhone,
    variantCapacity: string,
    colorId: string,
    stock: number
  ) => void;

  /** Removes an entire storage variant (e.g. "256 GB") from a phone. */
  removeVariant: (phone: CardPhone, variantCapacity: string) => void;

  activeTab: "overview" | "products" | "add" | "edit";
}

/**
 * Central store for admin CRUD operations.
 *
 * All mutations produce new phone array references so React re-renders
 * correctly. The `phones` slice is persisted to `localStorage` via
 * zustand/persist — no manual `localStorage.setItem` calls are needed.
 */
export const useAdminStore = create<AdminStore>()(
  persist(
    (set) => ({
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

      addPhone: (phone) =>
        set((state) => ({ phones: [...state.phones, phone] })),

      updatePhone: (updatedPhone) =>
        set((state) => ({
          phones: state.phones.map((p) =>
            p.id === updatedPhone.id ? updatedPhone : p
          ),
        })),

      deletePhone: (id) =>
        set((state) => ({
          phones: state.phones.filter((p) => p.id !== id),
        })),

      toggleBadge: (phone, status) =>
        set((state) => ({
          phones: state.phones.map((p) =>
            p.id === phone.id ? { ...p, status } : p
          ),
        })),

      updateVariantQuantity: (phone, capacity, colorId, stock) =>
        set((state) => ({
          phones: state.phones.map((p) =>
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
          ),
        })),

      removeVariant: (phone, capacity) =>
        set((state) => ({
          phones: state.phones.map((p) =>
            p.id !== phone.id
              ? p
              : {
                  ...p,
                  variants: p.variants.filter((v) => v.capacity !== capacity),
                }
          ),
        })),
    }),
    {
      name: "admin-phones-storage",
      partialize: (state) => ({ phones: state.phones }),
    }
  )
);
