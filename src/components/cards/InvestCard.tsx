import React from "react";
import Image from "next/image";

interface InvestCardProps {
  title: string;
  detail: string;
}

const InvestCard: React.FC<InvestCardProps> = ({
  title,
  detail,
}: InvestCardProps) => {
  return (
    <div className="mt-4">
      <div className="flex bg-[#F1F5F9] mx-28 justify-between items-center p-12 rounded-lg">
        <div className="w-9/12">
          <p className="text-[#334155] text-2xl font-bold mb-4">{title}</p>
          <p className="text-sm text-[#334155] text-justify leading-6">
            {detail}
          </p>
        </div>
        <div className="">
          <Image
            src="/assets/images/pitch-deck.png"
            alt=""
            width={300}
            height={210}
          />
        </div>
      </div>
    </div>
  );
};

export default InvestCard;
