import {
  AuthResponseType,
  LoginUserRequestType,
  RegisterUserRequestType,
  VerifyEmailRequestType,
  recoverPasswordRequestType,
  // GoogleAuthCallbackRequestType,
} from "./typings";
import { toast } from "@/components/ui/use-toast";
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
    recoverPassword: build.mutation<string, recoverPasswordRequestType>({
      query: (payload) => {
        return {
          url: "/auth/recover-password",
          method: "POST",
          body: payload,
        };
      },
      async onQueryStarted(_args, { queryFulfilled: qf }) {
        qf.then(() => {
          toast({
            className:
              "top-0 right-0 flex fixed text-white  bg-green-600 md:max-w-[420px] md:top-4 md:right-4",
            title: "Reset link Has been Successfully sent",
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
    register: build.mutation<AuthResponseType, RegisterUserRequestType>({
      query: (payload) => {
        return {
          url: "/auth/signup",
          method: "POST",
          body: payload,
        };
      },
    }),
    googleAuth: build.query<any, any>({
      query: (queryArg) => ({
        url: `/auth/google`,
      }),
    }),
    verifyEmail: build.query<any, VerifyEmailRequestType>({
      query: (queryArg) => ({
        url: `/auth/verify-email`,
      }),
    }),
    googleAuthCallback: build.query<AuthResponseType, any>({
      query: (payload) => {
        return {
          url: "/auth/google/callback",
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
  useVerifyEmailQuery,
  useRecoverPasswordMutation,
} = auth;
