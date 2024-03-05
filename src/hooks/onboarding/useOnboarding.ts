"use client";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentStep } from "@/redux/onboarding/selectors";
import { handleNextStep } from "@/redux/onboarding/reducer";

const useOnboarding = () => {
  const steps = useSelector(selectCurrentStep);
  const dispatch = useDispatch();
  const handleNext = () => {
    dispatch(handleNextStep());
  };

  const calculateProgress = () => {
    const totalSteps = 4;
    return (steps / totalSteps) * 100;
  };

  return {
    steps,
    handleNext,
    calculateProgress,
  };
};
export default useOnboarding;
