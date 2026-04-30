import { CatalogSection } from "@/widgets/Catalog/ui/CatalogSection";
import { Suspense } from "react";

export const metadata = {
  title: "Catalog"
};
export default function SearchPage() {
 return (
  <Suspense fallback={<div>Loading...</div>}>
   <CatalogSection />
   </Suspense>

  );
}