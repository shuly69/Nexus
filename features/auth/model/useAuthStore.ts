import { create } from "zustand";

type User = {
  id: string;
  email: string;
  name: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loginError: string;

  loginSuccess: (user: User, token: string) => void;
  loginFail: (message: string) => void;
  logout: () => void;
};




export const useAuthStore = create<AuthState>((set) => ({
  user : null,
  token: null,
  isAuthenticated: false,
  loginError: "",

  loginSuccess: (user : User, token : string)  =>
    set({
      user,
      token,
      isAuthenticated: true,
      loginError: ""
    }),

  loginFail: (message : string) =>
    set({
      loginError: message,
      isAuthenticated: false
    }),

  logout: () =>
    set({
      user: null,
      token: null,
      isAuthenticated: false
    })
}));