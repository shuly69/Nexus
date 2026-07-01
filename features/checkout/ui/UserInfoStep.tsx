"use client";

import type { FormEvent } from "react";
import { useCheckoutStore } from "../model/useCheckoutStore";
import { useUserStore } from "@/entities/User/model/useUserStore";

export function UserInfoStep() {
  const { openPayment } = useCheckoutStore();
  const { user, login, logout } = useUserStore();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    login(email);
  };

  const handleAddressSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: persist address to store before advancing.
    openPayment();
  };

  return (
    <div className="space-y-8">
      {/* ── Sign-in block ────────────────────────────────────────── */}
      <div className="bg-white/70 backdrop-blur-xl p-5 rounded-2xl border border-gray-200 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">
          Sign in for faster checkout
        </h2>

        {!user ? (
          <form onSubmit={handleLogin} className="space-y-3">
            <div className="relative">
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 transition"
                required
              />
              <span className="absolute right-3 top-3 text-gray-400">📧</span>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-md"
            >
              Sign In
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-between">
            <p className="text-gray-700">
              Logged in as <b>{user.email}</b>
            </p>
            <button
              onClick={logout}
              className="text-red-500 hover:text-red-600 text-sm"
            >
              Log out
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="text-gray-500 text-sm">or</span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      {/* ── Shipping address form ─────────────────────────────────── */}
      <div className="bg-white/70 backdrop-blur-xl p-5 rounded-2xl border border-gray-200 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Enter your shipping details
        </h2>

        <form onSubmit={handleAddressSubmit} className="space-y-4">
          {[
            { placeholder: "Full Name" },
            { placeholder: "Address" },
            { placeholder: "City" },
            { placeholder: "Phone Number" },
          ].map(({ placeholder }) => (
            <input
              key={placeholder}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 transition"
              placeholder={placeholder}
              required
            />
          ))}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-md"
          >
            Continue to Payment
          </button>
        </form>
      </div>
    </div>
  );
}
