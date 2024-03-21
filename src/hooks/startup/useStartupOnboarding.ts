"use client";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentStep } from "@/redux/startup/selectors";
import { handleNextStep } from "@/redux/startup/reducer";
import { useStartupOnboardsMutation } from "@/services/startuponboarding";
import { StartupOnboardingRequestType } from "@/services/startuponboarding/typings";
import { useToast } from "@/components/ui/use-toast";

const useStartupOnboarding = () => {
  const [startupOnboard, { isLoading: isCreatingStartup, isSuccess }] =
    useStartupOnboardsMutation();
  const { toast } = useToast();
  const steps = useSelector(selectCurrentStep);
  const dispatch = useDispatch();
  const handleNext = () => {
    dispatch(handleNextStep());
  };
  const calculateProgress = () => {
    const totalSteps = 3;
    return (steps / totalSteps) * 100;
  };
  const startupOnboarding = async (values: StartupOnboardingRequestType) => {
    const {
      address,
      city,
      postalCode,
      companyName,
      documentType,
      documentUrl,
      companyEmail,
      companyPhone,
      countryId,
      userId,
    } = values;
    try {
      const res = await startupOnboard({
        address,
        city,
        companyEmail,
        companyPhone,
        postalCode,
        companyName,
        documentType,
        documentUrl,
        countryId,
        userId,
      }).unwrap();

      const {} = res;
    } catch (err: any) {
      console.log({ err });
      toast({
        variant: "destructive",
        title: `${err?.data?.message || "Uh oh! Something went wrong."}`,
      });
    }
  };

  return {
    steps,
    handleNext,
    calculateProgress,
    startupOnboarding,
    isCreatingStartup,
    isSuccess,
  };
};
export default useStartupOnboarding;
