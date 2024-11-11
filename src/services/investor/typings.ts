import { UserProfileResponseType } from "../profile/typings";
import { Startup } from "../startup";
export type InvestmentType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  total_invested: string;
  campaign: CampaignDto;
  user: UserProfileResponseType;
};

type CampaignDto = {
  title: string;
  startDate: string;
  endDate?: string;
  milestones: CreateMilestoneDto[];
  description: string;
  minimum_value: number;
  fundingGoal: number;
  campaignType:
    | "EQUITY"
    | "DEBT"
    | "REWARD"
    | "REVENUE_SHARE"
    | "GRANTS"
    | "ROI"
    | "SAFE"
    | "OTHERS";
  startup: Startup;
};
type CreateMilestoneDto = {
  milestoneTitle: string;
  milestoneDescription: string;
  targetAmount: number;
  date: string;
};
