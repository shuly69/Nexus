"use client";

import { CardPhone } from "@/entities/Card/type/model";
import { expandPhone } from "@/entities/Phone/lib/expandPhone";
import { getStockByPhone } from "@/entities/Phone/lib/getTotalStock";
import { savePhones } from "@/entities/Phone/mock/SavePhones";
import { useCatalogFilters } from "@/features/catalog-filters/model/useCatalogFilters";
import { brands } from "@/shared/config/brand";
import { products, productsSingle } from "@/shared/config/phone";
import { useFilteredProducts } from "@/features/catalog-filters/model/useFilteredProducts";
import { useAdminStore } from "@/features/admin/model/adminStore";

export function ProductsTabSection( ) {
   const {setPhones, setEditingPhone, setActiveTab, setPhoneToDelete, setShowDeleteConfirm, setVariantToDelete, setSuccessMessage, toggleBadge, updateVariantQuantity, phones } = useAdminStore();

  const {
    searchQuery,
    setSearchQuery,
  } = useCatalogFilters();
  
  const filteredProducts = useFilteredProducts(phones, {
    searchQuery,
  });

 
  const { expandedPhones, toggleExpandPhone } = expandPhone();
    return (
        <div>
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search phones..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>

            {/* Products List */}
            <div className="space-y-4">
              {filteredProducts.map((phone) => (
                <div key={phone.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  {/* Product Header */}
                  <div className="p-4 border-b border-gray-100 flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => toggleExpandPhone(String(phone.id))}
                        className=" cursor-pointer text-gray-400 hover:text-gray-600"
                      >
                        {expandedPhones.has(String(phone.id)) ? '▼' : '▶'}
                      </button>
                      <img src={phone.imageUrl} alt={phone.fullName} className="w-16 h-16 object-cover rounded-lg" />
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-bold text-gray-900">{phone.fullName}</h3>
                          {phone.status && (
                            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                              {phone.status.replace(/_/g, ' ').toUpperCase()}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{phone.brand} • {phone.variants.length} variants</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{phone.price}</p>
                        <p className="text-sm text-gray-500">Total: {getStockByPhone(phone)} units</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setEditingPhone(phone);
                            setActiveTab('edit');
                          }}
                          className="cursor-pointer px-3 py-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            setPhoneToDelete(phone);
                            setShowDeleteConfirm(true);
                          }}
                          className="cursor-pointer px-3 py-1.5 text-red-600 hover:bg-red-50 rounded-lg transition text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Badge Management */}
                  <div className="px-4 py-2 bg-gray-50 border-b border-gray-100 flex items-center gap-4 flex-wrap">
                    <span className="text-sm text-gray-600">Badge:</span>
                    <button
                      onClick={() => toggleBadge(phone, "limited_time_offer")}
                      className={`cursor-pointer px-3 py-1 rounded-full text-xs transition ${
                        phone.status === "limited_time_offer"
                          ? 'bg-red-100 text-red-700'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                    >
                      🔥 Limited Time Offer
                    </button>
                    <button
                      onClick={() => toggleBadge(phone, "best_seller")}
                      className={`cursor-pointer px-3 py-1 rounded-full text-xs transition ${
                        phone.status === "best_seller"
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                    >
                      ⭐ Best Seller
                    </button>
                    <button
                      onClick={() => toggleBadge(phone, "new_arrival")}
                      className={`cursor-pointer px-3 py-1 rounded-full text-xs transition ${
                        phone.status === "new_arrival"
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                    >
                      🆕 New Arrival
                    </button>
                    <button
                      onClick={() => toggleBadge(phone, undefined)}
                      className="cursor-pointer px-3 py-1 rounded-full text-xs bg-gray-200 text-gray-600 hover:bg-gray-300"
                    >
                      Remove Badge
                    </button>
                  </div>

                  {/* Expanded Variants */}
                  {expandedPhones.has(String(phone.id)) && (
                    <div className="p-4">
                      <h4 className="font-medium text-gray-700 mb-3">Variants</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Color</th>
                              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Storage</th>
                              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Quantity</th>
                              <th className="px-4 py-2 text-right text-sm font-medium text-gray-500">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {phone.variants.map((variant: {
                              capacity: string;
                              colors: { id?: string; name: string; stock: number }[];
                            }, index: number) => (
                              <tr key={variant.colors[index]?.id}>
                                <td className="px-4 py-3">
                                  <div className="flex items-center gap-2">
                                    <div
                                      className="w-4 h-4 rounded-full border border-gray-300"
                                      style={{ backgroundColor: variant.colors[index]?.name || '#ccc' }}
                                    />
                                    <span className="text-sm text-gray-700">{variant.colors[index]?.name}</span>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-700">{variant.capacity}</td>
                                
                                <td className="px-4 py-3">
                                  <input
                                    type="number"
                                    value={variant.colors[index]?.stock || 0}
                                    onChange={(e) => updateVariantQuantity(phone, variant.capacity, String(variant.colors[index]?.id), parseInt(e.target.value) || 0)}
                                    className="w-20 px-2 py-1 border border-gray-200 rounded-lg text-sm text-center"
                                    min="0"
                                  />
                                </td>
                                <td className="px-4 py-3 text-right">
                                  <button
                                    onClick={() => {
                                      setVariantToDelete({ phone, variant });
                                      setShowDeleteConfirm(true);
                                    }}
                                    className="cursor-pointer text-red-500 hover:text-red-700 text-sm"
                                  >
                                    Remove
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {filteredProducts.length === 0 && (
                <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
                  <p className="text-gray-500">No phones found</p>
                </div>
              )}
            </div>
          </div>
    )
}