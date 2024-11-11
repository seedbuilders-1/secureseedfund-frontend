import React from "react";
import { StartupInvestmentsResponse } from "@/services/startup/typings";
import moment from "moment";

interface Props {
  startupInvestments: StartupInvestmentsResponse | undefined;
}

const InvestorComponent = ({ startupInvestments }: Props) => {
  const investments = startupInvestments?.length
    ? startupInvestments[0].campaignInformation[
        startupInvestments[0].campaignInformation.length - 1
      ]
    : null;

  return (
    <div className="border border-[#1F9347] w-full py-4 px-4 rounded-md h-full">
      {investments?.investments.length ? (
        <div className="w-full">
          <div className="flex justify-between items-center mb-4 text-gray-500 text-sm font-medium">
            <div className="w-1/2">Names</div>
            <div className="w-1/4 text-right">Amount</div>
            <div className="w-1/4 text-right">Type</div>
          </div>
          {investments.investments.map((investor, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-3 border-b border-[#F3EFEF] last:border-b-0"
            >
              <div className="w-1/2 flex items-center gap-3">
                <div className="bg-[#1F9347] rounded-full w-[30px] h-[30px]"></div>
                <div>
                  <h2 className="text-[#334155] font-normal">
                    {`${investor.user.firstName} ${investor.user.lastName}`}
                  </h2>
                  <p className="text-[#00000033] text-sm">
                    {" "}
                    {moment(investor.createdAt).format("dddd Do MMMM, YYYY")}
                  </p>
                </div>
              </div>
              <div className="w-1/4 text-right font-medium text-[#16A34A]">
                ₦ {investor.total_invested}
              </div>
              <div className="w-1/4 text-right">
                <span className=" text-sm">{investments.campaignType}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center mx-auto h-full">
          <h2 className="font-bold text-black text-[1rem]">
            You have no investors
          </h2>
        </div>
      )}
    </div>
  );
};

export default InvestorComponent;
