import Onboarding from "@/screens/onboarding/Landing"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign up | SecureSeedFund",
};

export default function OnboardingPage() {
    return <Onboarding />;
}
