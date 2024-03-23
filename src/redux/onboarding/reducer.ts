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
    changeStep4: (state) => {
      state.steps = 4;
    },
    handlePreviousStep: (state) => {
      state.steps -= 1;
    },
  },
});

export const { handleNextStep, changeStep3, changeStep4, handlePreviousStep } =
  onboardingSlice.actions;

export default onboardingSlice.reducer;
