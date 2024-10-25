import { api } from "./campaign";

const enhancedApi = api.enhanceEndpoints({
  addTagTypes: ["Campaign"],
  endpoints: {
    campaignsControllerCreate: {
      invalidatesTags: [{ type: "Campaign", id: "LIST" }],
    },
    campaignsControllerFindAll: {
      providesTags: () => [{ type: "Campaign", id: "LIST" }],
    },
    campaignsControllerFindOne: {
      providesTags: (result, error, arg) => [
        { type: "Campaign", id: arg.campaignId },
      ],
    },
    campaignsControllerUpdate: {
      invalidatesTags: (result, error, arg) => [
        { type: "Campaign", id: arg.id },
        { type: "Campaign", id: "LIST" },
      ],
    },
    campaignsControllerFindOneAllUser: {
      providesTags: (result, error, arg) => [
        { type: "Campaign", id: `USER_${arg.userId}` },
        { type: "Campaign", id: "LIST" },
      ],
    },
  },
});

export { enhancedApi as api };
