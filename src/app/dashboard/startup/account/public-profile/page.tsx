"use client";
import React from "react";
import useProfile from "@/hooks/profile/useProfile";
import useAccount from "../hooks/useAccount";
import BasicStartupPage from "@/components/startup-profile/BasicStartupPage";
import PremiumStartupPage from "@/components/startup-profile/PremiumStartupPage";
import WarningComponent from "@/components/cards/WarningComponent";

const page = () => {
  const { userProfile, loadingProfile } = useProfile();
  const creatorId = userProfile?.id as string;
  const { accountInformation, loadingAccountInformation } =
    useAccount(creatorId);

  const hasCampaign =
    accountInformation?.campaignInformation &&
    accountInformation?.campaignInformation.length > 0;

  return (
    <>
      {accountInformation?.creator_id.subscription_plan === "free" ? (
        <WarningComponent
          showLink={true}
          title={`Hello ${userProfile?.firstName}, you are currently on the ${userProfile?.subscription_plan} plan which means you don't have any public profile at the moment.`}
          linkTitle={"Upgrade Now"}
        />
      ) : accountInformation?.creator_id.subscription_plan === "basic" ? (
        <>
          <WarningComponent
            showLink={true}
            title={`Hello ${userProfile?.firstName}, you are currently on the ${userProfile?.subscription_plan} plan which means not all the information you filled in would be displayed.`}
            linkTitle={"Upgrade Now"}
          />
          <BasicStartupPage
            startup={accountInformation}
            isLoading={loadingAccountInformation || loadingProfile}
          />
        </>
      ) : (
        <PremiumStartupPage
          hasCampaign={hasCampaign}
          startup={accountInformation}
          isLoading={loadingAccountInformation || loadingProfile}
        />
      )}
    </>
  );
};

export default page;
