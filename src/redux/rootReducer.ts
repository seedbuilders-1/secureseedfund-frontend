import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/reducer";
import api from "@/services/api/apiSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
