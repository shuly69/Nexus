import { create } from "zustand";

interface PhonesState {
  expandedPhones: Set<string>;
  toggleExpandPhone: (id: string) => void;
}

export const expandPhone = create<PhonesState>((set) => ({
  expandedPhones: new Set(),

  toggleExpandPhone: (id ) =>
    set((state) => {
      const expanded = new Set(state.expandedPhones);

      if (expanded.has(id)) {
        expanded.delete(id); 
      } else {
        expanded.add(id); 
      }

      return { expandedPhones: expanded };
    }),
}));

