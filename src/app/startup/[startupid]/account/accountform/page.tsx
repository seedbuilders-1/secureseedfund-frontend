"use client";

import { useState } from "react";
import AccountStepper from "@/app/startup/components/AccountStepper";
import FounderInformation from "@/app/startup/components/FounderInformation";
import {
  BusinessInformationValidation,
  CompanyInformationValidation,
  FounderValidation,
  FundingInformationValidation,
  TeamInformationValidation,
} from "@/lib/validations/account";
import TeamInformation from "@/app/startup/components/TeamInformation";
import CompanyInformation from "@/app/startup/components/CompanyInformation";
import BusinessInformation from "@/app/startup/components/BusinessInformation";
import FundingInformation from "@/app/startup/components/FundingInformation";

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

  return (
    <>
      <div className="w-full h-full flex flex-col lg:flex-row bg-white lg:gap-[3rem] gap-1">
        <AccountStepper currentStep={currentStep} />

        <div className="w-full lg:w-[80%] max-w-[1000px] py-[3rem] flex justify-center items-center">
          {currentStep === 1 && (
            <FounderInformation
              founderDetails={founderDetail}
              handleNext={handleNext}
              handleFounder={handleFounder}
            />
          )}
          {currentStep === 2 && (
            <TeamInformation
              handleNext={handleNext}
              handleTeamInformation={handleTeamInformation}
              teamDetails={teamDetails}
            />
          )}
          {currentStep === 3 && (
            <CompanyInformation
              handleNext={handleNext}
              handleCompanyInformation={handleCompanyInformation}
              companyDetails={companyDetails}
            />
          )}
          {currentStep === 4 && (
            <BusinessInformation
              handleNext={handleNext}
              handleBusinessInformation={handleBusinessInformation}
              businessDetails={businessDetails}
            />
          )}
          {currentStep === 5 && (
            <FundingInformation
              handleNext={handleNext}
              handleFundingInformation={handleFundingInformation}
              fundingDetails={fundingDetails}
            />
          )}
          {/* {currentStep === 3 && (
          <StartupInfo
            handleNext={handleNext}
            handleStartupInfo={handleStartupInfo}
            startupDetail={startupDetail}
          />
        )}
        {currentStep === 4 && (
          <UploadDocuments
            businessPlanUrl={businessPlanUrl}
            coverPhoto={coverPhoto}
            setBuisnessPlanUrl={setBuisnessPlanUrl}
            setCoverPhoto={setCoverPhoto}
            handleNext={handleNext}
          />
        )} */}
          {/* {currentStep === 3 && (
            <Review
              campaignDetail={campaignDetail}
              // startupDetail={startupDetail}
              milestoneDetail={milestoneDetail}
              // coverPhoto={coverPhoto}
              // businessPlanUrl={businessPlanUrl}
              id={id}
              selectFundingCampaign={selectFundingCampaign}
            />
          )} */}
        </div>
      </div>
    </>
  );
}
