import { Metadata } from "next";
import StartupFounder from "@/pages/onboarding/StartupFounder";

export const metadata: Metadata = {
  title: "Startup - Onboarding",
};

export default function Startup() {
  return <StartupFounder />;
}
