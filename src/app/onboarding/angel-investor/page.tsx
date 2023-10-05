import { Metadata } from "next";
import AngelInvestor from "@/pages/onboarding/AngelInvestor";

export const metadata: Metadata = {
  title: "Angel Investor - Onboarding",
};

export default function Startup() {
  return <AngelInvestor />;
}
