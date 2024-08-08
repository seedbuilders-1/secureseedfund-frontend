import { Metadata } from "next";
import Startups from "@/screens/startups/Startups";

export const metadata: Metadata = {
  title: "Start up | SecureSeedFund",
};

export default function InvestorsPage() {
  return <Startups />;
}
