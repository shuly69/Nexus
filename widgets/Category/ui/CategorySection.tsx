import { categoryTypePhone } from "@/shared/config/category";
import { Container } from "@/shared/ui/Container/Container";
import { section } from "motion/react-client";
import Link from "next/link";
import { CategoryCard } from "./CategoryCard";

export function CategorySection() {
    return (
        <section className="lg:p-20 md:p-10 py-10 sm:px-2 px-0.5 bg-white">
            <Container>
                <div className="flex flex-wrap justify-center gap-6">
                    {categoryTypePhone.map((item) => (
                        <CategoryCard key={item.id} {...item} />
                    ))}
                </div>
            </Container>
        </section>
    )
}