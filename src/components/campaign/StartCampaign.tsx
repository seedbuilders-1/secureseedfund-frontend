"use client";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Button } from "@/components/ui/button";
import Image from "next/image";
interface Props {
  handleNext: () => void
  handleChange: (x: string) => void;
  selectFundingCampaign: string
}
const StartCampaign = ({ handleNext, handleChange, selectFundingCampaign }: Props) => {




  const fundingTypes = [
    { type: "Equity", value: "EQUITY", icon: "/equity.svg" },
    { type: "Debt", value: "DEBT", icon: "/debt.svg" },
    { type: "Reward", value: "REWARD", icon: "/reward.svg" },
    { type: "Revenue Share", value: "REVENUE_SHARE", icon: "/revenue.svg" },
  ]
  return (
    <div className="w-full  ">
      <h2 className="text-[#0F172A] text-[24px] font-medium">Funding Campaign</h2>
      <h3 className="text-[#747474] text-[16px] mt-3">Select the type of fundraising campaign that aligns with your funding needs and goals.</h3>

      <div className="mt-8">
        <RadioGroup.Root value={selectFundingCampaign} onValueChange={handleChange}>
          <div className="flex gap-4 ">
            {fundingTypes.map((funding, index) =>
              <RadioGroup.Item value={funding.value} key={index}>
                <div
                  className={`w-[200px] h-[200px] flex justify-center items-center flex-col text-center px-8 py-4 border-[2px] rounded-[16px] cursor-pointer ${selectFundingCampaign === funding.value
                    ? "border-primaryMain"
                    : "border-slate-300"
                    }`}
                >
                  <div className="rounded-[50%] py-3 px-3" style={{ backgroundColor: 'rgba(205, 238, 211, 0.25)' }}>
                    <Image
                      src={`/assets/icons${funding.icon}`}
                      alt="icon"
                      width={47}
                      height={47}
                      className="object-contain h-11 w-11"
                    />
                  </div>
                  <h2 className="text-slate-700 text-[16px] mx-auto">
                    {funding.type}
                  </h2>
                </div>
              </RadioGroup.Item>
            )}

          </div>
        </RadioGroup.Root>
      </div>
      {selectFundingCampaign && <Button onClick={() => { handleNext() }} className="w-[30%] rounded-3xl bg-[#241A3F] mt-8">
        Proceed
      </Button>}

    </div>

  );
};

export default StartCampaign
