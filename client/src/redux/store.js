import { configureStore } from "@reduxjs/toolkit";
import campaignsApi from "./features/campaigns/campaignsApi";
// yo  file le redux store lai configure garxa state management ko lagi anai API haru handle garxa campaignAPI ko through bata
const store = configureStore({
  reducer: {
    [campaignsApi.reducerPath]: campaignsApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(campaignsApi.middleware), 
});

export default store;
