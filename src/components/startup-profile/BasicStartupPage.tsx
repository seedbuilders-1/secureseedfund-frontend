"use client";
import React, { useRef, useState } from "react";
import AboutusSection from "../../app/dashboard/investor/explore/components/Aboutus";
import TeamMembers from "../../app/dashboard/investor/explore/components/TeamMembers";
import LoadingSkeleton from "../../app/dashboard/investor/explore/components/LoadingSkeleton";

import { Startup } from "@/services/startup";
import WarningComponent from "../cards/WarningComponent";
import useUserAuth from "@/hooks/auth/useAuth";
import useProfile from "@/hooks/profile/useProfile";

interface Props {
  isLoading: boolean;
  startup: Startup | undefined;
}

const BasicStartupPage = ({ startup, isLoading }: Props) => {
  const [activeTab, setActiveTab] = useState("Overview");

  const { user } = useUserAuth();
  const { userProfile } = useProfile();

  const tabs = ["Overview", "About", "Teams"];

  if (isLoading) {
    return <LoadingSkeleton />;
  }
  return (
    <section className=" px-[1rem] lg:px-[3rem] mt-[2rem] mb-[100px] flex items-center  mx-auto ">
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="w-full h-full">
          <WarningComponent
            showLink={true}
            title={`Hello ${user?.firstName}, you are currently on the ${
              userProfile?.subscription_plan
            } plan which ${
              userProfile?.subscription_plan === "premium"
                ? "grants you access to all our premium features."
                : userProfile?.subscription_plan === "basic"
                ? "allows you enjoy some benefits. Upgrade to view more information on the startup, such as pitch deck, demo video etc."
                : "allows you to set up an account with us. Kindly upgrade to a paid plan to enjoy more features."
            }`}
            linkTitle={
              userProfile?.subscription_plan === "premium"
                ? "View Plans"
                : "Upgrade Now"
            }
          />
          <div className="relative w-full">
            <div className="absolute inset-0 bg-black/40 rounded-sm" />
          </div>

          <div className="mt-8 ">
            <h3 className="text-[1rem] font-normal text-[#000000] mb-4">
              {startup?.companyInformation.company_name}
            </h3>
            <strong className="text-[1.2rem] font-bold leading-[1rem]   ">
              {startup?.companyInformation.company_desc}
            </strong>
            <p className="text-sm font-500 mt-4">
              {startup?.companyInformation.company_bullet_point}
            </p>
            <p className="text-sm font-500 mt-8">
              <strong>Industry</strong>:{" "}
              {startup?.companyInformation.company_industry}
            </p>

            <div>
              <div className="mt-8">
                <div className="flex gap-5 font-medium">
                  {tabs.map((tab) => (
                    <div key={tab} className="relative">
                      <button
                        onClick={() => setActiveTab(tab)}
                        className={`pb-2 transition-colors duration-300 text-[1.1rem] font-bold ${
                          activeTab === tab
                            ? "text-[#0F8B3A]"
                            : "text-gray-700 hover:text-gray-900 font-bold"
                        }`}
                      >
                        {tab}
                      </button>
                      <div
                        className={`absolute bottom-[8px] left-0 w-full h-0.5 transition-all duration-300 mb-[-0.3rem] ${
                          activeTab === tab
                            ? "bg-[#0F8B3A] opacity-100 font-bold"
                            : "bg-transparent opacity-0 font-bold"
                        }`}
                      />
                    </div>
                  ))}
                </div>
                <hr className="mt-6 bg-[#2f2c2c] mb-6" />
                <div className="mt-4 ">
                  {activeTab === "Overview" && (
                    <div>
                      <div>
                        <h2 className="font-bold text-[1.5rem]">
                          Reasons to Invest
                        </h2>
                        <p className="mt-6 text-sm">
                          {startup?.companyInformation.company_bullet_point}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "About" && <AboutusSection about={startup} />}
                  {activeTab === "Teams" && (
                    <div>
                      <TeamMembers team={startup} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicStartupPage;
