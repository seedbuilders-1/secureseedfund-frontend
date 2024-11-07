"use client";

import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { cacher } from "../api/rtkQueryCacheUtils";
import { RootState } from "@/redux/store";
import { logout, setCredentials } from "@/redux/auth/reducer";
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  responseHandler: async (response) => {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    } else {
      return response.text();
    }
  },
  prepareHeaders: (headers, { getState }) => {
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

  if (typeof result.data === "string") {
    result.data = { message: result.data };
  }

  if (result.error && result.error.status === 401) {
    const refreshToken = (api.getState() as RootState).auth.refreshToken;

    const refreshResult: any = await baseQuery(
      {
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh-token`,
        method: "POST",
        body: {
          refreshToken: refreshToken,
        },
      },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      const user = (api.getState() as RootState).auth.user;
      api.dispatch(
        setCredentials({
          accessToken: refreshResult.data.accessToken as string,
          user,
          refreshToken: refreshToken,
        })
      );
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
