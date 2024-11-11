import api from "../api/apiSlice";
import { StartupInvestmentsResponse } from "./typings";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    startupControllerCreateTeamInformation: build.mutation<
      StartupControllerCreateTeamInformationApiResponse,
      StartupControllerCreateTeamInformationApiArg
    >({
      query: (queryArg) => ({
        url: `/startups/${queryArg.creatorId}/team`,
        method: "POST",
        body: queryArg.createTeamDto,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Startup", id: arg.creatorId },
        { type: "Startup", id: "LIST" },
      ],
    }),
    startupControllerCreateBusinessInformation: build.mutation<
      StartupControllerCreateBusinessInformationApiResponse,
      StartupControllerCreateBusinessInformationApiArg
    >({
      query: (queryArg) => ({
        url: `/startups/${queryArg.creatorId}/business`,
        method: "POST",
        body: queryArg.createBusinessInformationDto,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Startup", id: arg.creatorId },
        { type: "Startup", id: "LIST" },
      ],
    }),
    startupControllerCreateFounder: build.mutation<
      StartupControllerCreateFounderApiResponse,
      StartupControllerCreateFounderApiArg
    >({
      query: (queryArg) => ({
        url: `/startups/${queryArg.creatorId}/founder`,
        method: "PUT",
        body: queryArg.createFounderDto,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Startup", id: arg.creatorId },
        { type: "Startup", id: "LIST" },
      ],
    }),
    startupControllerCreateCompanyInformation: build.mutation<
      StartupControllerCreateCompanyInformationApiResponse,
      StartupControllerCreateCompanyInformationApiArg
    >({
      query: (queryArg) => ({
        url: `/startups/${queryArg.creatorId}/company`,
        method: "POST",
        body: queryArg.createCompanyInformationDto,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Startup", id: arg.creatorId },
        { type: "Startup", id: "LIST" },
      ],
    }),
    startupControllerUpdateCompanyInformationNew: build.mutation<
      StartupControllerUpdateCompanyInformationNewApiResponse,
      StartupControllerUpdateCompanyInformationNewApiArg
    >({
      query: (queryArg) => ({
        url: `/startups/${queryArg.creatorId}/company`,
        method: "PUT",
        body: queryArg.updateCompanyInformationDto,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Startup", id: arg.creatorId },
        { type: "Startup", id: "LIST" },
      ],
    }),
    startupControllerCreateFundingInformation: build.mutation<
      StartupControllerCreateFundingInformationApiResponse,
      StartupControllerCreateFundingInformationApiArg
    >({
      query: (queryArg) => ({
        url: `/startups/${queryArg.creatorId}/funding`,
        method: "POST",
        body: queryArg.createFundingInformationDto,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Startup", id: arg.creatorId },
        { type: "Startup", id: "LIST" },
      ],
    }),
    startupControllerUpdateCompanyInformation: build.mutation<
      StartupControllerUpdateCompanyInformationApiResponse,
      StartupControllerUpdateCompanyInformationApiArg
    >({
      query: (queryArg) => ({
        url: `/startups/update/${queryArg.creatorId}/company`,
        method: "PUT",
        body: queryArg.updateNewCompanyInformationDto,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Startup", id: arg.creatorId },
        { type: "Startup", id: "LIST" },
      ],
    }),
    startupControllerUpdateTeamInformation: build.mutation<
      StartupControllerUpdateTeamInformationApiResponse,
      StartupControllerUpdateTeamInformationApiArg
    >({
      query: (queryArg) => ({
        url: `/startups/update/${queryArg.creatorId}/team`,
        method: "PUT",
        body: queryArg.updateTeamDto,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Startup", id: arg.creatorId },
        { type: "Startup", id: "LIST" },
      ],
    }),
    startupControllerUpdateFounderInformation: build.mutation<
      StartupControllerUpdateFounderInformationApiResponse,
      StartupControllerUpdateFounderInformationApiArg
    >({
      query: (queryArg) => ({
        url: `/startups/update/${queryArg.creatorId}/founder`,
        method: "PUT",
        body: queryArg.updateFounderDto,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Startup", id: arg.creatorId },
        { type: "Startup", id: "LIST" },
      ],
    }),
    startupControllerUpdateFundingInformation: build.mutation<
      StartupControllerUpdateFundingInformationApiResponse,
      StartupControllerUpdateFundingInformationApiArg
    >({
      query: (queryArg) => ({
        url: `/startups/update/${queryArg.creatorId}/funding`,
        method: "PUT",
        body: queryArg.updateFundingInformationDto,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Startup", id: arg.creatorId },
        { type: "Startup", id: "LIST" },
      ],
    }),
    startupControllerUpdateBusinessInformation: build.mutation<
      StartupControllerUpdateBusinessInformationApiResponse,
      StartupControllerUpdateBusinessInformationApiArg
    >({
      query: (queryArg) => ({
        url: `/startups/update/${queryArg.creatorId}/business`,
        method: "PUT",
        body: queryArg.updateBusinessInformationDto,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Startup", id: arg.creatorId },
        { type: "Startup", id: "LIST" },
      ],
    }),
    startupControllerGetStartupByUserId: build.query<
      StartupControllerGetStartupByUserIdApiResponse,
      StartupControllerGetStartupByUserIdApiArg
    >({
      query: (queryArg) => ({ url: `/startups/${queryArg.userId}/data` }),
      providesTags: (result, error, arg) => [
        { type: "Startup", id: arg.userId },
      ],
    }),
    startupControllerGetStartupByStartupId: build.query<
      StartupControllerGetStartupByStartupIdApiResponse,
      StartupControllerGetStartupByStartupIdApiArg
    >({
      query: (queryArg) => ({
        url: `/startups/${queryArg.startupId}/data-feed`,
      }),
    }),
    startupControllerGetStartupInvestments: build.query<
      StartupInvestmentsResponse,
      StartupControllerGetStartupByStartupIdApiArg
    >({
      query: (queryArg) => ({
        url: `/startups/investments/${queryArg.startupId}`,
      }),
    }),
    startupControllerFindAll: build.query<
      StartupControllerFindAllApiResponse,
      StartupControllerFindAllApiArg
    >({
      query: (queryArg) => ({
        url: `/startups`,
        params: {
          page: queryArg.page,
          limit: queryArg.limit,
          keyword: queryArg.keyword,
          subscriptionPlan: queryArg.subscriptionPlan,
          startupId: queryArg.startupId,
          userId: queryArg.userId,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type StartupControllerCreateTeamInformationApiResponse =
  /** status 201  */ string;
export type StartupControllerCreateTeamInformationApiArg = {
  creatorId: string;
  createTeamDto: CreateTeamDto;
};
export type StartupControllerCreateBusinessInformationApiResponse =
  /** status 201  */ string;
export type StartupControllerCreateBusinessInformationApiArg = {
  creatorId: string;
  createBusinessInformationDto: CreateBusinessInformationDto;
};
export type StartupControllerCreateFounderApiResponse =
  /** status 200  */ string;
export type StartupControllerCreateFounderApiArg = {
  creatorId: string;
  createFounderDto: CreateFounderDto;
};
export type StartupControllerCreateCompanyInformationApiResponse =
  /** status 201  */ string;
export type StartupControllerCreateCompanyInformationApiArg = {
  creatorId: string;
  createCompanyInformationDto: CreateCompanyInformationDto;
};
export type StartupControllerUpdateCompanyInformationNewApiResponse =
  /** status 200  */ string;
export type StartupControllerUpdateCompanyInformationNewApiArg = {
  creatorId: string;
  updateCompanyInformationDto: UpdateCompanyInformationDto;
};
export type StartupControllerCreateFundingInformationApiResponse =
  /** status 201  */ string;
export type StartupControllerCreateFundingInformationApiArg = {
  creatorId: string;
  createFundingInformationDto: CreateFundingInformationDto;
};
export type StartupControllerUpdateCompanyInformationApiResponse =
  /** status 200  */ string;
export type StartupControllerUpdateCompanyInformationApiArg = {
  creatorId: string;
  updateNewCompanyInformationDto: UpdateNewCompanyInformationDto;
};
export type StartupControllerUpdateTeamInformationApiResponse =
  /** status 200  */ string;
export type StartupControllerUpdateTeamInformationApiArg = {
  creatorId: string;
  updateTeamDto: UpdateTeamDto;
};
export type StartupControllerGetStartupByStartupIdApiResponse =
  /** status 200  */ Startup | /** status 201  */ Startup;
export type StartupControllerUpdateFounderInformationApiResponse =
  /** status 200  */ string;
export type StartupControllerUpdateFounderInformationApiArg = {
  creatorId: string;
  updateFounderDto: UpdateFounderDto;
};
export type StartupControllerUpdateFundingInformationApiResponse =
  /** status 200  */ string;
export type StartupControllerUpdateFundingInformationApiArg = {
  creatorId: string;
  updateFundingInformationDto: UpdateFundingInformationDto;
};
export type StartupControllerUpdateBusinessInformationApiResponse =
  /** status 200  */ string;
export type StartupControllerUpdateBusinessInformationApiArg = {
  creatorId: string;
  updateBusinessInformationDto: UpdateBusinessInformationDto;
};
export type StartupControllerGetStartupByUserIdApiResponse =
  /** status 200  */ Startup;
export type StartupControllerGetStartupByUserIdApiArg = {
  userId: string;
};
export type StartupControllerGetStartupByStartupIdApiArg = {
  startupId: string;
};
export type StartupControllerFindAllApiResponse =
  /** status 200  */ PaginatedStartupDto;
export type StartupControllerFindAllApiArg = {
  /** Page number */
  page?: number;
  /** Items per page */
  limit?: number;
  /** Optional keyword for filtering startups by company name */
  keyword?: string;
  /** Filter by subscription plan (e.g., basic, premium) */
  subscriptionPlan?: string;
  /** Filter by startup ID */
  startupId?: string;
  /** Filter by user ID (creator ID) */
  userId?: string;
};
export type CreateTeamDto = {
  team_cofounder_profileImage?: Blob;
  team_cofounder_title: string;
  team_cofounder_firstName: string;
  team_cofounder_linkdln: string;
  team_members: number;
  team_cofounder_lastName: string;
  team_cofounder_email: string;
  team_cofounder_education: string;
  team_cofounder_phone: string;
  team_cofounder_experience: string;
  team_details: string;
  team_primary_base: string;
};
export type CreateBusinessInformationDto = {
  business_stage: string;
  business_model: "B2B" | "B2C" | "B2G" | "B2G" | "C2B" | "C2C";
  business_revenue_channel: string;
  business_market_size: number;
  business_past_revenue_generated: number;
  business_customer_acqui_cost: number;
  business_current_users: number;
  business_monthly_recur_expense: number;
  business_monthly_recur_revenue: number;
  business_model_desc: string;
};
export type CreateFounderDto = {
  profileImage?: Blob;
  founderTitle: string;
  founderGender: string;
  founderFirstname: string;
  founderLastname: string;
  founderEmail: string;
  founderEducationHistory: string;
  founderPhone: string;
  founderLinkdln?: string;
  founderExperience: string;
};
export type CreateCompanyInformationDto = {
  company_business_plan?: Blob;
  company_pitchDeck?: Blob;
  company_video?: Blob;
  company_logo?: Blob;
  company_cac?: Blob;
  company_cover_photo?: Blob;
  company_name: string;
  company_email: string;
  company_address: string;
  company_website: string;
  company_industry: string;
  company_phone: string;
  company_city: string;
  company_geography: string;
  company_desc: string;
  company_bullet_point: string;
  company_incorporated_in: string;
  company_incorporation_year: string;
};
export type UpdateCompanyInformationDto = {
  company_business_plan?: Blob;
  company_pitchDeck?: Blob;
  company_video?: Blob;
  company_logo?: Blob;
  company_cac?: Blob;
  company_cover_photo?: Blob;
  company_name?: string;
  company_email?: string;
  company_address?: string;
  company_website?: string;
  company_industry?: string;
  company_phone?: string;
  company_city?: string;
  company_geography?: string;
  company_desc?: string;
  company_bullet_point?: string;
  company_incorporated_in?: string;
  company_incorporation_year?: string;
};
export type CreateFundingInformationDto = {
  financial_statement?: Blob;
  external_funding: boolean;
  external_funds_Value: number;
  rationale_valuation: string;
  previous_fundraise: number;
  funding_history_desc: string;
  funds_use: string;
  collected_loans: boolean;
  loan_desc: string;
  incubator_program: boolean;
  incubator_program_desc: string;
  campaign_type:
    | "EQUITY"
    | "DEBT"
    | "REWARD"
    | "REVENUE_SHARE"
    | "GRANTS"
    | "ROI"
    | "SAFE"
    | "OTHERS";
  raise_period: string;
  about_secure_seedFund: string;
};
export type UpdateNewCompanyInformationDto = {
  company_business_plan?: Blob;
  company_pitchDeck?: Blob;
  company_video?: Blob;
  profileImage?: Blob;
  company_cover_photo?: Blob;
  company_cac?: Blob;
  company_address: string;
  company_website: string;
  company_desc: string;
  company_bullet_point: string;
};
export type UpdateTeamDto = {
  team_cofounder_profileImage?: Blob;
  team_cofounder_title?: string;
  team_cofounder_firstName?: string;
  team_cofounder_linkdln?: string;
  team_members?: number;
  team_cofounder_lastName?: string;
  team_cofounder_email?: string;
  team_cofounder_education?: string;
  team_cofounder_phone?: string;
  team_cofounder_experience?: string;
  team_details?: string;
  team_primary_base?: string;
};
export type UpdateFounderDto = {
  profileImage?: Blob;
  founderTitle?: string;
  founderGender?: string;
  founderFirstname?: string;
  founderLastname?: string;
  founderEmail?: string;
  founderEducationHistory?: string;
  founderPhone?: string;
  founderLinkdln?: string;
  founderExperience?: string;
};
export type UpdateFundingInformationDto = {
  financial_statement?: Blob;
  external_funding?: boolean;
  external_funds_Value?: number;
  rationale_valuation?: string;
  previous_fundraise?: number;
  funding_history_desc?: string;
  funds_use?: string;
  collected_loans?: boolean;
  loan_desc?: string;
  incubator_program?: boolean;
  incubator_program_desc?: string;
  campaign_type?:
    | "EQUITY"
    | "DEBT"
    | "REWARD"
    | "REVENUE_SHARE"
    | "GRANTS"
    | "ROI"
    | "SAFE"
    | "OTHERS";
  raise_period?: string;
  about_secure_seedFund?: string;
};
export type UpdateBusinessInformationDto = {
  business_stage?: string;
  business_model?: "B2B" | "B2C" | "B2G" | "B2G" | "C2B" | "C2C";
  business_revenue_channel?: string;
  business_market_size?: number;
  business_past_revenue_generated?: number;
  business_customer_acqui_cost?: number;
  business_current_users?: number;
  business_monthly_recur_expense?: number;
  business_monthly_recur_revenue?: number;
  business_model_desc?: string;
};
export type Milestone = {
  campaign: Campaign;
  milestoneTitle: string;
  milestoneDescription: string;
  targetAmount: number;
  is_completed: boolean;
  proof?: string;
  status?: string;
  date: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};
export type Investments = {
  user: User;
  total_invested: number;
  campaign: Campaign;
  id: string;
  createdAt: string;
  updatedAt: string;
};
export type Campaign = {
  creator_id: User;
  title: string;
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
  startDate: string;
  endDate: string;
  isApprove: boolean;
  isLive: boolean;
  milestones?: Milestone[];
  investment_balance: string;
  minimum_value: string;
  startup: Startup;
  investments: Investments;
  id: string;
  createdAt: string;
  updatedAt: string;
};
export type Investor = {
  user: User;
  investor_phonenumber: string;
  investor_nationality: string;
  investor_country_residence: string;
  investor_residence_city: string;
  investor_status: string;
  investor_image: string;
  investor_type:
    | "EQUITY"
    | "DEBT"
    | "REWARD"
    | "REVENUE_SHARE"
    | "GRANTS"
    | "ROI"
    | "SAFE"
    | "OTHERS";
  investor_annual_income: string;
  investor_investment_duration: string;
  investor_investment_goal: string;
  investor_experience: string;
  investor_liquidity_importance: string;
  is_completed_info: boolean;
  id: string;
  createdAt: string;
  updatedAt: string;
};
export type Institution = {
  user: User;
  institution_name: string;
  institution_reg_number: string;
  institution_address: string;
  institution_website: string;
  institution_industry_of_interest: string;
  institution_funding_type:
    | "EQUITY"
    | "DEBT"
    | "REWARD"
    | "REVENUE_SHARE"
    | "GRANTS"
    | "ROI"
    | "SAFE"
    | "OTHERS";
  institution_funding_size: string;
  is_completed_info: boolean;
  id: string;
  createdAt: string;
  updatedAt: string;
};
export type Kyc = {
  user: User;
  idProofUrl: string;
  identity_number: string;
  addressProofUrl: string;
  isApproved: boolean;
  utility_proof: string;
  biometric_proof: string;
  company_tin_number: string;
  company_status_report: string;
  company_reg_number: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};
export type Wallet = {
  user: User;
  balance: string;
  total_withdrawn: string;
  withdrawable_balance: string;
  investment_balance: string;
  previous_balance: string;
  total_deposited: string;
  last_transaction_ref: string;
  last_transaction_type: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};
export type User = {
  email: string;
  firstName: string;
  lastName: string;
  othername?: string;
  phone: string;
  is_verified?: boolean;
  subscription_plan: "free" | "basic" | "premium";
  hash?: string;
  photo?: string;
  email_verified: boolean;
  role: "USER" | "ADMIN";
  accountType: "startup" | "investor" | "institution";
  createdAt: string;
  updatedAt: string;
  campaigns?: Campaign[];
  startup: Startup;
  investor: Investor;
  institution: Institution;
  kyc: Kyc;
  wallet: Wallet;
  investments: Investments[];
  id: string;
};
export type BusinessInformation = {
  business_stage: string;
  business_model: "B2B" | "B2C" | "B2G" | "B2G" | "C2B" | "C2C";
  business_revenue_channel: string;
  business_market_size: number;
  business_past_revenue_generated: number;
  business_customer_acqui_cost: number;
  business_current_users: number;
  business_monthly_recur_expense: number;
  business_monthly_recur_revenue: number;
  business_model_desc: string;
  startup: Startup;
  id: string;
  createdAt: string;
  updatedAt: string;
};
export type CompanyInformation = {
  company_name: string;
  company_email: string;
  company_address: string;
  company_website: string;
  company_industry: string;
  company_phone: string;
  company_city: string;
  company_geography: string;
  company_desc: string;
  company_bullet_point: string;
  company_incorporated_in: string;
  company_incorporation_year: string;
  company_business_plan: string;
  company_pitchDeck: string;
  company_video: string;
  company_logo: string;
  company_cac: string;
  company_cover_photo?: string;
  startup: Startup;
  id: string;
  createdAt: string;
  updatedAt: string;
};
export type FundingInformation = {
  external_funding: boolean;
  external_funds_Value: number;
  rationale_valuation: string;
  previous_fundraise: number;
  funding_history_desc: string;
  funds_use: string;
  collected_loans: boolean;
  loan_desc: string;
  incubator_program: boolean;
  incubator_program_desc: string;
  campaign_type:
    | "EQUITY"
    | "DEBT"
    | "REWARD"
    | "REVENUE_SHARE"
    | "GRANTS"
    | "ROI"
    | "SAFE"
    | "OTHERS";
  raise_period: string;
  financial_statement: string;
  about_secure_seedFund: string;
  startup: Startup;
  id: string;
  createdAt: string;
  updatedAt: string;
};
export type Team = {
  startup: Startup;
  team_cofounder_title: string;
  team_cofounder_firstName: string;
  team_cofounder_lastName: string;
  team_cofounder_email: string;
  team_cofounder_education: string;
  team_cofounder_phone: string;
  team_cofounder_experience: string;
  team_details: string;
  team_cofounder_linkdln: string;
  team_members: number;
  team_primary_base: string;
  team_cofounder_profileImage: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};
export type Founder = {
  founderTitle: string;
  founderGender: string;
  profileImage: string;
  founderFirstname: string;
  founderLastname: string;
  founderEmail: string;
  founderEducationHistory: string;
  founderPhone: string;
  founderLinkdln: string;
  founderExperience: string;
  isApprove: boolean;
  startup: Startup;
  id: string;
  createdAt: string;
  updatedAt: string;
};
export type Startup = {
  creator_id: User;
  is_completed_info: boolean;
  businessInformation: BusinessInformation;
  companyInformation: CompanyInformation;
  fundingInformation: FundingInformation;
  teamInformation: Team;
  founder: Founder;
  campaignInformation: Campaign[];
  id: string;
  createdAt: string;
  updatedAt: string;
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
export type StartupDto = {
  /** Business Information */
  businessInformation?: UpdateBusinessInformationDto;
  /** Company Information */
  companyInformation?: UpdateCompanyInformationDto;
  /** Funding Information */
  fundingInformation?: UpdateFundingInformationDto;
  /** Team Information */
  teamInformation?: CreateTeamDto;
  /** Founder Information */
  founder?: CreateFounderDto;
  /** Campaign Information */
  campaignInformation?: CreateCampaignDto;
};
export type PaginationMetaDto = {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
};
export type PaginatedStartupDto = {
  items: StartupDto[];
  meta: PaginationMetaDto;
};
export const {
  useStartupControllerCreateTeamInformationMutation,
  useStartupControllerCreateBusinessInformationMutation,
  useStartupControllerCreateFounderMutation,
  useStartupControllerCreateCompanyInformationMutation,
  useStartupControllerUpdateCompanyInformationNewMutation,
  useStartupControllerCreateFundingInformationMutation,
  useStartupControllerUpdateCompanyInformationMutation,
  useStartupControllerUpdateTeamInformationMutation,
  useStartupControllerUpdateFounderInformationMutation,
  useStartupControllerUpdateFundingInformationMutation,
  useStartupControllerUpdateBusinessInformationMutation,
  useStartupControllerGetStartupByUserIdQuery,
  useStartupControllerGetStartupByStartupIdQuery,
  useStartupControllerFindAllQuery,
  useStartupControllerGetStartupInvestmentsQuery,
} = injectedRtkApi;
