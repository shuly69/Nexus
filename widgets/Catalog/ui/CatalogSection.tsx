'use client';

import { Card } from '@/entities/Card/ui/Card';
import { useCatalogFilters} from '@/features/catalog-filters/model/useCatalogFilters';
import { useFilteredProducts } from '@/features/catalog-filters/model/useFilteredProducts';
import { SearchCatalog } from './SearchCatalog';
import { FiltersCatalog } from './FiltersCatalog';
import { SortingCatalog } from './SortingCatalog';
import { useEffect } from 'react';
import { useAdminStore } from '@/features/admin/model/adminStore';
export function CatalogSection() {
  const { phones, hydrate } = useAdminStore();
      useEffect(() => {
          hydrate();
        }, []);
    const {
  searchQuery,
  setSearchQuery,
  selectedBrands,
  toggleBrand,
  selectedPriceRange,
  setSelectedPriceRange,
  sortBy,
  setSortBy,
  resetFilters,
} = useCatalogFilters();

const filteredProducts = useFilteredProducts(phones, {
  searchQuery,
  selectedBrands,
  selectedPriceRange,
  sortBy,
});

return (
     <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Search Smartphones</h1>
        <p className="text-gray-500">Find the perfect phone from top brands</p>
      </div>

      {/* Search Bar */}
      <SearchCatalog query={searchQuery} setQuery={setSearchQuery}/>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <FiltersCatalog reset={resetFilters} price={selectedPriceRange} setPrice={setSelectedPriceRange} brands={selectedBrands} setBrands={toggleBrand} />

        {/* Products Grid */}
        <div className="flex-1">
          {/* Results Header */}
          
            <SortingCatalog sort={sortBy} setSort={setSortBy} products={filteredProducts} />
          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No phones found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or filters</p>
              <button
                onClick={resetFilters}

                className="text-blue-600 hover:text-blue-700"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProducts.map((p) => (
                  <Card key={p.id}
                      id={p.id}
                      brand={p.brand}
                      model={p.model}
                      imageUrl={p.imageUrl}
                      price={p.price}
                      rating={p.rating}
                      reviews={12}
                      variants={p.variants}
                      specs={p.specs}
                      description={p.description}
                      features={p.features}
                      slug={p.slug}
                  />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
)
}