"use client";
import React from "react";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
import TranscationHistory from "./components/TranscationHistory";
import useWallet from "../hooks/useWallet";
import useUserAuth from "@/hooks/auth/useAuth";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import TransactionModal from "./components/TransactionModal";
import { Skeleton } from "@/components/ui/skeleton";
function page() {
  const { user } = useUserAuth();
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const userId = user?.userId as string;
  const {
    walletData,
    createDeposit,
    isCreditingWallet,
    walletCredited,
    transactionVerified,
    response,
    loadingWallet,
  } = useWallet({ userId });
  const router = useRouter();

  const handleDeposit = useCallback(
    (amount: number) => {
      createDeposit({
        userId,
        createDepositDto: { amount },
      });
    },
    [userId, createDeposit]
  );
  useEffect(() => {
    if (walletCredited) {
      router.push(response?.authorization_url);
    }
  }, [response, response]);

  useEffect(() => {
    if (transactionVerified) {
      router.push("/dashboard/investor/wallet");
    }
  }, [transactionVerified]);
  if (loadingWallet)
    return (
      <div className="w-full mt-[2rem] p-5">
        <div className="">
          <div>
            <Skeleton className="h-[200px] w-full" />
          </div>
        </div>
      </div>
    );
  return (
    <div>
      {/* <WalletCards walletAddress={walletAddress} imageSrc={walletinvest} /> */}
      <div className=" w-full h-full border border-[#0F8B3A] rounded-[0.6rem] px-4 py-4 mt-[2rem] md:w-[600px] md:m-auto md:mt-10 ">
        <h2 className="font-normal text-[0.8rem] text-center">
          Cash Available
        </h2>
        <p className="text-center text-[#0F8B3A] text-[1.2rem] font-semibold">
          {" "}
          {walletData?.balance || 0.0}
        </p>

        <div className="flex justify-between gap-3 mt-5">
          <div className=" flex  justify-center items-center gap-2 w-full h-full border cursor-pointer border-[#0F8B3A] rounded-[0.6rem] px-1 py-1">
            <span className="bg-[#0F8B3A] p-[8px] rounded-full text-[#fff]">
              {" "}
              <AiOutlineMinus />
            </span>
            <button> Withdraw</button>
          </div>

          <div
            onClick={() => setIsDepositModalOpen(!isDepositModalOpen)}
            className=" flex  justify-center items-center cursor-pointer gap-2 w-full h-full border border-[#0F8B3A] rounded-[0.6rem] px-1 py-1"
          >
            <span className="bg-[#0F8B3A] p-[8px] rounded-full text-[#fff]">
              {" "}
              <GoPlus />
            </span>
            <button> Deposit</button>
          </div>
        </div>
      </div>
      <div className="mt-3 flex  w-full items-center  justify-around md:w-[600px] md:m-auto md:mt-5 ">
        <div className="flex gap-2 items-center">
          <div className="bg-[#241A3F] p-2 h-[15px] w-[19px] rounded-md"></div>
          <div className="flex flex-col">
            <p className="text-[11px] md:text-[15px]">Widthdrawn:</p>
            <h3 className="text-[#0F8B3A] text-[14px] md:text-[18px]">
              {walletData.total_withdrawn}
            </h3>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="bg-[#0F8B3A] p-2 h-[15px] w-[19px] rounded-md"></div>
          <div className="flex flex-col">
            <p className="text-[11px] md:text-[15px]">Total Received:</p>
            <h3 className="text-[#0F8B3A] text-[14px] md:text-[18px]">
              {walletData.total_deposited}
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-[2rem] p-5 md:max-w-6xl md:m-auto md:mt-10">
        <h2 className="text-[1rem] font-bold mb-[1rem]">Transaction History</h2>
        <TranscationHistory />
      </div>
      <TransactionModal
        isOpen={isDepositModalOpen}
        onClose={() => setIsDepositModalOpen(false)}
        type="deposit"
        onSubmit={handleDeposit}
        isLoading={isCreditingWallet}
      />
    </div>
  );
}

export default page;
