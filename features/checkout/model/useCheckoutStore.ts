import { create } from "zustand";

export type CheckoutStep =
  | "confirm"
  | "payment"
  | "success"
  | "userInfo"

  | null;

interface CheckoutState {
  step: CheckoutStep;
  openConfirm: () => void;
  openUserInfo: () => void;
  openPayment: () => void;
  openSuccess: () => void;
  close: () => void;
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
  step: null,

  openConfirm: () => set({ step: "confirm" }),
  openUserInfo: () => set({ step: "userInfo" }),
  openPayment: () => set({ step: "payment" }),
  openSuccess: () => set({ step: "success" }),

  close: () => set({ step: null }),
}));

