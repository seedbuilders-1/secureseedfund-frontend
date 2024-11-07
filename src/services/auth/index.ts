import {
  AuthResponseType,
  LoginUserRequestType,
  RegisterUserRequestType,
  // GoogleAuthCallbackRequestType,
} from "./typings";
import api from "../api/apiSlice";

const auth = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthResponseType, LoginUserRequestType>({
      query: (payload) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: payload,
        };
      },
    }),
    register: build.mutation<AuthResponseType, RegisterUserRequestType>({
      query: (payload) => {
        return {
          url: "/auth/signup",
          method: "POST",
          body: payload,
          responseHandler: (response) => response.text(),
        };
      },
    }),
    googleAuth: build.query<any, any>({
      query: (queryArg) => ({
        url: `/startups`,
      }),
    }),
    googleAuthCallback: build.query<AuthResponseType, any>({
      query: (payload) => {
        return {
          url: "/auth/google/callback",
          // method: "POST",
          // body: payload,
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGoogleAuthQuery,
  useGoogleAuthCallbackQuery,
} = auth;
