"use client";

import Milestone from "../../components/Milestone";
import Review from "../../account/components/Review";
import useCampaign from "../../hooks/useCampaign";
import {
  CampaignValidation,
  MilestoneValidation,
} from "@/lib/validations/campaign";
import moment from "moment";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CampaignStepper from "../../components/CampaignStepper";
import StartCampaign from "../../components/StartCampaign";

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

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
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
              handleBack={handleBack}
              milestoneDetail={milestoneDetail}
            />
          )}
          {currentStep === 3 && (
            <Review
              campaignDetail={campaignDetail}
              handleBack={handleBack}
              milestoneDetail={milestoneDetail}
              id={id}
              selectFundingCampaign={selectFundingCampaign}
            />
          )}
        </div>
      </div>
    </>
  );
}
