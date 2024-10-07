import React from "react";
import CircularProgress from "../../components/CircularProgression";
import { FundingCard } from "../../components/InvestmentTerm";
import {
  IconParkOutline,
  MdiCalendar,
  OcticonGoal,
} from "../../components/InvestmentTermsIcon";

const CampaignDetail = ({ params }: { params: { id: string } }) => {
  //   const { data } = useGetCampaignByIdQuery({ id: params.id });
  //   console.log(data);

  return (
    <>
      <div className="px-4 sm:px-8 lg:px-32 py-4 bg-gray-100 min-h-screen">
        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-0">
              Dangote Groups Funding Campaign
            </h2>
            <div className="self-center md:self-auto">
              <CircularProgress percentage={60} />
            </div>
          </div>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            GreenTech Solutions is currently seeking funding to support the
            development and launch of our groundbreaking innovation in
            sustainable energy solutions. With a funding goal of $200,000, the
            campaign has already attracted $50,000 in commitments. With 30 days
            remaining... GreenTech Solutions is currently seeking funding to
            support the development and launch of our groundbreaking innovation
            in sustainable energy solutions. With a funding goal of $200,000,
            the campaign has already attracted $50,000.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <FundingCard
                text="Funding Goal"
                value="$200,000"
                icon={<OcticonGoal />}
              />
            </div>
            <div className="text-center">
              <FundingCard
                text="Funding Raised"
                value="$50,000"
                icon={<IconParkOutline />}
              />
            </div>
            <div className="text-center">
              <FundingCard text="Days Left" value="30" icon={<MdiCalendar />} />
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
                {Array(8)
                  .fill(null)
                  .map((_, index) => (
                    <tr key={index}>
                      <td className="border-t py-2 px-4">Milestone 1</td>
                      <td className="border-t py-2 px-4">Cutting Grass</td>
                      <td className="border-t py-2 px-4">$30,000</td>
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
