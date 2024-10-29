"use client";

import AppPricingCard from "@/components/cards/AppPricingCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useUserAuth from "@/hooks/auth/useAuth";
import useProfile from "@/hooks/profile/useProfile";
import React from "react";

const Pricing = () => {
  const { user } = useUserAuth();
  const { userProfile } = useProfile();

  const freePlanFeatures: string[] = [
    "Navigate the web/mobile application",
    "Demo video on how it works",
    "see information on the benefits of funding startups",
    "See a global sample of global startups",
    "See startups that have received funding from the secureseedfund platform and what they have achieved",
    "See information on the benefits of receiving funding to scale startups",
  ];

  const basicPlanFeatures: string[] = [
    "All the features of the free plan",
    "Access to investment opportunities, startups description, logo, and website.",
  ];

  const premiumPlanFeatures: string[] = [
    "All the features of the free plan and basic plan",
    "Choose between debt financing, equity financing or safe investment",
    "Have virtual meetings with staff and potential startups",
    "Access Startup's pitch deck upload",
    "Access STartup's 5min elevator pitch video",
    "Access startup's financial records and financial projections",
    "Access top-rated startups",
    "See all the startups on the platform, all funding opportunities, and possible return on investment, market value, and equity at stake",
    "Get notifications on new pitch decks submitted before others and filter based on interests and sectors",
    "A dashboard to track all investments",
    "Monitoring and accountability mechanism to track investment and milestones of startups invested in",
  ];

  const userCurrentPlan = userProfile?.subscription_plan;

  const isCurrentPlan = (planName: string) => {
    return userCurrentPlan === planName;
  };

  return (
    <>
      <div className="w-[90%] flex flex-col items-center  mx-auto h-[100vh] bg-white mt-[4rem]">
        <div className="text-center mb-4">
          <h1 className="text-[1.2rem] md:text-[1.8rem]">
            Hi {user?.firstName}, purchase a subscription plan to enjoy all our
            amazing features
          </h1>
          <p className="text-[#747474]">
            We encourage you to subscribe to fully enjoy our offers
          </p>
        </div>

        <div className="text-center mt-4">
          <h1 className="font-bold text-[1.2rem]">Purchase a subscription</h1>
          <p className="text-[1.2rem]">Choose the plan that works for you</p>
        </div>

        <div className="my-5">
          <Tabs defaultValue="monthly">
            <div className="lg:flex lg:justify-center lg:my-8">
              <TabsList className="bg-white rounded-full flex gap-1 items-center shadow-md h-12 w-full max-w-sm lg:justify-center">
                <TabsTrigger variant="landing" value="monthly">
                  Monthly
                </TabsTrigger>
                <TabsTrigger variant="landing" value="6-months">
                  6-months
                </TabsTrigger>
                <TabsTrigger variant="landing" value="yearly">
                  Yearly
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="monthly">
              <div className="flex flex-col lg:flex-row gap-8">
                <AppPricingCard
                  planName="Free Plan"
                  price="$0"
                  features={freePlanFeatures}
                  isCurrentPlan={isCurrentPlan("free")}
                  rate="month"
                />

                <AppPricingCard
                  planName="Premium Plan"
                  price="$40"
                  features={premiumPlanFeatures}
                  isCurrentPlan={isCurrentPlan("premium")}
                  rate="month"
                />
              </div>
            </TabsContent>

            <TabsContent value="6-months">
              <div className="flex flex-col lg:flex-row gap-8">
                <AppPricingCard
                  planName="Premium Plan"
                  price="$220"
                  features={premiumPlanFeatures}
                  isCurrentPlan={isCurrentPlan("premium")}
                  rate="6-months"
                />
              </div>
            </TabsContent>

            <TabsContent value="yearly">
              <div className="flex flex-col md:flex-row gap-8">
                <AppPricingCard
                  planName="Basic Plan"
                  price="$30"
                  features={basicPlanFeatures}
                  isCurrentPlan={isCurrentPlan("basic")}
                  rate="year"
                />

                <AppPricingCard
                  planName="Premium Plan"
                  price="$400"
                  features={premiumPlanFeatures}
                  isCurrentPlan={isCurrentPlan("premium")}
                  rate="year"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Pricing;
