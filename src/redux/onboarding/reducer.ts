import { createSlice } from "@reduxjs/toolkit";

export const onboardingSlice = createSlice({
  name: "onboarding",
  initialState: {
    steps: 1,
  },
  reducers: {
    handleNextStep: (state) => {
      state.steps += 1;
    },
  },
});

export const { handleNextStep } = onboardingSlice.actions;

export default onboardingSlice.reducer;
