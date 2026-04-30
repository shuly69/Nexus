import { useCartStore } from "@/features/cart/model/store";
import { CartItem } from "@/features/cart/type/model";

export function CartItemTable() {
    const { items, increase, decrease, removeFromCart} = useCartStore();
    
    return (
        <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden overflow-x-auto">
                <table className="w-full min-w-125 md:min-w-0">
                    {/* Table Header - hidden on mobile, visible on tablet/desktop */}
                    <thead className="hidden md:table-header-group bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-4 md:px-6 py-4 text-left text-sm font-medium text-gray-500">Product</th>
                            <th className="px-4 md:px-6 py-4 text-center text-sm font-medium text-gray-500">Quantity</th>
                            <th className="px-4 md:px-6 py-4 text-right text-sm font-medium text-gray-500">Price</th>
                            <th className="px-4 md:px-6 py-4 text-right text-sm font-medium text-gray-500">Total</th>
                        </tr>
                    </thead>

                    {/* Cart Items */}
                    <tbody className="divide-y divide-gray-100">
                        {items.map((item: CartItem) => (
                            <tr key={item.id} className="block md:table-row mb-4 md:mb-0 border border-gray-100 md:border-0 rounded-xl md:rounded-none">

                                {/* Product Info - adapts from card to table cell */}
                                <td className="block md:table-cell px-4 md:px-6 py-4 md:py-5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-linear-to-br from-gray-100 to-gray-50 rounded-xl flex items-center justify-center text-2xl shadow-sm shrink-0">
                                            <img src={item.imageUrl} alt={`${item.brand} ${item.model}`} className="w-12 h-12 object-contain" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <h3 className="font-semibold text-gray-900">{item.model}</h3>
                                                {/* {item.badge && (
                                                    <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                                                        {item.product.badge}
                                                    </span>
                                                )} */}
                                            </div>
                                            <p className="text-sm text-gray-500 mt-0.5">{item.colorId} {item.capacity}</p>
                                            <p className="text-xs text-gray-400 mt-1">{item.brand}</p>
                                        </div>
                                    </div>
                                </td>

                                {/* Quantity Controls - with label on mobile */}
                                <td className="block md:table-cell px-4 md:px-6 py-2 md:py-5">
                                    <div className="flex items-center justify-between md:justify-center">
                                        {/* Mobile label */}
                                        <span className="md:hidden text-sm text-gray-500 font-medium">Quantity:</span>
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => decrease(String(item.id), item.colorId, item.capacity)}
                                                className=" cursor-pointer w-8 h-8 rounded-full border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition flex items-center justify-center"
                                            >
                                                −
                                            </button>
                                            <span className="w-8 text-center font-medium text-gray-900">{item.quantity}</span>
                                            <button
                                                onClick={() => increase(String(item.id), item.colorId, item.capacity)}
                                                className=" cursor-pointer w-8 h-8 rounded-full border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition flex items-center justify-center"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </td>

                                {/* Unit Price - with label on mobile */}
                                <td className="block md:table-cell px-4 md:px-6 py-2 md:py-5">
                                    <div className="flex items-center justify-between md:justify-end">
                                        {/* Mobile label */}
                                        <span className="md:hidden text-sm text-gray-500 font-medium">Price:</span>
                                        <span className="text-gray-600">${item.price}</span>
                                    </div>
                                </td>

                                {/* Total Price & Remove - with label on mobile */}
                                <td className="block md:table-cell px-4 md:px-6 py-2 md:py-5">
                                    <div className="flex items-center justify-between md:justify-end gap-4">
                                        {/* Mobile label */}
                                        <span className="md:hidden text-sm text-gray-500 font-medium">Total:</span>
                                        <div className="flex items-center gap-4">
                                            <span className="font-semibold text-gray-900">
                                                ${(item.price * item.quantity)}
                                            </span>
                                            <button
                                                onClick={() => removeFromCart(String(item.id), item.colorId, item.capacity)}
                                                className= " cursor-pointer text-gray-400 hover:text-red-500 transition p-1"
                                                aria-label="Remove item"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Continue Shopping Link */}
                <div className="px-4 md:px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <a
                        href="/products"
                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 text-sm md:text-base"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Continue Shopping
                    </a>
                </div>
            </div>
        </div>
    )
}