"use client";
import StatCard, {
  StateCardMetric,
} from "@/components/cards/StatCard";
import Image from "next/image";
import RecentFunding from "./RecentFunding";
import useCampaign from "@/hooks/campaign/useCampaign";
import { Loader2 } from "lucide-react";
import { thousandFormatter } from "@/lib/helpers";


const DashboardOverview = () => {
  const { campaigns, loadingCampaign } = useCampaign()
  console.log(campaigns);
  const currentCampaign = campaigns && campaigns?.items[campaigns?.items.length - 1]
  if (loadingCampaign) {
    return (
      <Loader2 className="flex items-center justify-center animate-spin mx-auto w-[300px]" />
    )
  }

  return (
    <div className="w-full mt-[4rem]">
      <div className="w-[90%] mx-auto grid grid-cols-[1fr_1fr_1fr] gap-x-4">

        <StatCard>
          <div className="flex items-center justify-between mt-2">
            <div className="space-y-4">
              <h2>Total funds raised</h2>
              <StateCardMetric >
                <span className="text-[#050505]">
                  0
                </span>
              </StateCardMetric>
            </div>
            <div className="bg-[#F3FFDE] p-4 rounded-full w-[60px] h-[60px] ">
              <Image
                src="/assets/images/fundraised.png"
                alt="avatars"
                width={40}
                height={40}
              />
            </div>
          </div>
        </StatCard>

        <StatCard>
          <div className="flex items-center justify-between mt-2">
            <div className="space-y-4">
              <h2>Active  Investors</h2>
              <StateCardMetric >
                <span className="text-[#050505]">
                  0
                </span>
              </StateCardMetric>
            </div>
            <div className="bg-[#F3FFDE] p-4 rounded-full w-[60px] h-[60px] ">
              <Image
                src="/assets/images/activeinvestor.png"
                alt="avatars"
                width={40}
                height={40}
              />
            </div>
          </div>
        </StatCard>
        <StatCard>
          <div className="flex items-center justify-between mt-2">
            <div className="space-y-4">
              <h2>Current campaigns</h2>
              <StateCardMetric >
                <span className="text-[#050505]">
                  {campaigns?.items.length || "0"}
                </span>
              </StateCardMetric>
            </div>
            <div className="bg-[#F3FFDE] p-4 rounded-full w-[60px] h-[60px] ">
              <Image
                src="/assets/images/campaign.png"
                alt="avatars"
                width={40}
                height={40}
              />
            </div>
          </div>
        </StatCard>
      </div>

      <div className="mt-[3rem] w-[90%] mx-auto grid grid-cols-[2fr_1fr] gap-x-4">
        <div>
          <h3 className="text-[28px] mb-4"> Current Campaign</h3>
          <RecentFunding currentCampaign={currentCampaign && currentCampaign} />
        </div>
        <div>
          <h3 className="text-[28px] mb-4"> Transactions</h3>
          <div className="bg-[#0F8B3A] w-full py-[3rem] px-4 rounded-md h-[668px] flex flex-col justify-between items-center">

            {
              currentCampaign?.milestones.length ?
                currentCampaign?.milestones.map((milestone,index ) => (
                  <div className="bg-[#0A742F] py-5 px-4 rounded-[60px] w-full flex justify-between items-center" key={index}>
                    <div className="flex gap-2">
                      <div className="bg-white rounded-full w-[42px] h-[42px]"></div>
                      <div>
                        <h2 className="text-white font-medium text-[18px]"> {milestone.milestoneTitle}</h2>
                        <p className="text-white  text-[14px]">{milestone.milestoneDescription}</p>
                      </div>
                    </div>
                    <span className="text-[#FFFFFF] text-[18px]">
                      {`N${thousandFormatter(milestone.targetAmount)}`}
                    </span>
                  </div>
                ))
                : <div className="flex  justify-center items-center">
                  <h2 className="font-bold text-white text-[18px]">   You have no transactions </h2>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
