"use client";
import React, { useState, useEffect } from "react";
import Milestone from "./Milestone";
import {
  CampaignValidation,
  MilestoneValidation,
} from "@/lib/validations/campaign";
import { useSearchParams } from "next/navigation";
import moment from "moment";
import useCampaign from "../hooks/useCampaign";
import CampaignStepper from "./CampaignStepper";
import Review from "./Review";
import StartCampaign from "./StartCampaign";

const Createcampaign = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectFundingCampaign, setSelectFundingCampaign] =
    useState<string>("");
  const [milestoneDetail, setMilestoneDetail] = useState<MilestoneValidation>({
    milestones: [
      {
        date: "",
        milestoneDescription: "",
        milestoneTitle: "",
        targetAmount: "",
      },
    ],
  });

  const [campaignDetail, setCampaignDetail] = useState<CampaignValidation>({
    title: "",
    description: "",
    startdate: "",
    enddate: "",
    fundinggoal: "",
    minimum: 1,
  });

  const handleSelectFundingCampaign = (value: string) => {
    setSelectFundingCampaign(value);
  };
  const handleMilestone = (details: MilestoneValidation) => {
    setMilestoneDetail(details);
  };
  const handleCampaign = (details: CampaignValidation) => {
    setCampaignDetail(details);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };
  const searchParams = useSearchParams();
  const id = searchParams.get("id") ?? "";
  const { singleCampaign } = useCampaign({ userId: id });

  useEffect(() => {
    if (singleCampaign && id) {
      setSelectFundingCampaign(singleCampaign?.campaignType);
      setMilestoneDetail({
        milestones: singleCampaign?.milestones.map(
          ({ targetAmount, date, ...milestone }) => ({
            targetAmount: targetAmount.toString(),
            date: moment(date).format("YYYY-MM-DD"),
            ...milestone,
          })
        ),
      });
      setCampaignDetail({
        title: singleCampaign?.title,
        description: singleCampaign?.description,
        startdate: moment(singleCampaign?.startDate).format("YYYY-MM-DD"),
        enddate: moment(singleCampaign?.endDate).format("YYYY-MM-DD"),
        fundinggoal: singleCampaign?.fundingGoal.toString(),
        minimum: singleCampaign?.minimum_value,
      });
    }
  }, [id, singleCampaign]);

  return (
    <div className="w-full h-full flex flex-col lg:flex-row bg-white lg:gap-[3rem] gap-1">
      <CampaignStepper currentStep={currentStep} />
      <div className="w-full lg:w-[80%] max-w-[1000px] py-[3rem] flex justify-center items-center">
        {currentStep === 1 && (
          <StartCampaign
            handleNext={handleNext}
            selectFundingCampaign={selectFundingCampaign}
            handleChange={handleSelectFundingCampaign}
            handleCampaign={handleCampaign}
            campaignDetails={campaignDetail}
          />
        )}
        {currentStep === 2 && (
          <Milestone
            handleBack={handleBack}
            handleNext={handleNext}
            handleMilestone={handleMilestone}
            milestoneDetail={milestoneDetail}
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
        {currentStep === 3 && (
          <Review
            campaignDetail={campaignDetail}
            // startupDetail={startupDetail}
            milestoneDetail={milestoneDetail}
            // coverPhoto={coverPhoto}
            // businessPlanUrl={businessPlanUrl}
            id={id}
            selectFundingCampaign={selectFundingCampaign}
          />
        )}
      </div>
    </div>
  );
};

export default Createcampaign;
