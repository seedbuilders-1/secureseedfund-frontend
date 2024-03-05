import OnboardLayout from "@/components/layouts/onboarding";
import NotAuthenticatedRoute from "@/components/route-helpers/NotAuthenticatedRoute";
import { ReactNode } from "react";

export default function Onboarding({ children }: { children: ReactNode }) {
  return (
    <NotAuthenticatedRoute>
      <OnboardLayout>{children}</OnboardLayout>
    </NotAuthenticatedRoute>
  );
}
