"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  InvestorInfoSchema,
  InvestorInfoValidation,
} from "@/lib/validations/account";
import { useToast } from "@/components/ui/use-toast";
import MobileStepper from "@/app/dashboard/startup/components/MobileStepper";
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
import Image from "next/image";
import UserEmptyState from "@/assets/iconspng/ImageEmptyState.svg";
import { FileWithPath } from "react-dropzone";
import { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "@/app/dashboard/startup/components/countries";

interface Props {
  investorDetails: InvestorInfoValidation;
  handleInvestor: (v: InvestorInfoValidation) => void;
  handleNext: () => void;
  setProfileImageFile: (x: FileWithPath | null) => void;
  profileImageFile: FileWithPath | null;
  selectedImage: string | null;
  setSelectedImage: (x: string | null) => void;
}

const InvestorInformation = ({
  investorDetails,
  handleNext,
  handleInvestor,
  setProfileImageFile,
  profileImageFile,
  selectedImage,
  setSelectedImage,
}: Props) => {
  const form = useForm<InvestorInfoValidation>({
    resolver: zodResolver(InvestorInfoSchema),
    defaultValues: investorDetails,
  });

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();

    const file = e.target.files?.[0];
    if (!file) return;

    const validImageTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!validImageTypes.includes(file.type)) {
      toast({
        variant: "destructive",
        title: "Invalid file type. Please upload an image (jpg, jpeg, png).",
      });
      return;
    }

    const uploadLimit = file.size / 1024 / 1024 < 2.5;
    if (!uploadLimit) {
      toast({
        variant: "destructive",
        title: "File must not exceed 2.5MB",
      });
      return;
    }
    setProfileImageFile(file);
    const reader = new FileReader();
    reader.onload = (event) => {
      setSelectedImage(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };
  const { toast } = useToast();

  const onSubmit = (values: InvestorInfoValidation) => {
    console.log("submitting");

    if (!profileImageFile && !selectedImage) {
      toast({
        variant: "destructive",
        title: "Please upload a profile image.",
      });
      return;
    }
    handleInvestor(values);
    handleNext();
  };

  return (
    <div className="w-full px-6">
      <h2 className="text-[#0F172A] text-[24px] font-medium text-center lg:text-left">
        Investor Information
      </h2>
      <MobileStepper numberOfSteps={2} currentStep={1} />

      <div className="mt-8">
        <div className="mb-3 flex gap-12 flex-wrap justify-center mt-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="md:w-[700px] sm:w-[500px]"
            >
              <div className="flex justify-center relative w-fit items-center flex-col mx-auto ">
                <label htmlFor="profileImage" style={{ cursor: "pointer" }}>
                  <Image
                    src={selectedImage || UserEmptyState}
                    alt="logo"
                    width={110}
                    height={100}
                    objectFit="contain"
                    className="object-cover w-full h-[150px]  mx-auto rounded-md"
                  />
                  <input
                    type="file"
                    id="profileImage"
                    accept="image/*"
                    onChange={(e) => handleFile(e)}
                    className="hidden"
                  />
                  <div className="absolute bottom-0 right-[-10px] bg-white p-[0.5rem] rounded-full cursor-pointer">
                    <BiImageAdd className="text-xl text-gray-700" />
                  </div>
                </label>
              </div>

              <div className="border border-solid border-[#D8D8E2] rounded-2xl p-5 lg:p-12">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                          placeholder="Provide your First Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                          placeholder="Provide your Last Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                          placeholder="Provide your Phone Number"
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
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] h-[50px] md:h-[150px]"
                          placeholder="Enter your Address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="nationality"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Nationality</FormLabel>
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
                              {countries.map((opt: string, idx: number) => (
                                <SelectItem
                                  key={idx}
                                  className="capitalize"
                                  value={opt}
                                >
                                  {opt}
                                </SelectItem>
                              ))}
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
                  name="investorStatus"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Investor Status</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] h-[50px] md:h-[150px]"
                          placeholder="What is your Investor Status"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="typeOfInvestmentPreferred"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>
                        What type of investment do you prefer? Select one
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(value) => field.onChange(value)}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full capitalize">
                            <SelectValue placeholder="Select Equity Type" />
                          </SelectTrigger>
                          <SelectContent className="w-full bg-white">
                            <SelectGroup>
                              {[
                                "EQUITY",
                                "DEBT",
                                "REWARD",
                                "REVENUE_SHARE",
                                "GRANTS",
                                "ROI",
                                "SAFE",
                                "OTHERS",
                              ].map((opt: string, idx: number) => (
                                <SelectItem
                                  key={idx}
                                  className="capitalize"
                                  value={opt}
                                >
                                  {opt}
                                </SelectItem>
                              ))}
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
                  name="howLongDoYouPlanToInvest"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>
                        How long do you plan to invest your money
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] h-[50px] md:h-[150px]"
                          {...field}
                          placeholder="  How long do you plan to invest your money"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col md:flex-row md:justify-between w-full md:space-x-12">
                  <FormField
                    control={form.control}
                    name="countryOfResidence"
                    render={({ field }) => (
                      <FormItem className="py-2 w-full lg:w-[50%]">
                        <FormLabel>Country of Residence</FormLabel>
                        <FormControl>
                          <Input
                            className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] w-[100%]"
                            {...field}
                            placeholder="Enter your country of Residence"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="space-x-0 py-2 w-full lg:w-[50%]">
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input
                            className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] w-[100%]"
                            type="string"
                            {...field}
                            placeholder="Enter your city"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="investmentExperience"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Investment Expereince</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] h-[50px] md:h-[150px]"
                          {...field}
                          placeholder="What is your experience in investing?"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="liquidityImportance"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>How Important is liquidity to you?</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] h-[50px] md:h-[150px]"
                          {...field}
                          placeholder="How important is liquidity to you?"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="goal"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>What is your goal?</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] h-[50px] md:h-[150px]"
                          {...field}
                          placeholder="What is your goal?"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="annualIncome"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Annual Income?</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] h-[50px] md:h-[150px]"
                          {...field}
                          placeholder="What is your annual income?"
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
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default InvestorInformation;
