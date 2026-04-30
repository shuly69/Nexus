"use client";
import { CardPhone } from "@/entities/Card/type/model";
import { create } from "zustand";

export const useAdminStore = create((set, get) => ({
  phones: [],
  selectedPhone: null,
  searchTerm: "",
  filterBrand: "",
  expandedPhones: new Set(),

  setPhones: (phones : CardPhone[]) => set({ phones }),
  setSelectedPhone: (phone : CardPhone | null) => set({ selectedPhone: phone }),
  toggleExpand: (id : any) => {
    const expanded = new Set(get().expandedPhones);
    expanded.has(id) ? expanded.delete(id) : expanded.add(id);
    set({ expandedPhones: expanded });
  }
}));

