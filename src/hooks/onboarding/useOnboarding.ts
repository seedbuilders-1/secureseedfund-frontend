"use client";
import { useToast } from "@/components/ui/use-toast";
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

  const { toast } = useToast();

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
    isLoadingInvestor,
    investorOnboarding,
    isSuccess,
    AddInvestorQuestioniare: addInvestorQuestioniare,
    isLoadingQuestioniare,
    hasAddedQuestioniare,
    individualInvestor,
    allCountries,
  };
};
export default useOnboarding;
