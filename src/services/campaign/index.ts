import api from "../api/apiSlice";

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
      invalidatesTags: [{ type: "Campaign", id: "LIST" }],
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
      providesTags: () => [{ type: "Campaign", id: "LIST" }],
    }),
    campaignsControllerFindOneAllUser: build.query<
      CampaignsControllerFindOneAllUserApiResponse,
      CampaignsControllerFindOneAllUserApiArg
    >({
      query: (queryArg) => ({ url: `/campaigns/${queryArg.userId}/all` }),
      providesTags: (result, error, arg) => [
        { type: "Campaign", id: `USER_${arg.userId}` },
        { type: "Campaign", id: "LIST" },
      ],
    }),
    campaignsControllerFindOne: build.query<
      CampaignsControllerFindOneApiResponse,
      CampaignsControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/campaigns/${queryArg.campaignId}` }),
      providesTags: (result, error, arg) => [
        { type: "Campaign", id: arg.campaignId },
      ],
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
      invalidatesTags: (result, error, arg) => [
        { type: "Campaign", id: arg.id },
        { type: "Campaign", id: "LIST" },
      ],
    }),
    campaignsControllerUploadMilestoneProof: build.mutation<
      CampaignControllerUploadMilestonesProofResponse,
      CampaignsControllerUpdateMileStonesProofArg
    >({
      query: (queryArg) => ({
        url: `/milestones/${queryArg.milestoneId}/update`,
        method: "PUT",
        body: queryArg.proof,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "MilestoneProof", id: arg.milestoneId },
      ],
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
  proof?: string;
  is_completed?: boolean;
};

export type CampaignControllerUploadMilestonesProofResponse = {
  message: string;
};

export type CampaignsControllerUpdateMileStonesProofArg = {
  milestoneId: string;
  proof: Blob;
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
  is_completed: true;
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
  useCampaignsControllerUploadMilestoneProofMutation,
} = injectedRtkApi;
