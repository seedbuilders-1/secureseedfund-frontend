"use client";

import React, { useEffect } from "react";
import { Button } from "../ui/button";
import WhitCheckIcon from "@/assets/icons/WhitCheckIcon";
import useSubscription from "@/app/dashboard/startup/pricing/hooks/useSubscriptions";
import useUserAuth from "@/hooks/auth/useAuth";

import { useRouter } from "next/navigation";

interface PlanCardProps {
  planName: string;
  price: string;
  features: string[];
  isCurrentPlan: boolean;
  rate: string;
}

type subscriptionType = "free" | "basic" | "premium";
type platformType = "paystack" | "paydestal";

const AppPricingCard = ({
  planName,
  price,
  features,
  isCurrentPlan,
  rate,
}: PlanCardProps) => {
  const { user } = useUserAuth();

  const id = user?.userId as string;
  const subsciptionType = planName.toLocaleLowerCase().split(" ")[0] as
    | "free"
    | "basic"
    | "premium";

  const router = useRouter();

  const userId = user?.userId as string;

  const { createSubscription, response, creatingSubscription } =
    useSubscription({ userId });

  const handleSubscribe = () => {
    if (isCurrentPlan) return;

    const createSubscriptionDto = {
      platform_type: "paystack" as platformType,
      subscriptionType: subsciptionType as subscriptionType,
      user: id,
    };
    const createSubscriptionPayload = {
      createSubscriptionDto: createSubscriptionDto,
      userId: id,
    };

    createSubscription(createSubscriptionPayload);
  };

  useEffect(() => {
    if (response) {
      router.push(response?.authorization_url);
    }
  }, [response]);

  return (
    <div
      className={`rounded-lg p-6 w-80 flex flex-col justify-between ${
        isCurrentPlan ? "bg-green-100" : "bg-[#F0F0F0]"
      }`}
    >
      <div>
        <h3 className="text-lg font-semibold">{planName}</h3>
        <p
          className={`text-4xl font-bold mt-2 ${
            isCurrentPlan ? "text-green-600" : "text-[#1D2127]"
          }`}
        >
          {price} <span className="text-lg font-normal">/ {rate}</span>
        </p>

        <div className="mt-4">
          <h4 className="text-sm font-medium">Features:</h4>
          <ul className="mt-2 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-green-500">
                  <WhitCheckIcon />
                </span>
                <span className="text-sm text-gray-800">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Button
        onClick={handleSubscribe}
        type="submit"
        disabled={creatingSubscription}
        loading={creatingSubscription}
        className="w-full bg-[#241A3F] hover:bg-[#241A3F]/90 rounded-3xl mt-6"
      >
        {isCurrentPlan ? "Current Plan" : "Subscribe"}
      </Button>
    </div>
  );
};

export default AppPricingCard;
