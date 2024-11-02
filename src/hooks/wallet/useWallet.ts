import { api } from "@/generated/service/wallet/enhancedWallet";
import {
  WalletControllerInitializeDepositApiArg,
  WalletControllerRequestWithdrawalApiArg,
  WalletControllerVerifyDepositApiArg,
} from "@/generated/service/wallet/wallet";
import { useToast } from "@/components/ui/use-toast";

interface Props {
  userId: string;
}

const useWallet = ({ userId }: Props) => {
  const { data: walletData, isLoading: loadingWallet } =
    api.useWalletControllerGetOrCreateWalletQuery({
      userId,
    });
  const { toast } = useToast();

  const [
    createDepositStart,
    { isLoading: isCreditingWallet, isSuccess: walletCredited, data: response },
  ] = api.useWalletControllerInitializeDepositMutation();

  const [
    createWalletWithdrawStart,
    { isLoading: isWithdrawing, isSuccess: withdrawSuccess },
  ] = api.useWalletControllerRequestWithdrawalMutation();

  const createDeposit = async (
    values: WalletControllerInitializeDepositApiArg
  ) => {
    try {
      await createDepositStart(values).unwrap();
    } catch (err: any) {
      toast({
        className:
          "top-0 right-0 flex fixed text-white  md:max-w-[420px] md:top-4 md:right-4",
        variant: "destructive",
        title: err?.data?.message || "Uh oh! Something went wrong.",
      });
    }
  };
  const createWithdrawal = async (
    values: WalletControllerRequestWithdrawalApiArg
  ) => {
    try {
      await createWalletWithdrawStart(values).unwrap();
      toast({
        className:
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4",
        variant: "destructive",
        title: "Withdraw Successful",
      });
    } catch (err: any) {
      toast({
        className:
          "top-0 right-0 flex fixed text-white md:max-w-[420px] md:top-4 md:right-4",
        variant: "destructive",
        title: err?.data?.message || "Uh oh! Something went wrong.",
      });
    }
  };

  const [
    createDepositVerifyStart,
    { isLoading: isVerifiyingTransaction, isSuccess: transactionVerified },
  ] = api.useWalletControllerVerifyDepositMutation();

  const verifyTransaction = async (
    values: WalletControllerVerifyDepositApiArg
  ) => {
    try {
      await createDepositVerifyStart(values).unwrap();
    } catch (err: any) {
      console.log(err);
      toast({
        variant: "destructive",
        title: err?.data?.message || "Uh oh! Something went wrong.",
      });
    }
  };

  return {
    walletData,
    loadingWallet,
    createDeposit,
    isCreditingWallet,
    walletCredited,
    verifyTransaction,
    isVerifiyingTransaction,
    transactionVerified,
    response,
    createWalletWithdrawStart,
    isWithdrawing,
    createWithdrawal,
    withdrawSuccess,
  };
};
export default useWallet;
