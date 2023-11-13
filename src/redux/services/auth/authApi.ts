import { addUser, logout } from "../../features/auth/authSlice";
import { rootApi } from "../rootApi";
import {
  ILoginPayload,
  ILoginResponse,
  IRegisterPayload,
  IRegisterResponse,
} from "./authApi.interfaces";

export const authApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<ILoginResponse, ILoginPayload>({
      query: (credentials) => {
        return {
          url: "/auth/login",
          method: "post",
          body: credentials,
        };
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const response = await queryFulfilled;
          await dispatch(addUser(response?.data?.data));
          // eslint-disable-next-line no-empty
        } catch {}
      },
    }),
    registerAccount: builder.mutation<IRegisterResponse, IRegisterPayload>({
      query: (user) => {
        return {
          url: "/auth/register",
          method: "post",
          body: user,
        };
      },
    }),
    verifyUser: builder.mutation({
      query: (token) => {
        return {
          url: `/auth/verify-email?token=${token}`,
          method: "post",
        };
      },
    }),
    refreshToken: builder.mutation<ILoginResponse, null>({
      query: () => {
        return {
          url: `/auth/refresh-token`,
          method: "post",
        };
      },
    }),
    logOut: builder.query({
      query: () => `/auth/logout`,
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logout());
          // eslint-disable-next-line no-empty
        } catch {}
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterAccountMutation,
  useVerifyUserMutation,
  useRefreshTokenMutation,
  useLogOutQuery,
} = authApi;
