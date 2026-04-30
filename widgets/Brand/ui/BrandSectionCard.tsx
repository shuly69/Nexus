import { Container } from "@/shared/ui/Container/Container"
import { svgPaths } from "@/shared/config/svg";
import { BrandSectionCardCategory } from "./BrandSectionCardCategory";
import Link from "next/link";

export function BrandSectionCard() {
    return (
        <section id="brands" className="lg:p-20 md:p-10 sm:px-2 px-0.5 py-10 bg-[#F9FAFB]">
        <Container>
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-indigo-600 text-sm font-bold tracking-widest uppercase mb-2">Shop by Brand</p>
              <h2 className="text-4xl font-extrabold text-gray-900">All Your Favorites</h2>
            </div>
            <Link href="/catalog" className="text-gray-500 font-bold text-sm hover:text-gray-900 flex items-center gap-2 group">
              View all
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={svgPaths.p2aeb01c0}/>
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={svgPaths.p32b567f0}/>
              </svg>
            </Link>
          </div>

          <BrandSectionCardCategory />
        </Container>
        </section>
    )
}