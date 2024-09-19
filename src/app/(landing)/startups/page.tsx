import HeroSection from "@/components/sections/startups/HeroSection";
import Gotyou from "./Gotyou";
import EasyToRaise from "./EasyToRaise";
import WhyChoose from "./WhyChoose";
import AttractInvestor from "./AttractInvestor";
import Testimonies from "./Testimonies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start up | SecureSeedFund",
};

export default function InvestorsPage() {
  return (
    <>
      <HeroSection />
      <Gotyou />
      <EasyToRaise />
      <WhyChoose />
      <AttractInvestor />
      <Testimonies />
    </>
  );
}
