import { useCheckoutStore } from "../model/useCheckoutStore";

export function AddressStep() {
    const { openPayment } = useCheckoutStore();

  const handleSubmit = (e : React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    openPayment();
  };

    return (
        <>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Shipping Address
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 transition"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Address</label>
            <input
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 transition"
              placeholder="123 Main St"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">City</label>
            <input
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 transition"
              placeholder="London"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Phone</label>
            <input
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 transition"
              placeholder="+44 123 456 789"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg"
        >
          Continue to Payment
        </button>
      </form>
    </>


    )
}