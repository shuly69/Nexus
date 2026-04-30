"use client";
import { filterOptions } from "@/shared/config/sort"
import { useState } from "react"

export function FiltersPhoneSection({filter, setFilter} : {filter: string, setFilter: React.Dispatch<React.SetStateAction<string>>}) {

    return (
        <ul className="flex flex-wrap gap-2 my-10">
            {filterOptions.map((option) => (
                <li key={option.id} className={`cursor-pointer border py-2 px-4 rounded-xl ${filter === option.value ? 'text-white border-[#111827] bg-[#111827]' : ' text-[#4B5563] border-[#E5E7EB] bg-white'}`} onClick={() => setFilter(option.value)}>
                    {option.label}
                </li>
            ))}
            </ul>
    )
}