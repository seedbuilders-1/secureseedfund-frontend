import api from "../api/apiSlice";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    transactionsControllerGetAllTransactionsForUser: build.query<
      TransactionsControllerGetAllTransactionsForUserApiResponse,
      TransactionsControllerGetAllTransactionsForUserApiArg
    >({
      query: (queryArg) => ({ url: `/transactions/user/${queryArg.userId}` }),
      providesTags: (result, error, arg) => [
        { type: "Transaction", id: arg.userId },
      ],
    }),
    transactionsControllerGetSuccessTransactionsForUser: build.query<
      TransactionsControllerGetSuccessTransactionsForUserApiResponse,
      TransactionsControllerGetSuccessTransactionsForUserApiArg
    >({
      query: (queryArg) => ({
        url: `/transactions/user/${queryArg.userId}/success`,
      }),
    }),
    transactionsControllerGetNonSuccessTransactionsForUser: build.query<
      TransactionsControllerGetNonSuccessTransactionsForUserApiResponse,
      TransactionsControllerGetNonSuccessTransactionsForUserApiArg
    >({
      query: (queryArg) => ({
        url: `/transactions/user/${queryArg.userId}/non-success`,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type TransactionsControllerGetAllTransactionsForUserApiResponse =
  /** status 200  */ Transactions[];
export type TransactionsControllerGetAllTransactionsForUserApiArg = {
  userId: string;
};
export type TransactionsControllerGetSuccessTransactionsForUserApiResponse =
  /** status 200  */ Transactions[];
export type TransactionsControllerGetSuccessTransactionsForUserApiArg = {
  userId: string;
};
export type TransactionsControllerGetNonSuccessTransactionsForUserApiResponse =
  /** status 200  */ Transactions[];
export type TransactionsControllerGetNonSuccessTransactionsForUserApiArg = {
  userId: string;
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
  govt_photo_id: string;
  proof_of_address: string;
  article_assoc: string;
  memo_assoc: string;
  business_address: string;
  dir_company_address: string;
  company_status_report: string;
  shareholders_address: string;
  source_of_income: string;
  politically_exposed_person: string;
  tin: string;
  isApproved: boolean;
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
export type Transactions = {
  user: User;
  trx_desc: string;
  trx_percentage: string;
  trx_value: string;
  access_code: string;
  trx_ref: string;
  trx_status: string;
  trx_type: string;
  resolved_at: string;
  is_completed: boolean;
  id: string;
  createdAt: string;
  updatedAt: string;
};
export const {
  useTransactionsControllerGetAllTransactionsForUserQuery,
  useTransactionsControllerGetSuccessTransactionsForUserQuery,
  useTransactionsControllerGetNonSuccessTransactionsForUserQuery,
} = injectedRtkApi;
