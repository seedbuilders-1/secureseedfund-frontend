"use client";
import React from "react";
import TransactionHistory from "@/components/wallet/TranscationHistory";
import Investment from "@/components/cards/Investment";
import useUserAuth from "@/hooks/auth/useAuth";
import { useGetInstitutionsInvestmentsQuery } from "@/services/institution";
import WarningComponent from "@/components/cards/WarningComponent";
import useProfile from "@/hooks/profile/useProfile";
const Page = () => {
  const { user } = useUserAuth();
  const { data: investments, isLoading: loadingInvestments } =
    useGetInstitutionsInvestmentsQuery({
      investorId: user?.userId as string,
    });
  const { userProfile } = useProfile();
  return (
    <div>
      <div className="p-4">
        <WarningComponent
          showLink={true}
          title={`Hello ${user?.firstName}, you are currently on the ${
            userProfile?.subscription_plan
          } plan which ${
            userProfile?.subscription_plan === "premium"
              ? "grants you access to all our premium features."
              : userProfile?.subscription_plan === "basic"
              ? "provides you with great features, but you can upgrade to premium to view startups full profile."
              : "allows you to set up an account with us. Kindly upgrade to a paid plan to explore startups."
          }`}
          linkTitle={
            userProfile?.subscription_plan === "premium"
              ? "View Plans"
              : "Upgrade Now"
          }
        />
      </div>
      <div className="mt-[2rem] md:max-w-6xl md:m-auto md:mt-10 p-5">
        <h2 className="text-[1rem] font-bold mb-[1rem]">Investments</h2>
        <Investment
          accountType="institution"
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
