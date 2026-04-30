import { CardPhone } from "@/entities/Card/type/model";

export function SortingCatalog({products, sort, setSort} : {products : CardPhone[], sort : string, setSort: React.Dispatch<React.SetStateAction<string>>}) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <p className="text-sm text-gray-500">
              {products.length} {products.length === 1 ? 'result' : 'results'} found
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-400"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>
    )
}