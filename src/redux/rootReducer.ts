import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/reducer";
import api from "@/services/api/apiSlice";
import onboardingReducer from "./onboarding/reducer"

const rootReducer = combineReducers({
  auth: authReducer,
  onboard: onboardingReducer,
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
