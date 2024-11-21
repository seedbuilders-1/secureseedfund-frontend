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
import { useParams } from "next/navigation";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import UploadMilestoneProof from "../../components/UploadMilestoneProof";
import moment from "moment";

const CampaignDetail = ({ params }: { params: { id: string } }) => {
  const { campaignId } = useParams();
  const campaignIdParam = Array.isArray(campaignId)
    ? campaignId[0]
    : campaignId || "";
  console.log(campaignIdParam);
  const { singleCampaign, loadingSingleCampaign } = useCampaign({
    campaignIdParam,
  });

  const daysLeft = Math.max(
    0,
    moment(singleCampaign?.endDate).diff(moment(), "days")
  );
  if (loadingSingleCampaign) return <LoadingSpinner />;
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
                value={daysLeft}
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
                      {milestone.proof ? (
                        <a
                          href={milestone.proof}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          View File
                        </a>
                      ) : (
                        <UploadMilestoneProof
                          milestoneId={(milestone as any).id}
                        />
                      )}
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
