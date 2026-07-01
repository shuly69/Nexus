"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { CardPhone, ColorVariant } from "../type/model";
import { PHONE_STATUS_COLORS, PHONE_STATUS_LABELS } from "../type/status";
import { HeartIcon } from "@/shared/ui/Icon/Icon";
import { StarRatingStatic } from "./Rating";
import { ColorChoice } from "./Color";
import { AddToCartButton } from "./AddToCard";
import { useFavouriteStore } from "@/features/favourite/model/store";

interface CardComponentProps {
    bgColorStatus?: string;
}

export function Card({ brand, model, imageUrl, price, oldPrice, rating, id, reviews, variants, status, slug, description, specs, features }: CardPhone) {
    
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    
    const firstVariant = variants?.[0];
    const firstColor = firstVariant?.colors?.[0];
    const firstCapacity = firstVariant?.capacity
    const { addToFavourite, findItem, items } = useFavouriteStore();
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const stock =
        variants
            .find(v => v.capacity === firstCapacity)
            ?.colors.find(c => c.name === selectedColor)
            ?.stock ?? 0;
    let color = selectedColor
    if (color === null) {
        color = 'white'
    }
     let colorSet: ColorVariant = {name: color, stock: stock}
    return (
        <article className="max-w-71.5 w-full min-h-117.75 border border-[#F3F4F6] rounded-t-2xl bg-white">
            <Link href={`/catalog/${slug}`} className="">
            <div className="w-full h-56 relative">
                <Image
                  className="object-cover w-full h-full rounded-t-2xl"
                  src={imageUrl}
                  alt={model}
                  fill
                  sizes="(max-width: 768px) 100vw, 286px"
                />
                {status && (
                    <span
                        className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-medium ${PHONE_STATUS_COLORS[status as keyof typeof PHONE_STATUS_COLORS]}`}
                    >
                        {PHONE_STATUS_LABELS[status as keyof typeof PHONE_STATUS_LABELS]}
                    </span>
                )}
                
                    {mounted && (
                        <span
                            className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center border cursor-pointer border-white rounded-full bg-white group"
                            onClick={(e) => {
                                e.preventDefault();
                                addToFavourite({ id: String(id), brand, model, price, quantity: 1, capacity: firstCapacity, colorId: firstColor?.name, imageUrl, description, specs, features });
                            }}
                        >
                            <HeartIcon
                                className="group-hover:fill-red-500 group-hover:border-red-500 transition-colors duration-300 w-5 h-5"
                                fill={`${findItem(String(id)) ? 'red' : '#374151'}`} color="white"
                            />
                        </span>
                    )}
            </div>
            </Link>
            <div className="p-4 flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <h4 className="text-[#4F46E5] text-[12px] font-bold uppercase">{brand}</h4>
                    <h3 className="text-base text-[#111827] font-extrabold">{model}</h3>
                    <div className="text-[#9CA3AF] flex gap-2 text-[12px]">
                        <span>{firstColor?.name ?? "No color"}</span>
                        <span>{firstCapacity ?? "No capacity"}</span></div>
                </div>
                <div className="flex gap-2">
                    {rating && rating > 0 && <StarRatingStatic value={rating} />}
                    {rating && reviews && reviews > 0 && (
                        <div className="flex gap-1 items-center">
                            <span className="text-[#9CA3AF] text-[12px]">({rating})</span>
                            <span className="text-[#9CA3AF] text-[12px]">{reviews} reviews</span>
                        </div>
                    )}
                </div>
                <ColorChoice colors={variants?.flatMap(v => v.colors)} color={selectedColor} setColor={setSelectedColor}/>
                <div className="flex justify-between">
                    <div>
                        {oldPrice && oldPrice > price ? (
                            <div className="flex items-center gap-0.5 flex-col">
                                <span className="text-[#111827] text-lg font-bold">${price}</span>
                                <span className="text-[#9CA3AF] text-lg font-bold line-through">${oldPrice}</span>
                            </div>
                        ) : (
                            <span className="text-[#111827] text-lg font-bold">${price}</span>
                        )}
                    </div>
                    <AddToCartButton id={String(id)} model={model} brand={brand} color={selectedColor ?? 'white'} capacity={firstCapacity} price={price} imageUrl={imageUrl} />
                </div> 
            </div>
             
        </article>
    )
} 