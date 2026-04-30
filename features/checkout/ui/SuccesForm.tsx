
export function SuccessForm() {
    return (
       <div className="text-center py-8 animate-fadeIn">
    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
      <span className="text-4xl">✔</span>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Placed!</h2>
    <p className="text-gray-600">Thank you for shopping at Nexus</p>
    <p className="text-sm text-gray-400 mt-2">Your order will arrive tomorrow</p>
  </div>


    )
}