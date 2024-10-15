import { emptySplitApi as api } from "../emptyApi";
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
    }),
    startupControllerGetStartupByUserId: build.query<
      StartupControllerGetStartupByUserIdApiResponse,
      StartupControllerGetStartupByUserIdApiArg
    >({
      query: (queryArg) => ({ url: `/startups/${queryArg.userId}/data` }),
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
export type StartupControllerGetStartupByUserIdApiResponse =
  /** status 200  */ Startup;
export type StartupControllerGetStartupByUserIdApiArg = {
  userId: string;
};
export type CreateTeamDto = {
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
  company_address: string;
  company_website: string;
  company_desc: string;
  company_bullet_point: string;
};
export type Milestone = {
  campaign: Campaign;
  milestoneTitle: string;
  milestoneDescription: string;
  targetAmount: number;
  status?: string;
  date: string;
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
  startup: Startup[];
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
  company_business_plan: string;
  company_pitchDeck: string;
  company_video: string;
  company_logo: string;
  company_cac: string;
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
  campaignInformation: Campaign;
  id: string;
  createdAt: string;
  updatedAt: string;
};
export const {
  useStartupControllerCreateTeamInformationMutation,
  useStartupControllerCreateBusinessInformationMutation,
  useStartupControllerCreateFounderMutation,
  useStartupControllerCreateCompanyInformationMutation,
  useStartupControllerCreateFundingInformationMutation,
  useStartupControllerUpdateCompanyInformationMutation,
  useStartupControllerGetStartupByUserIdQuery,
} = injectedRtkApi;