import { BrandSectionCard } from "@/widgets/Brand/ui/BrandSectionCard";
import { BrandSectionList } from "@/widgets/Brand/ui/BrandSectionList";
import { CategorySection } from "@/widgets/Category/ui/CategorySection";
import { DealSection } from "@/widgets/Deal/ui/DealSection";
import { HeroPhoneSection } from "@/widgets/Hero/ui/HeroPhoneSection";
import { HeroSection } from "@/widgets/Hero/ui/HeroSection";
import { PopularPhonesSection } from "@/widgets/Popular-phones/ui/PopularPhonesSection";
import { ReviewSection } from "@/widgets/Review/ui/ReviewSection";
import { SubscribeSection } from "@/widgets/Subscribe/ui/SubscribeSection";
import { SupportSection } from "@/widgets/Support/ui/SupportSection";
import Image from "next/image";
export const metadata = {
  title: "Nexus"
};
export default function Home() {
 

  return (
    <main>
        <HeroSection />
        <BrandSectionList />
        <BrandSectionCard />
        <HeroPhoneSection />
        <PopularPhonesSection />
        <DealSection />
        <SupportSection />
        <CategorySection />
        <ReviewSection />
        <SubscribeSection />
    </main>
  );
}
