"use client";

import React from "react";

const AngelInvesting = () => {
  const steps = [
    { number: 1, title: "Browse startup rounds", description: "" },
    {
      number: 2,
      title: "Research the startup and do your homework",
      description:
        "Carefully review the startup's financials, pitch, legal documentation, and what people say about them.",
    },
    {
      number: 3,
      title: "Invest in what you understand and are interested in",
      description:
        "Leverage the knowledge of industries that you understand and ones you have personal interest in.",
    },
    {
      number: 4,
      title: "Diversify your investments",
      description: "Invest in a number of startups to spread out your risks.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="font-semibold text-2xl leading-8 md:text-3xl">
          New to Startup and <span className="text-green-600">Angel</span>{" "}
          <br className="block md:hidden" /> Investing
        </h1>
        <p className="text-sm md:text-[15px] font-normal mt-4">
          It is pretty simple, here is how to get started.
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row justify-between items-start">
        <div className="hidden md:block absolute left-0 top-6 w-full h-[2px] bg-[#D9D9D9C9] z-0"></div>

        <div className="md:hidden absolute left-6 top-6 w-[2px] h-[calc(100%-6rem)]  bg-[#D9D9D9C9] z-0"></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className="flex md:flex-col items-start mb-8 md:mb-0 md:w-1/4 relative z-30"
          >
            <div className="shrink-0 md:mb-4">
              <button
                className={`${
                  index === 0 ? "bg-[#93F3A5]" : "bg-[#c6c0c04d]"
                } text-black font-medium rounded-full text-center md:w-12 md:h-12   w-12 h-12 flex items-center z-[100] justify-center text-lg`}
              >
                {step.number}
              </button>
            </div>
            <div className="ml-4 md:ml-0 md:mt-4 z-10">
              <h3 className="font-medium text-[15px] mb-2">{step.title}</h3>
              {step.description && (
                <p className="text-[13px] font-normal">{step.description}</p>
              )}
            </div>
          </div>
        ))}

        <div className="hidden md:block absolute right-0 top-0 z-20">
          <button className="bg-[#c6c0c04d] text-black font-medium rounded-full w-12 h-12 flex items-center justify-center text-lg">
            5
          </button>
        </div>
      </div>
    </section>
  );
};

export default AngelInvesting;
