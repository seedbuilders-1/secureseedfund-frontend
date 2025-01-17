import PaddingContainer from "@/components/shared/PaddingContainer";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface IInvestmentStep {
  position?: "top" | "bottom";
  stepNumber: string;
  text: string;
  containerClassname?: HTMLAttributes<HTMLDivElement>["className"];
}

const InvestmentStep = ({
  position = "top",
  stepNumber,
  text,
  containerClassname,
}: IInvestmentStep) => {
  if (position === "bottom") {
    return (
      <div className={cn("absolute left-0 bottom-0", containerClassname)}>
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 flex items-center justify-center bg-white border border-primary rounded-full text-[0.75rem]">
            {stepNumber}
          </div>
          <div className="h-[200px] w-[1px] bg-primary" />
          <div className="w-[15rem] h-[8rem] flex items-center justify-center bg-white border border-[#001D21]">
            <span className="text-dark text-[1rem] text-center">{text}</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={cn("absolute left-0 bottom-0", containerClassname)}>
      <div className="flex flex-col items-center">
        <div className="w-[15rem] h-[8rem] flex items-center justify-center bg-white border border-[#001D21]">
          <span className="text-dark text-[1rem] text-center">{text}</span>
        </div>
        <div className="h-[200px] w-[1px] bg-primary" />
        <div className="w-6 h-6 flex items-center justify-center bg-white border border-primary rounded-full text-[0.75rem]">
          {stepNumber}
        </div>
      </div>
    </div>
  );
};

const NewToInvesting = () => {
  return (
    <section className="w-full py-20">
      <PaddingContainer>
        <div className="w-full">
          <h3 className="text-dark text-[2rem] text-center md:text-[3.0625rem]">
            New to Startup and Angel Investing?
          </h3>
          <p className="text-[1.125rem] text-dark text-center mb-20">
            It is pretty simple, here is how to get started.
          </p>
          <div className="hidden w-[60%]  relative mx-auto h-[100vh] md:flex items-center justify-center ">
            <div className="bg-[#CDEED3] h-6 w-full my-auto relative">
              <InvestmentStep stepNumber="01" text="Browse startup rounds" />
              <InvestmentStep
                stepNumber="02"
                text="Research the startup and do your homework"
                position="bottom"
                containerClassname="left-[10%] top-0"
              />
              <InvestmentStep
                stepNumber="03"
                position="bottom"
                text="Invest in what you understand and interested in"
                containerClassname="left-[60%] top-0"
              />
              <InvestmentStep
                stepNumber="04"
                text="Diversify your investments"
                containerClassname="left-[70%]"
              />
            </div>
          </div>
          <div className=" flex flex-wrap gap-4 md:hidden">
            <div className="px-5 py-4 w-[250px] border border-[black] text-center mx-auto">
              Browse Startups Rounds
            </div>
            <div className="px-5 py-4 border w-[250px] border-[black] text-center mx-auto">
              Diversify Your Investment
            </div>
            <div className="px-5 py-4 border w-[250px] border-[black] text-center mx-auto">
              Research The Startup And Do Your Homework
            </div>
            <div className="px-5 py-4 border w-[250px] border-[black] text-center mx-auto">
              Invest in what you understand and interested in
            </div>
          </div>
        </div>
      </PaddingContainer>
    </section>
  );
};

export default NewToInvesting;
