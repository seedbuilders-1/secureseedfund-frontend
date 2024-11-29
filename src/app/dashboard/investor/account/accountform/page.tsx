"use client";

import { useState } from "react";
import AccountStepper from "@/app/dashboard/startup/account/components/AccountStepper";
import { InvestorInfoValidation } from "@/lib/validations/account";
import InvestorInformation from "../components/InvestorInfo";
import { FileWithPath } from "react-dropzone";
import Review from "../components/Review";
import InvestorKyc from "../components/InvestorKyc";

interface UploadKycFiles {
  govt_photo_id: FileWithPath | null;
  proof_of_address: FileWithPath | null;
}

export default function AccountForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const [investorInfo, setInvestorInfo] = useState<InvestorInfoValidation>({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    nationality: "",
    investorStatus: "",
    typeOfInvestmentPreferred: "",
    howLongDoYouPlanToInvest: "",
    countryOfResidence: "",
    city: "",
    investmentExperience: "",
    liquidityImportance: "",
    goal: "",
    annualIncome: "",
  });

  const [profileImageFile, setProfileImageFile] = useState<FileWithPath | null>(
    null
  );

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleInvestorInfo = (details: InvestorInfoValidation) => {
    setInvestorInfo(details);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const [kycFiles, setKycFiles] = useState<UploadKycFiles>({
    govt_photo_id: null,
    proof_of_address: null,
  });

  const steps = ["Investor Information", "KYC", "Review and Submit"];

  return (
    <>
      <div className="w-full h-full flex flex-col lg:flex-row bg-white lg:gap-[3rem] gap-1">
        <AccountStepper steps={steps} currentStep={currentStep} />

        <div className="w-full lg:w-[80%] max-w-[1000px] py-[3rem] flex justify-center items-center">
          {currentStep === 1 && (
            <InvestorInformation
              investorDetails={investorInfo}
              handleNext={handleNext}
              handleInvestor={handleInvestorInfo}
              profileImageFile={profileImageFile}
              setProfileImageFile={setProfileImageFile}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          )}
          {currentStep === 2 && (
            <InvestorKyc
              handleNext={handleNext}
              handleBack={handleBack}
              kycFiles={kycFiles}
              setKycFiles={setKycFiles}
            />
          )}
          {currentStep === 3 && (
            <Review
              investorDetails={investorInfo}
              handleBack={handleBack}
              setStep={setCurrentStep}
              profileImageFile={profileImageFile}
              selectedImage={selectedImage}
            />
          )}
        </div>
      </div>
    </>
  );
}
