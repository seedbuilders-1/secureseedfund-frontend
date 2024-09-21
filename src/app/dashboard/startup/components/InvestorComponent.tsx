import React from "react";

const InvestorComponent = () => {
  const investors = [
    {
      name: "BMW",
      amount: "$34,355",
      type: "Grant",
      date: "Tuesday 12th March, 2023",
    },
    {
      name: "BMW",
      amount: "$34,355",
      type: "Grant",
      date: "Tuesday 12th March, 2023",
    },
    {
      name: "BMW",
      amount: "$34,355",
      type: "Grant",
      date: "Tuesday 12th March, 2023",
    },
  ];

  return (
    <div className="border border-[#1F9347] w-full py-4 px-4 rounded-md h-full">
      {investors.length ? (
        <div className="w-full">
          <div className="flex justify-between items-center mb-4 text-gray-500 text-sm font-medium">
            <div className="w-1/2">Names</div>
            <div className="w-1/4 text-right">Amount</div>
            <div className="w-1/4 text-right">Type</div>
          </div>
          {investors.map((investor, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-3 border-b border-[#F3EFEF] last:border-b-0"
            >
              <div className="w-1/2 flex items-center gap-3">
                <div className="bg-[#1F9347] rounded-full w-[30px] h-[30px]"></div>
                <div>
                  <h2 className="text-[#334155] font-normal">
                    {investor.name}
                  </h2>
                  <p className="text-[#00000033] text-sm">{investor.date}</p>
                </div>
              </div>
              <div className="w-1/4 text-right font-medium text-[#16A34A]">
                {investor.amount}
              </div>
              <div className="w-1/4 text-right">
                <span className=" text-sm">{investor.type}</span>
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

export default InvestorComponent;
