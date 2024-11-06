import { Metadata } from "next";
import HeroSection from "@/components/sections/investors/HeroSection";
import InvestArticleCarousel from "../components/InvestArticle";
import StepstoInvest from "./components/StepstoInvest";
import InvesmentIInfor from "./components/InvesmentIInfor";
export const metadata: Metadata = {
  title: "Investor | SecureSeedFund",
};

export default function InvestorsPage() {
  return (
    <>
      <HeroSection />
      <InvestArticleCarousel title="Most Raised This Week" />
      <StepstoInvest />
      <InvesmentIInfor />
    </>
  );
}
