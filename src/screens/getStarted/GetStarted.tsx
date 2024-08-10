"use client";
import Image from "next/image";
import React from "react";
import startupIcon from "../../../public/assets/icons/Startup.png";
import investorIcon from "../../../public/assets/icons/Investor.png";
import institutionIcon from "../../../public/assets/icons/Building.png";

interface ModalProps {
  onCardClick: (text: string) => void;
}

const GetStarted: React.FC<ModalProps> = ({ onCardClick }) => {
  return (
    <>
      <div className=" bg-[white] absolute top-0 left-0 w-full h-full">
        <div className="h-full flex flex-col items-center justify-center">
          <div className="p-3">
            <h3 className="font-bold text-center">Get Started</h3>
            <p>How would you like to SecureSeedFund?</p>
          </div>
          <div className="md:flex pt-10 space-y-10 md:space-y-0 md:space-x-10 cursor-pointer">
            <div
              onClick={() => onCardClick("startup")}
              className="rounded-md bg-gradient-to-b from-[#F1F1F147] to-[#51476FE0] hover:opacity-[0.9] flex items-center justify-center shadow-lg max-w-[250px] md:max-w-[300px]"
            >
              <div className="text-center p-10">
                <div className="flex justify-center py-1">
                  <Image src={startupIcon} alt="icon" />
                </div>
                <h2 className="py-1">As a StartUp</h2>
                <p className="py-1">
                  Select if you are a start-up seeking for funding
                </p>
              </div>
            </div>
            <div
              onClick={() => onCardClick("investor")}
              className="rounded-md bg-gradient-to-b from-[#F1F1F147] to-[#51476FE0] hover:opacity-[0.9] flex items-center justify-center shadow-lg max-w-[250px] md:max-w-[300px] cursor-pointer"
            >
              <div className="text-center p-10">
                <div className="flex justify-center py-1">
                  <Image src={investorIcon} alt="icon" />
                </div>
                <h2 className="py-1">As an investor</h2>
                <p className="py-1">
                  Select if you are looking to invest in a start-up
                </p>
              </div>
            </div>
            <div
              onClick={() => onCardClick("institution")}
              className="rounded-md bg-gradient-to-b hover:opacity-[0.9] from-[#F1F1F147] to-[#51476FE0] flex items-center justify-center shadow-lg w-[250px] md:w-[300px] cursor-pointer"
            >
              <div className="text-center p-10">
                <div className="flex justify-center py-1">
                  <Image src={institutionIcon} alt="icon" />
                </div>
                <h2 className="py-1">As an institution</h2>
                <p className="py-1">Select if you are an institution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
