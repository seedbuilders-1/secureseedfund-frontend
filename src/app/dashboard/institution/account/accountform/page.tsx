"use client";

import { useState } from "react";
import AccountStepper from "@/app/dashboard/startup/account/components/AccountStepper";
import { InstitutionValidation } from "@/lib/validations/account";
import InstitutionInformation from "../components/InstitutionInformation";
import Review from "../components/Review";

export default function AccountForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const [institutionInfo, setInstitutionInfo] = useState<InstitutionValidation>(
    {
      Name: "",
      registrationNumber: "",
      address: "",
      website: "",
      industryOfInterest: "",
      fundingSize: "",
      fundingType: "",
    }
  );

  const handleInstitutionInfo = (details: InstitutionValidation) => {
    setInstitutionInfo(details);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const steps = ["Institution Information", "Review and Submit"];

  return (
    <>
      <div className="w-full h-full flex flex-col lg:flex-row bg-white lg:gap-[3rem] gap-1">
        <AccountStepper steps={steps} currentStep={currentStep} />

        <div className="w-full lg:w-[80%] max-w-[1000px] py-[3rem] flex justify-center ">
          {currentStep === 1 && (
            <InstitutionInformation
              institutionDetail={institutionInfo}
              handleNext={handleNext}
              handleInstitutionInfo={handleInstitutionInfo}
            />
          )}
          {currentStep === 2 && (
            <Review
              institutionDetail={institutionInfo}
              handleBack={handleBack}
              setStep={setCurrentStep}
            />
          )}
        </div>
      </div>
    </>
  );
}
