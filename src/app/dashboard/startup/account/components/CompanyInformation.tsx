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
  CompanyInformationSchema,
  CompanyInformationValidation,
} from "@/lib/validations/account";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import { FileWithPath } from "react-dropzone";
import UploadComponent from "./UploadComponent";
import MobileStepper from "../../components/MobileStepper";
import useUserAuth from "@/hooks/auth/useAuth";
import useAccount from "../hooks/useAccount";

interface Files {
  businessPlan: FileWithPath | null;
  pitchDeck: FileWithPath | null;
  demoVideo: FileWithPath | null;
  companyLogo: FileWithPath | null;
  companyRegistration: FileWithPath | null;
}

interface Props {
  handleNext: () => void;
  handleBack: () => void;
  files: Files;
  setFiles: React.Dispatch<React.SetStateAction<Files>>;
}

const CompanyInformation = ({
  handleNext,
  handleBack,
  files,
  setFiles,
}: Props) => {
  const form = useForm<CompanyInformationValidation>({
    resolver: zodResolver(CompanyInformationSchema),
  });

  const { user } = useUserAuth();
  const creatorId = user?.userId as string;
  const {
    createCompanyInformation,
    isCreatingCompanyInformation,
    createdCompanyInfo,
    accountInformation,
  } = useAccount(creatorId);

  const { toast } = useToast();

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

  const onSubmit = (values: CompanyInformationValidation) => {
    if (Object.values(files).some((file) => !file)) {
      toast({
        variant: "destructive",
        title: "Missing files",
        description: "Please upload all required files.",
      });
      return;
    }

    const createCompanyInformationDto = new FormData();
    createCompanyInformationDto.append("company_name", values.companyname);
    createCompanyInformationDto.append("company_email", values.contactemail);
    createCompanyInformationDto.append(
      "company_address",
      values.companyaddress
    );
    createCompanyInformationDto.append(
      "company_website",
      values.companywebsite
    );
    createCompanyInformationDto.append("company_industry", values.industry);
    createCompanyInformationDto.append(
      "company_phone",
      values.companyphonenumber as string
    );
    createCompanyInformationDto.append("company_city", values.cityofoperation);
    createCompanyInformationDto.append(
      "company_geography",
      values.geographicfocus
    );
    createCompanyInformationDto.append("company_desc", values.companyaddress);
    createCompanyInformationDto.append(
      "company_bullet_point",
      values.threeorfivepointswhycompanyisagoodinvestment
    );
    createCompanyInformationDto.append("country", values.companyincorporatedin);
    createCompanyInformationDto.append(
      "company_business_plan",
      files.businessPlan as File
    );
    createCompanyInformationDto.append(
      "company_pitchDeck",
      files.pitchDeck as File
    );
    createCompanyInformationDto.append(
      "company_video",
      files.demoVideo as File
    );
    createCompanyInformationDto.append(
      "company_logo",
      files.companyLogo as File
    );
    createCompanyInformationDto.append(
      "company_cac",
      files.companyRegistration as File
    );

    const payload = {
      creatorId,
      createCompanyInformationDto,
    };
    // handleNext();
    createCompanyInformation(payload);
  };

  useEffect(() => {
    if (createdCompanyInfo) {
      handleNext();
    }
  }, [createdCompanyInfo]);

  useEffect(() => {
    if (accountInformation?.companyInformation?.id) {
      const {
        company_name,
        company_email,
        company_address,
        company_website,
        company_industry,
        company_phone,
        company_city,
        company_geography,
        company_desc,
        company_bullet_point,
        // country,
      } = accountInformation.companyInformation;
      form.setValue("companyname", company_name);
      form.setValue("contactemail", company_email);
      form.setValue("companyaddress", company_address);
      form.setValue("companywebsite", company_website);
      form.setValue("industry", company_industry);
      form.setValue("companyphonenumber", company_phone);
      form.setValue("cityofoperation", company_city);
      form.setValue("geographicfocus", company_geography);
      form.setValue("companydescription", company_desc);
      form.setValue(
        "threeorfivepointswhycompanyisagoodinvestment",
        company_bullet_point
      );
      // form.setValue("companyincorporatedin", country);
    }
  }, [accountInformation, form]);
  return (
    <div className="w-full px-6">
      <h2 className="text-[#0F172A] text-[24px] font-medium text-center lg:text-left">
        Company Information
      </h2>

      <MobileStepper numberOfSteps={6} currentStep={3} />

      <div className="mt-8 border border-solid border-[#D8D8E2] rounded-2xl grid place-content-center p-5 lg:p-12">
        <div className="mb-3 flex gap-12 flex-wrap justify-center mt-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="md:w-[700px] sm:w-[500px]"
            >
              <FormField
                control={form.control}
                name="companyname"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-">
                    <FormLabel>Legal Company Name:</FormLabel>
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
                name="contactemail"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Contact Email Address:</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Eg; keneeneh@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col md:flex-row md:justify-between w-full lg:space-x-12">
                <FormField
                  control={form.control}
                  name="companywebsite"
                  render={({ field }) => (
                    <FormItem className="py-2 w-full lg:w-[50%]">
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
                  name="companyphonenumber"
                  render={({ field }) => (
                    <FormItem className="py-2 w-full lg:w-[50%]">
                      <FormLabel>Company Phone Number:</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] w-[100%]"
                          placeholder="+234 0997868474"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col md:flex-row md:justify-between w-full lg:space-x-12">
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem className="py-2 w-full lg:w-[50%]">
                      <FormLabel>Industry/Sector</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] w-[100%]"
                          placeholder="eg . farmer"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="yearofincorporation"
                  render={({ field }) => (
                    <FormItem className="py-2 w-full lg:w-[50%]">
                      <FormLabel>Year of Oncorporation</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] w-[100%]"
                          type="date"
                          placeholder="eg : 12/1:/2020"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col md:flex-row md:justify-between w-full lg:space-x-12">
                <FormField
                  control={form.control}
                  name="geographicfocus"
                  render={({ field }) => (
                    <FormItem className="py-2 w-full lg:w-[50%]">
                      <FormLabel>Geographic Focus</FormLabel>
                      <FormControl>
                        <Input
                          type="textarea"
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] w-[100%]"
                          placeholder="eg . kampala"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cityofoperation"
                  render={({ field }) => (
                    <FormItem className="py-2 w-full lg:w-[50%]">
                      <FormLabel>City of Operations</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] w-[100%]"
                          placeholder="eg.abuja , lagos"
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

              <FormField
                control={form.control}
                name="threeorfivepointswhycompanyisagoodinvestment"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>
                      Please provide 3-5 bullet points elaborating on why your
                      company is a good investment for prospective investors .
                      (note: each bullet point should not exceed two sentences)
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
                  loading={isCreatingCompanyInformation}
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

export default CompanyInformation;
