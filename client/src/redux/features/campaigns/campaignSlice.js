import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../utils/baseURL"; // Import the function

export const campaignApi = createApi({
  reducerPath: "campaignApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getBaseUrl()}/api` }), // Use the imported baseUrl
  endpoints: (builder) => ({
    getCampaigns: builder.query({
      query: () => "/campaigns",
    }),
  }),
});

export const { useGetCampaignsQuery } = campaignApi;
