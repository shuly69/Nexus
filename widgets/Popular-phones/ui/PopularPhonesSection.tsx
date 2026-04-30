"use client";
import { filterOptions, sortOptions } from "@/shared/config/sort";
import { Container } from "@/shared/ui/Container/Container";
import { FiltersPhoneSection } from "./Filters";
import { Card } from "@/entities/Card/ui/Card";
import Link from "next/dist/client/link";
import { useHeroFilters } from "@/features/hero-filters/model/useHeroFilters";
import { useFilteredProducts } from "@/features/hero-filters/model/useFilteredProducts";
import { useAdminStore } from "@/features/admin/model/adminStore";
import { useEffect } from "react";

export function PopularPhonesSection() {
    const { phones, hydrate } = useAdminStore();
    useEffect(() => {
        hydrate();
      }, []);
    const {sortBy, setSortBy, selectedFilter, setSelectedFilter} = useHeroFilters()
    const filteredPhones = useFilteredProducts(phones, {
        sortBy,
        selectedFilter
    })
    return (
        <section id="shop" className="bg-[#F9FAFB] lg:p-20 md:p-10 py-10 px-0.5 sm:px-2">
            <Container>
            <h3 className="text-sm text-[#4F46E5] uppercase font-bold mb-2">Browse</h3>
            <div className="flex justify-between flex-wrap gap-1.5">
                <h2 className="text-[#111827] text-4xl font-extrabold">Popular Phones</h2>
                <div className="flex gap-3 items-center">
                    <label className="text-[#6B7280] text-sm" htmlFor="popular-phones">Sort by:</label>
                    <select className="cursor-pointer border border-[#E5E7EB] bg-white w-41.75 h-8.75 rounded-xl text-[#111827]/50" name="popular-phones" id="popular-phones" onChange={(e) => setSortBy(e.target.value)}>
                        {sortOptions.map((option) => (
                            <option key={option.id} value={option.value}>{option.label}</option>
                        ))}
                        </select>
                </div>
            </div>
            <FiltersPhoneSection filter={selectedFilter} setFilter={setSelectedFilter} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6 mt-8">
                {filteredPhones.map((phone) => (
                    <Card key={phone.id} {...phone} />
                ))}
            </div>
            <Link href="/catalog" className="w-[215px] h-[49px] flex items-center justify-center text-[#374151] text-sm border border-[#E5E7EB] rounded-[16px] bg-white font-bold hover:border-amber-950 transition-colors duration-300 mt-12 mx-auto"> Load More Phones </Link>
            </Container>
        </section>
    )
}