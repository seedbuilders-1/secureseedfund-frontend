import React from "react";
import { thousandFormatter } from "@/lib/helpers";
import { Milestone } from "@/services/startup";
interface Props {
  currentCampaign?: Milestone[];
}

const Milestones = ({ currentCampaign }: Props) => {
  return (
    <div className="border border-[#1F9347] w-full py-4 px-4 rounded-md h-full gap-4 flex flex-col items-center">
      <>
        <h3 className="text-[0.9rem] font-medium md:text-[1.2rem]">
          {" "}
          Milestone
        </h3>
        {currentCampaign?.map((milestone, index) => (
          <div
            className="py-3 px-4 rounded-md w-full flex justify-between items-center border-[#1F9347] border"
            key={index}
          >
            <div className="flex gap-2 ">
              <div className="bg-[#1F9347] rounded-full w-[30px] h-[30px]"></div>
              <div>
                <h2 className="text-black font-medium text-[1.1rem]">
                  {milestone.milestoneTitle}
                </h2>
                <p className="text-black text-[0.9rem]">
                  {milestone.milestoneDescription}
                </p>
                <div className="bg-[#CEECDB] rounded-3xl text-[#0F8B3A] mt-2 text-center px-1 py-1 text-[12px]">
                  <div className="flex justify-center items-center">
                    Achieved
                  </div>
                </div>
              </div>
            </div>
            <span className="text-[1.1rem]">
              {`₦ ${thousandFormatter(milestone.targetAmount)}`}
            </span>
          </div>
        ))}
      </>
    </div>
  );
};

export default Milestones;