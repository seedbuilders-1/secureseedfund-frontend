import React from "react";
import Image from "next/image";
import Investor1 from "@/assets/iconspng/investor1.png";
import Investor2 from "@/assets/iconspng/investor2.png";
import Investor3 from "@/assets/iconspng/invest33.png";
import Investor4 from "@/assets/iconspng/investor4.png";

const StepstoInvest = () => {
  return (
    <section>
      <h2 className="font-bold text-3xl md:text-4xl text-center">
        {" "}
        How To <span className="text-[#0BA53C]"> Invest</span>
      </h2>
      <div className="mt-[3rem] md:flex items-center justify-between md:px-[8rem]">
        <div className="flex flex-col items-center justify-center gap-[1rem] ">
          <p className="text-[#2B2B2B4D] text-[1rem] ml-[-3rem] font-medium md:ml-[0rem]">
            steps
          </p>
          <div className=" flex items-center justify-center gap-[0.8rem] md:flex-col">
            <Image src={Investor1} alt="Investor 1" width={100} height={100} />
            <h3 className="text-[15px] font-medium">Sign Up</h3>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-[1rem] mt-[2rem]">
          <p className="text-[#2B2B2B4D] text-[1rem] ml-[-3rem] font-medium md:ml-[0rem]">
            steps
          </p>
          <div className=" flex items-center justify-center gap-[0.8rem] md:flex-col">
            <Image src={Investor2} alt="Investor 2" width={100} height={100} />
            <h3 className="text-[15px] font-medium mr-[-5rem]">
              Explore The Startups
            </h3>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-[1rem] mt-[2rem]">
          <p className="text-[#2B2B2B4D] text-[1rem] ml-[-3rem] font-medium md:ml-[0rem]">
            steps
          </p>
          <div className=" flex items-center justify-center gap-[0.8rem] md:flex-col">
            <Image src={Investor3} alt="Investor 3" width={100} height={100} />
            <h3 className="text-[15px] font-medium mr-[-3rem]">
              Securely Fund
            </h3>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-[1rem] mt-[2rem]">
          <p className="text-[#2B2B2B4D] text-[1rem] ml-[-3rem] font-medium ">
            steps
          </p>
          <div className=" flex items-center justify-center gap-[0.8rem] md:flex-col">
            <Image src={Investor4} alt="Investor 4" width={100} height={100} />
            <h3 className="text-[15px] font-medium mr-[-5rem]">
              Review Milestones
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepstoInvest;
