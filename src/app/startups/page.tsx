import Startups from "@/screens/startups/Startup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startups | SecureSeedFund",
};

export default function LandingPage() {
  return <Startups />;
}
