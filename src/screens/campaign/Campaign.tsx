"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FiPlus } from "react-icons/fi";
import Image from "next/image";
import CampaignCard from "@/components/cards/CampaignCard";
import useCampaign from "@/hooks/campaign/useCampaign";
import { Loader2 } from "lucide-react";

const Campaign = () => {
  const router = useRouter();
  const { campaigns, loadingCampaign } = useCampaign();

  return (
    <div className="w-[90%] flex flex-col  mx-auto h-[100vh] bg-white mt-[4rem]">
      <div className="bg-[#241A3F] rounded-2xl  w-full py-[1rem] px-5 flex justify-between items-center space-y-3">
        <div>
          <h2 className="text-white  text-[28px] font-semibold">
            Launch Your Dream Project Today
          </h2>
          <div
            onClick={() => router.push("/startup/campaign/createcampaign")}
            className="flex  gap-1 items-center rounded-[30px] w-[159px]  font-[500] px-3 py-1  text-[.875rem] cursor-pointer   bg-[#77B900] text-[white]"
          >
            <FiPlus className="w-[9px] h-[9px]" />
            <h2 className=" mt-1 text-[white] font-normal">Start Campaign</h2>
          </div>
        </div>
        <Image
          src="/assets/icons/launch.svg"
          alt="icon"
          width={203}
          height={203}
          className="object-contain h-[100] w-[100]"
        />
      </div>
      <div className="mt-[1.5rem] ">
        <h3 className="text-[#050505]  text-[28px] font-normal">Campaign</h3>
        {loadingCampaign ? (
          <Loader2 className="flex items-center justify-center animate-spin mx-auto w-[300px]" />
        ) : (
          <div className="grid grid-cols-2 mt-6 mb-8 md:grid-cols-3">
            {campaigns?.items.map((campaign) => (
              <div key={campaign.id}>
                <CampaignCard
                  id={campaign.id}
                  title={campaign.title}
                  description={campaign.description}
                  coverPhoto={campaign.coverPhotoUrl}
                  isApprove={campaign.isApprove}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Campaign;
