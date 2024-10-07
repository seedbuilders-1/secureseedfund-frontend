"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  title: string;
  description: string;
  isApprove: boolean;
  id: string;
}
const CampaignCard = ({ title, description, isApprove, id }: Props) => {
  const router = useRouter();
  return (
    <div
      className=" border border-slate-300 rounded-[0.6rem] min-h-[5rem] flex flex-col w-[380px] mt-4 cursor-pointer"
      onClick={() => router.push(`/dashboard/startup/campaign/${id}`)}
    >
      <div className="w-full  h-full">
        <div className="flex flex-col space-y-2 pb-5 ">
          <div className="flex flex-col text-left p-4">
            <h2 className="text-[#334155] font-medium text-[1.2rem]">
              {title}
            </h2>
            <span className="text-[#475569] text-[1rem]">{description}</span>
            <div className="border border-[#064E3B] rounded-3xl text-[#064E3B] mt-2 text-center bg-[#D1FAE5] h-[40px] py-2 w-[100px] text-[13px]">
              <div className="flex justify-center items-center">
                {isApprove ? "Approved" : "Not Approved"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
