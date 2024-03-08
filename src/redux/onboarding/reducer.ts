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
    changeStep3: (state) => {
      state.steps = 3;
    },
  },
});

export const { handleNextStep, changeStep3 } = onboardingSlice.actions;

export default onboardingSlice.reducer;
