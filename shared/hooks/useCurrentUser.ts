"use client";

import { useEffect, useState } from "react";

export function useCurrentUser() {
  const [user, setUser] = useState<any>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("nexus_user");
      if (!raw) {
        setReady(true);
        return;
      }

      const data = JSON.parse(raw);
      const current = data?.user ?? null;

      setUser(current);
    } catch {
      setUser(null);
    }

    setReady(true);
  }, []);

  return { user, role: user?.name, isAuth: !!user, ready };
}