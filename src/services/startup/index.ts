import api from "../api/apiSlice";

const startup = api.injectEndpoints({
  endpoints: (build) => ({
    startupControllerCreateFounder: build.mutation({
      query: ({ creatorId, formData }) => {
        return {
          url: `/startups/${creatorId}/founder`,
          method: "PUT",
          body: formData,
          responseHandler: (response) => response.text(),
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useStartupControllerCreateFounderMutation } = startup;
