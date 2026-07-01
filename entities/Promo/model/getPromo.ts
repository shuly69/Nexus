"use client";
import { useEffect, useState } from "react";

type TimeLeft = {
  hours: string;
  minutes: string;
  seconds: string;
};

export function usePromoCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Fetched once on mount — simulates an API call that returns the promo end time.
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const serverEnd = endOfDay.getTime();
    const serverNow = now.getTime();
    const clientStart = Date.now();
    function update() {
      const clientNow = Date.now();
      const syncedNow = serverNow + (clientNow - clientStart);
      const diff = serverEnd - syncedNow;
      if (diff <= 0) {
        setTimeLeft({
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }

    // Called once on mount to set the initial countdown value.

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}
