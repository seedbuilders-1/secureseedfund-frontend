import React from "react";
import useUserAuth from "@/hooks/auth/useAuth";
import useTransaction from "../../hooks/wallet/useTransaction";
import moment from "moment";
import { Skeleton } from "@/components/ui/skeleton";
import { thousandFormatter } from "@/lib/helpers";
import StatusTag from "@/components/shared/StatusTag";
const TransactionHistory = () => {
  const { user } = useUserAuth();
  const userId = user?.userId as string;
  const { transactionHistroy, loadingTransactionHistory } = useTransaction({
    userId,
  });
  if (loadingTransactionHistory) {
    return (
      <div className="border border-[#1F9347] w-full py-4 px-4 rounded-md h-full">
        <div className="space-y-3">
          <Skeleton className="h-[50px] w-full" />
          <Skeleton className="h-[50px] w-full" />
          <Skeleton className="h-[50px] w-full" />
          <Skeleton className="h-[50px] w-full" />
        </div>
      </div>
    );
  }
  return (
    <div className="border border-[#1F9347] w-full py-4 px-4 rounded-md h-full">
      {transactionHistroy?.length ? (
        <div className="w-full">
          <div className="flex flex-wrap mb-3 text-gray-500 text-xs md:text-sm font-medium">
            <div className="w-1/4 text-left md:text-center">Date</div>
            <div className="w-1/4 text-left md:text-center">Type</div>
            <div className="w-1/4 text-left md:text-center">Amount</div>
            <div className="w-1/4 text-left md:text-center">Status</div>
          </div>
          {transactionHistroy?.map((transaction, index) => (
            <div
              key={index}
              className="flex flex-wrap items-center py-3 border-b border-[#F3EFEF] last:border-b-0"
            >
              <div className="w-1/4 text-left md:text-center text-xs md:text-sm">
                {moment(transaction.createdAt).format("dddd Do MMMM, YYYY")}
              </div>
              <div className="w-1/4 text-left md:text-center text-xs md:text-sm">
                {transaction.trx_type}
              </div>
              <div className="w-1/4 text-left md:text-center text-xs md:text-sm font-medium text-[#16A34A]">
                {thousandFormatter(parseInt(transaction.trx_value))}
              </div>
              <div className="w-1/4 text-left mx-auto  max-w-[100px] md:text-center text-xs md:text-sm">
                <StatusTag
                  status={
                    transaction.trx_status === "paid" || "success"
                      ? "PAID"
                      : "FAILED"
                  }
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center p-8">
          <h2 className="font-bold text-black text-[1rem] md:text-sm">
            You have no transactions
          </h2>
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;
