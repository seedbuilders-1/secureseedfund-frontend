import { Metadata } from "next";
import VentureCapitalistOnboardingPage from "@/features/onboarding/VentureCapitalist";

export const metadata: Metadata = {
  title: "Venture Capitalist - Onboarding",
};

export default function VentureCapitlist() {
  return <VentureCapitalistOnboardingPage />;
}
