"use client";
import { useAuthRehydrate } from "@/features/auth/model/useAuthRehydrate";
import { Banner } from "@/widgets/Banner/ui/Banner";
import { Navigation } from "@/widgets/Navigation/ui/Navigation";


export function Header() {
  useAuthRehydrate();

    return (
        <header>
        {/* Promo Banner */}
       <Banner />

        <Navigation />
      </header>
    )
}