"use client";
import React from "react";
import WarningComponent from "@/components/cards/WarningComponent";
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
import { useToast } from "@/components/ui/use-toast";
import { Startup } from "@/generated/service/startups";
import {
  AccountSettingsSchema,
  AccountSettingsValidation,
} from "@/lib/validations/account";
import { useEffect, useState } from "react";
import { FileWithPath } from "react-dropzone";
import UploadComponent from "./UploadComponent";
import Image from "next/image";
import useUserAuth from "@/hooks/auth/useAuth";
import { BiImageAdd } from "react-icons/bi";
import useProfile from "@/hooks/profile/useProfile";

interface Props {
  accountInformation: Startup | undefined;
}
const AccountSettings = ({ accountInformation }: Props) => {
  const { toast } = useToast();
  const [profileImageFile, setProfileImageFile] = useState<
    string | FileWithPath | null
  >(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { user } = useUserAuth();
  const [files, setFiles] = useState<Record<string, FileWithPath | null>>({
    businessPlan: null,
    pitchDeck: null,
    demoVideo: null,
    companyLogo: null,
    companyRegistration: null,
  });

  const { userProfile } = useProfile();

  const handleUpload = (acceptedFiles: FileWithPath[], fileType: string) => {
    const uploadedFile = acceptedFiles[0];
    const { type } = uploadedFile;

    const fileTypeValidation: Record<string, string[]> = {
      businessPlan: ["application/pdf"],
      pitchDeck: ["application/pdf"],
      demoVideo: ["video/"],
      companyLogo: ["image/"],
      companyRegistration: ["application/pdf"],
    };

    if (
      fileTypeValidation[fileType].some((validType) =>
        type.startsWith(validType)
      )
    ) {
      setFiles((prev) => ({ ...prev, [fileType]: uploadedFile }));
    } else {
      toast({
        variant: "destructive",
        title: "Invalid file type",
        description: `The ${fileType} must be a ${fileTypeValidation[
          fileType
        ].join(" or ")} file.`,
      });
    }
  };
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

  const form = useForm<AccountSettingsValidation>({
    resolver: zodResolver(AccountSettingsSchema),
  });

  const onSubmit = () => {};

  useEffect(() => {
    if (accountInformation?.founder?.id) {
      setSelectedImage(accountInformation.founder.profileImage);
    }
    if (accountInformation?.companyInformation?.id) {
      const {
        company_address,
        company_website,
        company_desc,
        company_bullet_point,
      } = accountInformation.companyInformation;
      form.setValue("companyaddress", company_address);
      form.setValue("companywebsite", company_website);
      form.setValue("companydescription", company_desc);
      form.setValue(
        "threeorfivepointswhycompanyisagoodinvestment",
        company_bullet_point
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
            userProfile?.subscription_plan === "premium" ? "" : "Upgrade Now"
          }
        />
        <div className="flex justify-center relative w-fit items-center flex-col mx-auto border rounded-md">
          <label htmlFor="profileImage" style={{ cursor: "pointer" }}>
            <Image
              src={selectedImage || ""}
              alt="logo"
              width={110}
              height={100}
              objectFit="contain"
              className="object-cover w-full h-[200px]  mx-auto rounded-md"
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

        <div className="mt-4 md:p-[8rem]">
          <div className=" border border-solid border-[#D8D8E2] rounded-2xl grid place-content-center p-5">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5">
                <FormField
                  control={form.control}
                  name="companyaddress"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Company Address:</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                          placeholder="As written on your registration documents"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companywebsite"
                  render={({ field }) => (
                    <FormItem className="py-2 w-full">
                      <FormLabel>Company Website</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] w-[100%]"
                          placeholder="www.example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companydescription"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Company Description</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] h-[80px]"
                          placeholder="Company Description"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyincorporatedin"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>
                        What country was the company incorporated:
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                          placeholder="eg . Nigeria"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormLabel>Upload Business Plan</FormLabel>
                <UploadComponent
                  file={files.businessPlan}
                  handleUpload={handleUpload}
                  fileType="businessPlan"
                  accept={{ "application/pdf": [".pdf"] }}
                  maxSize={5 * 1024 * 1024}
                  label="Upload Business Plan (PDF only)"
                />
                <br />
                <br className="lg:hidden" />

                <FormLabel>Upload Pitch Deck</FormLabel>
                <UploadComponent
                  file={files.pitchDeck}
                  handleUpload={handleUpload}
                  fileType="pitchDeck"
                  maxSize={5 * 1024 * 1024}
                  label="Upload Pitch Deck Plan (PDF only)"
                />
                <br />
                <br className="lg:hidden" />
                <FormLabel>Upload 5min Demo Video</FormLabel>
                <UploadComponent
                  file={files.demoVideo}
                  handleUpload={handleUpload}
                  fileType="demoVideo"
                  maxSize={5 * 1024 * 1024}
                  label="Upload Demo Video Deck Plan (Video only)"
                />
                <br />
                <br className="lg:hidden" />

                <FormLabel>Upload Company Logo</FormLabel>

                <UploadComponent
                  file={files.companyLogo}
                  handleUpload={handleUpload}
                  fileType="companyLogo"
                  maxSize={5 * 1024 * 1024}
                  label="Upload Company Logo (Image only)"
                />
                <br />
                <br className="lg:hidden" />

                <FormLabel>Upload Evidence of Company Registration</FormLabel>
                <UploadComponent
                  file={files.companyRegistration}
                  handleUpload={handleUpload}
                  fileType="companyRegistration"
                  maxSize={5 * 1024 * 1024}
                  label="Upload Company Registration  (PDF only)"
                />
                <br />
                <br className="lg:hidden" />

                <FormField
                  control={form.control}
                  name="threeorfivepointswhycompanyisagoodinvestment"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>
                        Please provide 3-5 bullet points elaborating on why your
                        company is a good investment for prospective investors .
                        (note: each bullet point should not exceed two
                        sentences)
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] h-[150px]"
                          placeholder=""
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  // loading={isCreatingCompanyInformation}
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
