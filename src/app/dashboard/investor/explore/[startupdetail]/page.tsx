"use client";
import React from "react";
import { api as startupsApi } from "@/services/startup";
import { useParams } from "next/navigation";
import LoadingSkeleton from "../components/LoadingSkeleton";
import BasicStartupPage from "@/components/startup-profile/BasicStartupPage";
import PremiumStartupPage from "@/components/startup-profile/PremiumStartupPage";
const StartupDetail = () => {
  const { startupdetail } = useParams();

  const startupId = Array.isArray(startupdetail)
    ? startupdetail[0]
    : startupdetail || "";
  const { data: startup, isLoading } =
    startupsApi.useStartupControllerGetStartupByStartupIdQuery({
      startupId: startupId,
    });
  const hasCampaign =
    startup?.campaignInformation && startup.campaignInformation.length > 0;
  if (isLoading) {
    return <LoadingSkeleton />;
  }
  return (
    <>
      {startup?.creator_id.subscription_plan === "basic" ? (
        <BasicStartupPage startup={startup} isLoading={isLoading} />
      ) : (
        <PremiumStartupPage
          hasCampaign={hasCampaign}
          startup={startup}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default StartupDetail;
