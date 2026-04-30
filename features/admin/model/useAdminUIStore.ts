"use client";
import { create } from "zustand";

interface AdminUIState {
  activeTab: 'overview' | 'products' | 'add' | 'edit';
  isLoading: boolean;

  setActiveTab: (tab: AdminUIState['activeTab']) => void;
  setLoading: (value: boolean) => void;
}

export const useAdminUIStore = create<AdminUIState>((set) => ({
  activeTab: 'overview',
  isLoading: false,

  setActiveTab: (tab) => set({ activeTab: tab }),
  setLoading: (value) => set({ isLoading: value }),
}));