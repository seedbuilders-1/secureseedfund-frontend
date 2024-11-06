"use client";
import { useStartupOnboardsMutation } from "@/services/startuponboarding";
import { StartupOnboardingRequestType } from "@/services/startuponboarding/typings";
import { useToast } from "@/components/ui/use-toast";

const useStartupOnboarding = () => {
  const [
    startupOnboard,
    { isLoading: isCreatingStartup, isSuccess, data: startupResponse },
  ] = useStartupOnboardsMutation();

  const { toast } = useToast();

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
      await startupOnboard({
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
    } catch (err: any) {
      console.log({ err });
      toast({
        variant: "destructive",
        title: `${err?.data?.message || "Uh oh! Something went wrong."}`,
      });
    }
  };

  return {
    startupOnboarding,
    isCreatingStartup,
    isSuccess,
    startupResponse,
  };
};
export default useStartupOnboarding;
