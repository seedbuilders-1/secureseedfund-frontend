"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  InvestorInfoSchema,
  InvestorInfoValidation,
} from "@/lib/validations/account";
import { useEffect, useState } from "react";
import UploadProfileImage from "./UploadProfileImage";
import { useToast } from "@/components/ui/use-toast";
import { useUploadfileMutation } from "@/services/fileupload";
import { FileWithPath } from "react-dropzone";
import MobileStepper from "@/app/startup/components/MobileStepper";
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

interface Props {
  investorDetails: InvestorInfoValidation;
  handleInvestor: (v: InvestorInfoValidation) => void;
  handleNext: () => void;
}

const InvestorInformation = ({
  investorDetails,
  handleNext,
  handleInvestor,
}: Props) => {
  const form = useForm<InvestorInfoValidation>({
    resolver: zodResolver(InvestorInfoSchema),
    defaultValues: investorDetails,
  });

  const { toast } = useToast();
  const [fileUpload, { error: uploadError }] = useUploadfileMutation();

  const [profileImageUrl, setProfileImageUrl] = useState<string>("");
  const [profileImageFile, setProfileImageFile] = useState<FileWithPath | null>(
    null
  );

  console.log(profileImageFile);

  const onSubmit = (values: InvestorInfoValidation) => {
    if (!profileImageUrl) {
      return toast({
        variant: "destructive",
        title: "Double check.",
        description: "Some file uploads are missing",
      });
    }
    handleInvestor(values);
    handleNext();
  };

  useEffect(() => {
    if (uploadError) {
      toast({
        variant: "destructive",
        title: `${"unable to upload file please try again"}`,
      });
      setProfileImageFile(null);
    }
  }, [uploadError]);
  const handleUpload = async (
    acceptedFiles: FileWithPath[],
    fileType: string
  ) => {
    const uploadedFile = acceptedFiles[0];
    if (fileType === "profileImage") {
      setProfileImageFile(uploadedFile);
    }

    const formData = new FormData();
    formData.append("file", uploadedFile);
    const res = await fileUpload(formData).unwrap();

    if (fileType === "profileImage") {
      setProfileImageUrl(res);
      form.setValue("image", res); // Set form value to include the image URL
    }
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
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="col-span-2 flex flex-col items-center justify-center">
                    <FormControl>
                      <Input
                        {...field}
                        value={profileImageUrl}
                        onChange={(e) => field.onChange(e.target.value)}
                        className="hidden"
                      />
                    </FormControl>

                    <UploadProfileImage
                      handleUpload={(files) =>
                        handleUpload(files, "profileImage")
                      }
                    />

                    <FormMessage />
                  </FormItem>
                )}
              />

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
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] h-[50px] md:h-[150px]"
                          placeholder="Enter your Nationality"
                          {...field}
                        />
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
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] h-[50px] md:h-[150px]"
                          {...field}
                          placeholder="What type of investment do you prefer?"
                        />
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
