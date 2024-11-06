import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  showLink: boolean;
  linkTitle: string;
}
const WarningComponent = ({ title, showLink, linkTitle }: Props) => {
  return (
    <div className="flex justify-center items-center my-6 flex-wrap">
      <div className="border-[3px] p-3 md:p-7 border-solid w-full md:mx-32 flex gap-5 items-center text-[#fff] border-[#0F8B3A] bg-[#0F8B3A]  rounded-lg mb-4">
        <Image
          src="/assets/icons/InfoIcon.svg"
          alt="avatars"
          width={30}
          height={30}
        />
        <p className="text-[0.9rem] md:text-[1.1rem]">
          {title}
          {showLink && (
            <Link
              className="  text-[0.8rem] ml-4 border border-[#CDEED3] bg-[#CDEED3]  text-[#0F8B3A] p-1 md:p-2 rounded-md"
              href={"/dashboard/startup/pricing"}
            >
              {linkTitle}
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default WarningComponent;
