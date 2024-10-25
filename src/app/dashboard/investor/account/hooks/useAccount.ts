import { useToast } from "@/components/ui/use-toast";
import {
  api,
  InvestorControllerUpdateApiArg,
  InvestorControllerUpdateInvestorApiArg,
} from "@/generated/service/investors";

const useAccount = (creatorId?: string) => {
  const [
    createInvestorInformationStart,
    {
      isLoading: isCreatingInvestorInformation,
      isSuccess: createdInvestorInformation,
    },
  ] = api.useInvestorControllerUpdateInvestorMutation();

  const { data: investorInformation, isLoading: loadingInvestorInformation } =
    api.useInvestorControllerFindOneQuery({
      id: creatorId as string,
    });

  const [
    updateInvestorAccountSettingsStart,
    {
      isLoading: isUpdatingInvestorAccountSettings,
      isSuccess: investorAccountSettingsUpdated,
    },
  ] = api.useInvestorControllerUpdateMutation();

  const updateInvestorAccountSetting = async (
    values: InvestorControllerUpdateApiArg
  ) => {
    try {
      await updateInvestorAccountSettingsStart(values).unwrap();
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

  const { toast } = useToast();

  const createInvestorInformation = async (
    values: InvestorControllerUpdateInvestorApiArg
  ) => {
    try {
      await createInvestorInformationStart(values).unwrap();
      toast({
        className:
          "top-0 right-0 flex fixed text-white  bg-green-600 md:max-w-[420px] md:top-4 md:right-4",
        title: "Investor Information is updated ",
        variant: "default",
      });
    } catch (err: any) {
      console.log(err);

      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
      });
    }
  };
  return {
    createInvestorInformation,
    isCreatingInvestorInformation,
    createdInvestorInformation,
    investorInformation,
    loadingInvestorInformation,
    isUpdatingInvestorAccountSettings,
    investorAccountSettingsUpdated,
    updateInvestorAccountSetting,
  };
};

export default useAccount;
