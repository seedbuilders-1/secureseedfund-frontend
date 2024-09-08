"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FiPlus } from "react-icons/fi";

const AccountPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-[90%] flex flex-col  mx-auto h-[100vh] bg-white mt-[4rem]">
        <div className="bg-[#0F8B3A] rounded-2xl  w-full py-[2rem] px-5 flex flex-col sm:flex-row justify-between items-center space-y-3">
          <div>
            <p className="text-white text-[14px]">
              We have five quick sections about your company, so we can
              determine if you’re a good fit for secureseed funding
            </p>
            <div
              onClick={() => router.push(`/investor/account/accountform`)}
              className="flex rounded-[30px] w-[200px] font-[500] px-5 py-1 mt-4 lg:py-3 lg:mt-5  text-[.875rem] cursor-pointer bg-[#241A3F] text-[white] justify-between"
            >
              <FiPlus className="w-[19px] h-[19px]" />
              <h2 className="text-[white] font-normal w-full text-center">
                Click to get started
              </h2>
            </div>
          </div>
          <Image
            src="/assets/icons/profileIcon.svg"
            alt="icon"
            width={203}
            height={203}
            className="object-contain h-12 w-12"
          />
        </div>
      </div>
    </>
  );
};

export default AccountPage;
