import { api } from "@/services/transactions";

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
