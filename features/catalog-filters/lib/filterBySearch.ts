import { CardPhone } from "@/entities/Card/type/model";


export function filterBySearch (products: CardPhone[], search?: string) {

    if (!search) return products;

    const q = search.toLowerCase();

    return products.filter(product => {
        const matchesModel = product.model.toLowerCase().includes(q);
        const matchesBrand = product.brand.toLowerCase().includes(q);

        const matchesCapacity = product.variants.some((v: any) =>
            v.capacity.toLowerCase().includes(q)
        );

        const matchesColor = product.variants.some((v: any) =>
            v.colors.some((c: any) => c.name.toLowerCase().includes(q))
        );

        return matchesModel || matchesBrand || matchesCapacity || matchesColor;
    });


}