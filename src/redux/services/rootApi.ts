/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { addUser, logout } from "../features/auth/authSlice";
import { AppState } from "../store";
import { ILoginResponse } from "./auth/authApi.interfaces";
import { ICustomErrorType } from "./types/customErrorTypes";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_SERVER,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as AppState).auth.accessToken;
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
  if (result.error && result.error.status === 403) {
    try {
      const refreshResult = await baseQuery(
        { url: "/auth/refresh-token", method: "post" },
        api,
        extraOptions
      );
      if (refreshResult?.data) {
        const response = refreshResult.data as ILoginResponse;
        api.dispatch(addUser(response?.data));
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
      }
    } catch (error) {
      api.dispatch(logout());
    }
  }

  return result;
};

export const rootApi = createApi({
  baseQuery: baseQueryWithReauth as BaseQueryFn<
    string | FetchArgs,
    unknown,
    ICustomErrorType
  >,
  tagTypes: [],
  endpoints: () => ({}),
});
