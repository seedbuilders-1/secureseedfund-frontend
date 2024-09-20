"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../../components/ui/form";
import { Input } from "../../../../../components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../../../components/ui/button";
import {
  BusinessInformationSchema,
  BusinessInformationValidation,
} from "@/lib/validations/account";
import MobileStepper from "../../../components/MobileStepper";

interface Props {
  businessDetails: BusinessInformationValidation;
  handleBusinessInformation: (v: BusinessInformationValidation) => void;
  handleNext: () => void;
  handleBack: () => void;
}

const BusinessInformation = ({
  businessDetails,
  handleNext,
  handleBusinessInformation,
  handleBack,
}: Props) => {
  const form = useForm<BusinessInformationValidation>({
    resolver: zodResolver(BusinessInformationSchema),
    defaultValues: businessDetails,
  });

  const onSubmit = (values: BusinessInformationValidation) => {
    handleBusinessInformation(values);
    handleNext();
  };
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
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Business Model::</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Eg (B2B, B2G, B2C, B2P, Multiple, others)"
                        {...field}
                      />
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
                        type="text"
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
                      <FormLabel>Industry/Sector</FormLabel>
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
                        type="textarea"
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

              <Button
                className="w-full md:w-[30%] rounded-3xl bg-light mt-8
                mr-2"
                onClick={handleBack}
              >
                Back
              </Button>
              <Button
                type="submit"
                className="w-full md:w-[30%] rounded-3xl bg-[#241A3F] mt-8"
              >
                Proceed
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BusinessInformation;
