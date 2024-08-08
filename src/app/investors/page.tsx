import Investors from "@/screens/investors/Investors";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investors | SecureSeedFund",
};

export default function InvestorsPage() {
  return <Investors />;
}
