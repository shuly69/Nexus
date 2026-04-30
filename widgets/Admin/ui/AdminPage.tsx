"use client";
import { useEffect, useState } from "react";
import { ActiveTabsAdmin } from "./ActiveTabsAdmin";
import { SuccessMessage } from "./SuccessMessage";
import { OverviewTabSection } from "./OverviewTabSection";
import { ProductsTabSection } from "./ProductsTabSection";
import { AddTabSection } from "./AddTabSection";
import { Container } from "@/shared/ui/Container/Container";
import { DeleteConfirmationModal } from "./DeleteConfirmationModal";
import { useAdminStore } from "@/features/admin/model/adminStore";
import { redirect, useRouter } from "next/navigation";

    
export function AdminPageMain() {
    const  {activeTab, successMessage, showDeleteConfirm, hydrate} = useAdminStore();
    const [allowed, setAllowed] = useState(false);
    const router = useRouter();


      
       
      useEffect(() : any => {
    hydrate();
    const raw = localStorage.getItem("nexus_user");

    if (!raw) {
      router.push("/auth");
      return;
    }

    try {
      const data = JSON.parse(raw);
      const user = data.user
        
      if (!user || user.name !== "Admin") {
        router.push("/");
        return;
      }

      setAllowed(true);
    } catch {
      router.push("/auth");
    }

      
  }, []);

  if (!allowed) return null;
  return (
        <div className="min-h-screen bg-gray-50 p-20">
            <Container>
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                    <p className="text-gray-500 mt-1">Manage your phone inventory, track statistics, and control products</p>
                </div>

                {/* Success Message */}
                {successMessage && (
                    <SuccessMessage />
                )}

                {/* Tabs */}
                <ActiveTabsAdmin />

                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <OverviewTabSection  />
                )}

                {/* Products Tab */}
                {activeTab === 'products' && (
                    <ProductsTabSection   />
                )}

                {(activeTab === 'add' || activeTab === 'edit') && (
                    <AddTabSection  />
                )}
            </Container>
            {/* Delete Confirmation Modal */}
            {showDeleteConfirm && (
                 <DeleteConfirmationModal />
            )}
        </div>

    )
    
}