
import { RecommendationCard } from "@/entities/Card/ui/RecomendationCard";
import { useAdminStore } from "@/features/admin/model/adminStore";
import { useEffect } from "react";
                
export function RecommendationSection() {
      const { phones, hydrate } = useAdminStore();
      useEffect(() => {
        hydrate();
      }, []);
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {phones.slice(0, 4).map((product) => (
              <RecommendationCard 
                key={product.id}
                brand={product.brand}
                model={product.model}
                id={String(product.id)}
                color={product.variants[0].colors[0].name}
                capacity={product.variants[0].capacity}
                price={product.price}
                oldPrice={product.oldPrice}
                imageUrl={product.imageUrl}
                slug={product.slug}
              />
            ))}
          </div>
    )
}