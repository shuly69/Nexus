"use client";
import { useState } from "react";
import { registerSchema } from "../lib/validators";
import { registerUser } from "../api/register";
import { FormErrors } from "../type/type";

export function useRegisterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
   const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (formData: any) => {
    const parsed = registerSchema.safeParse(formData);

      if (!parsed.success) {
    const fieldErrors: FormErrors = {};

    parsed.error.issues.forEach((err) => {
      const field = err.path[0] as keyof FormErrors;
      if (!field) return;
      fieldErrors[field] = err.message;
    });

    setErrors(fieldErrors);
    return false;
  }

  setErrors({});
  setIsSubmitting(true);

  await registerUser(parsed.data);

  setIsSubmitting(false);
  setIsRegistered(true);

  return true;
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
    setShowConfirmPassword
  };
}
