import { Metadata } from "next";
import StartupOnboarding from "@/screens/startuponboarding/Landing";
import PrivateRoute from "@/components/route-helpers/PrivateRoute";

export const metadata: Metadata = {
  title: "Sign up | SecureSeedFund",
};

export default function StartupOnboardingPage() {
  return (
    <PrivateRoute>
      <StartupOnboarding />
    </PrivateRoute>
  );
}
