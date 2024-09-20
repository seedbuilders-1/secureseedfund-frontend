import HeroSection from "@/components/sections/startups/HeroSection";
import Gotyou from "./components/Gotyou";
import EasyToRaise from "./components/EasyToRaise";
import WhyChoose from "./components/WhyChoose";
import AttractInvestor from "./components/AttractInvestor";
import Testimonies from "./components/Testimonies";
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
