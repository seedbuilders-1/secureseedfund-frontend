"use client"
import React from 'react'
import { ChevronRight } from 'lucide-react';
import { useRouter } from "next/navigation";



interface Props {
title:string;
description:string;
coverPhoto:string;
isApprove:boolean
id:string
}
const CampaignCard = ({title,coverPhoto,description ,isApprove, id }: Props) => {
  const router = useRouter()
  return (
    <div className=" border border-slate-300 rounded-[0.6rem] min-h-[5rem] flex flex-col w-[380px] mt-4">
      <div className="w-full  h-full">
      <div className="flex flex-col space-y-2 pb-5 ">
      <div className="w-full h-[200px] overflow-hidden relative">
        <img src={coverPhoto} alt='cover photo' className="w-full h-full object-cover rounded-t-lg " />
      </div>
      <div className="flex flex-col text-left p-4">
        <h2 className="text-[#334155] font-medium text-[1.2rem]">{title}</h2>
        <span className="text-[#475569] text-[1rem]">{description}</span>
        <div className="border border-[#064E3B] rounded-3xl text-[#064E3B] mt-2 text-center bg-[#D1FAE5] h-[40px] py-2 w-[100px] text-[13px]">
                <div className="flex justify-center items-center">
               { isApprove ? "Approved" : "Not Approved"}
                   </div>
              </div>
      </div>
    
    </div>
        </div>
      <div
        onClick={() => router.push(`/startup/campaign/createcampaign?id=${id}`)}
        className="flex w-full items-center justify-between px-4 py-2 border-t border-slate-300 text-slate-600 text-[.875rem] mt-auto cursor-pointer hover:bg-slate-100 transition-all duration-200"
      >
        <span>Edit Campaign</span>
        <ChevronRight size={14} />
      </div>
    </div>


  )
}

export default CampaignCard