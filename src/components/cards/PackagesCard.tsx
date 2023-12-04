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
      className="p-6 rounded-lg"
    >
      <p>{title}</p>
      <p className="text-sm text-[#334155]">{details}</p>
    </div>
  );
};

export default PackagesCard;
