"use client";
import React, { useState } from "react";
import StatCard from "@/components/cards/StatCard";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import Image, { StaticImageData } from "next/image"; // Import StaticImageData

interface WalletCardsProps {
  walletAddress: string;
  imageSrc: StaticImageData; // Change the type to StaticImageData
}

const WalletCards: React.FC<WalletCardsProps> = ({
  walletAddress,
  imageSrc,
}) => {
  const [showAddress, setShowAddress] = useState(true);

  const handleToggleAddress = () => {
    setShowAddress(!showAddress);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
  };

  return (
    <div className="w-full mt-10 md:max-w-6xl md:m-auto md:mt-9 p-5">
      <StatCard>
        <div className="flex items-center justify-between p-3 text-white md:h-[150px] md:justify-around">
          <div className="">
            <h2 className="font-medium text-[1rem] md:text-[1.3rem]">Wallet</h2>
            <div className="flex gap-2 md:gap-5">
              <span className="text-[1rem] font-medium md:text-[1.5rem]">
                {showAddress ? walletAddress : "***********"}
              </span>
              <span onClick={handleToggleAddress}>
                {showAddress ? (
                  <div className="md:text-[2rem]">
                    <IoEyeOutline />
                  </div>
                ) : (
                  <div className="md:text-[2rem]">
                    <FaRegEyeSlash />
                  </div>
                )}
              </span>

              <span onClick={handleCopyAddress}>
                <div className="md:text-[2rem]">
                  <FaRegCopy />
                </div>
              </span>
            </div>
          </div>
          <div className="bg-[#F3FFDE] p-2 rounded-full">
            <Image src={imageSrc} alt="avatar" width={30} height={30} />
          </div>
        </div>
      </StatCard>
    </div>
  );
};

export default WalletCards;
