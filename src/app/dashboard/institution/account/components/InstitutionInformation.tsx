"use client";
import React from "react";
import {
  InstitutionValidation,
  institutionInformationSchema,
} from "@/lib/validations/account";
import { useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import MobileStepper from "@/app/dashboard/startup/components/MobileStepper";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useUserAuth from "@/hooks/auth/useAuth";
import { listOFIndustries, fundingTypes } from "@/lib/utils";

interface Props {
  institutionDetail: InstitutionValidation;
  handleNext: () => void;
  handleInstitutionInfo: (v: InstitutionValidation) => void;
}
const InstitutionInformation = ({
  institutionDetail,
  handleInstitutionInfo,
  handleNext,
}: Props) => {
  const { user } = useUserAuth();

  const form = useForm<InstitutionValidation>({
    resolver: zodResolver(institutionInformationSchema),
    defaultValues: institutionDetail,
  });
  const onSubmit = (values: InstitutionValidation) => {
    handleInstitutionInfo(values);
    handleNext();
  };
  return (
    <div className="p-4 w-full">
      {" "}
      <h2 className="text-[#0F172A] text-[1.5rem] font-medium text-center ">
        Hi {user?.firstName}, your journey to finding the best start-up starts
        here
      </h2>
      <p className="text-[#747474] text-[1rem] text-center">
        Kindly fill in the required details as accurately as possible
      </p>
      <MobileStepper numberOfSteps={2} currentStep={1} />
      <div className="mt-8">
        <div className="mb-3 flex gap-12 flex-wrap justify-center mt-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="md:w-[700px] sm:w-[500px]"
            >
              <FormField
                control={form.control}
                name="Name"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Institution Name</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Provide Institution Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="registrationNumber"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Institution Registration Number</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Provide Institution Registration Number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Institution Address</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Provide Institution Address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Institution Website</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Provide Institution Website"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="industryOfInterest"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Industry of Interest</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full capitalize">
                          <SelectValue placeholder="Select....." />
                        </SelectTrigger>
                        <SelectContent className="w-full bg-white">
                          <SelectGroup>
                            {listOFIndustries.map(
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
                name="fundingType"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Funding Type</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="mt-4"
                      >
                        <div className="flex gap-12 flex-wrap justify-center">
                          {fundingTypes.map((funding, index) => (
                            <FormItem key={index}>
                              <FormControl>
                                <RadioGroupItem
                                  value={funding.value}
                                  className="sr-only"
                                  id={`funding-${index}`}
                                />
                              </FormControl>
                              <FormLabel
                                htmlFor={`funding-${index}`}
                                className="cursor-pointer"
                              >
                                <div
                                  className={`w-[130px] shrink flex-wrap lg:w-[200px] lg:h-[200px] flex justify-center items-center flex-col text-center px-8 py-4 border-[2px] rounded-[16px] ${
                                    field.value === funding.value
                                      ? "border-primaryMain"
                                      : "border-slate-300"
                                  }`}
                                >
                                  <div
                                    className="rounded-[50%] py-3 px-3"
                                    style={{
                                      backgroundColor:
                                        "rgba(205, 238, 211, 0.25)",
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
                              </FormLabel>
                            </FormItem>
                          ))}
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fundingSize"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Funding Size</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Provide Funding Size"
                        {...field}
                        type="number"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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

export default InstitutionInformation;
