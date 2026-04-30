'use client';
import { StarRatingStatic } from "./Rating";
import { useState } from "react";

export function ReviewCard({ numberStar, review, name, product }: { numberStar: number, review: string, name: string, product: string }) {
    const [ expanded, setExpanded ] = useState(false)
    const reviewLength : boolean = review.length > 300
    return (
        <article className="bg-white max-w-97.25 w-full min-h-59 border rounded-2xl p-6 text-start flex flex-col">
            <StarRatingStatic value={numberStar} />
            <p className={`text-[#374151] text-sm mt-4  overflow-hidden ${expanded ? "max-h-full" : "h-20"}`}>{review}</p>
            {reviewLength ?
            <button className="cursor-pointer text-start text-[12px] text-amber-800 mt-0.5 mb-1" onClick={() => setExpanded(!expanded)}>{expanded ? "Hide" : "Read more"}</button> : ""
            }
            <div className="mt-auto">
                <h4 className="text-[#111827] font-bold text-sm">{name}</h4>
                <span className="text-[12px] text-[#9CA3AF]">Verified Buyer · {product}</span>
            </div>
        </article>
    )
}