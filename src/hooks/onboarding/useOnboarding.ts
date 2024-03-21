"use client";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";
import { selectCurrentStep } from "@/redux/onboarding/selectors";
import {
  handleNextStep,
  changeStep3,
  changeStep4,
} from "@/redux/onboarding/reducer";
import {
  OnboardingInvestmentUserRequestType,
  InvestmentQuestioniareRequestType,
} from "@/services/onboarding/typings";
import {
  useInvestorOnboardMutation,
  useIndividualInvestorQuery,
  useInvestorQUestioniareMutation,
  useGetCountryQuery,
} from "@/services/onboarding";
import useUserAuth from "../auth/useAuth";

const useOnboarding = () => {
  const [InvestorOnboard, { isLoading: isLoadingInvestor, isSuccess }] =
    useInvestorOnboardMutation();
  const { user } = useUserAuth();
  const [
    AddInvestorQuestioniare,
    { isLoading: isLoadingQuestioniare, isSuccess: hasAddedQuestioniare },
  ] = useInvestorQUestioniareMutation();
  const { data: individualInvestor } = useIndividualInvestorQuery({
    userId: user?.userId || "",
  });
  const { data: allCountries } = useGetCountryQuery({
    limit: 239,
  });

  const steps = useSelector(selectCurrentStep);
  const dispatch = useDispatch();
  const { toast } = useToast();
  const handleNext = () => {
    dispatch(handleNextStep());
  };
  const changeStepTo3 = () => {
    dispatch(changeStep3());
  };
  const changeStepTo4 = () => {
    dispatch(changeStep4());
  };
  const calculateProgress = () => {
    const totalSteps = 4;
    return (steps / totalSteps) * 100;
  };
  const investorOnboarding = async (
    values: OnboardingInvestmentUserRequestType
  ) => {
    const {
      investorType,
      phone,
      countryId,
      dob,
      address,
      city,
      postalCode,
      logoUrl,
      companyName,
      documentType,
      documentUrl,
      userId,
    } = values;
    try {
      const res = await InvestorOnboard({
        investorType,
        phone,
        countryId,
        dob,
        address,
        city,
        postalCode,
        logoUrl,
        companyName,
        documentType,
        documentUrl,
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

  const addInvestorQuestioniare = async (
    values: InvestmentQuestioniareRequestType
  ) => {
    try {
      const res = await AddInvestorQuestioniare(values).unwrap();
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
    isLoadingInvestor,
    investorOnboarding,
    isSuccess,
    AddInvestorQuestioniare: addInvestorQuestioniare,
    isLoadingQuestioniare,
    hasAddedQuestioniare,
    individualInvestor,
    changeStepTo3,
    changeStepTo4,
    allCountries,
  };
};
export default useOnboarding;
