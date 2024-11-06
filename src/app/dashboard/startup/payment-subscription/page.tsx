"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import useUserAuth from "@/hooks/auth/useAuth";
import { HiCheckBadge } from "react-icons/hi2";
import { useRouter, useSearchParams } from "next/navigation";
import useSubscription from "../../startup/pricing/hooks/useSubscriptions";

const SubsciptionSuccessComponent = () => {
  const router = useRouter();
  const { user } = useUserAuth();
  const userId = user?.userId as string;
  const { completeSubscription } = useSubscription({ userId });

  const searchParams = useSearchParams();

  const refId = searchParams.get("trxref") ?? "";
  const verifySubsciptionDto = {
    ref_id: refId,
  };
  const payload = {
    completeSubscriptionDto: verifySubsciptionDto,
  };
  useEffect(() => {
    if (refId) {
      completeSubscription(payload);
    }
  }, [refId]);
  return (
    <div className="fixed top-0 right-0  w-full h-full bg-white flex justify-center items-center overflow-hidden">
      <div className="flex justify-center items-center flex-col">
        <div className="bg-[#F3FFDE] py-[3rem] px-[3rem] rounded-full">
          <HiCheckBadge className="text-[#1AA657] w-[48px] h-[48px]" />
        </div>
        <h2 className="text-[#0F172A] text-[24px] font-medium mt-6">
          Your payment has been verified
        </h2>
        <h3 className="text-[#747474] text-[16px] text-center w-[700px]">
          Payment is Successfully navigate to the dashboard to continue.
        </h3>
        <Button
          onClick={() => router.push("/dashboard/startup")}
          className="w-[30%] rounded-3xl bg-[#241A3F] mt-[2rem]"
        >
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default SubsciptionSuccessComponent;
