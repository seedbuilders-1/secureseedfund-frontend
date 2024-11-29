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
import { useState } from "react";
import { KycSchema, KycValidation } from "@/lib/validations/account";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import { FileWithPath } from "react-dropzone";
import UploadComponent from "./UploadComponent";
import MobileStepper from "../../components/MobileStepper";
import useUserAuth from "@/hooks/auth/useAuth";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useStartupControllerCreateKycMutation } from "@/services/startup";
import useAccount from "../hooks/useAccount";

interface Files {
  govt_photo_id: FileWithPath | null;
  proof_of_address: FileWithPath | null;
  memo_assoc: FileWithPath | null;
  article_assoc: FileWithPath | null;
  business_address: FileWithPath | null;
  dir_company_address: FileWithPath | null;
  company_status_report: FileWithPath | null;
  shareholders_address: FileWithPath | null;
}

interface Props {
  handleNext: () => void;
  handleBack: () => void;
  kycFiles: Files;
  setKycFiles: React.Dispatch<React.SetStateAction<Files>>;
}
interface Preview {
  govt_photo_id: string | null;
  memo_assoc: string | null;
  article_assoc: string | null;
  business_address: string | null;
  company_status_report: string | null;
  shareholders_address: string | null;
}

const Kyc = ({ handleNext, handleBack, kycFiles, setKycFiles }: Props) => {
  const form = useForm<KycValidation>({
    resolver: zodResolver(KycSchema),
  });

  const { user } = useUserAuth();
  const creatorId = user?.userId as string;
  const [
    createKycInfo,
    { isLoading: isCreatingKycInfo, isSuccess: createdKycInfo },
  ] = useStartupControllerCreateKycMutation();

  const { accountInformation } = useAccount(creatorId);

  const { toast } = useToast();

  const handleUpload = (acceptedFiles: FileWithPath[], fileType: string) => {
    const uploadedFile = acceptedFiles[0];
    const { type } = uploadedFile;

    const fileTypeValidation: Record<string, string[]> = {
      govt_photo_id: ["image/"],
      memo_assoc: ["application/pdf"],
      article_assoc: ["application/pdf"],
      business_address: ["image/"],
      company_status_report: ["application/pdf"],
      shareholders_address: ["image/"],
    };

    if (
      fileTypeValidation[fileType].some((validType) =>
        type.startsWith(validType)
      )
    ) {
      setKycFiles((prev) => ({ ...prev, [fileType]: uploadedFile }));
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

  const [preview, setPreview] = useState<Preview>({
    govt_photo_id: null,
    article_assoc: null,
    memo_assoc: null,
    business_address: null,
    company_status_report: null,
    shareholders_address: null,
  });

  const onSubmit = (values: KycValidation) => {
    if (
      (!kycFiles.govt_photo_id && !preview.govt_photo_id) ||
      (!kycFiles.memo_assoc && !preview.memo_assoc) ||
      (!kycFiles.article_assoc && !preview.article_assoc) ||
      (!kycFiles.company_status_report && !preview.company_status_report) ||
      (!kycFiles.shareholders_address && !preview.shareholders_address) ||
      (!kycFiles.business_address && !preview.business_address)
    ) {
      toast({
        variant: "destructive",
        title: "Missing information",
        description:
          "Please upload all required files or ensure previews are available.",
      });
      return;
    }
    const createKycInformationDto = new FormData();
    createKycInformationDto.append(
      "source_of_income",
      values.source_of_income as string
    );
    createKycInformationDto.append(
      "politically_exposed_person",
      values.politically_exposed_person as string
    );
    createKycInformationDto.append("tin", values.tin as string);

    if (kycFiles.govt_photo_id) {
      createKycInformationDto.append("govt_photo_id", kycFiles.govt_photo_id);
    }

    if (kycFiles.memo_assoc) {
      createKycInformationDto.append("memo_assoc", kycFiles.memo_assoc);
    }
    if (kycFiles.article_assoc) {
      createKycInformationDto.append("article_assoc", kycFiles.article_assoc);
    }
    if (kycFiles.business_address) {
      createKycInformationDto.append(
        "business_address",
        kycFiles.business_address
      );
    }

    if (kycFiles.company_status_report) {
      createKycInformationDto.append(
        "company_status_report",
        kycFiles.company_status_report
      );
    }
    if (kycFiles.shareholders_address) {
      createKycInformationDto.append(
        "shareholders_address",
        kycFiles.shareholders_address
      );
    }
    const payload = {
      creatorId: creatorId,
      createKycDto: createKycInformationDto,
    };
    // @ts-ignore
    createKycInfo(payload);
  };

  useEffect(() => {
    if (createdKycInfo) {
      handleNext();
    }
  }, [createdKycInfo]);

  useEffect(() => {
    if (accountInformation?.kycInformation?.id) {
      const {
        govt_photo_id,
        memo_assoc,
        article_assoc,
        business_address,
        company_status_report,
        shareholders_address,
        source_of_income,
        politically_exposed_person,
        tin,
      } = accountInformation.kycInformation;

      form.setValue("source_of_income", source_of_income);
      form.setValue("politically_exposed_person", politically_exposed_person);
      form.setValue("tin", tin);
      setPreview({
        govt_photo_id: govt_photo_id || null,
        memo_assoc: memo_assoc || null,
        article_assoc: article_assoc || null,
        business_address: business_address || null,
        company_status_report: company_status_report || null,
        shareholders_address: shareholders_address || null,
      });
    }
  }, [accountInformation, form]);
  return (
    <div className="w-full px-6">
      <h2 className="text-[#0F172A] text-[24px] font-medium text-center lg:text-left">
        KYC Information
      </h2>

      <MobileStepper numberOfSteps={7} currentStep={2} />

      <div className="mt-8 border border-solid border-[#D8D8E2] rounded-2xl grid place-content-center p-5 lg:p-12">
        <div className="mb-3 flex gap-12 flex-wrap justify-center mt-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="md:w-[700px] sm:w-[500px]"
            >
              <FormLabel>Upload Government Photo Id</FormLabel>
              <UploadComponent
                file={kycFiles.govt_photo_id}
                previewUrl={preview.govt_photo_id ?? undefined}
                handleUpload={handleUpload}
                fileType="govt_photo_id"
                accept={{ "images/": [".jpeg, .jpg, .png"] }}
                maxSize={5 * 1024 * 1024}
                label="Upload GOvernment Photo Id (Image only)"
              />
              <br />
              <br className="lg:hidden" />

              <FormLabel>Upload Memorandum of Association</FormLabel>
              <UploadComponent
                file={kycFiles.memo_assoc}
                handleUpload={handleUpload}
                previewUrl={preview.memo_assoc ?? undefined}
                fileType="memo_assoc"
                maxSize={30 * 1024 * 1024}
                label="Upload Memorandum and Article of Association(PDF only)"
              />
              <br />
              <br className="lg:hidden" />

              <FormLabel>Upload Article of Association</FormLabel>
              <UploadComponent
                file={kycFiles.article_assoc}
                handleUpload={handleUpload}
                previewUrl={preview.article_assoc ?? undefined}
                fileType="article_assoc"
                maxSize={30 * 1024 * 1024}
                label="Upload Memorandum and Article of Association(PDF only)"
              />
              <br />
              <br className="lg:hidden" />

              <FormLabel>Upload Company Status Report</FormLabel>
              <UploadComponent
                file={kycFiles.company_status_report}
                handleUpload={handleUpload}
                previewUrl={preview.company_status_report ?? undefined}
                fileType="company_status_report"
                maxSize={30 * 1024 * 1024}
                label="Upload Proof of Comapny Director's Address (Pdf only)"
              />
              <br />
              <br className="lg:hidden" />

              <FormLabel>Upload Proof of Business Address</FormLabel>

              <UploadComponent
                file={kycFiles.business_address}
                handleUpload={handleUpload}
                previewUrl={preview.business_address ?? undefined}
                fileType="business_address"
                maxSize={5 * 1024 * 1024}
                label="Upload Proof of Business Address (Image only)"
              />
              <br />
              <br className="lg:hidden" />

              <FormLabel>
                Upload Proof of Shareholders Address of that own 51% shares and
                above
              </FormLabel>
              <UploadComponent
                file={kycFiles.shareholders_address}
                handleUpload={handleUpload}
                previewUrl={preview.shareholders_address ?? undefined}
                fileType="shareholders_address"
                maxSize={30 * 1024 * 1024}
                label="Upload Proof of Shareholders Address (Image only)"
              />
              <br />
              <br className="lg:hidden" />

              <FormField
                control={form.control}
                name="source_of_income"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-">
                    <FormLabel>Source of Funds:</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Source of funds?"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tin"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Tax Identification Number:</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Enter your tax identification number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="politically_exposed_person"
                render={({ field }) => (
                  <FormItem className="py-2 w-full lg:w-[100%]">
                    <FormLabel>Are you a politically exposed person?</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => field.onChange(value)}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full capitalize">
                          <SelectValue placeholder="Are you a politically exposed person?" />
                        </SelectTrigger>
                        <SelectContent className="w-full bg-white">
                          <SelectGroup>
                            {["Yes", "No"].map((opt: string, idx: number) => (
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
              <div className="flex">
                <Button
                  className="w-full md:w-[30%] rounded-3xl mt-8
                mr-2"
                  variant="outline"
                  onClick={() => handleBack}
                >
                  Back
                </Button>

                <Button
                  type="submit"
                  loading={isCreatingKycInfo}
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

export default Kyc;
