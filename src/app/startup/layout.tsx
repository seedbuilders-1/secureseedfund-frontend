"use client";
import DashboardLayout from "@/components/layouts/dashboard";
import PrivateRoute from "@/components/route-helpers/PrivateRoute";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useStartupIdUrl } from "@/lib/utils";

export default function StartupLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const startupId = useStartupIdUrl();

  return (
    <PrivateRoute>
      {isActive(`/startup/${startupId}/campaign/createcampaign`) ? (
        children
      ) : (
        <DashboardLayout>{children}</DashboardLayout>
      )}
    </PrivateRoute>
  );
}
