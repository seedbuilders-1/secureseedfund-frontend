"use client";
import { useToast } from "@/components/ui/use-toast";
import { Investor } from "@/generated/service/users";
import useUserAuth from "@/hooks/auth/useAuth";
import useProfile from "@/hooks/profile/useProfile";
import React, { useEffect, useState } from "react";
import { FileWithPath } from "react-dropzone";
import useAccount from "../hooks/useAccount";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import WarningComponent from "@/components/cards/WarningComponent";
import Image from "next/image";
import { BiImageAdd } from "react-icons/bi";
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
  InvestorAccountSettingsSchema,
  InvestorAccountSettingsValidation,
} from "@/lib/validations/account";
import UserEmptyState from "@/assets/iconspng/ImageEmptyState.svg";
import { InvestorDto } from "@/generated/service/investors";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  accountInformation: InvestorDto | undefined;
}

const AccountSettings = ({ accountInformation }: Props) => {
  const { toast } = useToast();
  const [profileImageFile, setProfileImageFile] = useState<
    string | FileWithPath | null
  >(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { user } = useUserAuth();

  const { userProfile } = useProfile();

  const { updateInvestorAccountSetting, isUpdatingInvestorAccountSettings } =
    useAccount();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const form = useForm<InvestorAccountSettingsValidation>({
    resolver: zodResolver(InvestorAccountSettingsSchema),
  });

  const creatorId = user?.userId as string;

  const onSubmit = (values: InvestorAccountSettingsValidation) => {
    if (!profileImageFile && !selectedImage) {
      toast({
        variant: "destructive",
        title: "Missing information",
        description:
          "Please upload all required files or ensure previews are available.",
      });
      return;
    }
    const updateNewInvestorInformationDto = new FormData();
    updateNewInvestorInformationDto.append("id", creatorId);
    updateNewInvestorInformationDto.append(
      "investor_type",
      values.investor_type
    );

    updateNewInvestorInformationDto.append(
      "investor_nationality",
      values.investor_nationality
    );
    updateNewInvestorInformationDto.append(
      "investor_country_residence",
      values.investor_country_residence
    );
    updateNewInvestorInformationDto.append(
      "investor_residence_city",
      values.investor_residence_city
    );
    updateNewInvestorInformationDto.append(
      "investor_status",
      values.investor_status
    );
    updateNewInvestorInformationDto.append(
      "investor_annual_income",
      values.investor_annual_income
    );
    updateNewInvestorInformationDto.append(
      "investor_investment_duration",
      values.investor_investment_duration
    );
    updateNewInvestorInformationDto.append(
      "investor_investment_goal",
      values.investor_investment_goal
    );
    updateNewInvestorInformationDto.append(
      "investor_experience",
      values.investor_experience
    );
    updateNewInvestorInformationDto.append(
      "investor_liquidity_importance",
      values.investor_liquidity_importance
    );
    if (profileImageFile) {
      updateNewInvestorInformationDto.append(
        "investor_image",
        profileImageFile
      );
    }
    const payload = {
      userId: creatorId,
      updateInvestorDto: updateNewInvestorInformationDto,
    };
    updateInvestorAccountSetting(payload);
  };

  useEffect(() => {
    if (accountInformation) {
      setSelectedImage(accountInformation.investor_image);
    }
    if (accountInformation) {
      const {
        investor_annual_income,
        investor_country_residence,
        investor_experience,
        investor_investment_duration,
        investor_investment_goal,
        investor_type,
        investor_liquidity_importance,
        investor_nationality,
        investor_residence_city,
        investor_status,
      } = accountInformation;
      form.setValue("investor_annual_income", investor_annual_income);
      form.setValue("investor_country_residence", investor_country_residence);
      form.setValue("investor_experience", investor_experience);
      form.setValue("investor_type", investor_type);
      form.setValue(
        "investor_investment_duration",
        investor_investment_duration
      );
      form.setValue("investor_investment_goal", investor_investment_goal);
      form.setValue("investor_nationality", investor_nationality);
      form.setValue("investor_residence_city", investor_residence_city);
      form.setValue("investor_investment_goal", investor_investment_goal);
      form.setValue("investor_status", investor_status);
      form.setValue(
        "investor_liquidity_importance",
        investor_liquidity_importance
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
        <div className="flex justify-center relative w-fit items-center flex-col mx-auto border rounded-md">
          <label htmlFor="profileImage" style={{ cursor: "pointer" }}>
            <Image
              src={selectedImage || UserEmptyState}
              alt="logo"
              width={170}
              height={100}
              objectFit="contain"
              className="object-cover w-[300px] h-[300px]  mx-auto rounded-md"
            />
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              onChange={(e) => handleImageUpload(e)}
              className="hidden"
            />
            <div className="absolute bottom-0 right-[-10px] bg-white p-[0.5rem] rounded-full cursor-pointer">
              <BiImageAdd className="text-xl text-gray-700" />
            </div>
          </label>
        </div>

        <div className="mt-4 max-w-[1000px] mx-auto">
          <div className=" border border-solid border-[#D8D8E2] rounded-2xl  p-5">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5">
                <FormField
                  control={form.control}
                  name="investor_annual_income"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Annual Income:</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] w-full"
                          placeholder="Enter your annual income"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="investor_country_residence"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Country of Residence:</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                          placeholder="Enter your country of residence"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="investor_experience"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Investment Experience:</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                          placeholder="Enter your investment experience"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="investor_investment_duration"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Investment Duration:</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                          placeholder="How long do you plan to invest?"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="investor_investment_goal"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Investment Goal:</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                          placeholder="What is your investment goal?"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="investor_type"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Type of Invest:</FormLabel>
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
                  name="investor_liquidity_importance"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Liquidity Importance:</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                          placeholder="How important is liquidity to you?"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="investor_nationality"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Nationality:</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                          placeholder="Enter your nationality"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="investor_residence_city"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>City of Residence:</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                          placeholder="Enter your city of residence"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="investor_status"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Investor Status:</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                          placeholder="Enter your investor status"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  loading={isUpdatingInvestorAccountSettings}
                  className="w-full md:w-[30%] rounded-3xl bg-[#241A3F] mt-8"
                >
                  Save & Continue
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
