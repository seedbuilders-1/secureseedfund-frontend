import { api } from "./startups";

const enhancedApi = api.enhanceEndpoints({
  endpoints: {
    startupControllerGetStartupByStartupId: {
      providesTags: (result, error, arg) => [
        { type: "Startup", id: arg.startupId },
        { type: "Startup", id: "LIST" },
      ],
    },
    startupControllerCreateTeamInformation: {
      invalidatesTags: (result, error, arg) => [
        { type: "Startup", id: arg.creatorId },
        { type: "Startup", id: "LIST" },
      ],
    },
    startupControllerCreateBusinessInformation: {
      invalidatesTags: (result, error, arg) => [
        { type: "Startup", id: arg.creatorId },
        { type: "Startup", id: "LIST" },
      ],
    },
    startupControllerCreateCompanyInformation: {
      invalidatesTags: (result, error, arg) => [
        { type: "Startup", id: arg.creatorId },
        { type: "Startup", id: "LIST" },
      ],
    },
    startupControllerCreateFounder: {
      invalidatesTags: (result, error, arg) => [
        { type: "Startup", id: arg.creatorId },
        { type: "Startup", id: "LIST" },
      ],
    },
    startupControllerCreateFundingInformation: {
      invalidatesTags: (result, error, arg) => [
        { type: "Startup", id: arg.creatorId },
        { type: "Startup", id: "LIST" },
      ],
    },
    startupControllerUpdateCompanyInformation: {
      invalidatesTags: (result, error, arg) => [
        { type: "Startup", id: arg.creatorId },
        { type: "Startup", id: "LIST" },
      ],
    },
  },
});

export { enhancedApi as api };
