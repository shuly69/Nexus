"use client";

import { useEffect } from "react";
import { useAuthStore } from "./useAuthStore";
import type { AuthResponse } from "../type/type";

/**
 * Rehydrates the Zustand auth store from `localStorage` on mount.
 *
 * Call this hook once near the root of the application (e.g. in the root
 * layout) so every page sees the correct authenticated state without an
 * extra round-trip.
 *
 * Note: the auth store itself does NOT use zustand/persist because the
 * token is intentionally kept in memory only — localStorage is read once
 * at startup and then discarded, so the token is never directly accessible
 * from the store by untrusted code after the initial hydration.
 */
export function useAuthRehydrate() {
  const loginSuccess = useAuthStore((s) => s.loginSuccess);

  useEffect(() => {
    const raw = localStorage.getItem("nexus_user");
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw) as AuthResponse;
      if (parsed?.user && parsed?.token) {
        loginSuccess(parsed.user, parsed.token);
      }
    } catch {
      // Corrupted storage — silently ignore so the user lands on a clean state.
    }
  }, []);
}
