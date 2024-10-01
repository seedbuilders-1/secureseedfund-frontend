"use client";

import AppPricingCard from "@/components/cards/AppPricingCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useUserAuth from "@/hooks/auth/useAuth";
import React from "react";

const Pricing = () => {
  const { user } = useUserAuth();
  //   const router = useRouter();
  const freePlanFeatures: string[] = [
    "Navigate the web/mobile application",
    "Demo video on how it works",
    "See a global sample of global investors",
    "See investors that have funded startups on the secureseedfund platform",
    "See information on the benefits of receiving funding to scale startups",
  ];

  const basicPlanFeatures: string[] = [
    "All the features of the free plan",
    "Display your company logo, description, and website to attract potential investors",
  ];

  const premiumPlanFeatures: string[] = [
    "All the features of the free plan and basic plan",
    "Home page visibility and promotion",
    "Virtual meeting with staff and potential investors",
    "Pitch deck upload",
    "1 min elevator pitch video",
    "Upload financial records and financial projections",
    "Verification services for documentation",
    "Verified badge for investor readiness",
    "Upload milestones and traction",
  ];

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
                  isCurrentPlan={true}
                  rate="month"
                />

                <AppPricingCard
                  planName="Basic Plan"
                  price="$15"
                  features={basicPlanFeatures}
                  rate="month"
                  isCurrentPlan={false}
                />

                <AppPricingCard
                  planName="Premium Plan"
                  price="$20"
                  features={premiumPlanFeatures}
                  rate="month"
                  isCurrentPlan={false}
                />
              </div>
            </TabsContent>
            <TabsContent value="6-months">
              <div className="flex flex-col lg:flex-row gap-8">
                <AppPricingCard
                  planName="Free Plan"
                  price="$0"
                  features={freePlanFeatures}
                  rate="6-months"
                  isCurrentPlan={true}
                />

                <AppPricingCard
                  planName="Basic Plan"
                  price="$90"
                  features={basicPlanFeatures}
                  rate="6-months"
                  isCurrentPlan={false}
                />

                <AppPricingCard
                  planName="Premium Plan"
                  price="$100"
                  features={premiumPlanFeatures}
                  rate="6-months"
                  isCurrentPlan={false}
                />
              </div>
            </TabsContent>
            <TabsContent value="yearly">
              <div className="flex flex-col md:flex-row gap-8">
                <AppPricingCard
                  planName="Free Plan"
                  price="$0"
                  features={freePlanFeatures}
                  rate="year"
                  isCurrentPlan={true}
                />

                <AppPricingCard
                  planName="Free Plan"
                  price="$180"
                  features={basicPlanFeatures}
                  rate="year"
                  isCurrentPlan={false}
                />

                <AppPricingCard
                  planName="Free Plan"
                  price="$200"
                  features={premiumPlanFeatures}
                  isCurrentPlan={false}
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
