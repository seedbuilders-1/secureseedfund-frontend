"use client";
import "../../styles/campaign.css";

interface Props {
  currentStep: number;
}
const CampaignStepper = ({ currentStep }: Props) => {
  const steps = ["Start Campaign", "Set Milestones", "Review & Submit"];

  return (
    <>
      <div className="w-[20%] bg-[#CDEED3] min-h-screen   flex flex-col justify-center items-center ">
        <ol className=" text-gray-500  flex gap-[2.2rem] absolute top-[50px] justify-center  items-center flex-col">
          {steps.map((step, index) => (
            <li
              key={index}
              className="mb-8 ms-6 flex justify-between items-center mx-auto"
            >
              <div className="relative">
                <div
                  className={` flex items-center justify-center text-[14px] w-8 h-8 rounded-full font-medium  -start-4 ring-2 py-[1.2rem] px-[1.2rem] ring-[#0F8B3A] ${
                    index < currentStep
                      ? "text-white bg-[#0F8B3A]"
                      : "bg-gray-100 dark:bg-gray-700 text-[#0F8B3A]"
                  }`}
                >
                  {`0${index + 1}`}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-[1px] absolute h-[65px] mx-5  top-full bg-[#0F8B3A]"></div>
                )}
              </div>

              <h3 className="font-normal leading-tight text-[16px] mt-[0.4rem] ml-2">
                {step}
              </h3>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default CampaignStepper;
