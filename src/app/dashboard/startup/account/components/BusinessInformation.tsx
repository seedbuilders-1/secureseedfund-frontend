"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../../components/ui/form";
import { useEffect } from "react";
import { Input } from "../../../../../components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../../../components/ui/button";
import useUserAuth from "@/hooks/auth/useAuth";
import useAccount from "../hooks/useAccount";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BusinessInformationSchema,
  BusinessInformationValidation,
} from "@/lib/validations/account";
import MobileStepper from "../../components/MobileStepper";

interface Props {
  handleNext: () => void;
  handleBack: () => void;
}
type BusinessModel = "B2B" | "B2C" | "B2G" | "C2B" | "C2C";
const BusinessInformation = ({ handleNext, handleBack }: Props) => {
  const form = useForm<BusinessInformationValidation>({
    resolver: zodResolver(BusinessInformationSchema),
  });

  const { user } = useUserAuth();
  const creatorId = user?.userId as string;
  const {
    createBusinessInformation,
    isCreatingBusinessInformation,
    createdBusinessInfo,
    accountInformation,
  } = useAccount(creatorId);
  const onSubmit = (values: BusinessInformationValidation) => {
    const createBusinessInformationDto = {
      business_stage: values.businessstage,
      business_model: values.businessmodel as BusinessModel,
      business_revenue_channel: values.buesinessrevenuechannels,
      business_market_size: parseInt(values.marketsize),
      business_past_revenue_generated: parseInt(
        values.howmuchrevenuegeneratedsinceoperation
      ),
      business_customer_acqui_cost: parseInt(values.customeracquisitioncost),
      business_current_users: parseInt(values.numberofcurrentusers),
      business_monthly_recur_expense: parseInt(values.monthlyrecurringexpense),
      business_monthly_recur_revenue: 100,
      business_model_desc: values.businessmodeldescription,
    };
    const payload = {
      creatorId,
      createBusinessInformationDto,
    };
    createBusinessInformation(payload);
  };
  useEffect(() => {
    if (createdBusinessInfo) {
      handleNext();
    }
  }, [createdBusinessInfo]);
  useEffect(() => {
    if (accountInformation?.businessInformation?.id) {
      form.setValue(
        "businessstage",
        accountInformation.businessInformation.business_stage || ""
      );
      form.setValue(
        "businessmodel",
        accountInformation.businessInformation.business_model || ""
      );
      form.setValue(
        "buesinessrevenuechannels",
        accountInformation.businessInformation.business_revenue_channel || ""
      );
      form.setValue(
        "marketsize",
        accountInformation.businessInformation.business_market_size.toString()
      );
      form.setValue(
        "howmuchrevenuegeneratedsinceoperation",
        accountInformation.businessInformation.business_past_revenue_generated.toString()
      );
      form.setValue(
        "customeracquisitioncost",
        accountInformation.businessInformation.business_customer_acqui_cost.toString()
      );
      form.setValue(
        "numberofcurrentusers",
        accountInformation.businessInformation.business_current_users.toString()
      );
      form.setValue(
        "monthlyrecurringexpense",
        accountInformation.businessInformation.business_monthly_recur_expense.toString()
      );
      form.setValue(
        "businessmodeldescription",
        accountInformation.businessInformation.business_model_desc || ""
      );
    }
  }, [accountInformation?.businessInformation]);
  return (
    <div className="w-full px-6">
      <h2 className="text-[#0F172A] text-[24px] font-medium text-center lg:text-left">
        Business Information
      </h2>
      <MobileStepper numberOfSteps={6} currentStep={4} />

      <div className="mt-8 border border-solid border-[#D8D8E2] rounded-2xl grid place-content-center lg:p-12 p-5">
        <div className="mb-3 flex gap-12 flex-wrap justify-center mt-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="md:w-[700px] sm:w-[500px]"
            >
              <FormField
                control={form.control}
                name="businessstage"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-">
                    <FormLabel>Business Stage:</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Eg (Pre-seed/Ideation, Minimum Viable Product, Early stage, Growth, Expansion, Merger/Acquisition/Exit)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="businessmodel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Model:</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => field.onChange(value)}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full capitalize">
                          <SelectValue placeholder="Select Business model" />
                        </SelectTrigger>
                        <SelectContent className="w-full bg-white">
                          <SelectGroup>
                            {["B2B", "B2C", "B2G", "B2G", "C2B", "C2C"].map(
                              (opt: string, idx: number) => (
                                <SelectItem
                                  key={idx}
                                  className="capitalize"
                                  value={opt}
                                >
                                  {opt}
                                </SelectItem>
                              )
                            )}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="buesinessrevenuechannels"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Business Revenue Channels:</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Eg (Freemium, Fee, Subscription, Commissions, Advertisement, Referrals, SAAS, Affiliate, Others)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="marketsize"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Market size:</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Eg ($100,000- $1,000,000, $1,000,000-$10,000,000, $10,000,000-$100,000,000, $100,000,000-above)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="howmuchrevenuegeneratedsinceoperation"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>
                      How much revenue generated since operation:
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="(In USD)"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col md:flex-row md:space-x-12">
                <FormField
                  control={form.control}
                  name="customeracquisitioncost"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Customer Acquisition Cost:</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                          placeholder="(In USD)"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="numberofcurrentusers"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Number of Current users</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                          placeholder="eg 10"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="monthlyrecurrringrevenue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Monthly Recurring Revenue:</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] w-[200px]"
                          type="number"
                          placeholder="(In USD)"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="monthlyrecurringexpense"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Monthly Recurring Expense:</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="(In USD)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="businessmodeldescription"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Business Model Description:</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex">
                <Button
                  className="w-full md:w-[30%] rounded-3xl mt-8
                mr-2"
                  variant="outline"
                  onClick={handleBack}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  loading={isCreatingBusinessInformation}
                  className="w-full md:w-[30%] rounded-3xl bg-[#241A3F] mt-8"
                >
                  Proceed
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BusinessInformation;
