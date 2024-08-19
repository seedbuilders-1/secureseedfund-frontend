import React from "react";
import {
  CampaignValidation,
  MilestoneValidation,
} from "@/lib/validations/campaign";
import { thousandFormatter } from "@/lib/helpers";
import { Button } from "../ui/button";
import { useStartupIdUrl } from "@/lib/utils";
import SuccessComponent from "./SuccessComponent";
import useCampaign from "@/app/startup/hooks/useCampaign";

interface Props {
  // startupDetail: StartupInfoValidation;
  milestoneDetail: MilestoneValidation;
  // coverPhoto: string;
  selectFundingCampaign: string;
  // businessPlanUrl: string;
  id: string;
  campaignDetail: CampaignValidation;
}
const Review = ({
  // startupDetail,
  id,
  milestoneDetail,
  // coverPhoto,
  // businessPlanUrl,
  selectFundingCampaign,
  campaignDetail,
}: Props) => {
  const {
    createCampaign,
    isCreatingCampaign,
    isEditingCampaign,
    editCampaign,
    isCampaignCreated,
    CampaignEdited,
  } = useCampaign({});

  const startupId = useStartupIdUrl();

  const handleCreateCampaign = () => {
    const payload = {
      startupId: startupId,
      title: campaignDetail.title,
      description: campaignDetail.description,
      fundingGoal: parseInt(campaignDetail.fundinggoal),
      campaignType: selectFundingCampaign,
      // coverPhotoUrl: coverPhoto,
      startDate: campaignDetail.startdate,
      endDate: campaignDetail.enddate,
      // companyType: startupDetail.companyType,
      // cofounders: parseInt(startupDetail.cofounders),
      // teamMembers: parseInt(startupDetail.teamMembers),
      // about: startupDetail.about,
      milestones: milestoneDetail.milestones.map(
        ({ targetAmount, ...milestone }) => ({
          targetAmount: parseInt(targetAmount),
          ...milestone,
        })
      ),
      // businessPlanUrl,
    };
    if (id) {
      editCampaign(id, payload);
    } else {
      createCampaign(payload);
    }
  };
  return (
    <>
      <div className="w-full  space-y-6">
        <h2 className="text-[#0F172A] text-[24px] font-medium">
          Preview and Submit
        </h2>
        <h3 className="text-[#747474] text-[16px] mt-3">
          double check the information added before submitting
        </h3>

        <div>
          <h2 className="text-[#1AA657] text-[24px] font-normal mt-8">
            Campaign Info
          </h2>
          <div className="border border-[#6C8C3C30] rounded-lg bg-[#F9F9FA] px-4 py-4">
            <h2 className="text-[#0F172A] text-[18px] font-medium rounded-lg">
              {campaignDetail.title}
            </h2>
            <h3 className="text-[#747474] text-[16px] mt-3">
              {campaignDetail.description}
            </h3>

            <div className="flex items-center gap-4">
              <h2 className="text-[#0F172A] text-[16px] font-medium rounded-lg">
                Funding Type:
              </h2>
              <div className="border border-[#EAB80A] rounded-3xl text-[rgb(234,184,10)] mt-2 text-center bg-[#FFFAE8] h-[27px]px-3 py-2 w-[82px] text-[12px]">
                <div className="flex justify-center items-center">
                  {selectFundingCampaign}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[#1AA657] text-[24px] font-normal mt-8">
            Funding Goal
          </h2>
          <div className="border border-[#6C8C3C30]  rounded-lg bg-[#F9F9FA] px-4 py-4 flex justify-between ">
            <div>
              <span className="text-[#747474] ">Funding Goal</span>
              <h2 className="text-[#0F172A] text-[16px] font-medium rounded-lg">{`${thousandFormatter(
                parseInt(campaignDetail.fundinggoal)
              )}`}</h2>
            </div>
            <div>
              <span className="text-[#747474] ">Start Date</span>
              <h2 className="text-[#0F172A] text-[16px] font-medium rounded-lg">
                {campaignDetail.startdate}
              </h2>
            </div>
            <div>
              <span className="text-[#747474] ">End Date</span>
              <h2 className="text-[#0F172A] text-[16px] font-medium rounded-lg">
                {campaignDetail.enddate}
              </h2>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-[#1AA657] text-[24px] font-normal mt-8">
            Milestones
          </h2>

          <div className="border border-[#6C8C3C30]  rounded-lg bg-[#F9F9FA] px-4 py-4   ">
            {milestoneDetail.milestones.map((milestone, index) => (
              <div className="mt-4" key={index}>
                <span className="text-[#0F172A] font-bold text-[24px]">
                  {" "}
                  Milestone {index + 1}:
                </span>
                <h2 className="text-[#0F172A] text-[16px] font-normal">
                  {milestone.milestoneTitle}
                </h2>
                <p className="text-[#0F172A] text-[16px] font-normal">
                  {milestone.milestoneDescription}
                </p>
                <p className="text-[#0F172A] text-[16px] font-normal">{`${thousandFormatter(
                  parseInt(milestone.targetAmount)
                )}`}</p>
                <p className="text-[#0F172A] text-[16px] font-normal">
                  {milestone.date}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Button
          onClick={() => handleCreateCampaign()}
          loading={isCreatingCampaign || isEditingCampaign}
          className="w-[30%] rounded-3xl bg-[#241A3F] mt-[4rem]"
        >
          Complete
        </Button>
      </div>
      {isCampaignCreated || CampaignEdited ? <SuccessComponent /> : null}
    </>
  );
};

export default Review;
