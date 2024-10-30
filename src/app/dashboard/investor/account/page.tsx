"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FiPlus } from "react-icons/fi";
import useAccount from "./hooks/useAccount";
import useUserAuth from "@/hooks/auth/useAuth";
import AccountSettings from "./components/AccountSettings";
import useProfile from "@/hooks/profile/useProfile";

const AccountPage = () => {
  const router = useRouter();
  const { user } = useUserAuth();
  const creatorId = user?.userId as string;
  const { investorInformation } = useAccount(creatorId);
  console.log(investorInformation);
  const { userProfile } = useProfile();

  return (
    <>
      {investorInformation?.is_completed_info ? (
        <AccountSettings accountInformation={investorInformation} />
      ) : (
        <div className="w-[100%] md:w-[90%] flex flex-col h-[100vh] bg-white mt-[4rem] mx-auto">
          <div className="bg-[#0F8B3A] rounded-md md:rounded-2xl px-2 mx-auto gap-[5px] w-full py-[2rem] md:px-5 flex flex-row justify-between items-center md:space-y-3">
            <div className="flex flex-col md:block">
              <h2 className="lg:hidden text-white text-[20px] font-semi-bold">
                Your journey to securing your seedfund starts here.
              </h2>
              <p className="text-white text-[14px]">
                We have five quick sections about your company, so we can
                determine if you’re a good fit for secureseed funding
              </p>
              <div
                onClick={() =>
                  router.push(`/dashboard/investor/account/accountform`)
                }
                className="flex rounded-[30px] w-[200px] font-[500] px-5 py-3 mt-4 lg:py-3 lg:mt-5  text-[.875rem] cursor-pointer bg-[#241A3F] text-[white] justify-between"
              >
                <FiPlus className="w-[19px] h-[19px] hidden md:block" />
                <h2 className="text-[white] font-normal w-full text-center">
                  <span className="hidden md:inline-block">Click to</span>{" "}
                  <span>Get Started</span>
                </h2>
              </div>
            </div>
            <Image
              src="/assets/icons/profileIcon.svg"
              alt="icon"
              width={203}
              height={203}
              className="object-contain w-20 h-20 md:w-12 md:h-12"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AccountPage;
