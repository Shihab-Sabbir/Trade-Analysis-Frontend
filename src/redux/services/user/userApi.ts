import { rootApi } from "../rootApi";

export const userApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: (id) => `/profile/${id}`,
    }),
    getUsers: builder.query({
      query: () => "/user",
    }),
    getUser: builder.query({
      query: (id) => `/users/${id}`,
    }),
    updateUser: builder.mutation({
      query: ({ id, ...userData }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: userData,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useGetUsersQuery,
  useGetUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
