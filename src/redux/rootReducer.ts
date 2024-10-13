import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/reducer";
import api from "@/services/api/apiSlice";
import onboardingReducer from "./onboarding/reducer";
import { emptySplitApi } from "@/generated/emptyApi";

const rootReducer = combineReducers({
  auth: authReducer,
  onboard: onboardingReducer,
  [api.reducerPath]: api.reducer,
  [emptySplitApi.reducerPath]: emptySplitApi.reducer,
});

export default rootReducer;
