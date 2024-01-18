import DashboardLayout from "@/components/layouts/dashboard";
import PrivateRoute from "@/components/route-helpers/PrivateRoute";
import { ReactNode } from "react";

export default function StartupLayout({ children }: { children: ReactNode }) {
  return (
    <PrivateRoute>
      <DashboardLayout>{children}</DashboardLayout>
    </PrivateRoute>
  );
}
