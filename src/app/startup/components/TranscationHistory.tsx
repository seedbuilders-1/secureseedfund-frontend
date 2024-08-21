import React from "react";

const TranscationHistory = () => {
  const investors = [
    {
      date: "Tuesday 12th March, 2023",
      type: "Cutting Grass",
      amount: "$30,000",
      status: "Completed",
    },
    {
      date: "Tuesday 12th March, 2023",
      type: "Cutting Grass",
      amount: "$30,000",
      status: "Completed",
    },
    {
      date: "Tuesday 12th March, 2023",
      type: "Cutting Grass",
      amount: "$30,000",
      status: "Completed",
    },
  ];

  return (
    <div className="border border-[#1F9347] w-full py-4 px-4 rounded-md h-full">
      {investors.length ? (
        <div className="w-full">
          <div className="flex justify-between items-center mb-3 text-gray-500 text-sm font-medium">
            <div className="w-1/4">Date</div>
            <div className="w-1/4 text-right">Type</div>
            <div className="w-1/4 text-right">Amount</div>
            <div className="w-1/4 text-right">Status</div>
          </div>
          {investors.map((investor, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-3 border-b border-[#F3EFEF] last:border-b-0"
            >
              <div className="w-1/4">
                <h2 className="text-[#2B2B2B] font-normal text-[13px]">
                  {investor.date}
                </h2>
              </div>
              <div className="w-1/4 text-right">
                <p className="text-[#2B2B2B] text-sm">{investor.type}</p>
              </div>
              <div className="w-1/4 text-right font-medium text-[#16A34A] text-[15px]">
                {investor.amount}
              </div>
              <div className="w-1/4 text-right ">
                <span className="text-sm bg-[#CEECDB] text-[#16A34A] p-[5px] rounded-full">
                  {investor.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <h2 className="font-bold text-black text-[1rem]">
            You have no investors
          </h2>
        </div>
      )}
    </div>
  );
};

export default TranscationHistory;
