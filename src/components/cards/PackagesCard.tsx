import React, { FC } from "react";

interface PackagesCardProps {
  title: string;
  details: string;
  backgroundColor: string;
}

const PackagesCard: FC<PackagesCardProps> = ({
  title,
  details,
  backgroundColor,
}) => {
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className="p-6 rounded-2xl h-[183px]"
    >
      <p className="pt-4 pb-2 font-semibold text-[#334155]">{title}</p>
      <p className="text-sm text-[#334155] leading-6">{details}</p>
    </div>
  );
};

export default PackagesCard;
