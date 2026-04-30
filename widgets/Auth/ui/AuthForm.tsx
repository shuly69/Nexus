"use client";
import { useAuthForm } from "@/features/auth/model/useAuthForm";
import { FormErrors } from "@/features/auth/type/type";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AuthSuccess } from "./AuthSuccess";
import { useAuthStore } from "@/features/auth/model/useAuthStore";
import { useRouter } from "next/navigation";
import { useAuthRehydrate } from "@/features/auth/model/useAuthRehydrate";


export function AuthForm() {
const router = useRouter();
const [allowed, setAllowed] = useState(false);
const isAuthenticated = useAuthStore(state => state.isAuthenticated);

const [formData, setFormData] = useState({
  email: "",
  password: "",
  rememberMe: false
});

const {
  handleSubmit,
  isSubmitting,
  loginError,
  handleSocialLogin,
  errors,
  setErrors,
  showPassword,
  setShowPassword
} = useAuthForm();


useAuthRehydrate();


useEffect(() => {
  const raw = localStorage.getItem("nexus_user");

  if (!raw) {
    router.push("/auth");
  } else {
    router.push("/");
  }
}, []);

const onSubmit = async (e: React.SubmitEvent) => {
  e.preventDefault();
  await handleSubmit(formData);
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value, type, checked } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value
  }));

  if (errors[name as keyof FormErrors]) {
    setErrors(prev => ({ ...prev, [name]: undefined }));
  }
};

if (isAuthenticated) {
  return <AuthSuccess />;
}


    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Welcome Back</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Sign in to your Nexus account to track orders, save favorites, and enjoy exclusive member benefits.
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <button
              onClick={() => handleSocialLogin('google')}
              disabled={isSubmitting}
              className="cursor-pointer w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition disabled:opacity-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-gray-700 font-medium">Continue with Google</span>
            </button>
            
            <button
              onClick={() => handleSocialLogin('apple')}
              disabled={isSubmitting}
              className="cursor-pointer w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition disabled:opacity-50"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.221-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
              </svg>
              <span className="text-gray-700 font-medium">Continue with Apple</span>
            </button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or sign in with email</span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={onSubmit} className="space-y-5">
            {loginError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-sm text-red-600">{loginError}</p>
              </div>
            )}
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                  errors.email ? 'border-red-400 focus:ring-red-500' : 'border-gray-200 focus:border-blue-400'
                }`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password *
                </label>
                <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 pr-10 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                    errors.password ? 'border-red-400 focus:ring-red-500' : 'border-gray-200 focus:border-blue-400'
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">{errors.password}</p>
              )}
            </div>
            
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
            
            <p className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link href="/registration" className="text-blue-600 font-medium hover:underline">
                Create an account
              </Link>
            </p>
          </form>
        </div>
        
        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <p className="text-xs text-gray-500 text-center mb-2">Demo Credentials</p>
          <div className="flex justify-center gap-6 text-xs text-gray-600">
            <div>
              <span className="font-medium">Email:</span> demo@nexus.com
            </div>
            <div>
              <span className="font-medium">Password:</span> Demo1234
            </div>
          </div>
          <div className="flex justify-center gap-6 text-xs text-gray-600">
            <div>
              <span className="font-medium">Email:</span> admin@nexus.com
            </div>
            <div>
              <span className="font-medium">Password:</span> Admin1234
            </div>
          </div>
        </div>
        
        {/* Security Note */}
        <div className="text-center mt-6">
          <div className="flex justify-center gap-4 text-xs text-gray-400">
            <span>🔒 Secure Login</span>
            <span>🔐 Encrypted Connection</span>
            <span>✅ 2FA Available</span>
          </div>
        </div>
      </div>
    </div>
    )
}