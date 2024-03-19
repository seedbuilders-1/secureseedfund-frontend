import StartupOnboardLayout from "@/components/layouts/startuponboarding";
import PrivateRoute from "@/components/route-helpers/PrivateRoute";
import { ReactNode } from "react";

export default function StartupOnboarding({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <PrivateRoute>
      <StartupOnboardLayout>{children}</StartupOnboardLayout>
    </PrivateRoute>
  );
}
