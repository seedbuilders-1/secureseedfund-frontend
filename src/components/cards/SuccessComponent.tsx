"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { HiCheckBadge } from "react-icons/hi2";
import { useStartupIdUrl } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  description: string;
  link: string;
}
const SuccessComponent = ({ title, description, link }: Props) => {
  const router = useRouter();
  const startupId = useStartupIdUrl();

  return (
    <div className="fixed top-0 right-0  w-full h-full bg-white flex justify-center items-center overflow-hidden">
      <div className="flex justify-center items-center flex-col">
        <div className="bg-[#F3FFDE] py-[3rem] px-[3rem] rounded-full">
          <HiCheckBadge className="text-[#1AA657] w-[48px] h-[48px]" />
        </div>
        <h2 className="text-[#0F172A] text-[24px] font-medium mt-6">{title}</h2>
        <h3 className="text-[#747474] text-[16px] text-center w-[700px]">
          {description}
        </h3>
        <Button
          onClick={() => router.push(`${link}`)}
          className="w-[30%] rounded-3xl bg-[#241A3F] mt-[2rem]"
        >
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default SuccessComponent;
