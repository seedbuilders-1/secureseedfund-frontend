"use client";
"use client";
import React from "react";

const AngelInvesting = () => {
  return (
    <section>
      <div className="text-center">
        <h1 className="font-semibold text-2xl leading-8 md:text-3xl">
          New to Startup and <span className="text-green-600">Angel</span>{" "}
          <br className="block md:hidden" /> Investing
        </h1>
        <p className="text-sm md:text-[15x] font-normal md:mt-[20px]">
          It is pretty simple, here is how to get started.
        </p>
      </div>

      <div className="mt-6 px-4">
        <div className="md:flex flex-col md:flex-row items-center md:items-start">
          <div className="flex  md:flex-col items-center  md:items-start md:mr-4 mb-6 md:mb-0 S">
            <button className="bg-[#93F3A5] text-[rgb(0,0,0)] font-medium rounded-full px-4 py-2 text-lg">
              1
            </button>
            <div className="px-4 py-2 ">
              <h3 className="font-medium text-[15px] mt-2 text-center md:text-left ml-12 md:ml-0 ">
                Browse startup rounds
              </h3>
            </div>
          </div>
          <div className="vertical-line md:hidden"></div>
          <div className="flex md:flex-col items-center md:items-start mb-6 md:mb-0">
            <button className="bg-[#c6c0c04d] text-[#000] font-medium rounded-full px-4 py-2 text-lg">
              2
            </button>
            <div className="px-4 py-2">
              <h3 className="font-medium text-[15px] mt-2 text-center md:text-left">
                Research the startup and do your homework
              </h3>
              <p className="text-[13px] font-normal mt-2 text-center md:text-left">
                Carefully review the startup’s financials, pitch, legal
                documentation, and what people say about them.
              </p>
            </div>
          </div>
          <div className="vertical-line md:hidden"></div>
          <div className="flex md:flex-col items-center md:items-start mb-6 md:mb-0">
            <button className="bg-[#c6c0c04d] text-[#000] font-medium rounded-full px-4 py-2 text-lg">
              3
            </button>
            <div className="px-4 py-2">
              <h3 className="font-medium text-[15px] mt-2 text-center md:text-left">
                Invest in what you understand and are interested in
              </h3>
              <p className="text-[13px] font-normal mt-2 text-center md:text-left">
                Leverage the knowledge of industries that you understand and
                ones you have personal interest in.
              </p>
            </div>
          </div>
          <div className="vertical-line md:hidden"></div>
          <div className="flex md:flex-col  items-center md:items-start ">
            <button className="bg-[#c6c0c04d] text-[#000] font-medium rounded-full px-4 py-2 text-lg">
              4
            </button>
            <div className="px-4 py-2">
              <h3 className="font-medium text-[15px] mt-2 text-center md:text-left">
                Diversify your investments
              </h3>
              <p className="text-[13px] font-normal mt-2 text-center md:text-left">
                Invest in a number of startups to spread out your risks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .vertical-line {
          width: 1px;
          height: 100%;
          background-color: #000;
          margin: 0 1rem;
        }
      `}</style>
    </section>
  );
};

export default AngelInvesting;
