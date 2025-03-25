import { configureStore } from "@reduxjs/toolkit";
import campaignsApi from "./features/campaigns/campaignsApi";

const store = configureStore({
  reducer: {
    [campaignsApi.reducerPath]: campaignsApi.reducer, // Add API Reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(campaignsApi.middleware), // Add Middleware
});

export default store;
