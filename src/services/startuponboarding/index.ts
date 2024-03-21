import {
  StartupOnboardingRequestType,
  StartupOnboardingResponseType,
} from "./typings";
import api from "../api/apiSlice";

const startuponboarding = api.injectEndpoints({
  endpoints: (build) => ({
    startupOnboards: build.mutation<
      StartupOnboardingResponseType,
      StartupOnboardingRequestType
    >({
      query: (payload) => {
        return {
          url: "/startup",
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useStartupOnboardsMutation } = startuponboarding;
