import { Metadata } from "next";
import GetStarted from "@/pages/onboarding/GetStarted";

export const metadata: Metadata = {
  title: "Secure Seedfund - Get started",
};

export default function Home() {
  return <GetStarted />;
}
