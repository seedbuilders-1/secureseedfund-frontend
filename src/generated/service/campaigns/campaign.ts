import { emptySplitApi as api } from "../../emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    campaignsControllerCreate: build.mutation<
      CampaignsControllerCreateApiResponse,
      CampaignsControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/campaigns`,
        method: "POST",
        body: queryArg.createCampaignDto,
      }),
    }),
    campaignsControllerFindAll: build.query<
      CampaignsControllerFindAllApiResponse,
      CampaignsControllerFindAllApiArg
    >({
      query: (queryArg) => ({
        url: `/campaigns`,
        params: {
          page: queryArg.page,
          limit: queryArg.limit,
          keyword: queryArg.keyword,
          userId: queryArg.userId,
          campaignId: queryArg.campaignId,
          campaignType: queryArg.campaignType,
        },
      }),
    }),
    campaignsControllerFindOneAllUser: build.query<
      CampaignsControllerFindOneAllUserApiResponse,
      CampaignsControllerFindOneAllUserApiArg
    >({
      query: (queryArg) => ({ url: `/campaigns/${queryArg.userId}/all` }),
    }),
    campaignsControllerFindOne: build.query<
      CampaignsControllerFindOneApiResponse,
      CampaignsControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/campaigns/${queryArg.campaignId}` }),
    }),
    campaignsControllerUpdate: build.mutation<
      CampaignsControllerUpdateApiResponse,
      CampaignsControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/campaigns/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateCampaignDto,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type CampaignsControllerCreateApiResponse = /** status 201  */ string;
export type CampaignsControllerCreateApiArg = {
  createCampaignDto: CreateCampaignDto;
};
export type CampaignsControllerFindAllApiResponse =
  /** status 200  */ CampaignDto[];
export type CampaignsControllerFindAllApiArg = {
  /** Page number */
  page?: number;
  /** Items per page */
  limit?: number;
  /** Optional keyword for filtering campaigns */
  keyword?: string;
  /** Filter by user ID */
  userId?: string;
  /** Filter by campaign ID */
  campaignId?: string;
  /** Filter by campaign type */
  campaignType?: string;
};
export type CampaignsControllerFindOneAllUserApiResponse =
  /** status 200  */ CampaignDto[];
export type CampaignsControllerFindOneAllUserApiArg = {
  userId: string;
};
export type CampaignsControllerFindOneApiResponse =
  /** status 200  */ CampaignDto;
export type CampaignsControllerFindOneApiArg = {
  campaignId: string;
};
export type CampaignsControllerUpdateApiResponse =
  /** status 200  */ CampaignDto;
export type CampaignsControllerUpdateApiArg = {
  id: string;
  updateCampaignDto: UpdateCampaignDto;
};
export type MilestoneDto = {
  milestoneTitle: string;
  milestoneDescription: string;
  targetAmount: number;
  is_completed: boolean;
  proof: string;
  status: string;
  date: string;
};
export type CreateCampaignDto = {
  title: string;
  creator_id: string;
  startDate: string;
  endDate?: string;
  minimum_value: number;
  milestones: MilestoneDto[];
  description: string;
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
};
export type CreateMilestoneDto = {
  milestoneTitle: string;
  milestoneDescription: string;
  targetAmount: number;
  date: string;
};
export type CampaignDto = {
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
};
export type UpdateMilestoneDto = {
  id?: string;
  milestoneTitle: string;
  milestoneDescription: string;
  targetAmount: number;
  date: string;
};
export type UpdateCampaignDto = {
  title: string;
  startDate: string;
  endDate?: string;
  milestones: UpdateMilestoneDto[];
  description: string;
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
  companyType: string;
  teamMembers: number;
};
export const {
  useCampaignsControllerCreateMutation,
  useCampaignsControllerFindAllQuery,
  useCampaignsControllerFindOneAllUserQuery,
  useCampaignsControllerFindOneQuery,
  useCampaignsControllerUpdateMutation,
} = injectedRtkApi;
