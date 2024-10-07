"use client";
import { TbTargetArrow } from "react-icons/tb";
import { BiCoinStack } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { CampaignDetail } from "@/services/campaign/typings";
import { thousandFormatter } from "@/lib/helpers";
import moment from "moment";
import CircularProgress from "./CircularProgression";

interface Props {
  currentCampaign?: CampaignDetail;
}

const RecentFunding = ({ currentCampaign }: Props) => {
  if (!currentCampaign) {
    return (
      <div className="w-full h-full border border-[#0F8B3A] rounded-[0.6rem] px-4 py-4 flex items-center justify-center">
        <h2 className="font-bold text-[1rem]">You have no Current Campaign</h2>
      </div>
    );
  }

  const endDate = moment(currentCampaign.endDate);
  const today = moment();
  const daysLeft = Math.max(endDate.diff(today, "days"), 0);
  const lastMilestone =
    currentCampaign.milestones[currentCampaign.milestones.length - 1];

  const FundingInfo = ({
    title,
    value,
    icon: Icon,
  }: {
    title: string;
    value: string | number;
    icon: React.ElementType;
  }) => (
    <div className="bg-[#CDEED3] px-3 py-2 flex items-center rounded-md w-full">
      <div className="flex-grow min-w-0 mr-2">
        <h3 className="font-normal text-[#2B2B2BCC] text-sm whitespace-nowrap">
          {title}
        </h3>
        <h2 className="font-bold text-[#0F8B3A] text-base whitespace-nowrap overflow-hidden text-ellipsis">
          {value}
        </h2>
      </div>
      <Icon className="text-[#6C8C3C] text-xl flex-shrink-0" />
    </div>
  );

  return (
    <div className="w-full h-full border border-[#0F8B3A] rounded-[0.6rem] px-4 flex flex-col py-4">
      <div className="flex justify-between">
        <h1 className="text-[1rem] font-medium md:text-[1.4rem]">
          {currentCampaign.title}
        </h1>
        <div className="self-center md:self-auto">
          <CircularProgress percentage={60} />
        </div>
      </div>
      <p className="text-[1rem] max-w-[658px] mt-4 text-[#292D32] m-0">
        {currentCampaign.description}
      </p>

      <section className="grid grid-cols-2 gap-3 mt-[0.5rem] md:grid-cols-3">
        <FundingInfo
          title="Funding Goal"
          value={`N${thousandFormatter(currentCampaign.fundingGoal)}`}
          icon={TbTargetArrow}
        />
        <FundingInfo title="Funding raised" value="2000" icon={BiCoinStack} />
        <FundingInfo title="Days left" value={daysLeft} icon={MdDateRange} />
      </section>

      <div className="my-6 space-y-4">
        <h2 className="text-[16px] font-medium">Next Milestone</h2>
        <div className="w-full border border-slate-300 rounded-[0.6rem] flex px-4 items-center gap-2 py-4">
          <CiCalendar className="w-[55px] h-[53px]" />
          <div>
            <p className="text-[14px] max-w-[508px] text-[#292D32]">
              {lastMilestone?.milestoneTitle}
            </p>
            <div className="border border-[#EAB80A] rounded-2xl text-[#EAB80A] text-center bg-[#FFFAE8] px-3 py-1 text-[12px] inline-block mt-2">
              In Progress
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentFunding;
