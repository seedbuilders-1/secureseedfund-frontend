"use client";

import useUserAuth from "@/hooks/auth/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileWithPath } from "react-dropzone";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import UploadComponent from "@/app/dashboard/startup/account/components/UploadComponent";
import {
  InstitutionKycSchema,
  InstitutionKycValidation,
} from "@/lib/validations/account";
import { useInstitutionControllerCreateInstitutionKycMutation } from "@/services/institution";
import { useGetInstitutionQuery } from "@/services/institution";

interface Files {
  govt_photo_id: FileWithPath | null;
  proof_of_address: FileWithPath | null;
  article_assoc: FileWithPath | null;
  memo_assoc: FileWithPath | null;
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
  proof_of_address: string | null;
  article_assoc: string | null;
  memo_assoc: string | null;
  business_address: string | null;
  dir_company_address: string | null;
  company_status_report: string | null;
  shareholders_address: string | null;
}

const InstitutionKyc = ({
  handleNext,
  kycFiles,
  setKycFiles,
  handleBack,
}: Props) => {
  const form = useForm<InstitutionKycValidation>({
    resolver: zodResolver(InstitutionKycSchema),
  });

  const { user } = useUserAuth();
  const creatorId = user?.userId as string;
  const [
    createKycInfo,
    { isLoading: isCreatingKycInfo, isSuccess: createdKycInfo },
  ] = useInstitutionControllerCreateInstitutionKycMutation();

  const { data: institutionInfo } = useGetInstitutionQuery({ id: creatorId });

  const { toast } = useToast();

  const handleUpload = (acceptedFiles: FileWithPath[], fileType: string) => {
    const uploadedFile = acceptedFiles[0];
    const { type } = uploadedFile;

    const fileTypeValidation: Record<string, string[]> = {
      govt_photo_id: ["image/"],
      proof_of_address: ["image/"],
      article_assoc: ["application/pdf"],
      memo_assoc: ["application/pdf"],
      business_address: ["image/"],
      dir_company_address: ["image/"],
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
    proof_of_address: null,
    article_assoc: null,
    memo_assoc: null,
    business_address: null,
    dir_company_address: null,
    company_status_report: null,
    shareholders_address: null,
  });

  const onSubmit = (values: InstitutionKycValidation) => {
    if (
      (!kycFiles.govt_photo_id && !preview.govt_photo_id) ||
      (!kycFiles.proof_of_address && !preview.proof_of_address) ||
      (!kycFiles.article_assoc && !preview.article_assoc) ||
      (!kycFiles.memo_assoc && !preview.memo_assoc) ||
      (!kycFiles.business_address && !preview.business_address) ||
      (!kycFiles.dir_company_address && !preview.dir_company_address) ||
      (!kycFiles.company_status_report && !preview.company_status_report) ||
      (!kycFiles.shareholders_address && !preview.shareholders_address)
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
    createKycInformationDto.append("source_of_income", values.source_of_income);
    createKycInformationDto.append(
      "politically_exposed_person",
      values.politically_exposed_person
    );

    createKycInformationDto.append("phone_number", values.phone_number);
    createKycInformationDto.append("full_legal_name", values.full_legal_name);
    createKycInformationDto.append("email", values.email);
    createKycInformationDto.append(
      "company_reg_number",
      values.company_reg_number
    );

    createKycInformationDto.append("tin", values.tin as string);

    if (kycFiles.proof_of_address) {
      createKycInformationDto.append(
        "proof_of_address",
        kycFiles.proof_of_address
      );
    }
    if (kycFiles.govt_photo_id) {
      createKycInformationDto.append("govt_photo_id", kycFiles.govt_photo_id);
    }
    if (kycFiles.article_assoc) {
      createKycInformationDto.append("article_assoc", kycFiles.article_assoc);
    }
    if (kycFiles.memo_assoc) {
      createKycInformationDto.append("memo_assoc", kycFiles.memo_assoc);
    }
    if (kycFiles.business_address) {
      createKycInformationDto.append(
        "business_address",
        kycFiles.business_address
      );
    }
    if (kycFiles.dir_company_address) {
      createKycInformationDto.append(
        "dir_company_address",
        kycFiles.dir_company_address
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
      createInstitutionKycDto: createKycInformationDto,
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
    if (institutionInfo?.institutionKycInfo?.id) {
      const {
        govt_photo_id,
        proof_of_address,
        source_of_income,
        politically_exposed_person,
        article_assoc,
        memo_assoc,
        business_address,
        dir_company_address,
        company_status_report,
        shareholders_address,
        tin,
        email,
        company_reg_number,
        full_legal_name,
        phone_number,
      } = institutionInfo.institutionKycInfo;

      form.setValue("source_of_income", source_of_income);
      form.setValue("politically_exposed_person", politically_exposed_person);
      form.setValue("company_reg_number", company_reg_number);
      form.setValue("tin", tin);
      form.setValue("full_legal_name", full_legal_name);
      form.setValue("phone_number", phone_number);
      form.setValue("email", email);
      setPreview({
        govt_photo_id: govt_photo_id || null,
        proof_of_address: proof_of_address || null,
        article_assoc: article_assoc || null,
        memo_assoc: memo_assoc || null,
        business_address: business_address || null,
        dir_company_address: dir_company_address || null,
        company_status_report: company_status_report || null,
        shareholders_address: shareholders_address || null,
      });
    }
  }, [institutionInfo, form]);
  return (
    <div className="w-full px-6">
      <h2 className="text-[#0F172A] text-[24px] font-medium text-center lg:text-left">
        KYC Information
      </h2>

      <MobileStepper numberOfSteps={3} currentStep={2} />

      <div className="mt-8 border border-solid border-[#D8D8E2] rounded-2xl grid place-content-center p-5 lg:p-12">
        <div className="mb-3 flex gap-12 flex-wrap justify-center mt-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="md:w-[700px] sm:w-[500px]"
            >
              <FormField
                control={form.control}
                name="full_legal_name"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Full Legal Name:</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Please Enter your Full Legal Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Email Address:</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Please Enter your your email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <FormLabel>Upload Proof of Address</FormLabel>
              <UploadComponent
                previewUrl={preview.proof_of_address ?? undefined}
                file={kycFiles.proof_of_address}
                handleUpload={handleUpload}
                fileType="proof_of_address"
                maxSize={5 * 1024 * 1024}
                label="Upload Proof of Address (Image only)"
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
                label="Upload Company Status Report (PDF only)"
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
              <FormLabel>Upload Proof of Company Director Address</FormLabel>
              <UploadComponent
                file={kycFiles.dir_company_address}
                handleUpload={handleUpload}
                previewUrl={preview.dir_company_address ?? undefined}
                fileType="dir_company_address"
                maxSize={5 * 1024 * 1024}
                label="Upload Proof of Company Director Address Address (Image only)"
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
                label="Upload Proof of Shareholders Address (PDF only)"
              />
              <br />
              <br className="lg:hidden" />
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Phone Number:</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Enter your phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                name="company_reg_number"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Company Registration Number:</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Enter your Company Registration Number"
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
                  onClick={handleBack}
                  type="button"
                  className="w-full md:w-[30%] rounded-3xl bg-[#241A3F] mt-8"
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

export default InstitutionKyc;
