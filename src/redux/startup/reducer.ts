import { createSlice } from "@reduxjs/toolkit";

export const startupSlice = createSlice({
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
  },
});

export const { handleNextStep, changeStep3, changeStep4 } =
  startupSlice.actions;

export default startupSlice.reducer;
