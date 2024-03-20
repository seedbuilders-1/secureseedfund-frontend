"use client";
import CompanyInfo from "@/components/startuponboardingsteps/CompanyInfo";
import useStartupOnboarding from "@/hooks/startup/useStartupOnboarding";
import UploadIdentity from "@/components/startuponboardingsteps/UploadIdentity";
import Successpage from "@/components/onboardingsteps/Successpage";
import TermandCondition from "@/components/onboardingsteps/TermandCondition";
const Landing = () => {
  const { steps } = useStartupOnboarding();
  return (
    <>
      {steps === 1 && <CompanyInfo />}
      {steps === 2 && <UploadIdentity />}
      {steps === 3 && <TermandCondition />}
      {steps === 4 && (
        <Successpage title={"Thank you for registering your starup"} />
      )}
    </>
  );
};

export default Landing;
