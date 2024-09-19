import React from "react";
import { Button } from "@/components/ui/button";
import invest from "@/assets/iconspng/whyInvest.png";
import Image from "next/image";
import WhyInvestCards from "./WhyInvestCards";
import AngelInvesting from "./AngelInvesting";
import FrequentlyAskedQuestions from "./FrequentlyAsk";

const WhyInvest = () => {
  return (
    <section className="px-4 ">
      <div className="flex items-center justify-center flex-col md:flex-row  md:gap-[2rem] md:h-[300px]  border-2 border-[#000] md:border-[#0000004D] mb-3 rounded-[16px] text-center px-3 py-3">
        <div className="md:flex md:flex-col items-center justify-center">
          <h3 className="text-xl md:text-[30px] font-medium md:leading-10 md:text-left">
            Startups receive funding in a few days and{" "}
            <br className="hidden md:block" /> investors invest in a few days
          </h3>
          <p className="text-sm md:text-[22px] font-500 mt-3 mb-2 md:text-left">
            The best time to invest in Startups is early.
          </p>
          <Button className="bg-dark text-white md:bg-dark mt-3 mb-2 md:w-[300px]">
            Explore
          </Button>
        </div>
        <Image src={invest} alt="Investment graphic" className="md:w-[400px]" />
      </div>

      <div className="text-center mt-12  mb-6 md:flex  md:gap-[10rem] justify-center">
        <div className="md:mt-[30px]">
          <h3 className="text-xl md:text-[30px] font-medium">
            Why Invest in Secure Seedfund
          </h3>
          <p className="text-[12px] md:text-[15px] font-500 md:mt-4 md:max-w-[400px]">
            Investing through Secure SeedFund provides you with unparalleled
            access to vetted startups, secure investment processes, and
            comprehensive monitoring tools.
          </p>
        </div>

        <WhyInvestCards />
      </div>
      <AngelInvesting />

      <FrequentlyAskedQuestions />
    </section>
  );
};

export default WhyInvest;
