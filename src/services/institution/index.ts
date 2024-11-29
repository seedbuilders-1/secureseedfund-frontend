import api from "../api/apiSlice";
import {
  InstitutionCreateApiArgs,
  InstitutionCreateApiResponse,
  InstitutionGetApiArgs,
  CreateInstitutionDto,
  InstitutionUpdateApiArgs,
  InstitutionnvestInCampaignApiArg,
  InstitutionInvestmentsApiResponse,
  InstitutionControllerCreateInstitutionKycApiResponse,
  InstitutionControllerCreateInstitutionKycApiArg,
  Institution,
} from "./typings";
import { toast } from "@/components/ui/use-toast";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    createInstitution: build.mutation<
      InstitutionCreateApiResponse,
      InstitutionCreateApiArgs
    >({
      query: (queryArg) => ({
        url: `/institution/${queryArg.userId}`,
        method: "POST",
        body: queryArg.createInstitutionDto,
      }),
      async onQueryStarted(_args, { queryFulfilled: qf }) {
        qf.then(() => {
          toast({
            className:
              "top-0 right-0 flex fixed text-white  bg-green-600 md:max-w-[420px] md:top-4 md:right-4",
            title: "Institution created successfully",
            variant: "default",
          });
        }).catch((err) => {
          toast({
            variant: "destructive",
            title: err?.message ?? "Failed to create institution.",
          });
        });
      },
    }),
    institutionInvestInCampaign: build.mutation<
      String,
      InstitutionnvestInCampaignApiArg
    >({
      query: (queryArg) => ({
        url: `/institution/invest/${queryArg.campaignId}`,
        method: "POST",
        body: queryArg.institutionDto,
      }),
      async onQueryStarted(_args, { queryFulfilled: qf }) {
        qf.then(() => {
          toast({
            className:
              "top-0 right-0 flex fixed text-white  bg-green-600 md:max-w-[420px] md:top-4 md:right-4",
            title: "You have Successfully Invested in this company",
            variant: "default",
          });
        }).catch((err) => {
          toast({
            variant: "destructive",
            title: err?.message ?? "oh oh something wrong happened.",
          });
        });
      },
      invalidatesTags: ["InvestInCampaign"],
    }),
    institutionControllerCreateInstitutionKyc: build.mutation<
      InstitutionControllerCreateInstitutionKycApiResponse,
      InstitutionControllerCreateInstitutionKycApiArg
    >({
      query: (queryArg) => ({
        url: `/institution/${queryArg.creatorId}/upload-kyc`,
        method: "POST",
        body: queryArg.createInstitutionKycDto,
      }),
      async onQueryStarted(_args, { queryFulfilled: qf }) {
        qf.then(() => {
          toast({
            className:
              "top-0 right-0 flex fixed text-white  bg-green-600 md:max-w-[420px] md:top-4 md:right-4",
            title: "You have Successfully Invested in this company",
            variant: "default",
          });
        }).catch((err) => {
          toast({
            variant: "destructive",
            title: err?.message ?? "oh oh something wrong happened.",
          });
        });
      },
    }),

    updateInstitution: build.mutation<
      InstitutionCreateApiResponse,
      InstitutionUpdateApiArgs
    >({
      query: (queryArg) => ({
        url: `/institution/${queryArg.userId}/update`,
        method: "PUT",
        body: queryArg.updateInstitutionDto,
      }),
      async onQueryStarted(_args, { queryFulfilled: qf }) {
        qf.then(() => {
          toast({
            className:
              "top-0 right-0 flex fixed text-white  bg-green-600 md:max-w-[420px] md:top-4 md:right-4",
            title: "Institution updated successfully",
            variant: "default",
          });
        }).catch((err) => {
          toast({
            variant: "destructive",
            title: err?.message ?? "Failed to update institution.",
          });
        });
      },
    }),

    getInstitution: build.query<Institution, InstitutionGetApiArgs>({
      query: (queryArg) => ({ url: `/institution/${queryArg.id}` }),
    }),
    getInstitutionsInvestments: build.query<
      InstitutionInvestmentsApiResponse,
      {
        investorId: String;
      }
    >({
      query: (queryArg) => ({
        url: `/institution/investments/${queryArg.investorId}`,
      }),
      providesTags: ["InvestInCampaign"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateInstitutionMutation,
  useGetInstitutionQuery,
  useUpdateInstitutionMutation,
  useInstitutionInvestInCampaignMutation,
  useInstitutionControllerCreateInstitutionKycMutation,
  useGetInstitutionsInvestmentsQuery,
} = injectedRtkApi;
