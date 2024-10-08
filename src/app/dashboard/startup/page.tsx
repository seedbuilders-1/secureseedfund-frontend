"use client";
import StatCard from "@/components/cards/StatCard";
import Image from "next/image";
import RecentFunding from "./components/RecentFunding";
import { thousandFormatter } from "@/lib/helpers";
import InvestorComponent from "./components/InvestorComponent";
import Milestones from "./components/Milestones";
import useCampaign from "./hooks/useCampaign";
import { Skeleton } from "@/components/ui/skeleton";
import useUserAuth from "@/hooks/auth/useAuth";
import Link from "next/link";
export default function StartupDashboard({
  params,
}: {
  params: { startupid: string };
}) {
  const { campaigns, loadingCampaign } = useCampaign({
    startupId: params.startupid,
  });
  const { user } = useUserAuth();
  const currentCampaign =
    campaigns && campaigns?.items[campaigns?.items.length - 1];
  if (loadingCampaign) {
    return (
      <div className="w-full mt-[2rem]">
        <div className="grid grid-cols-2 gap-x-4 md:max-w-[900px] mx-auto">
          {[1, 2].map((el) => (
            <div key={el}>
              <Skeleton className="h-[200px] w-full" />
            </div>
          ))}
        </div>

        <div className="mt-[1rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {[1, 2, 3].map((el) => (
            <Skeleton key={el} className="h-[300px] w-full" />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="w-full mt-[2rem]">
      <div className="flex justify-center items-center my-6 flex-wrap">
        <div className="border-[3px] p-3 border-solid w-full md:mx-32 flex gap-5 items-center text-[#fff] border-[#0F8B3A] bg-[#0F8B3A]  rounded-lg mb-4">
          <Image
            src="/assets/icons/InfoIcon.svg"
            alt="avatars"
            width={30}
            height={30}
          />
          <p>
            Hello {user?.firstName}, you are currently on the free plan which
            allows you to set up and account with us, kindly upgrade to a paid
            plan to enjoy more features.
            <Link
              className="border-b text-black"
              href={"/dashboard/startup/pricing"}
            >
              Upgrade Now
            </Link>
          </p>
        </div>
      </div>

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
