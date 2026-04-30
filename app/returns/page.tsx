

export const metadata = {
  title: "Returns"
};
export default function ReturnsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Returns & Exchanges</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Not satisfied with your purchase? We make returns easy. Free returns within 30 days, no questions asked.
        </p>
      </div>

      {/* Return Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-md transition">
          <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl">📅</span>
          </div>
          <h3 className="font-bold text-gray-900 mb-1">30-Day Returns</h3>
          <p className="text-sm text-gray-500">Hassle-free returns within 30 days</p>
        </div>
        
        <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-md transition">
          <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl">🚚</span>
          </div>
          <h3 className="font-bold text-gray-900 mb-1">Free Returns</h3>
          <p className="text-sm text-gray-500">No return shipping costs</p>
        </div>
        
        <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-md transition">
          <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl">🔄</span>
          </div>
          <h3 className="font-bold text-gray-900 mb-1">Free Exchanges</h3>
          <p className="text-sm text-gray-500">Swap for different color or model</p>
        </div>
        
        <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-md transition">
          <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl">💰</span>
          </div>
          <h3 className="font-bold text-gray-900 mb-1">Full Refund</h3>
          <p className="text-sm text-gray-500">Money back to original payment</p>
        </div>
      </div>


      {/* Return Policy Tab */}
     
        <div className="space-y-8">
          {/* Main Policy */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Return Policy</h2>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">
                At Nexus, we want you to be completely satisfied with your purchase. If you're not happy with your order for any reason, 
                we offer a hassle-free return policy. Please review the details below to understand how returns work.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">✅ Eligible Items</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Unopened or opened but unused devices in original condition</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>All original packaging, accessories, and documentation</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Items returned within 30 days of delivery</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Defective items are covered under warranty</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">❌ Non-Returnable Items</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Items with visible signs of use, damage, or wear</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Missing original packaging or accessories</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Items returned after 30 days</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Customized or personalized devices</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">🔄 Exchange Policy</h3>
                <p className="text-gray-600 mb-3">
                  If you'd like to exchange your device for a different color, storage size, or even a different model, 
                  we offer free exchanges. Simply initiate a return and select "Exchange" as your preferred option.
                </p>
                <p className="text-gray-600">
                  <strong>Note:</strong> Exchange items must meet the same eligibility criteria as returns. 
                  If the replacement item has a different price, we'll adjust the difference accordingly.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 border border-gray-100 rounded-xl">
                  <div className="text-2xl mb-2">📦</div>
                  <h4 className="font-medium text-gray-900">Step 1</h4>
                  <p className="text-sm text-gray-500">Initiate return online</p>
                </div>
                <div className="text-center p-4 border border-gray-100 rounded-xl">
                  <div className="text-2xl mb-2">🏷️</div>
                  <h4 className="font-medium text-gray-900">Step 2</h4>
                  <p className="text-sm text-gray-500">Print free shipping label</p>
                </div>
                <div className="text-center p-4 border border-gray-100 rounded-xl">
                  <div className="text-2xl mb-2">💰</div>
                  <h4 className="font-medium text-gray-900">Step 3</h4>
                  <p className="text-sm text-gray-500">Refund within 5-7 days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Return Timeline */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Return Timeline</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Initiate Return</h3>
                  <p className="text-gray-500 text-sm">Submit return request online (1-2 minutes)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Approval & Label</h3>
                  <p className="text-gray-500 text-sm">Return approved and prepaid shipping label sent via email (within 24 hours)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ship Back</h3>
                  <p className="text-gray-500 text-sm">Package and ship your return (allow 3-5 business days for delivery)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Inspection & Processing</h3>
                  <p className="text-gray-500 text-sm">Return inspected and processed (3-5 business days after receipt)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-blue-600 font-bold">5</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Refund Issued</h3>
                  <p className="text-gray-500 text-sm">Refund credited to original payment method (5-7 business days)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </div>
  );
}