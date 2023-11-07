import DashboardLayout from "@/components/layouts/dashboard";
import { ReactNode } from "react";

export default function StartupLayout({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
