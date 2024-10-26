import { emptySplitApi as api } from "../emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    investorControllerUpdateInvestor: build.mutation<
      InvestorControllerUpdateInvestorApiResponse,
      InvestorControllerUpdateInvestorApiArg
    >({
      query: (queryArg) => ({
        url: `/investor/${queryArg.userId}`,
        method: "POST",
        body: queryArg.createInvestorDto,
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
    investorControllerUpdate: build.mutation<
      InvestorControllerUpdateApiResponse,
      InvestorControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/investor/${queryArg.userId}/update`,
        method: "PATCH",
        body: queryArg.updateInvestorDto,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type InvestorControllerUpdateInvestorApiResponse =
  /** status 201  */ CreateInvestorDto;
export type InvestorControllerUpdateInvestorApiArg = {
  userId: string;
  createInvestorDto: CreateInvestorDto;
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
export type InvestorControllerUpdateApiResponse =
  /** status 200  */
  InvestorDto | /** status 201  */ InvestorDto;
export type InvestorControllerUpdateApiArg = {
  userId: string;
  updateInvestorDto: UpdateInvestorDto;
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
export type UpdateInvestorDto = {
  /** Phone number of the investor */
  investor_phonenumber?: string;
  /** Nationality of the investor */
  investor_nationality?: string;
  /** Country of residence of the investor */
  investor_country_residence?: string;
  /** City of residence of the investor */
  investor_residence_city?: string;
  /** Status of the investor */
  investor_status?: string;
  /** Investor image file */
  investor_image?: Blob;
  /** Type of investor */
  investor_type?:
    | "EQUITY"
    | "DEBT"
    | "REWARD"
    | "REVENUE_SHARE"
    | "GRANTS"
    | "ROI"
    | "SAFE"
    | "OTHERS";
  /** Annual income of the investor */
  investor_annual_income?: string;
  /** Investment duration of the investor */
  investor_investment_duration?: string;
  /** Investment goal of the investor */
  investor_investment_goal?: string;
  /** Investment experience of the investor */
  investor_experience?: string;
  /** Liquidity importance for the investor */
  investor_liquidity_importance?: string;
  id: string;
};
export const {
  useInvestorControllerUpdateInvestorMutation,
  useInvestorControllerFindAllQuery,
  useInvestorControllerFindOneQuery,
  useInvestorControllerUpdateMutation,
} = injectedRtkApi;
