import HeroSection from "@/components/sections/landing/HeroSection";
import InvestSecurely from "@/components/sections/landing/InvestSecurely";
import React, { Fragment } from "react";

const Landing = () => {
  return (
    <Fragment>
      <HeroSection />
      <InvestSecurely />
    </Fragment>
  );
};

export default Landing;
