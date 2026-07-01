"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/shared/ui/Container/Container";
import { ActiveTabsAdmin } from "./ActiveTabsAdmin";
import { SuccessMessage } from "./SuccessMessage";
import { OverviewTabSection } from "./OverviewTabSection";
import { ProductsTabSection } from "./ProductsTabSection";
import { AddTabSection } from "./AddTabSection";
import { DeleteConfirmationModal } from "./DeleteConfirmationModal";
import { useAdminStore } from "@/features/admin/model/adminStore";
import type { AuthUser } from "@/features/auth/type/type";

export function AdminPageMain() {
  const { activeTab, successMessage, showDeleteConfirm } = useAdminStore();
  const [allowed, setAllowed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Guard: only users with the "admin" role may access this page.
    // In production this check should be enforced server-side via middleware.
    const raw = localStorage.getItem("nexus_user");

    if (!raw) {
      router.push("/auth");
      return;
    }

    try {
      const data = JSON.parse(raw) as { user: AuthUser };
      const user = data?.user;

      if (!user || user.role !== "admin") {
        router.push("/");
        return;
      }

      setAllowed(true);
    } catch {
      router.push("/auth");
    }
  }, [router]);

  // Render nothing while the auth check is in progress to avoid flash of content.
  if (!allowed) return null;

  return (
    <div className="min-h-screen bg-gray-50 p-20">
      <Container>
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-500 mt-1">
            Manage your phone inventory, track statistics, and control products
          </p>
        </div>

        {successMessage && <SuccessMessage />}

        <ActiveTabsAdmin />

        {activeTab === "overview" && <OverviewTabSection />}
        {activeTab === "products" && <ProductsTabSection />}
        {(activeTab === "add" || activeTab === "edit") && <AddTabSection />}
      </Container>

      {showDeleteConfirm && <DeleteConfirmationModal />}
    </div>
  );
}
