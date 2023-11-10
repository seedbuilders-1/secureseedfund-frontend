"use client";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { cacher } from "./rtkQueryCacheUtils";
import { RootState } from "@/redux/store";
import { logout, setCredentials } from "@/redux/auth/reducer";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshToken = (api.getState() as RootState).auth.refreshToken;

    const refreshResult: any = await baseQuery(
      { url: "/auth/refreshtoken", method: "POST", body: refreshToken },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      const user = (api.getState() as RootState).auth.user;
      // const token = (api.getState() as RootState).auth.token;
      // store the access token
      console.log(refreshResult);
      api.dispatch(
        setCredentials({
          accessToken: refreshResult.data.accessToken as string,
          user,
          refreshToken: refreshToken,
        })
      );
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

const api = createApi({
  baseQuery: baseQueryWithReauth,
  refetchOnReconnect: true,
  tagTypes: [...cacher.defaultTags],
  endpoints: () => ({}),
});

export default api;
