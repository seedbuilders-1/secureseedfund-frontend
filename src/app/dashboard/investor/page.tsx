"use client";
import React from "react";
import TransactionHistory from "@/components/wallet/TranscationHistory";
import Investment from "@/components/cards/Investment";
import useUserAuth from "@/hooks/auth/useAuth";
import { api as investorApi } from "@/services/investor/index";
const Page = () => {
  const { user } = useUserAuth();
  const { data: investments, isLoading: loadingInvestments } =
    investorApi.useInvestorControllerGetInvestorInvestmentsQuery({
      investorId: user?.userId as string,
    });
  return (
    <div>
      <div className="mt-[2rem] md:max-w-6xl md:m-auto md:mt-10 p-5">
        <h2 className="text-[1rem] font-bold mb-[1rem]">Investments</h2>
        <Investment
          accountType="investor"
          investments={investments}
          loadingInvestments={loadingInvestments}
        />
      </div>
      {/* 
      <div className="mt-[2rem] md:max-w-6xl md:m-auto md:mt-10 p-5">
        <h2 className="text-[1rem] font-bold mb-[1rem]">
          Top performing invested start-up of the week
        </h2>
        <Investment />
      </div> */}

      <div className="mt-[2rem] md:max-w-6xl md:m-auto md:mt-10 p-5">
        <h2 className="text-[1rem] font-bold mb-[1rem]">Transaction History</h2>
        <TransactionHistory />
      </div>
    </div>
  );
};

export default Page;
