"use client";

import { useEffect } from "react";
import { useAuthStore } from "./useAuthStore";

export function useAuthRehydrate() {
  const loginSuccess = useAuthStore((s) => s.loginSuccess);

  useEffect(() => {
    const raw = localStorage.getItem("nexus_user");
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw);
      if (parsed?.user && parsed?.token) {
        loginSuccess(parsed.user, parsed.token);
      }
    } catch (e) {
      console.error("Failed to parse nexus_user");
    }
  }, []);
}