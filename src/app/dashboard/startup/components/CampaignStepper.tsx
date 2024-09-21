"use client";
import "@/styles/campaign.css";
import "../../../../styles/campaign.css";
interface Props {
  currentStep: number;
}
const CampaignStepper = ({ currentStep }: Props) => {
  const steps = ["Start Campaign", "Set Milestones", "Review & Submit"];

  return (
    <>
      <div className="w-full lg:w-[20%] lg:bg-[#CDEED3] lg:min-h-screen flex justify-center items-center mt-[30px] lg:mt-0">
        <ol className=" text-gray-500  flex lg:gap-[2.2rem] gap-8 lg:absolute lg:top-[50px] justify-center items-center lg:flex-col">
          {steps.map((step, index) => (
            <li
              key={index}
              className="lg:mb-8 lg:ms-6 flex justify-between items-center lg:mx-auto"
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
                  <div className="w-[80%] lg:w-[1px] absolute h-[1px] lg:h-[65px] -my-5 lg:-my-0 mx-10 lg:mx-5 top-full bg-[#0F8B3A]"></div>
                )}
              </div>

              <h3 className="hidden lg:block font-normal leading-tight text-[16px] mt-[0.4rem] ml-2">
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
