"use client";
import { CardPhone } from "@/entities/Card/type/model";
import { create } from "zustand";

interface AdminState {
  expandedPhones: Set<string>;
  selectedPhone: CardPhone | null;
  setSelectedPhone: (phone: CardPhone | null) => void;
  toggleExpand: (id: string) => void;
}

interface AdminState {
  phones: CardPhone[];
  selectedPhone: CardPhone | null;
  searchTerm: string;
  filterBrand: string;
  expandedPhones: Set<string>;

  setPhones: (phones: CardPhone[]) => void;
  setSelectedPhone: (phone: CardPhone | null) => void;
  toggleExpand: (id: string) => void;
}


export const useAdminStore = create<AdminState>((set, get) => ({
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

