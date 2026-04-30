"use client";
import { useState } from "react";
import { FormErrors } from "../type/type";
import { useAuthStore } from "./useAuthStore";
import { loginUser } from "../api/auth";

export function useAuthForm() {
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [errors, setErrors] = useState<FormErrors>({});
   const [showPassword, setShowPassword] = useState(false);
  const loginSuccess = useAuthStore((s : any) => s.loginSuccess);
  const loginFail = useAuthStore((s : any) => s.loginFail);

  const handleSocialLogin = (provider: string) => {void 0};

  const handleSubmit = async (formData: any) => {
    setIsSubmitting(true);

    try {
      const res: any = await loginUser(formData);
      loginSuccess(res.user, res.token);

      if (formData.rememberMe) {
        localStorage.setItem("nexus_user", JSON.stringify(res));
      }

      return true;
    } catch (err: any) {
      loginFail(err.message);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    loginError: useAuthStore((s : any) => s.loginError),
    handleSubmit,
    handleSocialLogin,
    errors,
    setErrors,
    showPassword,
    setShowPassword
  };


}