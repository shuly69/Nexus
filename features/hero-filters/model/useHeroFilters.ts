"use client";
import { useState } from "react"
export function useHeroFilters() {
    const [selectedFilter, setSelectedFilter] = useState("all")
    const [sortBy, setSortBy] = useState("featured")
    return {
        selectedFilter,
        setSelectedFilter,
        sortBy,
        setSortBy,
    };
}