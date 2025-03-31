import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/baseURL';

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/campaigns`,
    credentials: 'include',
    prepareHeaders: (Headers) => {
        const token = localStorage.getItem('token');
        if (token) {
            Headers.set('Authorization', `Bearer ${token}`);
        }
        return Headers;
    }

})
// maile RTK Query use garera state management ra API haru call gareko kina ki hami le frontend ma API sita kasari interact garne aani state haru lai kasari manage garne vanera dekhaunu parxa
const campaignsApi = createApi({
    reducerPath:  'campaignsApi',
    baseQuery,
    tagTypes: ['Campaigns'],
    endpoints: (builder) => ({ 
        fetchAllCampaigns: builder.query({
            query: () => "/", //naya campaign banexai campaign haru yo api ma aayera basxa
            providesTags: ["Campaigns"]
        }),
        fetchEmergencyCampaigns: builder.query({ // emergency campaigns
            query: () => "/emergency",
            providesTags: ["Campaigns"],
        }),
        fetchCampaignByID: builder.query({  // get request ma method describe garnu pardaina tara aaru req ma parxa
            query: (id) => `/${id}`,
            providesTags: (results, error, id) => [{type:  "Campaign", id}],
        }),
        addCampaign: builder.mutation({
            query: (newCampaign) => ({
                url: `/create-campaign`,
                method: "POST",
                body: newCampaign
            }),
            invalidatesTags: ["Campaigns"]  // invalidateTag le data add garda data lai refetch/refresh garxa
        }),
        updateCampaign: builder.mutation({
            query: ({id, ...rest}) => ({
                url: `/edit/${id}`,
                method: "PUT",
                body: rest,
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
            invalidatesTags: ["Campaigns"]
        }),
        deleteCampaign: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Campaigns"] 
        })
    })
})

export const {useFetchAllCampaignsQuery, useFetchEmergencyCampaignsQuery ,useFetchCampaignByIDQuery, useAddCampaignMutation, useUpdateCampaignMutation, useDeleteCampaignMutation } = campaignsApi
export default campaignsApi;