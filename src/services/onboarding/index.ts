import {
  OnboardingInvestmentUserRequestType,
  OnboardingInvestmentUserResponseType,
  GetInvestorIdRequestType,
  GetInvestorIdResponseType,
  InvestmentQuestioniareRequestType,
  InvestmentQuestioniareResponseType,
} from "./typings";
import api from "../api/apiSlice";

const onboarding = api.injectEndpoints({
  endpoints: (build) => ({
    InvestorOnboard: build.mutation<
      OnboardingInvestmentUserResponseType,
      OnboardingInvestmentUserRequestType
    >({
      query: (payload) => {
        return {
          url: "/investor",
          method: "POST",
          body: payload,
        };
      },
    }),
    individualInvestor: build.query<
      GetInvestorIdResponseType,
      GetInvestorIdRequestType
    >({
      query: ({ userId }) => {
        return {
          url: `/investor?userId=${userId}`,
          method: "GET",
        };
      },
    }),

    InvestorQUestioniare: build.mutation<
      InvestmentQuestioniareResponseType,
      InvestmentQuestioniareRequestType
    >({
      query: ({ investorId, payload }) => {
        return {
          url: `/investor/${investorId}/investment-questionnaire`,
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useInvestorOnboardMutation,
  useIndividualInvestorQuery,
  useInvestorQUestioniareMutation,
} = onboarding;
