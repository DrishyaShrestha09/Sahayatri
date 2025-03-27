import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../utils/baseURL"; 
// yo file le api service lai define garxa using redux-toolkits createApi function to interact  with backend API
export const campaignApi = createApi({
  reducerPath: "campaignApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getBaseUrl()}/api` }), 
  endpoints: (builder) => ({
    getCampaigns: builder.query({
      query: () => "/campaigns",
    }),
  }),
});

export const { useGetCampaignsQuery } = campaignApi;
