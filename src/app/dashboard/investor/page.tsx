"use client";
import React from "react";
import TransactionHistory from "../../../components/wallet/TranscationHistory";
import Investment from "./components/Investment";
const page = () => {
  return (
    <div>
      {/* <div className="flex flex-col">
        <div className=" w-full h-full border border-[#0F8B3A] rounded-[0.6rem] px-4 py-4 mt-[2rem] md:w-[600px] md:m-auto md:mt-10 ">
          <h2 className="font-normal text-[0.8rem] text-center">
            Cash Availabler
          </h2>
          <p className="text-center text-[#0F8B3A] text-[1.2rem] font-semibold">
            {" "}
            $2, 000, 0000
          </p>

          <div className="flex justify-between gap-3 mt-5">
            <div className=" flex  justify-center items-center gap-2 w-full h-full border border-[#0F8B3A] rounded-[0.6rem] px-1 py-1">
              <span className="bg-[#0F8B3A] p-[8px] rounded-full text-[#fff]">
                {" "}
                <AiOutlineMinus />
              </span>
              <button> Withdraw</button>
            </div>

            <div className=" flex  justify-center items-center gap-2 w-full h-full border border-[#0F8B3A] rounded-[0.6rem] px-1 py-1">
              <span className="bg-[#0F8B3A] p-[8px] rounded-full text-[#fff]">
                {" "}
                <GoPlus />
              </span>
              <button> Withdraw</button>
            </div>
          </div>
        </div>
        <div className="mt-3 flex  w-full items-center  justify-around md:w-[600px] md:m-auto md:mt-5 ">
          <div className="flex gap-2 items-center">
            <div className="bg-[#241A3F] p-2 h-[15px] w-[19px] rounded-md"></div>
            <div className="flex flex-col">
              <p className="text-[11px] md:text-[15px]">Widthdrawn:</p>
              <h3 className="text-[#0F8B3A] text-[14px] md:text-[18px]">
                $100,000
              </h3>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-[#0F8B3A] p-2 h-[15px] w-[19px] rounded-md"></div>
            <div className="flex flex-col">
              <p className="text-[11px] md:text-[15px]">Total Received:</p>
              <h3 className="text-[#0F8B3A] text-[14px] md:text-[18px]">
                $600,000
              </h3>
            </div>
          </div>
        </div>
      </div> */}

      <div className="mt-[2rem] md:max-w-6xl md:m-auto md:mt-10 p-5">
        <h2 className="text-[1rem] font-bold mb-[1rem]">Investment</h2>
        <Investment />
      </div>

      <div className="mt-[2rem] md:max-w-6xl md:m-auto md:mt-10 p-5">
        <h2 className="text-[1rem] font-bold mb-[1rem]">
          Top performing invested start-up of the week
        </h2>
        <Investment />
      </div>

      <div className="mt-[2rem] md:max-w-6xl md:m-auto md:mt-10 p-5">
        <h2 className="text-[1rem] font-bold mb-[1rem]">Transaction History</h2>
        <TransactionHistory />
      </div>
    </div>
  );
};

export default page;
