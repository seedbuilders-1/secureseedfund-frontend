"use client";
import { TbTargetArrow } from "react-icons/tb";
import { BiCoinStack } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { CampaignDetail } from "@/services/campaign/typings";
import { thousandFormatter } from "@/lib/helpers";
import moment from "moment";

interface Props {
  currentCampaign?: CampaignDetail;
}
const RecentFunding = ({ currentCampaign }: Props) => {
  const endDate = moment(currentCampaign?.endDate);
  const today = moment();
  let daysLeft = endDate.diff(today, "days");
  daysLeft = Math.max(daysLeft, 0);
  const lastMilestone =
    currentCampaign?.milestones[currentCampaign?.milestones.length - 1];
  return (
    <div className="w-full border border-slate-300 rounded-[0.6rem] px-2 flex flex-col py-4 h-[669px]">
      {currentCampaign ? (
        <div className="w-full">
          <div className="px-3 mt-5 space-y-10">
            <h1 className="text-[28px]  font-medium">
              {currentCampaign?.title}
            </h1>
            <p className="text-[14px] max-w-[658px] mt-4 text-[#292D32]">
              {currentCampaign?.description}
            </p>
            <section className="flex justify-between mt-[1.5rem]">
              <div className="bg-[#F5FAED] px-4 py-4 flex items-center justify-between w-[218px] rounded-md">
                <div>
                  <h3 className="font-bold">Funding Goal</h3>
                  <h2 className="font-bold text-[#6C8C3C] text-[18px]">
                    {" "}
                    {currentCampaign &&
                      `N${thousandFormatter(currentCampaign?.fundingGoal)}`}
                  </h2>
                </div>
                <TbTargetArrow className="text-[#6C8C3C]" />
              </div>
              <div className="bg-[#F5FAED] px-4 py-4 flex items-center justify-between w-[218px] rounded-md">
                <div className="font-bold">
                  <h3>Funding raised</h3>
                  <h2 className="font-bold text-[#6C8C3C] text-[18px]">2000</h2>
                </div>
                <BiCoinStack className="text-[#6C8C3C]" />
              </div>
              <div className="bg-[#F5FAED] px-4 py-4 flex items-center w-[218px] justify-between rounded-md">
                <div>
                  <h3 className="font-bold">Days left</h3>
                  <h2 className="font-bold text-[#6C8C3C] text-[18px]">
                    {daysLeft}
                  </h2>
                </div>
                <MdDateRange className="text-[#6C8C3C]" />
              </div>
            </section>
            <div className="my-6 space-y-4">
              <h2 className="text-[16px]  font-medium">Next Milestone</h2>
              <div className="w-full border border-slate-300 rounded-[0.6rem]  flex px-4 items-center gap-5 py-4">
                <CiCalendar className="w-[55px] h-[53px]" />
                <div>
                  <p className="text-[14px] max-w-[508px] mt-4 text-[#292D32]">
                    {lastMilestone?.milestoneTitle}
                  </p>
                  <div className="border border-[#EAB80A] rounded-3xl text-[rgb(234,184,10)] mt-2 text-center bg-[#FFFAE8] h-[27px]px-3 py-2 w-[82px] text-[12px]">
                    <div className="flex justify-center items-center">
                      In Progress
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex  justify-center items-center mt-[5rem]">
          <h2 className="font-bold text-[18px]">
            {" "}
            You have no Current Campaign{" "}
          </h2>
        </div>
      )}
    </div>
  );
};

export default RecentFunding;
