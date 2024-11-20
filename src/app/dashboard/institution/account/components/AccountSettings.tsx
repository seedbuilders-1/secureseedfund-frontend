"use client";
import { useToast } from "@/components/ui/use-toast";
import useUserAuth from "@/hooks/auth/useAuth";
import useProfile from "@/hooks/profile/useProfile";
import React, { useEffect, useState } from "react";
import { FileWithPath } from "react-dropzone";
import useAccount from "../hooks/useAccount";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import WarningComponent from "@/components/cards/WarningComponent";
import Image from "next/image";
import { listOFIndustries } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { fundingTypes } from "@/lib/utils";
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
import UserEmptyState from "@/assets/iconspng/ImageEmptyState.svg";
import { InvestorDto, UpdateInvestorDto } from "@/services/investor";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  institutionInformationSchema,
  InstitutionValidation,
} from "@/lib/validations/account";
import { CreateInstitutionDto } from "@/services/institution/typings";
import { useUpdateInstitutionMutation } from "@/services/institution";

interface Props {
  accountInformation: CreateInstitutionDto | undefined;
}

const AccountSettings = ({ accountInformation }: Props) => {
  const { toast } = useToast();
  const { user } = useUserAuth();

  const { userProfile } = useProfile();

  const [updateInstitutionAccount, { isLoading: isUpdatingInstitution }] =
    useUpdateInstitutionMutation();

  const form = useForm<InstitutionValidation>({
    resolver: zodResolver(institutionInformationSchema),
  });

  const creatorId = user?.userId as string;

  const onSubmit = (values: InstitutionValidation) => {
    const updateInstitutionDto = {
      id: creatorId,
      institution_name: values.Name,
      institution_reg_number: values.registrationNumber,
      institution_address: values.address,
      institution_website: values.website,
      institution_industry_of_interest: values.industryOfInterest,
      institution_funding_type: values.fundingType,
      institution_funding_size: values.fundingSize,
    };
    const payload = {
      userId: creatorId,
      updateInstitutionDto,
    };

    updateInstitutionAccount(payload);
  };

  useEffect(() => {
    if (accountInformation) {
      form.setValue("Name", accountInformation.institution_name);
      form.setValue("address", accountInformation.institution_address);
      form.setValue("fundingSize", accountInformation.institution_funding_size);
      form.setValue("fundingType", accountInformation.institution_funding_type);
      form.setValue(
        "industryOfInterest",
        accountInformation.institution_industry_of_interest
      );
      form.setValue("website", accountInformation.institution_website);
      form.setValue(
        "registrationNumber",
        accountInformation.institution_reg_number
      );
    }
  }, [accountInformation]);
  return (
    <>
      <div className="mt-5 p-4">
        <WarningComponent
          showLink={true}
          title={`Hello ${user?.firstName}, you are currently on the ${
            userProfile?.subscription_plan
          } plan which ${
            userProfile?.subscription_plan === "premium"
              ? "grants you access to all our premium features."
              : userProfile?.subscription_plan === "basic"
              ? "provides you with great features, but you can upgrade to premium to allow investors see your full profile."
              : "allows you to set up an account with us. Kindly upgrade to a paid plan to enjoy more features."
          }`}
          linkTitle={
            userProfile?.subscription_plan === "premium"
              ? "View Plans"
              : "Upgrade Now"
          }
        />

        <div className="mt-4 max-w-[1000px] mx-auto">
          <div className=" border border-solid border-[#D8D8E2] rounded-2xl  p-5">
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
                          value={field.value}
                          onValueChange={(value) => field.onChange(value)}
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
                  loading={isUpdatingInstitution}
                  className="w-full md:w-[30%] rounded-3xl bg-[#241A3F] mt-8"
                >
                  Save and Continue
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
