"use client";

import { useState } from "react";
import AccountStepper from "../components/AccountStepper";
import FounderInformation from "../components/FounderInformation";
import { FundingInformationValidation } from "@/lib/validations/account";
import TeamInformation from "../components/TeamInformation";
import CompanyInformation from "../components/CompanyInformation";
import BusinessInformation from "../components/BusinessInformation";
import FundingInformation from "../components/FundingInformation";
import Review from "../components/Review";
import { FileWithPath } from "react-dropzone";

interface UploadFiles {
  businessPlan: FileWithPath | null;
  pitchDeck: FileWithPath | null;
  demoVideo: FileWithPath | null;
  companyLogo: FileWithPath | null;
  companyRegistration: FileWithPath | null;
  coverPhoto: FileWithPath | null;
}

export default function AccountForm() {
  const [files, setFiles] = useState<UploadFiles>({
    businessPlan: null,
    pitchDeck: null,
    demoVideo: null,
    companyLogo: null,
    companyRegistration: null,
    coverPhoto: null,
  });
  const [currentStep, setCurrentStep] = useState(1);

  const [profileImageFile, setProfileImageFile] = useState<FileWithPath | null>(
    null
  );
  const [fundingDetails, setFundingDetails] =
    useState<FundingInformationValidation>({
      fundingreceivedfromangelinvestororventurecapitalists: "",
      companypostmoneyvaluation: "",
      rationaleforcompanyvaluation: "",
      howmuchrasisedpreviously: "",
      describefundinghistorysinceinception: "",
      useoffunds: "",
      haveyoucollectedanyloansorcredit: "",
      ifyesstateyourcredithistorywithtenoramountinterestrateandcreditor: "",
      partofincubatororacceleratorprogram: "",
      ifyeswhichprogram: "",
      whichinvestmentareyouseeking: "",
      whenareyoulookingatraise: "",
      howdidyouhearaboutus: "",
    });

  const handleFundingInformation = (details: FundingInformationValidation) => {
    setFundingDetails(details);
  };
  const [financialFile, setFinancialFile] = useState<FileWithPath | null>(null);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const steps = [
    "Founder Information",
    "Team Information",
    "Company Information",
    "Business Information",
    "Funding Information",
    "Review & Submit",
  ];

  return (
    <>
      <div className="w-full h-full flex flex-col lg:flex-row bg-white lg:gap-[3rem] gap-1">
        <AccountStepper steps={steps} currentStep={currentStep} />

        <div className="w-full lg:w-[80%] max-w-[1000px] py-[3rem] flex justify-center items-center">
          {currentStep === 1 && (
            <FounderInformation
              profileImageFile={profileImageFile}
              setProfileImageFile={setProfileImageFile}
              handleNext={handleNext}
            />
          )}
          {currentStep === 2 && (
            <TeamInformation handleNext={handleNext} handleBack={handleBack} />
          )}
          {currentStep === 3 && (
            <CompanyInformation
              handleNext={handleNext}
              handleBack={handleBack}
              files={files}
              setFiles={setFiles}
            />
          )}
          {currentStep === 4 && (
            <BusinessInformation
              handleNext={handleNext}
              handleBack={handleBack}
            />
          )}
          {currentStep === 5 && (
            <FundingInformation
              handleNext={handleNext}
              handleFundingInformation={handleFundingInformation}
              fundingDetails={fundingDetails}
              handleBack={handleBack}
              financialFile={financialFile}
              setFinancialFile={setFinancialFile}
            />
          )}

          {currentStep === 6 && (
            <Review
              financialFile={financialFile}
              fundingDetails={fundingDetails}
              handleBack={handleBack}
              setStep={setCurrentStep}
            />
          )}
        </div>
      </div>
    </>
  );
}
