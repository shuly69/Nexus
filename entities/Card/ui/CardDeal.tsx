"use client";

import { useCartStore } from "@/features/cart/model/store";
import type { CardPhone } from "../type/model";
import { DEAL_STATUS_COLORS, DEAL_STATUS_LABELS } from "../type/status";

export function CardDeal({ brand, model, imageUrl, price, oldPrice, id, variants, status, specs, description, features }: CardPhone) {
  const { addToCart } = useCartStore();

  const firstVariant = variants?.[0];
  const firstColor = firstVariant?.colors?.[0];
  const stock = firstVariant?.colors?.[0].stock;

  const handleClick = () => {
    addToCart({
      id: String(id),
      model,
      brand,
      colorId: firstColor?.name ?? "",
      capacity: firstVariant?.capacity ?? "",  // fixed: was 'capcity'
      price,
      quantity: 1,
      imageUrl,
      specs,
      description,
      features,
    });
  };

  return (
    <article
      key={id}
      className="max-w-97.25 w-full bg-[linear-gradient(0deg,#EEF2FF_0%,#FAF5FF_100%)] border border-[#E0E7FF] rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex gap-5 items-center"
    >
      <div className="w-24.5 h-32 rounded-xl">
        <img className="w-full h-full object-cover rounded-xl" src={imageUrl} alt="" />
      </div>
      <div className="w-full max-w-56">
        <span className={`py-1 px-2 text-[12px] font-bold rounded-lg ${DEAL_STATUS_COLORS[status as keyof typeof DEAL_STATUS_COLORS]}`}>
          {DEAL_STATUS_LABELS[status as keyof typeof DEAL_STATUS_LABELS]}
        </span>
        <div className="flex flex-col gap-0.5 mt-2">
          <h3 className="text-[#111827] text-base font-bold">{brand} {model}</h3>
          <span className="text-[12px] text-[#9CA3AF]">{firstColor?.name ?? "No color"} · {firstVariant?.capacity ?? "No capacity"}</span>
        </div>
        <div className="mt-3 mb-2 flex flex-col gap-1">
          <div className="text-[#9CA3AF] text-[12px] flex justify-between">
            <span>Stock remaining</span>
            <span>{stock} left</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-[#E5E7EB] relative">
            <span className="absolute top-0 left-0 h-full bg-[#4F46E5] rounded-full" style={{ width: `${stock && ((stock / 50) * 100)}%` }} />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            {oldPrice && oldPrice > price ? (
              <span className="text-[#9CA3AF] text-lg line-through">${oldPrice}</span>
            ) : ""}
            <span className="text-[#111827] text-lg font-bold">${price}</span>
          </div>
          <button onClick={handleClick} className="w-19 h-8 rounded-xl bg-[#4F46E5] text-white text-[12px] cursor-pointer hover:bg-[#3b3bb4]">
            Buy Now
          </button>
        </div>
      </div>
    </article>
  );
}
