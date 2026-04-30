"use client";
import { useEffect, useState } from "react";
import { useProfileStore } from "./useProfileStore";

export const useStoreHydration = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const unsub = useProfileStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });

    // Если Zustand уже гидратирован
    if (useProfileStore.persist.hasHydrated()) {
      setHydrated(true);
    }

    return () => unsub();
  }, []);

  return hydrated;
};