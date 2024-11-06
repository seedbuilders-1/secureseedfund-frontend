import api from "../api/apiSlice";
import { UserProfileRequestType, UserProfileResponseType } from "./typings";

const profile = api.injectEndpoints({
  endpoints: (build) => ({
    userProfile: build.query<UserProfileResponseType, UserProfileRequestType>({
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
