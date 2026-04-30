
import { useCheckoutStore } from "../model/useCheckoutStore";

export function FormStep() {
    const { openSuccess } : any = useCheckoutStore();
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        openSuccess();
    }
    return (
        <div className="bg-white rounded-2xl max-w-md w-full p-6">
  <h2 className="text-xl font-bold mb-4">Shipping Details</h2>
  
  <form onSubmit={handleSubmit} className="space-y-4">
    <input
      type="text"
      placeholder="Full Name"
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
    />
    
    <input
      type="email"
      placeholder="Email"
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
    />
    
    <input
      type="tel"
      placeholder="Phone"
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
    />
    
    <input
      type="text"
      placeholder="Address"
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
    />
    
    <div className="grid grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="City"
        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
      />
      <input
        type="text"
        placeholder="Postal Code"
        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
      />
    </div>
    
    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
      <option>United States</option>
      <option>Canada</option>
      <option>United Kingdom</option>
    </select>
    
    <div className="flex gap-3 pt-4">
      <button type="button" className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50">
        Cancel
      </button>
      <button type="submit" className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Place Order
      </button>
    </div>
  </form>
</div>

    )
}