import { categoryPhones } from "@/shared/config/category";

export function BrandSectionCardCategory() {
    return (
        <ul className="grid lg:grid-cols-6 sm:grid-cols-1 md:grid-cols-3 gap-6" aria-label="Phone brands">
            {categoryPhones.map((brand) => (
              <li 
                key={brand.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <img src={`svg/brand/${brand.svgPath}.svg`} alt={brand.name} />
                </div>
                <p className="font-bold text-gray-900 mb-1">{brand.name}</p>
                <p className="text-xs text-gray-400">{brand.models} models</p>
              </li>
            ))}
          </ul>
    )
}