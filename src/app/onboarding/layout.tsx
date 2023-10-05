import { ReactNode } from "react";
import OnboardingLayout from "@/components/layouts/onboarding/OnboardingLayout";

export default function Onboarding({ children }: { children: ReactNode }) {
  return <OnboardingLayout>{children}</OnboardingLayout>;
}
