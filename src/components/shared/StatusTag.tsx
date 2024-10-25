import React from "react";

const getStatusClasses = (status: string) => {
  switch (status) {
    case "FAILED":
      return "bg-[#FFE5E5] text-[#D3180C] border-none";
    case "PAID":
      return "bg-[#CEECDB] text-[#16A34A] border-none";
    case "COMPLETED":
      return "border-[#4cd471] text-[#4cd471] ";
    case "paid":
      return "bg-[#CFF7D3] text-[#4cd471]";
    case "DECLINED":
      return "border-[#fb5e9a] text-[#fb5e9a]";
    case "STARTED":
      return "border-[#2998ec] text-[#2998ec]";
    default:
      return "border-gray-400 text-gray-400";
  }
};
interface StatusTagProps {
  status: string;
}
const StatusTag = ({ status }: StatusTagProps) => (
  <div
    className={`flex w-15 px-4  py-2 justify-center  items-center text-sm rounded-md border ${getStatusClasses(
      status
    )} `}
  >
    {status}
  </div>
);

export default StatusTag;
