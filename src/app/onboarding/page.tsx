import Onboarding from "@/screens/onboarding/Landing";
import { Metadata } from "next";
import PrivateRoute from "@/components/route-helpers/PrivateRoute";
export const metadata: Metadata = {
  title: "Sign up | SecureSeedFund",
};

export default function OnboardingPage() {
  return (
    <PrivateRoute>
      <Onboarding />;
    </PrivateRoute>
  );
}
