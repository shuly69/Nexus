"use client";

import { CardPhone } from "@/entities/Card/type/model";
import { stats } from "@/entities/Phone/lib/getStats";
import { useAdminStore } from "@/features/admin/model/adminStore";

export function OverviewTabSection() {
  const { phones } = useAdminStore();
  const statsItems = stats(phones);
  
    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">📱</span>
                  <span className="text-2xl font-bold text-gray-900">{statsItems.totalPhones}</span>
                </div>
                <p className="text-gray-600">Phone Models</p>
              </div>
              
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">🎨</span>
                  <span className="text-2xl font-bold text-gray-900">{statsItems.totalVariants}</span>
                </div>
                <p className="text-gray-600">Total Variants</p>
              </div>
              
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">🏷️</span>
                  <span className="text-2xl font-bold text-gray-900">{statsItems.totalBrands}</span>
                </div>
                <p className="text-gray-600">Brands</p>
              </div>
              
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">💰</span>
                  <span className="text-2xl font-bold text-gray-900">${Math.round(statsItems.averagePrice)}</span>
                </div>
                <p className="text-gray-600">Average Price</p>
              </div>
              
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">📦</span>
                  <span className="text-2xl font-bold text-gray-900">{Number(statsItems.totalStock) || 0}</span>
                </div>
                <p className="text-gray-600">Total Units</p>
              </div>
            </div>

            {/* Brand Distribution */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Brand Distribution</h2>
              <div className="space-y-3">
                {statsItems.brandDistribution.map((brand : { brand: string; count: number }) => (
                  <div key={brand.brand}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{brand.brand}</span>
                      <span>{brand.count} models</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 rounded-full h-2"
                        style={{ width: `${(brand.count / statsItems.totalPhones) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Top Rated Phones */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">⭐ Top Rated Phones</h2>
                <div className="space-y-3">
                  {statsItems.topRated.map((phone : CardPhone) => (
                    <div key={phone.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <img src={phone.imageUrl} alt={phone.model} className="max-h-17"/>
                        <div>
                          <p className="font-medium text-gray-900">{phone.model}</p>
                          <p className="text-sm text-gray-500">{phone.brand}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{phone.rating} ⭐</p>
                        <p className="text-sm text-gray-500">{phone.reviews} reviews</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Most Expensive Phones */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">💎 Most Expensive Phones</h2>
                <div className="space-y-3">
                  {statsItems.mostExpensive.map((phone : CardPhone) => {
                    const maxPrice = Math.max(phone.price);
                    return (
                      <a key={phone.id} href={`catalog//${phone.slug}`} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <img src={phone.imageUrl} alt={phone.model} className="max-h-17" />
                          <div>
                            <p className="font-medium text-gray-900">{phone.model}</p>
                            <p className="text-sm text-gray-500">{phone.brand}</p>
                          </div>
                        </div>
                        <p className="font-bold text-gray-900">${maxPrice}</p>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
    )
}