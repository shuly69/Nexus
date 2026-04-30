"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Profile = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
};

type ProfileStore = {
  profile: Profile;
  setProfile: (profile: Profile) => void;
  updateField: (field: keyof Profile, value: string) => void;
  deleteProfile: () => void;
  hasData: boolean;
};

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set, get) => ({
      profile: {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
      },

      setProfile: (profile) =>
        set({
          profile,
          hasData: Object.values(profile).some((v) => v.trim() !== ""),
        }),

      updateField: (field, value) => {
        const updated = { ...get().profile, [field]: value };
        set({
          profile: updated,
          hasData: Object.values(updated).some((v) => v.trim() !== ""),
        });
      },

      deleteProfile: () =>
        set({
          profile: {
            firstName: "",
            lastName: "",
            email: "",
            address: "",
          },
          hasData: false,
        }),

      hasData: false,
    }),
    {
      name: "user-profile-storage",
    }
  )
);
