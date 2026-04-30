export function sortProducts(products : any[], sortBy : any) {
  const sorted = [...products];

  switch (sortBy) {
    case "price-low":
      return sorted.sort((a, b) => a.price - b.price);

    case "price-high":
      return sorted.sort((a, b) => b.price - a.price);

    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);

    case "name":
      return sorted.sort((a, b) => a.model.localeCompare(b.model));

    default:
      return sorted; // featured
  }
}
