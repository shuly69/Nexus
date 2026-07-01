import { create } from "zustand";

type UserState = {
  user: { email: string; name: string } | null;
  login: (email: string) => void;
  logout: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  login: (email) => set({ user: { email, name: "User" } }),
  logout: () => set({ user: null }),
}));
