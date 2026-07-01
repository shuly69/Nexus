import { create } from "zustand";
import type { AuthUser } from "../type/type";

type AuthState = {
  /** Currently authenticated user, or `null` if not logged in. */
  user: AuthUser | null;

  /**
   * Bearer token for API requests.
   * Kept in memory only — not persisted to `localStorage` by the store itself.
   * Rehydration from `localStorage` happens via `useAuthRehydrate`.
   */
  token: string | null;

  isAuthenticated: boolean;

  /** Error message from the last failed login attempt. Empty string when no error. */
  loginError: string;

  loginSuccess: (user: AuthUser, token: string) => void;
  loginFail: (message: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  loginError: "",

  loginSuccess: (user, token) =>
    set({ user, token, isAuthenticated: true, loginError: "" }),

  loginFail: (message) =>
    set({ loginError: message, isAuthenticated: false }),

  logout: () =>
    set({ user: null, token: null, isAuthenticated: false }),
}));
