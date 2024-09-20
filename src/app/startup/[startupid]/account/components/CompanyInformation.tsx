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
import { useUploadfileMutation } from "@/services/fileupload";
import { useEffect, useState } from "react";
import { FileWithPath } from "react-dropzone";
import UploadComponent from "./UploadComponent";
import MobileStepper from "../../../components/MobileStepper";

interface Props {
  companyDetails: CompanyInformationValidation;
  handleCompanyInformation: (v: CompanyInformationValidation) => void;
  handleNext: () => void;
  handleBack: () => void;
}

const CompanyInformation = ({
  companyDetails,
  handleNext,
  handleCompanyInformation,
  handleBack,
}: Props) => {
  const form = useForm<CompanyInformationValidation>({
    resolver: zodResolver(CompanyInformationSchema),
    defaultValues: companyDetails,
  });

  const onSubmit = (values: CompanyInformationValidation) => {
    if (
      !businessPlanUrl ||
      !pitchDeckUrl ||
      !demoVideoUrl ||
      !companyLogoUrl ||
      !companyRegistrationUrl
    ) {
      return toast({
        variant: "destructive",
        title: "Double check.",
        description: "Some file uploads are missing",
      });
    }
    handleCompanyInformation(values);
    handleNext();
  };

  const { toast } = useToast();
  const [fileUpload, { error: uploadError }] = useUploadfileMutation();
  const [businessPlanFile, setBusinessPlanFile] = useState<FileWithPath | null>(
    null
  );
  const [businessPlanUrl, setBusinessPlanUrl] = useState<string>("");
  const [pitchDeckFile, setPitchDeckFile] = useState<FileWithPath | null>(null);
  const [pitchDeckUrl, setPitchDeckUrl] = useState<string>("");
  const [demoVideoFile, setDemoVideoFile] = useState<FileWithPath | null>(null);
  const [demoVideoUrl, setDemoVideoUrl] = useState<string>("");
  const [companyLogoFile, setCompanyLogoFile] = useState<FileWithPath | null>(
    null
  );
  const [companyLogoUrl, setCompanyLogoUrl] = useState<string>("");
  const [companyRegistrationFile, setCompanyRegistrationFile] =
    useState<FileWithPath | null>(null);
  const [companyRegistrationUrl, setCompanyRegistrationUrl] =
    useState<string>("");

  useEffect(() => {
    if (uploadError) {
      toast({
        variant: "destructive",
        title: `${"unable to upload file please try again"}`,
      });
      setBusinessPlanFile(null);
      setDemoVideoFile(null);
      setPitchDeckFile(null);
      setCompanyLogoFile(null);
      setCompanyRegistrationFile(null);
    }
  }, [uploadError]);

  const handleUpload = async (
    acceptedFiles: FileWithPath[],
    fileType: string
  ) => {
    const uploadedFile = acceptedFiles[0];
    // setBusinessPlanFile(uploadedFile);
    if (fileType === "businessPlan") {
      setBusinessPlanFile(uploadedFile);
    } else if (fileType === "demoVideo") {
      setDemoVideoFile(uploadedFile);
    } else if (fileType === "pitchDeck") {
      setPitchDeckFile(uploadedFile);
    } else if (fileType === "companyLogo") {
      setCompanyLogoFile(uploadedFile);
    } else {
      setCompanyRegistrationFile(uploadedFile);
    }

    const formData = new FormData();
    formData.append("file", uploadedFile);
    const res = await fileUpload(formData).unwrap();

    if (fileType === "businessPlan") {
      setBusinessPlanUrl(res);
    } else if (fileType === "demoVideo") {
      setDemoVideoUrl(res);
    } else if (fileType === "pitchDeck") {
      setPitchDeckUrl(res);
    } else if (fileType === "companyLogo") {
      setCompanyLogoUrl(res);
    } else {
      setCompanyRegistrationUrl(res);
    }
  };
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
                  name="companyphonenumber"
                  render={({ field }) => (
                    <FormItem className="py-2 w-full lg:w-[50%]">
                      <FormLabel>Company Phone Number:</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] w-[100%]"
                          placeholder="+234"
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
                  name="yearofincorporation"
                  render={({ field }) => (
                    <FormItem className="py-2 w-full lg:w-[50%]">
                      <FormLabel>Year of Oncorporation</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] w-[100%]"
                          type="number"
                          placeholder=""
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
                  name="cityofoperation"
                  render={({ field }) => (
                    <FormItem className="py-2 w-full lg:w-[50%]">
                      <FormLabel>City of Operations</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] w-[100%]"
                          placeholder="City of Operations"
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
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] h-[150px]"
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
                imageUrl={businessPlanUrl}
                file={businessPlanFile}
                handleUpload={(files) => handleUpload(files, "businessPlan")}
              />
              <br />
              <br className="lg:hidden" />

              <FormLabel>Upload Pitch Deck</FormLabel>
              <UploadComponent
                imageUrl={pitchDeckUrl}
                file={pitchDeckFile}
                handleUpload={(files) => handleUpload(files, "pitchDeck")}
              />
              <br />
              <br className="lg:hidden" />
              <FormLabel>Upload 5min Demo Video</FormLabel>
              <UploadComponent
                imageUrl={demoVideoUrl}
                file={demoVideoFile}
                handleUpload={(files) => handleUpload(files, "demoVideo")}
              />
              <br />
              <br className="lg:hidden" />

              <FormLabel>Upload Company Logo</FormLabel>
              <UploadComponent
                imageUrl={companyLogoUrl}
                file={companyLogoFile}
                handleUpload={(files) => handleUpload(files, "companyLogo")}
              />
              <br />
              <br className="lg:hidden" />

              <FormLabel>Upload Evidence of Company Registration</FormLabel>

              <UploadComponent
                imageUrl={companyRegistrationUrl}
                file={companyRegistrationFile}
                handleUpload={(files) =>
                  handleUpload(files, "companyRegistration")
                }
              />
              <br />
              <br className="lg:hidden" />

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

export default CompanyInformation;
