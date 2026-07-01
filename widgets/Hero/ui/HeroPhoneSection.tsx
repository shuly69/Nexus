"use client";
import { Container } from "@/shared/ui/Container/Container"
import { BannerState } from "@/widgets/Banner/ui/Banner"
import { HeroPhoneStatistic } from "./HeroStaticstic"
import { HeroButton } from "./HeroButton"
import Link from "next/link"
import { useCartStore } from "@/features/cart/model/store"
import { productsSingle } from "@/shared/config/phone"

export function HeroPhoneSection() {
    const { addToCart } = useCartStore();

      // The hero showcases the flagship iPhone 16 Pro Max — reuse its
      // catalog entry so the cart item carries full specs/description/features.
      const hero = productsSingle[0];

      const handleClick = () => {
        addToCart({id: "899", model: "iphone 16 pro max", brand: "Apple", colorId:"Desert Titanium", capacity: "256", price: 1199, quantity: 1, imageUrl: "images/phone-section/phone1.jpg", specs: hero.specs, description: hero.description, features: hero.features});
      }
    return (
        <section className=" lg:p-20 md:p-10 py-10 px-1 sm:px-2 bg-white">
            <Container>
                <div className=" bg-[linear-gradient(90deg,#111827_0%,#1E1B4B_50%,#111827_100%)]  lg:p-16 md:p-8 py-8 sm:px-4 px-1 rounded-3xl relative md:min-h-full sm:min-h-250 ">
                    <BannerState  label="Editor's Choice" colorFill="bg-indigo-500/20" colorBorder="border-indigo-400/30" colorText="text-indigo-300" colorStroke="#818CF8" />
                    <article className="mt-6.25 flex justify-between flex-wrap ">
                    <div className="lg:max-w-120  md:max-w-80 sm:max-w-full flex flex-col gap-6  ">
                            <div className="flex flex-col gap-1">
                                <h2 className="font-bold text-5xl text-white ">iPhone 16 Pro Max</h2>
                                <span className="text-indigo-300 text-lg ">Desert Titanium · 256GB</span>
                            </div>
                        
                        <p className="text-base text-[#9CA3AF] lg:max-w-md md:max-w-80 tracking-[0.8px] ">The most powerful iPhone ever. With A18 Pro chip, the most advanced camera system, and titanium aerospace- grade build — redefining what a smartphone can do.</p>
                        <HeroPhoneStatistic/>
                            <ul className="flex gap-6 items-center">
                                <li className="flex flex-col">
                                    <span className="text-[12px] text-[#9CA3AF] line-through">$1,299</span>
                                    <span className="text-4xl text-white">$1,199</span>
                                </li>
                                <li className="flex flex-col items-center gap-2">
                                    <div onClick={handleClick}><HeroButton>Add to Cart</HeroButton></div>
                                    <Link className="text-[#9CA3AF] underline" href="/">Learn more</Link>
                                </li>

                            </ul>
                    </div>
                    
                    <div className="h-125 md:h-full">
                        <img  className="rounded-t-4xl flex mx-auto absolute bottom-0 lg:right-[20%] md:right-[3%] right-[35%]" src="images/hero-section/hero-phone-section.png" alt="iPhone 16 Pro Max" />
                    </div>
                    
                </article>
                </div>
                
            </Container>
        </section>
    )
}