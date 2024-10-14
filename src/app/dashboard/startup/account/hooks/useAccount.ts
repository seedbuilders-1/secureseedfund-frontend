import {
  StartupControllerCreateFounderApiArg,
  StartupControllerCreateTeamInformationApiArg,
  StartupControllerCreateCompanyInformationApiArg,
  StartupControllerCreateBusinessInformationApiArg,
  StartupControllerUpdateCompanyInformationApiArg,
  StartupControllerCreateFundingInformationApiArg,
} from "@/generated/service/startups";
import { api } from "@/generated/service/startups";
import { useToast } from "@/components/ui/use-toast";

const useAccount = (creatorId?: string) => {
  const [
    createFounderInformationStart,
    { isLoading: isCreatingFounderInformation, isSuccess },
  ] = api.useStartupControllerCreateFounderMutation();
  const [
    createCompanyInformationStart,
    { isLoading: isCreatingCompanyInformation, isSuccess: createdCompanyInfo },
  ] = api.useStartupControllerCreateCompanyInformationMutation();
  const [
    createBusinessInformationStart,
    {
      isLoading: isCreatingBusinessInformation,
      isSuccess: createdBusinessInfo,
    },
  ] = api.useStartupControllerCreateBusinessInformationMutation();

  const [
    createFundingInformationStart,
    { isLoading: isCreatingFundingInformation, isSuccess: createdFundingInfo },
  ] = api.useStartupControllerCreateFundingInformationMutation();

  const [
    updateAccountSettingsStart,
    { isLoading: isUpdatingAccountSettings, isSuccess: accountSettingsUpdated },
  ] = api.useStartupControllerUpdateCompanyInformationMutation();

  const [
    createTeamInformationStart,
    { isLoading: isCreatingTeamInformation, isSuccess: createdTeamInfo },
  ] = api.useStartupControllerCreateTeamInformationMutation();
  const { data: accountInformation, isLoading: loadingAccountInformation } =
    api.useStartupControllerGetStartupByUserIdQuery({
      userId: creatorId as string,
    });

  const { toast } = useToast();
  const createFounderInformation = async (
    values: StartupControllerCreateFounderApiArg
  ) => {
    try {
      await createFounderInformationStart(values).unwrap();
      toast({
        className:
          "top-0 right-0 flex fixed text-white  bg-green-600 md:max-w-[420px] md:top-4 md:right-4",
        title: "Founder Information is updated ",
        variant: "default",
      });
    } catch (err: any) {
      toast({
        variant: "destructive",
        title:
          err?.data || err?.error?.message || "Uh oh! Something went wrong.",
      });
    }
  };

  const createTeamInformation = async (
    values: StartupControllerCreateTeamInformationApiArg
  ) => {
    try {
      await createTeamInformationStart(values).unwrap();
      toast({
        className:
          "top-0 right-0 flex fixed text-white  bg-green-600 md:max-w-[420px] md:top-4 md:right-4",
        title: "Team Information is updated successfully",
        variant: "default",
      });
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: `${err?.message || "Uh oh! Something went wrong."}`,
      });
    }
  };

  const createCompanyInformation = async (
    values: StartupControllerCreateCompanyInformationApiArg
  ) => {
    try {
      await createCompanyInformationStart(values).unwrap();
      toast({
        className:
          "top-0 right-0 flex fixed text-white  bg-green-600 md:max-w-[420px] md:top-4 md:right-4",
        title: "Company Information is updated successfully",
        variant: "default",
      });
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: `${err?.message || "Uh oh! Something went wrong."}`,
      });
    }
  };

  const createBusinessInformation = async (
    values: StartupControllerCreateBusinessInformationApiArg
  ) => {
    try {
      await createBusinessInformationStart(values).unwrap();
      toast({
        className:
          "top-0 right-0 flex fixed text-white  bg-green-600 md:max-w-[420px] md:top-4 md:right-4",
        title: "Business Information is updated successfully",
        variant: "default",
      });
    } catch (err: any) {
      toast({
        variant: "destructive",
        title:
          err?.message?.forEach((message: string) => message) ??
          "Uh oh! Something went wrong.",
      });
    }
  };

  const createFundingInformation = async (
    values: StartupControllerCreateFundingInformationApiArg
  ) => {
    try {
      await createFundingInformationStart(values).unwrap();
    } catch (err: any) {
      console.log(err);
      toast({
        variant: "destructive",
        title:
          err?.message?.forEach((message: string) => message) ??
          "Uh oh! Something went wrong.",
      });
    }
  };

  const updateAccountSetting = async (
    values: StartupControllerUpdateCompanyInformationApiArg
  ) => {
    try {
      await updateAccountSettingsStart(values).unwrap();
      toast({
        variant: "default",
        title: "Account Updated",
      });
    } catch (err: any) {
      console.log(err);
      toast({
        variant: "destructive",
        title:
          err?.message?.forEach((message: string) => message) ??
          "Uh oh! Something went wrong.",
      });
    }
  };

  return {
    createFounderInformation,
    isCreatingFounderInformation,
    isSuccess,
    createTeamInformation,
    isCreatingTeamInformation,
    createdTeamInfo,
    accountInformation,
    createCompanyInformation,
    createdCompanyInfo,
    isCreatingCompanyInformation,
    createBusinessInformation,
    createdBusinessInfo,
    isCreatingBusinessInformation,
    createFundingInformation,
    isCreatingFundingInformation,
    createdFundingInfo,
    loadingAccountInformation,
    updateAccountSetting,
    isUpdatingAccountSettings,
    accountSettingsUpdated,
  };
};

export default useAccount;
