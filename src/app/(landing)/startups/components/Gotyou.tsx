import React from "react";
import Image from "next/image";
import GotImage from "@/assets/iconspng/gotyou.png";
const Gotyou = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 mt-[2rem]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="max-w-xl">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center  mb-4">
            We Got You <span className="text-[#0BA53C]">Covered</span>
          </h1>
          <p className="text-base md:text-lg text-[#2B2B2B] font-medium text-center ">
            All startups and investors are verified, vetted, accessed, and
            monitored. Once your company is accredited and you pass our due
            diligence then you can secure your seed fund.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image
            src={GotImage}
            alt="Illustration of coverage"
            layout="responsive"
            className=" "
          />
        </div>
      </div>
    </div>
  );
};

export default Gotyou;
