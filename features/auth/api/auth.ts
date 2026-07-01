import type { AuthResponse, LoginFormData } from "../type/type";

// Demo credentials are loaded from environment variables.
// In production, replace this with a real API call, e.g.:
// return fetch('/api/auth/login', { method: 'POST', body: JSON.stringify(data) })
const DEMO_EMAIL = process.env.NEXT_PUBLIC_DEMO_EMAIL ?? "demo@nexus.com";
const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? "admin@nexus.com";

export async function loginUser(data: LoginFormData): Promise<AuthResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === DEMO_EMAIL) {
        resolve({
          success: true,
          token: "mock-token-user",
          user: { id: "1", email: data.email, name: "Oleksandr", role: "user" },
        });
      } else if (data.email === ADMIN_EMAIL) {
        resolve({
          success: true,
          token: "mock-token-admin",
          user: { id: "2", email: data.email, name: "Admin", role: "admin" },
        });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 800);
  });
}
