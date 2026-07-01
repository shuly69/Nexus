"use client";

import { useState } from "react";
import type { FormErrors, LoginFormData } from "../type/type";
import { useAuthStore } from "./useAuthStore";
import { loginUser } from "../api/auth";

export function useAuthForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);

  const loginSuccess = useAuthStore((s) => s.loginSuccess);
  const loginFail = useAuthStore((s) => s.loginFail);
  const loginError = useAuthStore((s) => s.loginError);

  // Placeholder for OAuth — implement with next-auth providers
  const handleSocialLogin = (_provider: string) => {
    console.warn("Social login not yet implemented");
  };

  const handleSubmit = async (formData: LoginFormData): Promise<boolean> => {
    setIsSubmitting(true);

    try {
      const res = await loginUser(formData);
      loginSuccess(res.user, res.token);

      if (formData.rememberMe) {
        localStorage.setItem("nexus_user", JSON.stringify(res));
      }

      return true;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      loginFail(message);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    loginError,
    handleSubmit,
    handleSocialLogin,
    errors,
    setErrors,
    showPassword,
    setShowPassword,
  };
}
