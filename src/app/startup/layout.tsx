"use client";
import DashboardLayout from "@/components/layouts/dashboard";
import PrivateRoute from "@/components/route-helpers/PrivateRoute";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function StartupLayout({ children }: { children: ReactNode }) {
  const isActive = (href: string) => pathname === href;
  const pathname = usePathname();
  return (
    <PrivateRoute>
      {isActive("/startup/campaign/createcampaign") ? (
        children
      ) : (
        <DashboardLayout>{children}</DashboardLayout>
      )}
    </PrivateRoute>
  );
}
