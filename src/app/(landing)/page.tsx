import HeroSection from "@/components/sections/landing/HeroSection";
import InvestSecurely from "@/components/sections/landing/InvestSecurely";
import React, { Fragment } from "react";
import { Metadata } from "next";
import WhyInvest from "./components/WhyInvest";

export const metadata: Metadata = {
  title: "SecureSeedFund",
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
