import api from "../api/apiSlice";
import { InvestmentType } from "./typings";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    investorControllerCreateInvestor: build.mutation<
      InvestorControllerCreateInvestorApiResponse,
      InvestorControllerCreateInvestorApiArg
    >({
      query: (queryArg) => ({
        url: `/investor/${queryArg.userId}`,
        method: "POST",
        body: queryArg.createInvestorDto,
      }),
    }),
    investorControllerUpdate: build.mutation<
      InvestorControllerUpdateApiResponse,
      InvestorControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/investor/${queryArg.userId}/update`,
        method: "PUT",
        body: queryArg.updateInvestorDto,
      }),
    }),
    investorControllerFindAll: build.query<
      InvestorControllerFindAllApiResponse,
      InvestorControllerFindAllApiArg
    >({
      query: (queryArg) => ({
        url: `/investor`,
        params: {
          page: queryArg.page,
          limit: queryArg.limit,
          keyword: queryArg.keyword,
          userId: queryArg.userId,
        },
      }),
    }),
    investorControllerFindOne: build.query<
      InvestorControllerFindOneApiResponse,
      InvestorControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/investor/${queryArg.id}` }),
    }),
    investorControllerInvestInCampaign: build.mutation<
      InvestorControllerInvestInCampaignApiResponse,
      InvestorControllerInvestInCampaignApiArg
    >({
      query: (queryArg) => ({
        url: `/investor/invest/${queryArg.campaignId}`,
        method: "POST",
        body: queryArg.investDto,
      }),
      invalidatesTags: ["InvestInCampaign"],
    }),
    investorControllerGetInvestorInvestments: build.query<
      InvestorControllerGetInvestorInvestmentsApiResponse,
      InvestorControllerGetInvestorInvestmentsApiArg
    >({
      query: (queryArg) => ({
        url: `/investor/investments/${queryArg.investorId}`,
      }),
      providesTags: ["InvestInCampaign"],
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type InvestorControllerCreateInvestorApiResponse =
  /** status 201  */ string;
export type InvestorControllerCreateInvestorApiArg = {
  userId: string;
  createInvestorDto: CreateInvestorDto;
};
export type InvestorControllerUpdateApiResponse =
  /** status 200  */
  string | /** status 201  */ string;
export type InvestorControllerUpdateApiArg = {
  userId: string;
  updateInvestorDto: UpdateInvestorDto;
};
export type InvestorControllerFindAllApiResponse =
  /** status 200  */ void | /** status 201  */ InvestorDto;
export type InvestorControllerFindAllApiArg = {
  /** Page number */
  page?: number;
  /** Items per page */
  limit?: number;
  /** Optional keyword for filtering */
  keyword?: string;
  /** User ID */
  userId?: string;
};
export type InvestorControllerFindOneApiResponse =
  /** status 200  */
  InvestorDto | /** status 201  */ InvestorDto;
export type InvestorControllerFindOneApiArg = {
  id: string;
};
export type InvestorControllerInvestInCampaignApiResponse =
  /** status 201 Investment made successfully. */ string;
export type InvestorControllerInvestInCampaignApiArg = {
  /** Investor ID */
  /** Campaign ID */
  campaignId: string;
  /** Amount to invest */
  investDto: InvestDto;
};
export type InvestorControllerGetInvestorInvestmentsApiResponse =
  InvestmentType[];
export type InvestorControllerGetInvestorInvestmentsApiArg = {
  /** Investor ID */
  investorId: string;
};
export type CreateInvestorDto = {
  /** Phone number of the investor */
  investor_phonenumber: string;
  /** Nationality of the investor */
  investor_nationality: string;
  /** Country of residence of the investor */
  investor_country_residence: string;
  /** City of residence of the investor */
  investor_residence_city: string;
  /** Status of the investor */
  investor_status: string;
  /** Investor image file */
  investor_image?: Blob;
  /** Type of investor */
  investor_type:
    | "EQUITY"
    | "DEBT"
    | "REWARD"
    | "REVENUE_SHARE"
    | "GRANTS"
    | "ROI"
    | "SAFE"
    | "OTHERS";
  /** Annual income of the investor */
  investor_annual_income: string;
  /** Investment duration of the investor */
  investor_investment_duration: string;
  /** Investment goal of the investor */
  investor_investment_goal: string;
  /** Investment experience of the investor */
  investor_experience: string;
  /** Liquidity importance for the investor */
  investor_liquidity_importance: string;
};
export type UpdateInvestorDto = {
  /** Nationality of the investor */
  investor_nationality: string;
  /** Country of residence of the investor */
  investor_country_residence: string;
  /** City of residence of the investor */
  investor_residence_city: string;
  /** Status of the investor */
  investor_status: string;
  /** Investor image file */
  investor_image?: Blob;
  /** Type of investor */
  investor_type:
    | "EQUITY"
    | "DEBT"
    | "REWARD"
    | "REVENUE_SHARE"
    | "GRANTS"
    | "ROI"
    | "SAFE"
    | "OTHERS";
  /** Annual income of the investor */
  investor_annual_income: string;
  /** Investment duration of the investor */
  investor_investment_duration: string;
  /** Investment goal of the investor */
  investor_investment_goal: string;
  /** Investment experience of the investor */
  investor_experience: string;
  /** Liquidity importance for the investor */
  investor_liquidity_importance: string;
};
export type InvestorDto = {
  investorType:
    | "EQUITY"
    | "DEBT"
    | "REWARD"
    | "REVENUE_SHARE"
    | "GRANTS"
    | "ROI"
    | "SAFE"
    | "OTHERS";
  investor_phonenumber?: string;
  investor_nationality: string;
  investor_country_residence: string;
  investor_residence_city: string;
  investor_status: string;
  investor_image: string;
  investor_annual_income: string;
  investor_investment_duration: string;
  investor_investment_goal: string;
  investor_experience: string;
  investor_liquidity_importance: string;
};
export type InvestDto = {
  investmentAmount: number;
  investorUserId: string;
};
export const {
  useInvestorControllerCreateInvestorMutation,
  useInvestorControllerUpdateMutation,
  useInvestorControllerFindAllQuery,
  useInvestorControllerFindOneQuery,
  useInvestorControllerInvestInCampaignMutation,
  useInvestorControllerGetInvestorInvestmentsQuery,
} = injectedRtkApi;
