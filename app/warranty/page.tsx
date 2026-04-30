export const metadata = {
  title: "Warranty"
};
export default function WarrantyPage() {
 

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Warranty & Protection</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Every device comes with comprehensive warranty coverage. Learn about your protection options and how to file a claim.
        </p>
      </div>

      {/* Warranty Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-md transition">
          <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl">📅</span>
          </div>
          <h3 className="font-bold text-gray-900 mb-1">1 Year Warranty</h3>
          <p className="text-sm text-gray-500">Standard coverage on all devices</p>
        </div>
        
        <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-md transition">
          <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl">🛡️</span>
          </div>
          <h3 className="font-bold text-gray-900 mb-1">Extended Plans</h3>
          <p className="text-sm text-gray-500">Up to 3 years protection available</p>
        </div>
        
        <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-md transition">
          <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl">⚡</span>
          </div>
          <h3 className="font-bold text-gray-900 mb-1">Accidental Damage</h3>
          <p className="text-sm text-gray-500">Optional coverage available</p>
        </div>
        
        <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-md transition">
          <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl">🚚</span>
          </div>
          <h3 className="font-bold text-gray-900 mb-1">Free Shipping</h3>
          <p className="text-sm text-gray-500">For all warranty repairs</p>
        </div>
      </div>

      

      
        <div className="space-y-8">
          {/* Manufacturer Warranty */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏭</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Manufacturer Warranty</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">What's Covered</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Manufacturing defects in materials and workmanship</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Battery defects (not normal wear and tear)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Display issues not caused by physical damage</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Camera and sensor malfunctions</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Charging port and connectivity issues</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">What's Not Covered</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Accidental damage (drops, spills, cracks)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Normal wear and tear (scratches, battery degradation)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Unauthorized repairs or modifications</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Lost or stolen devices</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex flex-wrap gap-4 justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Warranty Period</p>
                  <p className="font-semibold text-gray-900">1 Year from date of purchase (standard)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Extended Warranty</p>
                  <p className="font-semibold text-gray-900">Available for purchase up to 30 days after delivery</p>
                </div>
              </div>
            </div>
          </div>

          

          {/* Brand Specific Warranty */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Brand-Specific Warranty Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🍎</span>
                  <h3 className="font-semibold text-gray-900">Apple</h3>
                </div>
                <p className="text-sm text-gray-600">1-year limited warranty. AppleCare+ available for extended coverage including accidental damage.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">✨</span>
                  <h3 className="font-semibold text-gray-900">Samsung</h3>
                </div>
                <p className="text-sm text-gray-600">1-year manufacturer warranty. Samsung Care+ offers extended protection with accidental damage coverage.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🤖</span>
                  <h3 className="font-semibold text-gray-900">Google</h3>
                </div>
                <p className="text-sm text-gray-600">1-year warranty. Preferred Care available for accidental damage. Pixel devices have 2-year warranty in some regions.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">⚡</span>
                  <h3 className="font-semibold text-gray-900">OnePlus</h3>
                </div>
                <p className="text-sm text-gray-600">1-year limited warranty. OnePlus Care available for extended protection.</p>
              </div>
            </div>
          </div>
        </div>

   
    </div>
  );
}