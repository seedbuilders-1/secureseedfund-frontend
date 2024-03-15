import api from "../api/apiSlice";

const profile = api.injectEndpoints({
  endpoints: (build) => ({
    userProfile: build.query({
      query: (headers) => {
        return {
          url: `/users/profile`,
          method: "GET",
          headers: headers,
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useUserProfileQuery } = profile;
