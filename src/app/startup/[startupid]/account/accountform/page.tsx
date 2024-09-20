"use client";

import { useState } from "react";
import AccountStepper from "@/app/startup/[startupid]/account/components/AccountStepper";
import FounderInformation from "@/app/startup/[startupid]/account/components/FounderInformation";
import {
  BusinessInformationValidation,
  CompanyInformationValidation,
  FounderValidation,
  FundingInformationValidation,
  TeamInformationValidation,
} from "@/lib/validations/account";
import TeamInformation from "@/app/startup/[startupid]/account/components/TeamInformation";
import CompanyInformation from "@/app/startup/[startupid]/account/components/CompanyInformation";
import BusinessInformation from "@/app/startup/[startupid]/account/components/BusinessInformation";
import FundingInformation from "@/app/startup/[startupid]/account/components/FundingInformation";

export default function AccountForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const [founderDetail, setFounderDetail] = useState<FounderValidation>({
    image: "",
    title: "",
    firstname: "",
    lastname: "",
    email: "",
    education: "",
    linkedinprofile: "",
    phonenumber: "",
    expereince: "",
  });

  const [teamDetails, setTeamDetails] = useState<TeamInformationValidation>({
    titleofcofounder: "",
    firstnameofcofounder: "",
    lastnameofcofounder: "",
    emailofcofounder: "",
    educationofcofounder: "",
    linkedinprofileofcofounder: "",
    phonenumberofcofounder: "",
    experienceofcofounder: "",
    numberofteammembers: "",
    teammembers: "",
    executiveprimarilybased: "",
  });

  const [companyDetails, setCompanyDetails] =
    useState<CompanyInformationValidation>({
      companyname: "",
      companyaddress: "",
      contactemail: "",
      companywebsite: "",
      companyphonenumber: "",
      industry: "",
      yearofincorporation: "",
      geographicfocus: "",
      cityofoperation: "",
      companydescription: "",
      companyincorporatedin: "",
      threeorfivepointswhycompanyisagoodinvestment: "",
    });

  const [businessDetails, setBusinessDetails] =
    useState<BusinessInformationValidation>({
      businessstage: "",
      businessmodel: "",
      buesinessrevenuechannels: "",
      marketsize: "",
      howmuchrevenuegeneratedsinceoperation: "",
      customeracquisitioncost: "",
      numberofcurrentusers: "",
      monthlyrecurrringrevenue: "",
      monthlyrecurringexpense: "",
      businessmodeldescription: "",
    });

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
      uploadfinancialstatement: "",
      howdidyouhearaboutus: "",
      duedilligence: "",
    });

  const handleFounder = (details: FounderValidation) => {
    setFounderDetail(details);
  };

  const handleTeamInformation = (details: TeamInformationValidation) => {
    setTeamDetails(details);
  };

  const handleCompanyInformation = (details: CompanyInformationValidation) => {
    setCompanyDetails(details);
  };

  const handleBusinessInformation = (
    details: BusinessInformationValidation
  ) => {
    setBusinessDetails(details);
  };

  const handleFundingInformation = (details: FundingInformationValidation) => {
    setFundingDetails(details);
  };

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
              founderDetails={founderDetail}
              handleNext={handleNext}
              handleFounder={handleFounder}
              handleBack={handleBack}
            />
          )}
          {currentStep === 2 && (
            <TeamInformation
              handleNext={handleNext}
              handleTeamInformation={handleTeamInformation}
              handleBack={handleBack}
              teamDetails={teamDetails}
            />
          )}
          {currentStep === 3 && (
            <CompanyInformation
              handleNext={handleNext}
              handleCompanyInformation={handleCompanyInformation}
              companyDetails={companyDetails}
              handleBack={handleBack}
            />
          )}
          {currentStep === 4 && (
            <BusinessInformation
              handleNext={handleNext}
              handleBusinessInformation={handleBusinessInformation}
              businessDetails={businessDetails}
              handleBack={handleBack}
            />
          )}
          {currentStep === 5 && (
            <FundingInformation
              handleNext={handleNext}
              handleFundingInformation={handleFundingInformation}
              fundingDetails={fundingDetails}
              handleBack={handleBack}
            />
          )}
        </div>
      </div>
    </>
  );
}
