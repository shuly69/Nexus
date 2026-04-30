"use client";
import { Container } from "@/shared/ui/Container/Container";
import { TimerDeal } from "./TimeDeal";
import { DEAL_STATUS_COLORS, DEAL_STATUS_LABELS } from "@/entities/Card/type/status";
import { span } from "motion/react-client";
import { phoneDeals } from "@/shared/config/phone";
import { CardDeal } from "@/entities/Card/ui/CardDeal";
import { useEffect } from "react";
import { useAdminStore } from "@/features/admin/model/adminStore";

export function DealSection() {
     const { phones, hydrate } = useAdminStore();
         useEffect(() => {
             hydrate();
           }, []);
    return (
<section id="deals" className=" lg:p-20 md:p-10 py-10 px-0.5 sm:px-2 bg-white">
    <Container>
           {/* Header */}
      <div className="flex justify-between items-end mb-8 flex-wrap gap-1">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-[#4F46E5] uppercase tracking-wider">
            LIMITED TIME
          </span>
          <h2 className="text-4xl font-extrabold text-[#111827]">Today's Deals</h2>
        </div>

       
        <TimerDeal />
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {phones.slice(0,3).map((deal, index) => (
          <CardDeal key={index} {...deal} />
        ))}
      </div>

    </Container>
   
    </section>
    )
}

