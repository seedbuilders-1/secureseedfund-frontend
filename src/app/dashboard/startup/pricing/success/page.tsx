"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSubscription from "../hooks/useSubscriptions";

const Success = () => {
  const searchParams = useSearchParams();

  const ref_id = searchParams.get("trxref") ?? "";
  const { completeSubscription, createdSubscription } = useSubscription();

  const verifySubscription = () => {
    console.log("started verifying");
    const completedSubscriptionDto = {
      ref_id: ref_id as string,
    };

    const completedSubscriptionPayload = {
      completeSubscriptionDto: completedSubscriptionDto,
    };

    completeSubscription(completedSubscriptionPayload);
  };

  useEffect(() => {
    console.log("soks");
    console.log(createdSubscription, "soks");

    console.log("verifyign");
    verifySubscription();
  }, [subCreated]);
  return <div>Success</div>;
};

export default Success;
