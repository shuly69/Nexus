'use client';
import { usePromoCountdown } from "../model/getPromo";

export function Timer() {
    const timeLeft = usePromoCountdown();
      if (!timeLeft) {
    return (
      <div className="w-63.5 h-13 bg-[#111827] rounded-full animate-pulse" />
    );
  }



    return (
            <ul className="flex items-center gap-1.25 text-[12px] font-bold text-white">
                <li className='w-8 h-7 bg-white/10 rounded-lg flex items-center justify-center'>{timeLeft.hours}</li>
                <li>:</li>
                <li className='w-8 h-7 bg-white/10 rounded-lg flex items-center justify-center'>{timeLeft.minutes}</li>
                <li>:</li>
                <li className='w-8 h-7 bg-white/10 rounded-lg flex items-center justify-center'>{timeLeft.seconds}</li>
            </ul>
    )
}