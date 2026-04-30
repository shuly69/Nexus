export function OrderSummarySection({ subtotal, tax, total, handleCheckout }: { subtotal: number, tax: number, total: number, handleCheckout: () => void    }) {

  return (
        <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-24">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-600">
                    <span>Estimated Tax (8%)</span>
                    <span>${tax.toLocaleString()}</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between font-bold text-lg text-gray-900">
                      <span>Total</span>
                      <span>${total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={handleCheckout}
                  className=" cursor-pointer w-full mt-6 bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-sm"
                >
                  Proceed to Checkout →
                </button>
                
                <div className="mt-4 flex justify-center gap-4 text-xs text-gray-500">
                  <span>🔒 Secure Checkout</span>
                  <span>💳 0% Financing</span>
                  <span>🚚 Free Delivery</span>
                </div>
              </div>
            </div>
    )
}