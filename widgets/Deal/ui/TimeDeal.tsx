"use client";
import { Timer } from '@/entities/Promo/ui/PromoTimer';
import { useState, useEffect } from 'react';
export function TimerDeal() {
    return (
        <div className="text-sm font-medium text-[#9CA3AF] bg-[#111827] w-63.5 h-13 justify-center gap-3 rounded-full shadow-sm flex items-center">

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.75 6.75C12.75 5.56331 12.3981 4.40328 11.7388 3.41658C11.0795 2.42989 10.1425 1.66085 9.0461 1.20673C7.94975 0.7526 6.74335 0.63378 5.57946 0.865291C4.41558 1.0968 3.34648 1.66825 2.50736 2.50736C1.66825 3.34648 1.0968 4.41558 0.865291 5.57946C0.63378 6.74335 0.7526 7.94975 1.20673 9.0461C1.66085 10.1425 2.42989 11.0795 3.41658 11.7388C4.40328 12.3981 5.56331 12.75 6.75 12.75" stroke="#A78BFA"  />
                <path d="M6.75 3.41675V6.75008L7.41667 7.41675M9.41667 9.41675H13.4167V13.4167H9.41667V9.41675Z" stroke="#A78BFA"  />
            </svg>
            <span>Ends in:</span>
            <Timer />
        </div>
    )
}