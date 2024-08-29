"use client";

import Milestone from "@/app/startup/components/Milestone";
import Review from "@/app/startup/components/Review";
import StartCampaign from "@/app/startup/components/StartCampaign";
import useCampaign from "@/app/startup/hooks/useCampaign";
import CampaignStepper from "@/app/startup/components/CampaignStepper";
import {
  CampaignValidation,
  MilestoneValidation,
} from "@/lib/validations/campaign";
import moment from "moment";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CampaignDashboard() {
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
  const searchParams = useSearchParams();
  const id = searchParams.get("id") ?? "";
  const { singleCampaign } = useCampaign({ id });

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
      });
    }
  }, [id, singleCampaign]);

  return (
    <>
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
    </>
  );
}
