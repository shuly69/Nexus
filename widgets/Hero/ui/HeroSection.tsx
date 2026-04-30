"use client";
import { Container } from "@/shared/ui/Container/Container";
import { motion } from "motion/react";
import { svgPaths } from "@/shared/config/svg";
import { BannerState } from "@/widgets/Banner/ui/Banner";
import { HeroStatistic, HeroStatisticPolicy } from "./HeroStaticstic";
import { HeroButton } from "./HeroButton";
import Link from "next/link";
export function HeroSection() {
    return (
        <section className="relative overflow-hidden " style={{ background: "linear-gradient(148.434deg, rgb(15, 15, 15) 0%, rgb(26, 26, 46) 50%, rgb(22, 33, 62) 100%)" }}>
        <Container>
          <div className="flex flex-wrap  lg:gap-16 md:gap-4 items-center  lg:p-20 md:p-10 py-10 px-2 justify-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <BannerState label="New Arrivals — Spring 2025" colorFill="bg-white/10" colorBorder="border-white/20" colorText="text-white" colorStroke="#4ADE80"/>
                
                <h1 className="text-5xl sm:text-7xl  font-extrabold text-white leading-tight">
                  The Future<br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">In Your Hand</span>
                </h1>
                
                <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                  Discover the latest smartphones from the world's top brands. Unmatched performance, stunning design, delivered to your door.
                </p>
              </div>

              <HeroStatistic />

              <div className="flex gap-4">
                <Link href="/catalog"><HeroButton>Shop Now <img className="inline pl-0.5" src="svg/hero-arrow.svg" alt="" /></HeroButton></Link>
                
                
              </div>

              <HeroStatisticPolicy />
            </div>

            {/* Right Content - Floating Phone */}
            <div className="relative flex items-center justify-center h-130 mx-auto lg:items-center">
              {/* Glow Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
              
              {/* Floating Phone Container */}
              <motion.div
                className="relative -rotate-2"
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Phone Card */}
                <div className="relative w-70.5 h-105">
                  <div className="absolute inset-0 bg-transparent border border-white/10 rounded-[48px] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
                    <img 
                      src="/images/hero-section/phone.jpg" 
                      alt="iPhone" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating Specs Cards */}
                  <motion.div
                    className="absolute -left-17.25 top-17.25 bg-white/10  border border-white/20 rounded-2xl shadow-lg p-3 w-31"
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  >
                    <p className="text-gray-300 text-xs mb-2">Battery</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full w-[87%] bg-green-400 rounded-full"></div>
                      </div>
                      <span className="text-white text-xs font-extrabold">87%</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -right-19 top-51.75 bg-white/10   border border-white/20 rounded-2xl shadow-lg p-3 w-22.25"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4,
                    }}
                  >
                    <p className="text-gray-300 text-xs mb-1 ">Camera</p>
                    <p className="text-white font-extrabold text-lg ">200MP</p>
                  </motion.div>

                  <motion.div
                    className="absolute -left-11 top-86.5 bg-indigo-600/80  border border-indigo-500/50 rounded-2xl shadow-lg p-3 w-19.25"
                    animate={{
                      y: [0, -12, 0],
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.6,
                    }}
                  >
                    <p className="text-indigo-200 text-xs mb-1">Chip</p>
                    <p className="text-white font-extrabold text-sm">A18 Pro</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
        
      </section>
    )
}