import { api } from "@/generated/service/transactions/enhancedTransactions";

import { useToast } from "@/components/ui/use-toast";

interface Props {
  userId: string;
}

const useTransaction = ({ userId }: Props) => {
  const { data: transactionHistroy, isLoading: loadingTransactionHistory } =
    api.useTransactionsControllerGetAllTransactionsForUserQuery({
      userId,
    });

  return {
    transactionHistroy,
    loadingTransactionHistory,
  };
};
export default useTransaction;
