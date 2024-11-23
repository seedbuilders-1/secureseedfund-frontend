"use client";

import useUserAuth from "@/hooks/auth/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileWithPath } from "react-dropzone";
import { useForm } from "react-hook-form";
import useAccount from "../hooks/useAccount";
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
  InvestorKycSchema,
  InvestorKycValidation,
} from "@/lib/validations/account";
import { useInvestorControllerCreateInvestorKycMutation } from "@/services/investor";

interface Files {
  govt_photo_id: FileWithPath | null;
  proof_of_address: FileWithPath | null;
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
}

const InvestorKyc = ({
  handleNext,
  kycFiles,
  setKycFiles,
  handleBack,
}: Props) => {
  const form = useForm<InvestorKycValidation>({
    resolver: zodResolver(InvestorKycSchema),
  });

  const { user } = useUserAuth();
  const creatorId = user?.userId as string;
  const [
    createKycInfo,
    { isLoading: isCreatingKycInfo, isSuccess: createdKycInfo },
  ] = useInvestorControllerCreateInvestorKycMutation();

  const { investorInformation } = useAccount(creatorId);

  const { toast } = useToast();

  const handleUpload = (acceptedFiles: FileWithPath[], fileType: string) => {
    const uploadedFile = acceptedFiles[0];
    const { type } = uploadedFile;

    const fileTypeValidation: Record<string, string[]> = {
      govt_photo_id: ["image/"],
      proof_of_address: ["image/"],
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
  });

  const onSubmit = (values: InvestorKycValidation) => {
    if (
      (!kycFiles.govt_photo_id && !preview.govt_photo_id) ||
      (!kycFiles.proof_of_address && !preview.proof_of_address)
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

    if (kycFiles.proof_of_address) {
      createKycInformationDto.append(
        "proof_of_address",
        kycFiles.proof_of_address
      );
    }
    if (kycFiles.govt_photo_id) {
      createKycInformationDto.append("govt_photo_id", kycFiles.govt_photo_id);
    }
    const payload = {
      creatorId: creatorId,
      createInvestorKycDto: createKycInformationDto,
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
    if (investorInformation?.kycInformation?.id) {
      const {
        govt_photo_id,
        proof_of_address,
        source_of_income,
        politically_exposed_person,
      } = investorInformation.kycInformation;

      form.setValue("source_of_income", source_of_income);
      form.setValue("politically_exposed_person", politically_exposed_person);
      setPreview({
        govt_photo_id: govt_photo_id || null,
        proof_of_address: proof_of_address || null,
      });
    }
  }, [investorInformation, form]);
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
                label="Upload Proof of Address (PDF only)"
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

export default InvestorKyc;
