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
import UserEmptyState from "@/assets/iconspng/ImageEmptyState.svg";
import {
  AccountSettingsSchema,
  AccountSettingsValidation,
} from "@/lib/validations/account";
import { useEffect, useState } from "react";
import { FileWithPath } from "react-dropzone";
import UploadComponent from "./UploadComponent";
import Image from "next/image";
import useAccount from "../hooks/useAccount";
import useUserAuth from "@/hooks/auth/useAuth";
import { BiImageAdd } from "react-icons/bi";
import { File } from "buffer";

interface Props {
  accountInformation: Startup | undefined;
}
interface UploadFiles {
  businessPlan: FileWithPath | null;
  pitchDeck: FileWithPath | null;
  demoVideo: FileWithPath | null;
  companyLogo: FileWithPath | null;
  companyRegistration: FileWithPath | null;
}
const AccountSettings = ({ accountInformation }: Props) => {
  const { toast } = useToast();
  const [profileImageFile, setProfileImageFile] = useState<
    string | FileWithPath | null
  >(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { user } = useUserAuth();
  const [files, setFiles] = useState<UploadFiles>({
    businessPlan: null,
    pitchDeck: null,
    demoVideo: null,
    companyLogo: null,
    companyRegistration: null,
  });
  const { updateAccountSetting, isUpdatingAccountSettings } = useAccount();
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

  const creatorId = user?.userId as string;

  const onSubmit = (values: AccountSettingsValidation) => {
    if (Object.values(files).some((file) => !file)) {
      toast({
        variant: "destructive",
        title: "Missing files",
        description: "Please upload all required files.",
      });
      return;
    }

    const updateNewCompanyInformationDto = new FormData();
    updateNewCompanyInformationDto.append(
      "company_address",
      values.companyaddress
    );
    updateNewCompanyInformationDto.append(
      "company_website",
      values.companywebsite
    );
    updateNewCompanyInformationDto.append(
      "company_desc",
      values.companyaddress
    );
    updateNewCompanyInformationDto.append(
      "company_bullet_point",
      values.threeorfivepointswhycompanyisagoodinvestment
    );
    updateNewCompanyInformationDto.append(
      "country",
      values.companyincorporatedin
    );
    updateNewCompanyInformationDto.append(
      "company_business_plan",
      files.businessPlan as File
    );
    updateNewCompanyInformationDto.append(
      "company_pitchDeck",
      files.pitchDeck as File
    );
    updateNewCompanyInformationDto.append(
      "company_video",
      files.demoVideo as File
    );
    updateNewCompanyInformationDto.append(
      "company_logo",
      files.companyLogo as File
    );
    updateNewCompanyInformationDto.append(
      "company_cac",
      files.companyRegistration as File
    );

    const payload = {
      creatorId,
      updateNewCompanyInformationDto,
    };
    updateAccountSetting(payload);
  };

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
          linkTitle="Uprade Now"
          title={`Hello ${user?.firstName}, you are currently on thr free plan which allows you to set up and account with us, 
kindly upgrade to a paid plan to enjoy more features`}
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
                  loading={isUpdatingAccountSettings}
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
