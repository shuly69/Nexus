"use client";

import { useAdminStore } from "@/features/admin/model/adminStore";

export function SuccessMessage() {
    const { successMessage } = useAdminStore();
    return (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl">
            <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-green-700">{successMessage}</p>
            </div>
        </div>
    )
}