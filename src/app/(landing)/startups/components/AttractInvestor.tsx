import React from "react";
import Image from "next/image";
import AttractImage from "@/assets/iconspng/attract.png";
import { Button } from "@/components/ui/button";
const AttractInvestor = () => {
  return (
    <div className="flex items-center justify-center flex-col md:flex-row mt-[3rem] px-[3rem]">
      <Image src={AttractImage} alt="" />
      <div className="space-y-3">
        <h1 className="font-bold text-3xl md:text-[2.4rem] text-center md:text-left mt-[1rem]">
          <span>
            Ready to{" "}
            <span className="text-[#0BA53C] text-3xl md:text-[2.4rem]">
              {" "}
              secure
            </span>{" "}
            that seed fund?{" "}
          </span>{" "}
        </h1>
        <p className="text-gray-600  font-medium">
          Attract several investors today
        </p>
        <div className="flex items-center mt-[1rem] h-11 justify-between w-full md:w-[80%]  gap-4 px-2 py-2  text-black bg-white border border-neutral-300 rounded-md shadow-sm hover:shadow-md transition-all duration-300">
          <input
            type="email"
            placeholder="Your email address"
            className="w-[70%]  text-sm bg-transparent focus:border-indigo-500 outline-none transition-colors duration-300"
            aria-label="Email address"
          />
          <Button
            variant="default"
            className="bg-gradient-to-r w-[30%] py-3 h-9 rounded-md from-[#241A3F] to-[#362d4f] text-white hover:from-[#2f2355] hover:to-[#453a61] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AttractInvestor;
