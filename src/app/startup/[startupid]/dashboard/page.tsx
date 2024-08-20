"use client";
import StatCard from "@/components/cards/StatCard";
import Image from "next/image";
import RecentFunding from "../../components/RecentFunding";
import useCampaign from "@/hooks/campaign/useCampaign";
import { Loader2 } from "lucide-react";
import { thousandFormatter } from "@/lib/helpers";
import InvestorComponent from "../../components/InvestorComponent";
import Milestones from "../../components/Milestones";

export default function StartupDashboard({
  params,
}: {
  params: { startupid: string };
}) {
  const { campaigns, loadingCampaign } = useCampaign({
    startupId: params.startupid,
  });
  const currentCampaign =
    campaigns && campaigns?.items[campaigns?.items.length - 1];
  if (loadingCampaign) {
    return (
      <Loader2 className="flex items-center justify-center animate-spin mx-auto w-[300px]" />
    );
  }
  return (
    <div className="w-full mt-[2rem]">
      <div className="w-full gap-x-4 grid grid-cols-2 md:max-w-[900px] mx-auto">
        <StatCard>
          <div className="flex items-center justify-between   p-3 text-white md:h-[150px] md:justify-around">
            <div className="">
              <h2 className="font-medium text-[0.9rem] md:text-[1.4rem]">
                Campaign Goal
              </h2>
              <span className=" text-[0.9rem] font-medium md:text-[1.3rem]">
                {" "}
                {`N${thousandFormatter(20000)}`}
              </span>
            </div>
            <div className="bg-[#F3FFDE] p-2 rounded-full  ">
              <Image
                src="/assets/images/fundraised.png"
                alt="avatars"
                width={30}
                height={30}
              />
            </div>
          </div>
        </StatCard>
        <StatCard>
          <div className="flex items-center justify-between p-3 text-white md:h-[150px] md:justify-around">
            <div className="">
              <h2 className="font-medium text-[0.9rem] md:text-[1.4rem]">
                Total Funds Raised
              </h2>
              <span className=" text-[0.9rem] font-medium md:text-[1.3rem]">
                {`N${thousandFormatter(20000)}`}
              </span>
            </div>
            <div className="bg-[#F3FFDE] p-2 rounded-full  ">
              <Image
                src="/assets/images/activeinvestor.png"
                alt="avatars"
                width={30}
                height={30}
              />
            </div>
          </div>
        </StatCard>
      </div>

      <div className="mt-[3rem] w-full mx-auto gap-8 grid grid-cols-[1fr] gap-x-4 md:grid-cols-2 lg:grid-cols-3 p-4">
        <div>
          <h3 className="text-[1rem] md:text-[1.5rem] font-medium">
            {" "}
            Current Campaign
          </h3>
          <RecentFunding currentCampaign={currentCampaign && currentCampaign} />
        </div>
        <div>
          <h3 className="text-[1rem] font-medium  md:text-[1.5rem]">
            {" "}
            Milestones
          </h3>
          <Milestones currentCampaign={currentCampaign && currentCampaign} />
        </div>
        <div>
          <h3 className="text-[1rem] font-medium  md:text-[1.5rem] ">
            {" "}
            Investors
          </h3>
          <InvestorComponent />
        </div>
      </div>
    </div>
  );
}
