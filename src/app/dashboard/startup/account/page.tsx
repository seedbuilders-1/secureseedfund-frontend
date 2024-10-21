"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FiPlus } from "react-icons/fi";
import useAccount from "./hooks/useAccount";
import useUserAuth from "@/hooks/auth/useAuth";
import AccountSettings from "./components/AccountSettings";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
const Account = () => {
  const router = useRouter();
  const { user } = useUserAuth();
  const creatorId = user?.userId as string;
  const { accountInformation, loadingAccountInformation } =
    useAccount(creatorId);

  if (loadingAccountInformation) {
    return <LoadingSpinner className="mt-[10rem]" />;
  }
  return (
    <>
      {accountInformation?.is_completed_info ? (
        <AccountSettings accountInformation={accountInformation} />
      ) : (
        <div className="w-[90%] flex flex-col  mx-auto h-[100vh] bg-white mt-[4rem]">
          <div className="bg-[#0F8B3A] rounded-2xl  w-full py-[2rem] px-5  flex-col sm:flex-row justify-between items-center space-y-3">
            <div>
              <p className="text-white text-[14px]">
                We have five quick sections about yourself and your company, so
                we can determine if you’re a good fit for secureseed funding
              </p>
              <div className="flex items-center justify-between  w-full">
                <div
                  onClick={() =>
                    router.push(`/dashboard/startup/account/accountform`)
                  }
                  className="flex rounded-[30px] font-[500] px-5 py-3 mt-4 lg:py-3 lg:mt-5  text-[.875rem] cursor-pointer bg-[#241A3F] text-[white] justify-between"
                >
                  <FiPlus className="w-[19px] h-[19px]" />
                  <h2 className="text-[white] font-normal w-full text-center">
                    Click to get started
                  </h2>
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
          </div>
        </div>
      )}
    </>
  );
};

export default Account;
