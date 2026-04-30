"use client";

import { useAdminStore } from "@/features/admin/model/adminStore";

export function ActiveTabsAdmin() {
  const { activeTab, setActiveTab } = useAdminStore();
  const tabs  = [
    { id: "overview", label: "Overview" },
    { id: "products", label: "Products" },
    { id: "add", label: "Add Product" },
  ];
    return (
         <div className="flex gap-2 mb-6 border-b border-gray-200">
          {tabs.map((tab, index) => (
          <button key={index}
            onClick={() => setActiveTab(tab.id as "overview" | "products" | "add" | "edit")}
            className={`cursor-pointer px-6 py-3 font-medium transition ${
              activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
          ))}
        </div>
    )
}