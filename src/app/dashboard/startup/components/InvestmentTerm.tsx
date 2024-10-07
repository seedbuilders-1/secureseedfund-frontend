import React from "react";

type Props = {
  text: string;
  value: string;
  icon: React.ReactElement;
};

export const FundingCard = ({ text, value, icon }: Props) => {
  return (
    <div className="flex items-center justify-between bg-green-100 p-4 rounded-lg w-64 shadow-md">
      <div>
        <p className="text-gray-700 text-sm">{text}</p>
        <p className="text-green-600 text-xl font-bold">{value}</p>
      </div>
      {icon}
    </div>
  );
};
