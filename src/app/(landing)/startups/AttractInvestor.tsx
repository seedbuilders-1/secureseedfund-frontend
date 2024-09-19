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
        <div className="flex items-center justify-between w-full max-w-md gap-4 p-3 text-black bg-white border rounded-md hover:bg-gray-100 border-neutral-800">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 text-sm bg-transparent outline-none"
            aria-label="Email address"
          />
          <Button
            variant="default"
            className="bg-[#241A3F] text-white hover:bg-[#362d4f]"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AttractInvestor;
