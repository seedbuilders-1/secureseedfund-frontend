import {
  CreateCampaignRequestType,
  CreateCampaignResponseType,
  GetCampaignResponseType,
  CampaignDetail,
} from "./typings";
import api from "../api/apiSlice";

const campaign = api.injectEndpoints({
  endpoints: (build) => ({
    createCampaign: build.mutation<
      CreateCampaignResponseType,
      CreateCampaignRequestType
    >({
      query: (payload) => ({
        url: "/campaigns",
        method: "POST",
        body: payload,
      }),
    }),
    editCampaign: build.mutation<
      CreateCampaignResponseType,
      { id: string; payload: CreateCampaignRequestType }
    >({
      query: ({ id, payload }) => ({
        url: `/campaigns/${id}`,
        method: "PATCH",
        body: payload,
      }),
    }),
    getCampaign: build.query<GetCampaignResponseType, void>({
      query: () => ({
        url: `/campaigns`,
        method: "GET",
      }),
    }),
    getCampaignById: build.query<CampaignDetail, string | undefined>({
      query: (id) => ({
        url: `/campaigns/${id}`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useCreateCampaignMutation,
  useGetCampaignQuery,
  useGetCampaignByIdQuery,
  useEditCampaignMutation,
} = campaign;
