"use client";

import RecommendedInvestor from "@/components/cards/RecommendedInvestor";
import StatCard, {
  StatCardBody,
  StatCardTitle,
  StateCardMetric,
} from "@/components/cards/StatCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import RecentFunding from "./RecentFunding";
import BorderCard from "@/components/cards/BorderCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventsAndNews from "./EventsAndNews";

const DashboardOverview = () => {
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-[2fr_1fr] gap-x-4">
        <StatCard>
          <StatCardTitle>Funding Progress</StatCardTitle>
          <StatCardBody>
            <div className="flex flex-col justify-between h-full">
              <StateCardMetric>
                <span>
                  $32,460{" "}
                  <span className="text-[1rem] font-[500] text-slate-500">
                    / $100,000
                  </span>
                </span>
              </StateCardMetric>
              <Progress className="w-full mt-auto" value={80} />
            </div>
          </StatCardBody>
        </StatCard>
        <StatCard>
          <StatCardTitle>Profile Engagement</StatCardTitle>
          <StatCardBody>
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center space-x-3">
                <StateCardMetric>12,122</StateCardMetric>
                <Badge className="space-x-1 rounded-[0.3rem] px-1 text-[.8rem] text-green-600 bg-green-100 font-[400]">
                  <ArrowUp size={14} /> <span>12.8%</span>
                </Badge>
              </div>
              <span className="text-slate-400 text-[.75rem]">
                <span className="text-green-600 font-[600]">+4,000</span> more
                than last week
              </span>
              <Image
                src="/assets/images/avatars.png"
                alt="avatars"
                width={90}
                height={30}
              />
            </div>
          </StatCardBody>
        </StatCard>
      </div>

      {/* Investor Recommendations */}
      <div className="w-full flex flex-col space-y-2 mt-8">
        <div className="flex items-center w-full justify-between">
          <h3 className="text-slate-700 text-[1.15rem] font-[600]">
            Investors recommended for you
          </h3>
          <Button variant="link" className="px-0 text-green-700">
            See more
          </Button>
        </div>

        <div className="w-full grid grid-cols-4 gap-x-4">
          <RecommendedInvestor />
          <RecommendedInvestor />
          <RecommendedInvestor />
          <RecommendedInvestor />
        </div>
      </div>
      <div className="mt-8 w-full grid grid-cols-[1fr_2fr] gap-x-4">
        <RecentFunding />
        <BorderCard btnText="View SecureSeedFund blog">
          <Tabs
            defaultValue="events-and-news"
            className="flex flex-col flex-1 h-full"
          >
            <TabsList className="w-fit">
              <TabsTrigger value="events-and-news">Events and news</TabsTrigger>
              <TabsTrigger value="recent-messages">Recent Messages</TabsTrigger>
            </TabsList>
            <TabsContent value="events-and-news" className="flex-grow flex">
              <EventsAndNews />
            </TabsContent>
          </Tabs>
        </BorderCard>
      </div>
    </div>
  );
};

export default DashboardOverview;
