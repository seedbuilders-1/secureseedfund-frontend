import React from "react";
import DangoteLogo from '@/assets/iconspng/dangote.png'; 

interface Investor {
  CompanyLogo: string; 
  CompanyName: string;
  Type: string;
  amount: string;
  FoundingGoal: string;
  Progress: string;
}

const Investment = () => {
  const investors: Investor[] = [
    {
      CompanyLogo: DangoteLogo.src, 
      CompanyName: "Cutting Grass",
      Type: "Completed",
      amount: "$30,000",
      FoundingGoal: "$20,000",
      Progress: "60%"
    },
    {
      CompanyLogo: DangoteLogo.src, 
      CompanyName: "Cutting Grass",
      Type: "Completed",
      amount: "$30,000",
      FoundingGoal: "$20,000",
      Progress: "60%"
    },
    {
      CompanyLogo: DangoteLogo.src, 
      CompanyName: "Cutting Grass",
      Type: "Completed",
      amount: "$30,000",
      FoundingGoal: "$20,000",
      Progress: "60%"
    },
  ];

  return (
    <div className="border border-[#1F9347] w-full py-4 px-4 rounded-md h-full">
      {investors.length ? (
        <div className="w-full overflow-x-auto"> {/* Make the table horizontally scrollable */}
          <div className="min-w-full">
            <div className="flex flex-wrap mb-3 text-gray-500 text-xs md:text-sm font-medium">
              <div className="w-1/6 text-center md:text-left">Company Logo</div>
              <div className="w-1/6 text-center md:text-left">Company Name</div>
              <div className="w-1/6 text-center md:text-left">Type</div>
              <div className="w-1/6 text-center md:text-left">Amount</div>
              <div className="w-1/6 text-center md:text-left">Funding Goal</div>
              <div className="w-1/6 text-center md:text-left">Progress</div>
            </div>
            {investors.map((investor, index) => (
              <div
                key={index}
                className="flex flex-wrap items-center py-3 border-b border-[#F3EFEF] last:border-b-0"
              >
                <div className="w-1/6 flex items-center justify-center md:justify-start">
                  <img
                    src={investor.CompanyLogo}
                    alt={investor.CompanyName}
                    className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-cover rounded-full" // Adjust sizes for different screen sizes
                  />
                </div>
                <div className="w-1/6 text-center md:text-left text-xs md:text-sm">
                  {investor.CompanyName}
                </div>
                <div className="w-1/6 text-center md:text-left text-xs md:text-sm">
                  {investor.Type}
                </div>
                <div className="w-1/6 text-center md:text-left text-xs md:text-sm font-medium text-[#16A34A]">
                  {investor.amount}
                </div>
                <div className="w-1/6 text-center md:text-left text-xs md:text-sm">
                  {investor.FoundingGoal}
                </div>
                <div className="w-1/6 text-center md:text-left text-xs md:text-sm">
                  <span className="bg-[#CEECDB] text-[#16A34A] p-[5px] rounded-full">
                    {investor.Progress}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <h2 className="font-bold text-black text-[1rem] md:text-sm">
            You have no investors
          </h2>
        </div>
      )}
    </div>
  );
};

export default Investment;
