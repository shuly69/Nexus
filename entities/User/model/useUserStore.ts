import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,

  login: (email: string) =>
    set({ user: { email, name: "User" } }),

  logout: () => set({ user: null }),
}));

