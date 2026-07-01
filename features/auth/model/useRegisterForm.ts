"use client";

import { useState } from "react";
import { registerSchema } from "../lib/validators";
import { registerUser } from "../api/register";
import type { FormErrors, RegisterFormData } from "../type/type";

export function useRegisterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (formData: RegisterFormData): Promise<boolean> => {
    const parsed = registerSchema.safeParse(formData);

    if (!parsed.success) {
      const fieldErrors: FormErrors = {};

      for (const err of parsed.error.issues) {
        const field = err.path[0] as keyof FormErrors;
        if (field) fieldErrors[field] = err.message;
      }

      setErrors(fieldErrors);
      return false;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await registerUser(parsed.data);
      setIsRegistered(true);
      return true;
    } catch {
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    isRegistered,
    errors,
    handleSubmit,
    setErrors,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
  };
}
