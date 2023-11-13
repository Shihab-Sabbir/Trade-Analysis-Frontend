import { rootApi } from "../rootApi";
import { IBusinessHealth } from "./dataApi.interface";

export const dataApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBusinessData: builder.query({
      query: () => ({
        url: `/data`,
      }),
      providesTags: [],
      keepUnusedDataFor: 0,
    }),
    getBusinessDataById: builder.query<IBusinessHealth, string>({
      query: (id) => ({
        url: `/data/${id}`,
        providesTags: [],
        keepUnusedDataFor: 0,
      }),
    }),
    createBusinessHealth: builder.mutation<void, Partial<IBusinessHealth>>({
      query: (data) => ({
        url: "/data",
        method: "post",
        body: data,
      }),
    }),
    updateBusinessHealth: builder.mutation<
      void,
      { id: string; data: IBusinessHealth }
    >({
      query: ({ id, data }) => ({
        url: `/data/${id}`,
        method: "patch",
        body: data,
      }),
    }),
    deleteBusinessHealth: builder.mutation<void, string>({
      query: (id) => ({
        url: `/data/${id}`,
        method: "delete",
      }),
    }),
  }),
});

export const {
  useGetAllBusinessDataQuery,
  useGetBusinessDataByIdQuery,
  useCreateBusinessHealthMutation,
  useUpdateBusinessHealthMutation,
  useDeleteBusinessHealthMutation,
} = dataApi;
