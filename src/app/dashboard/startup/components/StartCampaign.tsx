"use client";
import * as RadioGroup from "@radix-ui/react-radio-group";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { CampaignValidation, CampaignSchema } from "@/lib/validations/campaign";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export type FundingCampaignTypes =
  | "EQUITY"
  | "DEBT"
  | "REWARD"
  | "REVENUE_SHARE"
  | "GRANTS"
  | "ROI"
  | "SAFE"
  | "OTHERS";

interface Props {
  handleNext: () => void;
  handleChange: (x: FundingCampaignTypes) => void;
  handleCampaign: (v: CampaignValidation) => void;
  selectFundingCampaign: FundingCampaignTypes;
  campaignDetails: CampaignValidation;
}
const StartCampaign = ({
  handleNext,
  handleChange,
  handleCampaign,
  selectFundingCampaign,
  campaignDetails,
}: Props) => {
  const fundingTypes = [
    { type: "Equity", value: "EQUITY", icon: "/equity.svg" },
    { type: "Debt", value: "DEBT", icon: "/debt.svg" },
    { type: "Reward", value: "REWARD", icon: "/reward.svg" },
    { type: "Revenue Share", value: "REVENUE_SHARE", icon: "/revenue.svg" },
    { type: "Grants", value: "ROI", icon: "/grant.svg" },
    { type: "ROI", value: "PARTNERSHIP", icon: "/partnership.svg" },
    { type: "SAFE", value: "SAFE", icon: "/safe.svg" },
    { type: "Others", value: "OTHERS", icon: "/mentorship.svg" },
  ];

  const form = useForm<CampaignValidation>({
    resolver: zodResolver(CampaignSchema),
    defaultValues: campaignDetails,
  });

  const onSubmit = (values: CampaignValidation) => {
    handleCampaign(values);
    handleNext();
  };
  return (
    <div className="w-full px-6">
      <h2 className="text-[#0F172A] text-[24px] font-medium text-center lg:text-left">
        Provide Campaign Details
      </h2>
      <h3 className="text-[#747474] text-[16px] mt-3 text-center lg:text-left">
        Select the type of fundraising campaign that aligns with your funding
        needs and goals.
      </h3>

      <div className="mt-8">
        <RadioGroup.Root
          value={selectFundingCampaign}
          onValueChange={handleChange}
        >
          <div className="flex gap-12 flex-wrap justify-center">
            {fundingTypes.map((funding, index) => (
              <RadioGroup.Item value={funding.value} key={index}>
                <div
                  className={`w-[130px] shrink flex-wrap lg:w-[200px] lg:h-[200px] flex justify-center items-center flex-col text-center px-8 py-4 border-[2px] rounded-[16px] cursor-pointer ${
                    selectFundingCampaign === funding.value
                      ? "border-primaryMain"
                      : "border-slate-300"
                  }`}
                >
                  <div
                    className="rounded-[50%] py-3 px-3"
                    style={{
                      backgroundColor: "rgba(205, 238, 211, 0.25)",
                    }}
                  >
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
            ))}
          </div>
        </RadioGroup.Root>
        <div className="mb-3 lex gap-12 flex-wrap justify-center mt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Campaign Title</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.9rem] rounded-[48px]"
                        placeholder="Provide a title"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Campaign description</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[3rem] h-[200px]"
                        placeholder="Provide a description"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col w-full md:flex-row md:space-x-12">
                <FormField
                  control={form.control}
                  name="fundinggoal"
                  render={({ field }) => (
                    <FormItem className="flex-1 py-2 w-full">
                      <FormLabel>Funding Goal</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.9rem] rounded-[48px]"
                          type="number"
                          placeholder="15,000"
                          {...field}
                          min="1"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="minimum"
                  render={({ field }) => (
                    <FormItem className="flex-1 py-2 w-full">
                      <FormLabel>
                        Minimum Amount Expected from an investor
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.9rem] rounded-[48px]"
                          type="number"
                          placeholder="15,000"
                          {...field}
                          min="1"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col w-full md:flex-row md:space-x-12">
                <FormField
                  control={form.control}
                  name="startdate"
                  render={({ field }) => (
                    <FormItem className="flex-1 py-2 w-full">
                      <FormLabel>Start Date</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.9rem] rounded-[48px]"
                          type="date"
                          placeholder="DD-MM-YY"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="enddate"
                  render={({ field }) => (
                    <FormItem className="flex-1 py-2 w-full">
                      <FormLabel>Enddate</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.9rem] rounded-[48px]"
                          type="date"
                          placeholder="DD-MM-YY"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {selectFundingCampaign && (
                <Button
                  type="submit"
                  className="w-[30%] rounded-3xl bg-[#241A3F] mt-8"
                >
                  Proceed
                </Button>
              )}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default StartCampaign;
