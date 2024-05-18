"use client";
import React from "react";
import { Button } from "../ui/button";
import Checkicon from "@/assets/icons/Checkicon";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  startupId?: string | undefined;
}
const Successpage = ({ title, startupId }: Props) => {
  const router = useRouter();

  return (
    <>
      <div className="w-full h-full">
        <h2 className="text-primaryMain mt-4">Need help?</h2>

        <div className="flex flex-col justify-center items-center mx-auto  ml-5 mt-[5rem]">
          <div>
            <div className="flex flex-col justify-center items-center">
              <Checkicon />
            </div>
            <h2 className="text-slate-800 text-[16px] text-center mt-5 font-medium">
              {title}
            </h2>
            <p className="text-slate-600 text-[14px] w-[70%] text-center mt-3 mx-auto">
              We’ve received your application and review shortly. Expect an
              email soon on the status of your application. Mean while you can
              head to your dashboard
            </p>
          </div>

          <Button
            type="submit"
            className="w-[30%] rounded-md mx-auto h-[40px] mt-8"
            onClick={() => {
              router.push(`/startup/${startupId}/dashboard`);
            }}
          >
            Go to Dashboard
          </Button>
        </div>
      </div>
    </>
  );
};

export default Successpage;
