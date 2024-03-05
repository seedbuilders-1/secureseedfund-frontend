"use client";
import React from "react";
import EntityInformation from "@/components/onboardingsteps/EntityInformation";
import Uploadidentity from "@/components/onboardingsteps/Uploadidentity";
import InvestmentQuestioniare from "@/components/onboardingsteps/InvestmentQuestioniare";
import TermandCondition from "@/components/onboardingsteps/TermandCondition";
import Successpage from "@/components/onboardingsteps/Successpage";
import useOnboarding from "@/hooks/onboarding/useOnboarding";

const Landing = () => {
  const { steps } = useOnboarding();
  console.log(steps);
  return (
    <>
      {steps === 1 && <EntityInformation />}
      {steps === 2 && <Uploadidentity />}
      {steps === 3 && <InvestmentQuestioniare />}
      {steps === 4 && <TermandCondition />}
      {steps === 5 && <Successpage />}
    </>
  );
};

export default Landing;
