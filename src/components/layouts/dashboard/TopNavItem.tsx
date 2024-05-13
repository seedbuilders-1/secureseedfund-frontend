import React, { ComponentType } from "react";

interface Props {
  label: string;
  active: boolean;
  Icon:ComponentType<{}>
}

const TopNavItem = ({ label, active, Icon }: Props) => {
  return (
    <div
      className={` flex items-center justify-center rounded-[0.3125rem]  font-[500] px-3 py-2 text-[.875rem] cursor-pointer ${
        active && "border bg-[#F3FFDE] text-[#6C8C3C]"
      }`}
    >

    <div className="w-[19px] h-[19px]"><Icon />  </div>{label}
    </div>
  );
};

export default TopNavItem;
