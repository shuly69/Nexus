import { useCheckoutStore } from "../model/useCheckoutStore";

export function PaymentStep() {
     const { openSuccess } = useCheckoutStore();

  const handleSubmit = (e : React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    openSuccess();
  };

    return (
       <>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Payment Method
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-3">
          <label className="text-sm text-gray-600">Choose a payment method</label>

          <div className="space-y-3">
            <label className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:border-blue-500 transition">
              <input type="radio" name="payment" value="card" required />
              <span className="text-gray-800 font-medium">💳 Credit / Debit Card</span>
            </label>

            <label className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:border-blue-500 transition">
              <input type="radio" name="payment" value="paypal" />
              <span className="text-gray-800 font-medium">🅿 PayPal</span>
            </label>

            <label className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:border-blue-500 transition">
              <input type="radio" name="payment" value="cod" />
              <span className="text-gray-800 font-medium">💵 Cash on Delivery</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-lg"
        >
          Place Order
        </button>
      </form>
    </>


    )
}