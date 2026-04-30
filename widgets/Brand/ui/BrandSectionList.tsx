import { brands } from "@/shared/config/brand"
import { Container } from "@/shared/ui/Container/Container"

export function BrandSectionList() {
    return (
         <section className="border-b border-gray-100 lg:p-20 md:p-10 px-0.5 sm:px-2 py-10 bg-white">
        <Container>
          <p className="text-gray-400 text-xs font-bold tracking-widest uppercase text-center mb-8">
            Official Authorized Retailer
          </p>
          <ul className="flex flex-wrap items-center justify-center lg:gap-12 md:gap-6 gap-2 text-[#374151] opacity-50" aria-label="Authorized brands">
            {brands.map((brand) => (
              <li key={brand.id} className="text-[22px] font-extrabold">
                {brand.name}
              </li>
            ))}
          </ul>
        </Container>
        </section>
    )
}