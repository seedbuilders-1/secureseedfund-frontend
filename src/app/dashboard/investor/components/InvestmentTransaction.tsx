import React from "react";

const InvesmentTransaction = () => {
  const investors = [
    {
      date: "Tuesday 12th March, 2023",
      type: "Deposit",
      amount: "$30,000",
      status: "Completed",
    },
    {
      date: "Tuesday 12th March, 2023",
      type: "Deposit",
      amount: "$30,000",
      status: "Completed",
    },
    {
      date: "Tuesday 12th March, 2023",
      type: "Deposit",
      amount: "$30,000",
      status: "Completed",
    },
  ];

  return (
    <div className="border border-[#1F9347] w-full py-4 px-4 rounded-md h-full">
      {investors.length ? (
        <div className="w-full">
          <div className="flex flex-wrap mb-3 text-gray-500 text-xs md:text-sm font-medium">
            <div className="w-1/4 text-left md:text-center">Date</div>
            <div className="w-1/4 text-left md:text-center">Type</div>
            <div className="w-1/4 text-left md:text-center">Amount</div>
            <div className="w-1/4 text-left md:text-center">Status</div>
          </div>
          {investors.map((investor, index) => (
            <div
              key={index}
              className="flex flex-wrap items-center py-3 border-b border-[#F3EFEF] last:border-b-0"
            >
              <div className="w-1/4 text-left md:text-center text-xs md:text-sm">
                {investor.date}
              </div>
              <div className="w-1/4 text-left md:text-center text-xs md:text-sm">
                {investor.type}
              </div>
              <div className="w-1/4 text-left md:text-center text-xs md:text-sm font-medium text-[#16A34A]">
                {investor.amount}
              </div>
              <div className="w-1/4 text-left md:text-center text-xs md:text-sm">
                <span className="bg-[#CEECDB] text-[#16A34A] p-[5px] rounded-full">
                  {investor.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <h2 className="font-bold text-black text-[1rem] md:text-sm">
            You have no transactions
          </h2>
        </div>
      )}
    </div>
  );
};

export default InvesmentTransaction;
