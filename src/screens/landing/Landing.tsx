import HeroSection from "@/components/sections/landing/HeroSection";
import HowToInvest from "@/components/sections/landing/HowToInvest";
import InvestSecurely from "@/components/sections/landing/InvestSecurely";
import NewToInvesting from "@/components/sections/landing/NewToInvesting";
import WhySecureSeedFund from "@/components/sections/landing/WhySecureSeedFund";
import React, { Fragment } from "react";

const Landing = () => {
  return (
    <Fragment>
      <HeroSection />
      <InvestSecurely />
      <HowToInvest />
      <WhySecureSeedFund />
      <NewToInvesting />
    </Fragment>
  );
};

export default Landing;
