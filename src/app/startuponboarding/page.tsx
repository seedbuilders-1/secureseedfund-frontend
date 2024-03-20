import { Metadata } from "next";
import StartupOnboarding from "@/screens/startuponboarding/Landing";

export const metadata: Metadata = {
  title: "Sign up | SecureSeedFund",
};

export default function StartupOnboardingPage() {
  return <StartupOnboarding />;
}
