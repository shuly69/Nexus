
export const getProductBySlug = (slug: string, productCatalog: any[]) => {
    return productCatalog.find(product => product.slug === slug);
}