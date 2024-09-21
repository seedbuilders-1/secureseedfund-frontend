"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FiPlus } from "react-icons/fi";
import { Loader2 } from "lucide-react";
import useCampaign from "../hooks/useCampaign";
import Image from "next/image";
import CampaignCard from "@/components/cards/CampaignCard";

const Campaign = ({ params }: { params: { startupid: string } }) => {
  const router = useRouter();

  const { campaigns, loadingCampaign } = useCampaign({
    startupId: params.startupid,
  });

  return (
    <div className="w-[90%] flex flex-col  mx-auto h-[100vh] bg-white mt-[4rem]">
      <div className="bg-[#0F8B3A] rounded-2xl  w-full py-[2rem] px-5 flex flex-col sm:flex-row justify-between items-center space-y-3">
        <div>
          <h2 className="text-white text-[14px]">
            Launch Your Dream Project Today!
          </h2>
          <div
            onClick={() =>
              router.push(`/dashboard/startup/campaign/createcampaign`)
            }
            className="flex gap-3 items-center rounded-[30px] w-[200px] font-[500] px-5 lg:px-8 py-1 mt-4 lg:py-3 lg:mt-5  text-[.875rem] cursor-pointer bg-[#241A3F] text-[white]"
          >
            <FiPlus className="w-[19px] h-[19px]" />
            <h2 className="text-[white] font-normal">Create Campaign</h2>
          </div>
        </div>
        <Image
          src="/assets/icons/announcement.svg"
          alt="icon"
          width={203}
          height={203}
          className="object-contain h-12 w-12"
        />
      </div>
      <div className="mt-[1.5rem] ">
        <h3 className="text-[#050505]  text-[28px] font-normal">Campaign</h3>
        {loadingCampaign ? (
          <Loader2 className="flex items-center justify-center animate-spin mx-auto w-[300px]" />
        ) : (
          <div className="mt-6 mb-8 gap-6 grid grid-cols-1 lg:grid-cols-3">
            {campaigns?.items.length ? (
              campaigns?.items.map((campaign) => (
                <div key={campaign.id}>
                  <CampaignCard
                    id={campaign.id}
                    title={campaign.title}
                    description={campaign.description}
                    coverPhoto={campaign.coverPhotoUrl}
                    isApprove={campaign.isApprove}
                  />
                </div>
              ))
            ) : (
              <h2 className="  text-[18px]">No Campaign Found</h2>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Campaign;
