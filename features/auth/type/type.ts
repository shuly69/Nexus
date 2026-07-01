export type FormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  phone?: string;
  agreeTerms?: string;
  receiveOffers?: string;
};

export type AuthUser = {
  id: string;
  email: string;
  name: string;
  role: "user" | "admin";
};

export type AuthResponse = {
  success: boolean;
  token: string;
  user: AuthUser;
};

export type LoginFormData = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone?: string;
  agreeTerms: boolean;
  receiveOffers?: boolean;
};
