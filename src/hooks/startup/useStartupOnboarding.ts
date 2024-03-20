"use client";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentStep } from "@/redux/startup/selectors";
import { handleNextStep } from "@/redux/startup/reducer";

const useStartupOnboarding = () => {
  const steps = useSelector(selectCurrentStep);
  const dispatch = useDispatch();
  const handleNext = () => {
    dispatch(handleNextStep());
  };
  const calculateProgress = () => {
    const totalSteps = 3;
    return (steps / totalSteps) * 100;
  };
  return {
    steps,
    handleNext,
    calculateProgress,
  };
};
export default useStartupOnboarding;
