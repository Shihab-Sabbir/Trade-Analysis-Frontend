import { rootApi } from "../rootApi";
import { IBusinessHealth, IFormData } from "./dataApi.interface";

export const dataApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBusinessData: builder.query({
      query: () => ({
        url: `/data`,
      }),
      providesTags: ["fetchTransaction"],
      keepUnusedDataFor: 0,
    }),
    calculateHealth: builder.mutation<number, IFormData>({
      query: (data) => ({
        url: "/calculate",
        method: "post",
        body: { ...data },
      }),
    }),
    createBusinessHealth: builder.mutation<void, Partial<IBusinessHealth>>({
      query: (data) => ({
        url: "/data",
        method: "post",
        body: data,
      }),
      invalidatesTags: ["fetchTransaction"],
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
      invalidatesTags: ["fetchTransaction"],
    }),
  }),
});

export const {
  useGetAllBusinessDataQuery,
  useCalculateHealthMutation,
  useCreateBusinessHealthMutation,
  useUpdateBusinessHealthMutation,
  useDeleteBusinessHealthMutation,
} = dataApi;
