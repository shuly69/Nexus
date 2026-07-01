"use client";

import { useEffect, useState } from "react";
import type { AuthUser } from "@/features/auth/type/type";

type CurrentUser = {
  user: AuthUser | null;
  role: "user" | "admin" | null;
  isAuth: boolean;
  ready: boolean;
};

export function useCurrentUser(): CurrentUser {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("nexus_user");
      if (raw) {
        const parsed = JSON.parse(raw);
        setUser(parsed?.user ?? null);
      }
    } catch {
      setUser(null);
    } finally {
      setReady(true);
    }
  }, []);

  return {
    user,
    role: user?.role ?? null,
    isAuth: !!user,
    ready,
  };
}
