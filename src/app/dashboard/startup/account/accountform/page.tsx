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
import Kyc from "../components/Kyc";

interface UploadFiles {
  businessPlan: FileWithPath | null;
  pitchDeck: FileWithPath | null;
  demoVideo: FileWithPath | null;
  companyLogo: FileWithPath | null;
  companyRegistration: FileWithPath | null;
  coverPhoto: FileWithPath | null;
}

interface UploadKycFiles {
  govt_photo_id: FileWithPath | null;
  proof_of_address: FileWithPath | null;
  memo_assoc: FileWithPath | null;
  article_assoc: FileWithPath | null;
  business_address: FileWithPath | null;
  dir_company_address: FileWithPath | null;
  company_status_report: FileWithPath | null;
  shareholders_address: FileWithPath | null;
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

  const [kycFiles, setKycFiles] = useState<UploadKycFiles>({
    govt_photo_id: null,
    proof_of_address: null,
    memo_assoc: null,
    article_assoc: null,
    business_address: null,
    dir_company_address: null,
    company_status_report: null,
    shareholders_address: null,
  });
  const [currentStep, setCurrentStep] = useState(4);

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
    "KYC Information",
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
            <Kyc
              handleNext={handleNext}
              handleBack={handleBack}
              kycFiles={kycFiles}
              setKycFiles={setKycFiles}
            />
          )}
          {currentStep === 3 && (
            <TeamInformation handleNext={handleNext} handleBack={handleBack} />
          )}
          {currentStep === 4 && (
            <CompanyInformation
              handleNext={handleNext}
              handleBack={handleBack}
              files={files}
              setFiles={setFiles}
            />
          )}
          {currentStep === 5 && (
            <BusinessInformation
              handleNext={handleNext}
              handleBack={handleBack}
            />
          )}
          {currentStep === 6 && (
            <FundingInformation
              handleNext={handleNext}
              handleFundingInformation={handleFundingInformation}
              fundingDetails={fundingDetails}
              handleBack={handleBack}
              financialFile={financialFile}
              setFinancialFile={setFinancialFile}
            />
          )}

          {currentStep === 7 && (
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
