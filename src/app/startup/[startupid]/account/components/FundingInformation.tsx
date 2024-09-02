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
  FundingInformationSchema,
  FundingInformationValidation,
} from "@/lib/validations/account";
import { useEffect, useState } from "react";
import { FileWithPath } from "react-dropzone";
import { useToast } from "@/components/ui/use-toast";
import { useUploadfileMutation } from "@/services/fileupload";
import UploadComponent from "./UploadComponent";
import MobileStepper from "../../../components/MobileStepper";

interface Props {
  fundingDetails: FundingInformationValidation;
  handleFundingInformation: (v: FundingInformationValidation) => void;
  handleNext: () => void;
  handleBack: () => void;
}

const FundingInformation = ({
  fundingDetails,
  handleNext,
  handleFundingInformation,
  handleBack,
}: Props) => {
  const form = useForm<FundingInformationValidation>({
    resolver: zodResolver(FundingInformationSchema),
    defaultValues: fundingDetails,
  });

  const [fileUpload, { error: uploadError }] = useUploadfileMutation();
  const { toast } = useToast();

  const [financialUrl, setFinancialUrl] = useState<string>("");
  const [financialFile, setFinancialFile] = useState<FileWithPath | null>(null);

  useEffect(() => {
    if (uploadError) {
      toast({
        variant: "destructive",
        title: `${"unable to upload file please try again"}`,
      });
      setFinancialFile(null);
    }
  }, [uploadError]);

  const handleUpload = async (
    acceptedFiles: FileWithPath[],
    fileType: string
  ) => {
    const uploadedFile = acceptedFiles[0];
    if (fileType === "financialStatement") {
      setFinancialFile(uploadedFile);
    }
    const formData = new FormData();
    formData.append("file", uploadedFile);
    const res = await fileUpload(formData).unwrap();

    if (fileType === "financialStatement") {
      setFinancialUrl(res);
    }
  };

  const onSubmit = (values: FundingInformationValidation) => {
    handleFundingInformation(values);
    if (!financialUrl) {
      return toast({
        variant: "destructive",
        title: "Double check.",
        description: "Upload your financial statement",
      });
    }
    handleNext();
  };
  return (
    <div className="w-full px-6">
      <h2 className="text-[#0F172A] text-[24px] font-medium text-center lg:text-left">
        Funding Information
      </h2>

      <MobileStepper numberOfSteps={6} currentStep={5} />

      <div className="mt-8 border border-solid border-[#D8D8E2] rounded-2xl grid place-content-center p-5 lg:p-12">
        <div className="mb-3 flex gap-12 flex-wrap justify-center mt-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="md:w-[700px] sm:w-[500px]"
            >
              <FormField
                control={form.control}
                name="fundingreceivedfromangelinvestororventurecapitalists"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-">
                    <FormLabel>
                      Have you received external funding from Angel Investors or
                      Venture Capitalists?:
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.9rem] rounded-[48px]"
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
                name="companypostmoneyvaluation"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>If yes, Company Post Money Valuation:</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.9rem] rounded-[48px]"
                        placeholder="(In USD)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rationaleforcompanyvaluation"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Rationale for Company Valuation?</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.9rem] rounded-[48px]"
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
                name="howmuchrasisedpreviously"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>
                      How much has the company raised previously?
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="py-[1.9rem] rounded-[48px]"
                        placeholder="(In USD, $0, up to $100k, $100k-$500k, $500,000-$1m, $1m-above)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="describefundinghistorysinceinception"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>
                      Describe your funding history since inception:
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.9rem] rounded-[48px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="useoffunds"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Use of Funds:</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.9rem] rounded-[48px]"
                        //   placeholder="(In USD)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="haveyoucollectedanyloansorcredit"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      Have you collected any loans or Credit?
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.9rem] rounded-[48px]"
                        placeholder="Yes or No"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ifyesstateyourcredithistorywithtenoramountinterestrateandcreditor"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      If Yes, State your credit history with tenor, amount,
                      interest rate and creditor:
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.9rem] rounded-[48px]"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="partofincubatororacceleratorprogram"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>
                      Have you been part of an incubator or accelerator program?
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="textarea"
                        className="py-[1.9rem] rounded-[48px]"
                        placeholder="Yes or No"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ifyeswhichprogram"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>If Yes, which program?</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.9rem] rounded-[48px]"
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
                name="whichinvestmentareyouseeking"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>What investment are you seeking?</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.9rem] rounded-[48px]"
                        placeholder="Eg: (Grants, SAFE, Equity, Debt servicing/ROI, Partnership, Mentorship, Others)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="whenareyoulookingatraise"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>When are you looking at raise? </FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.9rem] rounded-[48px]"
                        placeholder="Eg: (3 months, 6 months, 1 year or more)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormLabel>Upload Business Plan</FormLabel>
              <UploadComponent
                imageUrl={financialUrl}
                file={financialFile}
                handleUpload={(files) =>
                  handleUpload(files, "financialStatement")
                }
              />
              <br />
              <br className="lg:hidden" />

              <FormField
                control={form.control}
                name="howdidyouhearaboutus"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>
                      How did you hear about the SecureSeedFund?
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.9rem] rounded-[48px]"
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
                name="duedilligence"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Due diligence disclaimer information</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.9rem] rounded-[48px]"
                        placeholder=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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

export default FundingInformation;
