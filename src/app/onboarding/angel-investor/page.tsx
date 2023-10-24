import { Metadata } from "next";
import AngelInvestor from "@/features/onboarding/AngelInvestor";

export const metadata: Metadata = {
  title: "Angel Investor - Onboarding",
};

export default function Startup() {
  return <AngelInvestor />;
}
