"use client";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import useProfile from "@/hooks/profile/useProfile";

const ChooseOrg = () => {
  const [selectOrg, setSelectOrg] = useState("startup");
  const router = useRouter();
  const { userProfile } = useProfile();
  const handleChange = (value: string) => {
    setSelectOrg(value);
  };
  const handleNavigate = () => {
    if (selectOrg === "startup") {
      router.push("/startuponboarding");
    } else if (selectOrg === "investor") {
      router.push("/onboarding");
    }
  };
  return (
    <div className="flex flex-col w-full  px-10 mx-auto fixed top-0 right-0 h-full bg-white z-40">
      <header className="flex items-center justify-between py-4">
        <Image
          src="/assets/icons/logo_variant_1.svg"
          alt="logo"
          width={50}
          height={50}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarFallback className="bg-slate-100">VW</AvatarFallback>
              </Avatar>
              <ChevronDown size={16} />
            </div>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </header>

      <main className="mt-10 mx-auto flex flex-col justify-center text-center">
        <h2 className="text-[#334155] text-[1.9rem]">
          Create a new business account
        </h2>
        <p className="text-[#475569] mt-2">
          What type of organisation do you first want to create
        </p>
        <span className="text-[#475569] ">
          <strong>Note</strong> You can create multiple organisations
        </span>
        <div className="mt-4">
          <RadioGroup.Root value={selectOrg} onValueChange={handleChange}>
            <div
              className={`grid gap-4 mt-4 mx-auto ${
                userProfile?.investor.id ? "grid-cols-1" : "grid-cols-2"
              }`}
            >
              <RadioGroup.Item value="startup">
                <div
                  className={`max-w-[319px]  w-full h-full relative px-8 py-5 border-[2px] rounded-lg cursor-pointer ${
                    selectOrg === "startup"
                      ? "border-primaryMain"
                      : "border-slate-300"
                  }`}
                >
                  <div>
                    <Image
                      src="/assets/images/startup.png"
                      alt="logo"
                      width={35}
                      className="mx-auto"
                      height={35}
                    />
                    <h2 className="text-slate-700 text-[20px] mt-2  font-semibold">
                      Startup
                    </h2>
                    <p className="text-slate-500  text-[14px]">
                      Find investors, receive investments and raise funds for
                      your company
                    </p>
                  </div>
                </div>
              </RadioGroup.Item>
              {userProfile?.investor.id ? (
                ""
              ) : (
                <RadioGroup.Item value="investor">
                  <div
                    className={`max-w-[319px] w-full h-full relative px-8 py-4 border-[2px] rounded-lg cursor-pointer ${
                      selectOrg === "investor"
                        ? "border-primaryMain"
                        : "border-slate-300"
                    }`}
                  >
                    <div>
                      <Image
                        src="/assets/images/investoricon.png"
                        alt="logo"
                        width={35}
                        height={35}
                        className="mx-auto"
                      />
                      <h2 className="text-slate-700 text-[20px] mt-2 font-semibold">
                        Investor
                      </h2>
                      <p className="text-slate-500  text-[14px]">
                        Find startups, make investments and grow your portfolio
                      </p>
                    </div>
                  </div>
                </RadioGroup.Item>
              )}
            </div>
          </RadioGroup.Root>
        </div>
        <Button
          className="rounded-md w-[30%] py-3 mx-auto mt-8"
          size="sm"
          onClick={() => handleNavigate()}
        >
          {" "}
          Next
        </Button>
      </main>
    </div>
  );
};

export default ChooseOrg;
