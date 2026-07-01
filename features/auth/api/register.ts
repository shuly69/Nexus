import type { RegisterFormData } from "../type/type";

type RegisterResponse = {
  success: boolean;
  userId: string;
};

// In production replace with: fetch('/api/auth/register', { method: 'POST', body: JSON.stringify(data) })
export async function registerUser(_data: RegisterFormData): Promise<RegisterResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, userId: crypto.randomUUID() });
    }, 1200);
  });
}
