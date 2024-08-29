"use client";
import "../../../styles/campaign.css";
interface Props {
  numberOfSteps: number;
  currentStep: number;
}
const MobileStepper = ({ numberOfSteps, currentStep }: Props) => {
  let steps = Array.from({ length: numberOfSteps }, (_, i) => i + 1);

  return (
    <>
      <div className="lg:hidden w-full lg:bg-[#CDEED3] flex justify-center items-center mt-[30px]">
        <ol className="text-gray-500  flex gap-5 justify-center items-center">
          {steps.map((_, index) => (
            <li key={index} className="flex justify-between items-center">
              <div className="relative">
                <div
                  className={` flex items-center justify-center text-[14px] w-[22px] h-[22px] rounded-full font-medium  -start-4 ring-2 py-[0.8rem] px-[0.8rem] ring-[#0F8B3A] ${
                    index < currentStep
                      ? "text-white bg-[#0F8B3A]"
                      : "bg-gray-100 dark:bg-gray-700 text-[#0F8B3A]"
                  }`}
                >
                  {`0${index + 1}`}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute h-[1px] w-full  -my-[12px] mx-5 top-full bg-[#0F8B3A]"></div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default MobileStepper;
