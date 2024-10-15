"use client";

import React from "react";
import CircularProgress from "../../components/CircularProgression";
import { FundingCard } from "../../components/InvestmentTerm";
import {
  IconParkOutline,
  MdiCalendar,
  OcticonGoal,
} from "../../components/InvestmentTermsIcon";
import useCampaign from "../../hooks/useCampaign";
import { useParams, useSearchParams } from "next/navigation";

const CampaignDetail = ({ params }: { params: { id: string } }) => {
  const { campaignId } = useParams();

  const { singleCampaign, loadingSingleCampaign } = useCampaign({
    id: campaignId as string,
  });

  return (
    <>
      <div className="px-4 sm:px-8 lg:px-32 py-4 bg-gray-100 min-h-screen">
        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-0">
              {singleCampaign?.title}
            </h2>
            <div className="self-center md:self-auto">
              <CircularProgress percentage={60} />
            </div>
          </div>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            {singleCampaign?.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <FundingCard
                text="Funding Goal"
                value={singleCampaign?.fundingGoal as number}
                icon={<OcticonGoal />}
              />
            </div>
            <div className="text-center">
              <FundingCard
                text="Funding Raised"
                value={50000}
                icon={<IconParkOutline />}
              />
            </div>
            <div className="text-center">
              <FundingCard
                text="Days Left"
                value={
                  singleCampaign?.endDate && singleCampaign?.startDate
                    ? Math.floor(
                        (new Date(singleCampaign.endDate).getTime() -
                          new Date(singleCampaign.startDate).getTime()) /
                          (1000 * 60 * 60 * 24)
                      )
                    : 0
                }
                icon={<MdiCalendar />}
              />
            </div>
          </div>
        </div>

        <div className="bg-white border-solid border-[1px] border-[#0F8B3A] rounded-lg p-6">
          <h3 className="text-lg md:text-xl font-bold mb-4">Milestone</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-left">Milestones Name</th>
                  <th className="py-2 px-4 text-left">
                    Milestones Description
                  </th>
                  <th className="py-2 px-4 text-left">Funding Goal</th>
                  <th className="py-2 px-4 text-left">Status</th>
                  <th className="py-2 px-4 text-left">Upload</th>
                </tr>
              </thead>
              <tbody>
                {singleCampaign?.milestones.map((milestone, index) => (
                  <tr key={index}>
                    <td className="border-t py-2 px-4">
                      {milestone.milestoneTitle}
                    </td>
                    <td className="border-t py-2 px-4">
                      {milestone.milestoneDescription}
                    </td>
                    <td className="border-t py-2 px-4">
                      ${milestone.targetAmount}
                    </td>
                    <td className="border-t py-2 px-4 text-green-600">
                      Completed
                    </td>
                    <td className="border-t py-2 px-4">
                      <a href="#" className="text-blue-500 hover:underline">
                        455.99kb
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignDetail;