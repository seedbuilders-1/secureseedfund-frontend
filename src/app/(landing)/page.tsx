import FAQSection from "@/components/sections/landing/FAQSection";
import HeroSection from "@/components/sections/landing/HeroSection";
import HowToInvest from "@/components/sections/landing/HowToInvest";
import InvestSecurely from "@/components/sections/landing/InvestSecurely";
import NewToInvesting from "@/components/sections/landing/NewToInvesting";
import WhySecureSeedFund from "@/components/sections/landing/WhySecureSeedFund";
import React, { Fragment } from "react";
import { Metadata } from "next";
import WhyInvest from "@/app/(landing)/home/components/WhyInvest";

export const metadata: Metadata = {
  title: "Landing | SecureSeedFund",
};

export default function LandingPage() {
  return (
    <Fragment>
      <HeroSection />
      <InvestSecurely />
      <WhyInvest />
    </Fragment>
  );
}
