import OnboardLayout from "@/components/layouts/onboarding";
import PrivateRoute from "@/components/route-helpers/PrivateRoute";
import { ReactNode } from "react";

export default function Onboarding({ children }: { children: ReactNode }) {
  return (
    <PrivateRoute>
      <OnboardLayout>{children}</OnboardLayout>
    </PrivateRoute>
  );
}
