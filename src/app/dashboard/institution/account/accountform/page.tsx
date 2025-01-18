"use client";

import { useState } from "react";
import AccountStepper from "@/app/dashboard/startup/account/components/AccountStepper";
import { InstitutionValidation } from "@/lib/validations/account";
import InstitutionInformation from "../components/InstitutionInformation";
import Review from "../components/Review";
import InstitutionKyc from "../components/InstitutionKyc";
import { FileWithPath } from "react-dropzone";

interface UploadKycFiles {
  govt_photo_id: FileWithPath | null;
  article_assoc: FileWithPath | null;
  memo_assoc: FileWithPath | null;
  business_address: FileWithPath | null;
  company_status_report: FileWithPath | null;
  shareholders_address: FileWithPath | null;
}

export default function AccountForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const [institutionInfo, setInstitutionInfo] = useState<InstitutionValidation>(
    {
      Name: "",
      registrationNumber: "",
      address: "",
      website: "",
      industryOfInterest: [""],
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

  const [kycFiles, setKycFiles] = useState<UploadKycFiles>({
    govt_photo_id: null,
    article_assoc: null,
    memo_assoc: null,
    business_address: null,
    company_status_report: null,
    shareholders_address: null,
  });

  const steps = [
    "Institution Information",
    "Kyc Information",
    "Review and Submit",
  ];

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
            <InstitutionKyc
              handleNext={handleNext}
              handleBack={handleBack}
              kycFiles={kycFiles}
              setKycFiles={setKycFiles}
            />
          )}
          {currentStep === 3 && (
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
