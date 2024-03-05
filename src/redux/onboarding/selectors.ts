import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

const selectSteps = (state: RootState) => state.onboard;

export const selectCurrentStep = createSelector(
  [selectSteps],
  (auth) => auth.steps
);
