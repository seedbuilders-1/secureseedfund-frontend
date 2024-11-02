"use client";
import InvestorImage from "@/assets/iconspng/investorlanding.png";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="">
      <div className="flex flex-col md:flex-row items-center justify-center bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(146,227,169,0.53)_100%)] py-[1rem] px-[2rem] md:px-[4rem] md:rounded-xl md:m-[2rem]">
        <div className=" w-full">
          <h1 className="font-medium text-3xl md:text-[3rem] text-center md:text-left">
            <span>
              Securely invest{" "}
              <span className="text-[#0BA53C] text-3xl md:text-[3rem]">
                invest
              </span>
              <br /> in startups here
            </span>
          </h1>
          <p className="text-sm md:text-lg md:text-left mt-6 text-center">
            <span className="text-[#2B2B2B] font-normal text-md md:text-[1.2rem]">
              Let us help you verify, vet, access and monitor your{" "}
              <br className="hidden md:block" /> startup investments portfolios
              in one dashboard across the globe.
            </span>{" "}
            <br />
            <strong className="font-semibold text-md">
              Invest as little as $1000
            </strong>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mt-[1rem] leading-7">
          <Image src={InvestorImage} alt="" />
          <strong className="font-semibold text-[1.2rem] text-center mt-[1rem]">
            We are in the business of developing products for the building and
            construction eco system.
          </strong>
          <Button className="bg-dark mt-3"> View opportunity</Button>
        </div>
      </div>

      <div className="flex gap-8 px-6 mt-12 items-start">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start w-full">
            <h2 className="text-[1.6rem] font-medium">Overview</h2>
            <hr className="mt-2 mb-4 w-full border-2 border-[#00A539]  max-w-[300px]" />
          </div>
          <Select>
            <SelectTrigger className="mt-2 text-slate-900 border border-slate-300 h-[44px] max-w-[300px]">
              <SelectValue placeholder="Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Industry</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start w-full">
            <h2 className="text-[1.6rem] font-normal text-[#2B2B2B4D]">News</h2>
          </div>
          <Select>
            <SelectTrigger className=" text-slate-900 border border-slate-300 h-[44px] max-w-[300px] mt-[2.2rem]">
              <SelectValue placeholder="Sort by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>sort by </SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
