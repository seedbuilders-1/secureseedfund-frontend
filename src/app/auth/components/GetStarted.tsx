"use client";
import Image from "next/image";
import React from "react";
import startupIcon from "../../../../public/assets/icons/Startup.png";
import investorIcon from "../../../../public/assets/icons/Investor.png";
import institutionIcon from "../../../../public/assets/icons/Building.png";
import authLogo from "../../../../public/assets/images/authLogo.png";

interface ModalProps {
  onCardClick: (text: string) => void;
}

const GetStarted: React.FC<ModalProps> = ({ onCardClick }) => {
  return (
    <>
      <div className=" bg-[white] fixed inset-0 z-50 h-full overflow-y-auto">
        <div className="min-h-full flex flex-col items-center justify-center">
          <Image src={authLogo} alt="logo" width={150} height={150} />
          <div className="p-3">
            <h3 className="font-bold text-center">Get Started</h3>
            <p>How would you like to SecureSeedFund?</p>
          </div>
          <div className="lg:flex pt-10 space-y-10 lg:space-y-0 lg:space-x-10 cursor-pointer">
            <div
              onClick={() => onCardClick("startup")}
              className="border-[#D6CFCF80] border-[3px] border-solid w-[250px] lg:w-[300px] rounded-md"
            >
              <div className="h-full w-full rounded-[inherit] bg-gradient-to-b from-[#F1F1F147] to-[#51476FE0] hover:opacity-[0.9] flex items-center justify-center shadow-3xl cursor-pointer">
                <div className="text-center p-10">
                  <div className="flex justify-center py-1">
                    <Image src={startupIcon} alt="icon" />
                  </div>
                  <h2 className="py-1 font-bold text-lg">As a StartUp</h2>
                  <p className="py-1">
                    Select if you are a start-up seeking for funding
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={() => onCardClick("investor")}
              className="border-[#D6CFCF80] border-[3px] border-solid w-[250px] lg:w-[300px] rounded-md"
            >
              <div className="h-full w-full rounded-[inherit] bg-gradient-to-b from-[#F1F1F147] to-[#51476FE0] hover:opacity-[0.9] flex items-center justify-center shadow-3xl cursor-pointer">
                <div className="text-center p-10">
                  <div className="flex justify-center py-1">
                    <Image src={investorIcon} alt="icon" />
                  </div>
                  <h2 className="py-1 font-bold text-lg">As an investor</h2>
                  <p className="py-1">
                    Select if you are looking to invest in a start-up
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={() => onCardClick("institution")}
              className="border-[#D6CFCF80] border-[3px] border-solid w-[250px] lg:w-[300px] rounded-md"
            >
              <div className="h-full w-full rounded-[inherit] bg-gradient-to-b from-[#F1F1F147] to-[#51476FE0] hover:opacity-[0.9] flex items-center justify-center shadow-3xl cursor-pointer">
                <div className="text-center p-10">
                  <div className="flex justify-center py-1">
                    <Image src={institutionIcon} alt="icon" />
                  </div>
                  <h2 className="py-1 font-bold text-lg">As an institution</h2>
                  <p className="py-1">Select if you are an institution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
