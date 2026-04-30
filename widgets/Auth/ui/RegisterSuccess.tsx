import Link from "next/link";

export function RegisterSuccess() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h2>
            <p className="text-gray-500 mb-6">
              Welcome to Nexus! Your account has been created successfully.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              A verification email has been sent to your email address.
            </p>
            <Link
              href="/auth"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Sign In to Your Account
            </Link>
          </div>
        </div>
      </div>
    )
}