"use client";
import { useRegisterForm } from "@/features/auth/model/useRegisterForm";
import { FormErrors } from "@/features/auth/type/type";
import { useEffect, useState } from "react";
import { RegisterSuccess } from "./RegisterSuccess";
import Link from "next/dist/client/link";
import { useRouter } from "next/navigation";

export function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    agreeTerms: false,
    receiveOffers: false
  });

  const { errors, isSubmitting, handleSubmit, setErrors, showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword, isRegistered } = useRegisterForm();

  const onSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const ok = await handleSubmit(formData);
    if (ok) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        agreeTerms: false,
        receiveOffers: false
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type, checked } = e.target;
      setFormData(prev => ({ 
        ...prev, 
        [name]: type === 'checkbox' ? checked : value 
      }));
      // Clear error for this field when user starts typing
      if (errors[name as keyof FormErrors]) {
        setErrors(prev  => ({ ...prev, [name]: undefined }));
      }
    };

   

   const router = useRouter();
  
    useEffect(() => {
      const raw = localStorage.getItem("nexus_user");
  
      if (raw) {
        router.push("/");
      }
    }, []);
    if (isRegistered) {
    return (
      <RegisterSuccess />
    );
  }
      
  return (
      <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">Create an Account</h1>
              <p className="text-gray-500 max-w-2xl mx-auto">
                  Join Nexus to enjoy exclusive deals, track orders, and get personalized recommendations.
              </p>
          </div>

          <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                  {/* Benefits Section */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 pb-6 border-b border-gray-100">
                      <div className="text-center">
                          <div className="text-2xl mb-2">🚚</div>
                          <p className="text-xs text-gray-600">Free Shipping</p>
                      </div>
                      <div className="text-center">
                          <div className="text-2xl mb-2">💳</div>
                          <p className="text-xs text-gray-600">0% Financing</p>
                      </div>
                      <div className="text-center">
                          <div className="text-2xl mb-2">🎁</div>
                          <p className="text-xs text-gray-600">Member Deals</p>
                      </div>
                      <div className="text-center">
                          <div className="text-2xl mb-2">⭐</div>
                          <p className="text-xs text-gray-600">Rewards Points</p>
                      </div>
                  </div>

                  <form onSubmit={onSubmit} className="space-y-5"  >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                  First Name *
                              </label>
                              <input
                                  type="text"
                                  id="firstName"
                                  name="firstName"
                                  value={formData.firstName}
                                  onChange={handleChange}
                                  className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.firstName ? 'border-red-400 focus:ring-red-500' : 'border-gray-200 focus:border-blue-400'
                                      }`}
                                  placeholder="John"
                              />
                              {errors.firstName && (
                                  <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
                              )}
                          </div>

                          <div>
                              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                  Last Name *
                              </label>
                              <input
                                  type="text"
                                  id="lastName"
                                  name="lastName"
                                  value={formData.lastName}
                                  onChange={handleChange}
                                  className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.lastName ? 'border-red-400 focus:ring-red-500' : 'border-gray-200 focus:border-blue-400'
                                      }`}
                                  placeholder="Doe"
                              />
                              {errors.lastName && (
                                  <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
                              )}
                          </div>
                      </div>

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
                              className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.email ? 'border-red-400 focus:ring-red-500' : 'border-gray-200 focus:border-blue-400'
                                  }`}
                              placeholder="john@example.com"
                          />
                          {errors.email && (
                              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                          )}
                      </div>

                      <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Phone Number (Optional)
                          </label>
                          <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.phone ? 'border-red-400 focus:ring-red-500' : 'border-gray-200 focus:border-blue-400'
                                  }`}
                              placeholder="+1 (555) 000-0000"
                          />
                          {errors.phone && (
                              <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                          )}
                      </div>

                      <div>
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                              Password *
                          </label>
                          <div className="relative">
                              <input
                                  type={showPassword ? "text" : "password"}
                                  id="password"
                                  name="password"
                                  value={formData.password}
                                  onChange={handleChange}
                                  className={`w-full px-4 py-2 pr-10 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.password ? 'border-red-400 focus:ring-red-500' : 'border-gray-200 focus:border-blue-400'
                                      }`}
                                  placeholder="Create a password"
                              />
                              <button
                                  type="button"
                                  onClick={() => setShowPassword(!showPassword)}
                                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                              >
                                  {showPassword ? "👁️" : "👁️‍🗨️"}
                              </button>
                          </div>
                          {errors.password && (
                              <p className="text-sm text-red-500 mt-1">{errors.password}</p>
                          )}
                          <p className="text-xs text-gray-500 mt-1">
                              Must be at least 8 characters with 1 uppercase and 1 number
                          </p>
                      </div>

                      <div>
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                              Confirm Password *
                          </label>
                          <div className="relative">
                              <input
                                  type={showConfirmPassword ? "text" : "password"}
                                  id="confirmPassword"
                                  name="confirmPassword"
                                  value={formData.confirmPassword}
                                  onChange={handleChange}
                                  className={`w-full px-4 py-2 pr-10 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.confirmPassword ? 'border-red-400 focus:ring-red-500' : 'border-gray-200 focus:border-blue-400'
                                      }`}
                                  placeholder="Confirm your password"
                              />
                              <button
                                  type="button"
                                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                              >
                                  {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                              </button>
                          </div>
                          {errors.confirmPassword && (
                              <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>
                          )}
                      </div>

                      <div className="space-y-3">
                          <label className="flex items-start gap-3 cursor-pointer">
                              <input
                                  type="checkbox"
                                  name="agreeTerms"
                                  checked={formData.agreeTerms}
                                  onChange={handleChange}
                                  className="mt-0.5 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm text-gray-600">
                                  I agree to the{" "}
                                  <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
                                  {" "}and{" "}
                                  <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                                  {" "}*
                              </span>
                          </label>
                          {errors.agreeTerms && (
                              <p className="text-sm text-red-500">{errors.agreeTerms}</p>
                          )}

                          <label className="flex items-start gap-3 cursor-pointer">
                              <input
                                  type="checkbox"
                                  name="receiveOffers"
                                  checked={formData.receiveOffers}
                                  onChange={handleChange}
                                  className="mt-0.5 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-sm text-gray-600">
                                  I want to receive exclusive offers, early access to sales, and personalized recommendations
                              </span>
                          </label>
                      </div>

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
                                  Creating Account...
                              </span>
                          ) : (
                              'Create Account'
                          )}
                      </button>

                      <p className="text-center text-sm text-gray-500">
                          Already have an account?{" "}
                          <Link href="/login" className="text-blue-600 font-medium hover:underline">
                              Sign in
                          </Link>
                      </p>
                  </form>
              </div>

              {/* Security Note */}
              <div className="text-center mt-6">
                  <div className="flex justify-center gap-4 text-xs text-gray-400">
                      <span>🔒 Secure Registration</span>
                      <span>🔐 Encrypted Data</span>
                      <span>✅ GDPR Compliant</span>
                  </div>
              </div>
          </div>
      </div>
  );
}