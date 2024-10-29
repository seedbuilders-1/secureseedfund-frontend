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
import {
  FundingInformationSchema,
  FundingInformationValidation,
} from "@/lib/validations/account";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileWithPath } from "react-dropzone";
import { useToast } from "@/components/ui/use-toast";
import UploadComponent from "./UploadComponent";
import MobileStepper from "../../components/MobileStepper";
import { Checkbox } from "@/components/ui/checkbox";

interface Props {
  fundingDetails: FundingInformationValidation;
  handleFundingInformation: (v: FundingInformationValidation) => void;
  handleNext: () => void;
  handleBack: () => void;
  setFinancialFile: (x: FileWithPath | null) => void;
  financialFile: FileWithPath | null;
}

const FundingInformation = ({
  handleNext,
  setFinancialFile,
  financialFile,
  handleBack,
  fundingDetails,
  handleFundingInformation,
}: Props) => {
  const form = useForm<FundingInformationValidation>({
    resolver: zodResolver(FundingInformationSchema),
    defaultValues: fundingDetails,
  });

  const { toast } = useToast();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleUpload = async (
    acceptedFiles: FileWithPath[],
    fileType: string
  ) => {
    const uploadedFile = acceptedFiles[0];
    const { type } = uploadedFile;

    if (type === "application/pdf") {
      setFinancialFile(uploadedFile);
    } else {
      toast({
        variant: "destructive",
        description: "The financial statement must be a PDF file.",
      });
    }
  };

  const onSubmit = (values: FundingInformationValidation) => {
    if (!financialFile) {
      toast({
        variant: "destructive",
        title: "Double check.",
        description: "Upload your financial statement",
      });
      return;
    }
    handleFundingInformation(values);
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
                  <FormItem>
                    <FormLabel>
                      Have you received external funding from Angel Investors or
                      Venture Capitalists?
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full capitalize">
                          <SelectValue placeholder="Select....." />
                        </SelectTrigger>
                        <SelectContent className="w-full bg-white">
                          <SelectGroup>
                            {["Yes", " No"].map((opt: string, idx: number) => (
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
                name="companypostmoneyvaluation"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>If yes, Company Post Money Valuation:</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
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
                name="howmuchrasisedpreviously"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>
                      How much has the company raised previously?
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
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
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
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
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
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
                  <FormItem>
                    <FormLabel>
                      Have you collected any loans or Credit?
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full capitalize">
                          <SelectValue placeholder="Select....." />
                        </SelectTrigger>
                        <SelectContent className="w-full bg-white">
                          <SelectGroup>
                            {["Yes", " No"].map((opt: string, idx: number) => (
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
                name="ifyesstateyourcredithistorywithtenoramountinterestrateandcreditor"
                render={({ field }) => (
                  <FormItem className="w-full mt-3">
                    <FormLabel>
                      If Yes, State your credit history with tenor, amount,
                      interest rate and creditor:
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        type="text"
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
                  <FormItem className="mt-3">
                    <FormLabel>
                      Have you been part of an incubator or accelerator program?
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full capitalize">
                          <SelectValue placeholder="Select....." />
                        </SelectTrigger>
                        <SelectContent className="w-full bg-white">
                          <SelectGroup>
                            {["Yes", " No"].map((opt: string, idx: number) => (
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
                name="ifyeswhichprogram"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>If Yes, which program?</FormLabel>
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
                name="whichinvestmentareyouseeking"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>What investment are you seeking?</FormLabel>
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
                name="whenareyoulookingatraise"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>When are you looking at raise? </FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Eg: (3 months, 6 months, 1 year or more)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormLabel>Upload Your Financial Statement</FormLabel>

              <UploadComponent
                file={financialFile}
                handleUpload={handleUpload}
                fileType="financialStatment"
                maxSize={5 * 1024 * 1024}
                label="Upload Financtial Stament  (PDF only)"
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
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="mt-4">
                {" "}
                <h2 className="font-medium">
                  Due diligence disclaimer information
                </h2>
                <p className="text-[0.9rem] font-normal">
                  Kindly note that all company information and data submitted in
                  this form is solely collected to aid the SecureSeedFund Team.
                  All information is treated with confidentiality and privacy.
                  Thank you for your cooperation.
                </p>
                <div className="flex items-center space-x-2 mt-4">
                  <Checkbox
                    id="terms"
                    checked={isChecked}
                    onCheckedChange={() => setIsChecked(!isChecked)}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Click to Accept
                  </label>
                </div>
              </div>
              <div className="flex">
                <Button
                  className="w-full md:w-[30%] rounded-3xl mt-8
                mr-2"
                  variant="outline"
                  onClick={handleBack}
                >
                  Back
                </Button>
                {isChecked && (
                  <Button
                    type="submit"
                    className="w-full md:w-[30%] rounded-3xl bg-[#241A3F] mt-8"
                  >
                    Proceed
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default FundingInformation;
