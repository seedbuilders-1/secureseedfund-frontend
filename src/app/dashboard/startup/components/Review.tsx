import React from "react";
import {
  CampaignValidation,
  MilestoneValidation,
} from "@/lib/validations/campaign";
import { thousandFormatter } from "@/lib/helpers";
import { Button } from "@/components/ui/button";
import { useStartupIdUrl } from "@/lib/utils";
import SuccessComponent from "@/components/cards/SuccessComponent";
import useCampaign from "../hooks/useCampaign";
import useUserAuth from "@/hooks/auth/useAuth";
interface Props {
  handleBack: () => void;
  milestoneDetail: MilestoneValidation;
  selectFundingCampaign: string;
  id: string;
  campaignDetail: CampaignValidation;
}
const Review = ({
  id,
  handleBack,
  milestoneDetail,
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

  const { user } = useUserAuth();
  const startupId = useStartupIdUrl();

  const handleCreateCampaign = () => {
    const payload = {
      title: campaignDetail.title,
      description: campaignDetail.description,
      fundingGoal: parseInt(campaignDetail.fundinggoal),
      campaignType: selectFundingCampaign,
      startDate: campaignDetail.startdate,
      creator_id: user?.userId as string,
      endDate: campaignDetail.enddate,
      milestones: milestoneDetail.milestones.map(
        ({ targetAmount, ...milestone }) => ({
          targetAmount: parseInt(targetAmount),
          ...milestone,
        })
      ),
    };
    if (id) {
      editCampaign(id, payload);
    } else {
      createCampaign(payload);
    }
  };
  return (
    <>
      <div className="w-full  space-y-6 px-5">
        <h2 className="text-[#0F172A] text-[24px] font-medium text-center">
          Preview and Submit
        </h2>
        <h3 className="text-[#747474] text-[16px] mt-3 text-center">
          Carefully go over your inputs before submission
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
          <div className="border border-[#6C8C3C30]  rounded-lg bg-[#F9F9FA] px-4 py-4 flex flex-col lg:flex- justify-between ">
            <div className="py-3">
              <span className="text-[#747474] ">Funding Goal</span>
              <h2 className="text-[#0F172A] text-[16px] font-medium rounded-lg">{`${thousandFormatter(
                parseInt(campaignDetail.fundinggoal)
              )}`}</h2>
            </div>
            <div className="py-3">
              <span className="text-[#747474] ">Start Date</span>
              <h2 className="text-[#0F172A] text-[16px] font-medium rounded-lg">
                {campaignDetail.startdate}
              </h2>
            </div>
            <div className="py-3">
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
        <div className="flex justify-between items-center mt-[2rem]">
          <Button variant="outline" className="w-[30%]" onClick={handleBack}>
            Back
          </Button>
          <Button
            onClick={() => handleCreateCampaign()}
            loading={isCreatingCampaign || isEditingCampaign}
            className="w-[30%] rounded-3xl bg-[#241A3F] "
          >
            Complete
          </Button>
        </div>
      </div>
      {isCampaignCreated || CampaignEdited ? (
        <SuccessComponent
          link="/dashboard/account"
          description="Congratulations! Your account information has been successfully submitted for review. Our team will carefully review your submission and get back to you within [X] business days."
          title="Campaign Successfully Submitted"
        />
      ) : null}
    </>
  );
};

export default Review;
