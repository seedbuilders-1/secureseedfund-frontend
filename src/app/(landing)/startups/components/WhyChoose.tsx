import React from "react";
import Image from "next/image";
import whychoose from "@/assets/iconspng/whychoose.png";

const WhyChoose = () => {
  const chooes = [
    {
      number: 1,
      title: "Effortless Startup-Investor Matchmaking",
      description:
        "The quickest hassle-free match making, monitoring  and verification platform for startups and investors",
    },
    {
      number: 2,
      title: "Expert Startup-Investor Insights",
      description: "We know Startups and Investors more than anyone else",
    },
    {
      number: 3,
      title: "Worldwide Startup-Investor Network",
      description: "We are a global community of startups and investors",
    },
  ];

  return (
    <div className="flex items-center justify-center flex-col mt-[3rem]">
      <h1 className="font-bold text-3xl md:text-5xl text-center mb-8">
        Why you should choose us?
      </h1>

      <div className="flex items-center justify-center flex-col-reverse md:flex-row px-[1rem] md:px-[3rem] mb-[2rem]">
        <Image src={whychoose} alt="" className="mt-[1rem] md:mt-[0rem]" />
        <div className="container mx-auto ">
          <div className="flex flex-col items-start gap-4 justify-center ">
            {chooes.map((button) => (
              <div
                key={button.number}
                className="flex p-4 text-center gap-4 items-center"
              >
                <button className="mt-2 px-4 py-3 bg-[#93F3A5] text-[#000]  rounded-full font-medium">
                  {button.number}
                </button>
                <div>
                  <h2 className="font-semibold text-lg text-left">
                    {button.title}
                  </h2>
                  <p className="text-gray-600 text-left">
                    {button.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
