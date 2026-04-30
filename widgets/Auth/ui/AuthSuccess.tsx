import { useAuthStore } from "@/features/auth/model/useAuthStore";
import Link from "next/link";

export function AuthSuccess() {
  const user = useAuthStore((s) => s.user);
  console.log(user)
    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
            <p className="text-gray-500 mb-6">
              You have successfully signed in to your Nexus account.
            </p>
            <div className="space-y-3">
              <Link
                href="/"
                className="block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Continue Shopping
              </Link>
              { (user && user.name === 'Admin') ? <Link href="/admin" className="block border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition">Admin</Link> : <Link
                href="/account"
                className="block border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition"
              >
                Go to My Account
              </Link>}
              
            </div>
          </div>
        </div>
      </div>
    )
}