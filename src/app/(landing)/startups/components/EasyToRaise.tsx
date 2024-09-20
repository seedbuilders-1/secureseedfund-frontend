import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import add from "@/assets/iconspng/add.png";
import vector from "@/assets/iconspng/Vector.png";
import document from "@/assets/iconspng/document.png";
import upload from "@/assets/iconspng/Upload.png";

interface StepButtonProps {
  icon: StaticImageData;
  alt: string;
  isLastThree: boolean;
}

const StepButton: React.FC<StepButtonProps> = ({ icon, alt, isLastThree }) => (
  <button
    className={`rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 shrink-0 ${
      isLastThree
        ? "bg-[#D4D4D4] hover:bg-[#BDBDBD] focus:ring-[#D4D4D4]"
        : "bg-[#93F3A5] hover:bg-[#7ad98b] focus:ring-[#93F3A5]"
    }`}
    aria-label={alt}
  >
    <Image src={icon} alt={alt} width={24} height={24} />
  </button>
);

interface Step {
  icon: StaticImageData;
  title: string;
  description: string;
}

const EasyToRaise: React.FC = () => {
  const steps: Step[] = [
    {
      icon: add,
      title: "Sign up",
      description: "Join our platform and get started!",
    },
    {
      icon: vector,
      title: "Craft your value proposition & story",
      description: "Explore innovative ventures.",
    },
    {
      icon: upload,
      title: "Submit your documents",
      description: "Upload pitch deck, demo video, etc.",
    },
    { icon: document, title: "Set your milestone", description: "" },
    { icon: upload, title: "Launch Raise", description: "" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
      <h1 className="font-medium text-3xl md:text-5xl text-center mb-8">
        It is Easy To Raise
      </h1>
      <div className="flex flex-col justify-center gap-6 md:gap-8 items-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className="w-[200px] p-4 rounded-lg bg-[#00E04E08] md:bg-transparent flex flex-col md:flex-row gap-[1.5rem] items-center md:w-full"
          >
            <StepButton
              icon={step.icon}
              alt={step.title}
              isLastThree={index >= 2}
            />
            <div className="">
              <h3 className="font-medium text-[1rem] md:text-xl mt-2">
                {step.title}
              </h3>
              {step.description && (
                <p className=" text-[0.8rem] md:text-base mt-2">
                  {step.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EasyToRaise;
