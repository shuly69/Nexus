import { brandsCatalog } from '@/shared/config/brand';

import { priceRanges } from '@/shared/config/price';
export function FiltersCatalog({brands, setBrands, price, setPrice, reset} : {brands : string[], setBrands : (brand: string) => void, price: any, setPrice : React.Dispatch<React.SetStateAction<any>>, reset: any}) {
    return (
        <div className="lg:w-72 shrink-0">
                  <div className="bg-white rounded-2xl border border-gray-200 p-5 sticky top-24">
                    <h3 className="font-semibold text-gray-900 mb-4">Filters</h3>
                    
                    {/* Brand Filter */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Brand</h4>
                      <div className="space-y-2">
                        {brandsCatalog.map((brand) => (
                          <label key={brand} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={brands.includes(brand)}
                              onChange={() => setBrands(brand)}
                              className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
                            />
                            <span className="text-sm text-gray-700">{brand}</span>
                          </label>
                        ))}
                      </div>
                    </div>
        
                    {/* Price Range Filter */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Price Range</h4>
                      <div className="space-y-2">
                        {priceRanges.map((range, idx) => (
                          <label key={idx} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="radio"
                              name="priceRange"
                              checked={price.label === range.label}
                              onChange={() => setPrice(range)}
                              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
                            />
                            <span className="text-sm text-gray-700">{range.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
        
                    {/* Active Filters */}
                    {(brands.length > 0 || price.label !== "All") && (
                      <div className="pt-4 border-t border-gray-100">
                        <button
                          onClick={reset}
        
                          className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer"
                        >
                          Clear all filters
                        </button>
                      </div>
                    )}
                  </div>
                </div>
    )
}