"use client";

import type { CardPhone } from "@/entities/Card/type/model";
import { create } from "zustand";

/** Local UI state for the admin products table (search, filter, expand rows). */
interface AdminSearchState {
  phones: CardPhone[];
  selectedPhone: CardPhone | null;
  searchTerm: string;
  filterBrand: string;
  expandedPhones: Set<string>;

  setPhones: (phones: CardPhone[]) => void;
  setSelectedPhone: (phone: CardPhone | null) => void;
  setSearchTerm: (term: string) => void;
  setFilterBrand: (brand: string) => void;
  toggleExpand: (id: string) => void;
}

export const useAdminSearchStore = create<AdminSearchState>((set, get) => ({
  phones: [],
  selectedPhone: null,
  searchTerm: "",
  filterBrand: "",
  expandedPhones: new Set(),

  setPhones: (phones) => set({ phones }),
  setSelectedPhone: (phone) => set({ selectedPhone: phone }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  setFilterBrand: (brand) => set({ filterBrand: brand }),

  toggleExpand: (id) => {
    const expanded = new Set(get().expandedPhones);
    if (expanded.has(id)) {
      expanded.delete(id);
    } else {
      expanded.add(id);
    }
    set({ expandedPhones: expanded });
  },
}));
