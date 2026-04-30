
import { useCheckoutStore } from "../model/useCheckoutStore";

export function ConfirmStep({ total }: { total: number }) {
    const { openUserInfo, close } = useCheckoutStore();

  const handleContinue = () => {
   openUserInfo();

  };

    return (
        <>
      <div className="text-center mb-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-gray-900">Confirm Your Order</h3>
        <p className="text-gray-500 mt-2">
          Total amount: <span className="font-bold text-gray-900">${total.toLocaleString()}</span>
        </p>
      </div>

      <div className="space-y-2 mb-6">
        <p className="text-sm text-gray-600">📦 Free Next-Day Delivery</p>
        <p className="text-sm text-gray-600">🔒 Secure Payment</p>
        <p className="text-sm text-gray-600">💳 0% Installments Available</p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={close}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition"
        >
          Cancel
        </button>

        <button
          onClick={handleContinue}
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Continue
        </button>
      </div>
    </>


    )
}