"use client";
import React, { useEffect } from "react";
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectItem,
  SelectContent,
  SelectTrigger,
} from "../ui/select";
import UploadFile from "../cards/UploadFile";
import { Button } from "../ui/button";
import useOnboarding from "@/hooks/onboarding/useOnboarding";
import { FileWithPath } from "react-dropzone";
import { EntityInformationValidation } from "@/lib/validations/onboarding";
import useUserAuth from "@/hooks/auth/useAuth";
import { useToast } from "@/components/ui/use-toast";

interface Props {
  documentType: string;
  handleDocumentType: (x: string) => void;
  documentUrl: FileWithPath | null;
  setDocumentUrl: (x: FileWithPath | null) => void;
  logoUrl: FileWithPath | null;
  entityInformationValues: EntityInformationValidation;
  selectInvestorType: string;
}
const Uploadidentity = ({
  documentType,
  handleDocumentType,
  selectInvestorType,
  documentUrl,
  logoUrl,
  setDocumentUrl,
  entityInformationValues,
}: Props) => {
  const { investorOnboarding, isSuccess, handleNext } = useOnboarding();
  const { toast } = useToast();
  const { user } = useUserAuth();
  useEffect(() => {
    if (isSuccess) {
      return handleNext();
    }
  }, [isSuccess]);

  const onInvestorOnboarding = () => {
    const { dateofbirth, phonenumber, address, city, postalcode, companyname } =
      entityInformationValues;
    if (!documentType) {
      return toast({
        variant: "destructive",
        title: "double check.",
        description: "Add what type of document you  have",
      });
    }
    if (!documentUrl) {
      return toast({
        variant: "destructive",
        title: "double check.",
        description: "Add evidence of company registration",
      });
    }
    investorOnboarding({
      investorType:
        selectInvestorType === "individaul" ? "INDIVIDUAL" : "INVESTOR",
      phone: phonenumber,
      countryId: 1,
      dob: dateofbirth,
      address,
      city,
      postalCode: postalcode,
      logoUrl: logoUrl ? JSON.stringify(logoUrl) : "",
      companyName: companyname,
      documentType: documentType,
      documentUrl: documentUrl ? JSON.stringify(documentUrl) : "",
      userId: user?.userId || "",
    });
  };

  return (
    <>
      <div className="">
        <h2 className="text-primaryMain mt-4">Need help?</h2>

        <div className="flex flex-col justify-center w-[90%] ml-5">
          <div>
            <h2 className="font-medium text-[24px] text-slate-900 mt-6">
              Upload identity document
            </h2>
            <p className="text-slate-700 text-[15px] mt-5">
              What document do you have
            </p>
            <div>
              <Select
                onValueChange={handleDocumentType}
                defaultValue={documentType}
              >
                <SelectTrigger className="w-full mt-2 text-slate-900 border border-slate-300  h-[44px]">
                  <SelectValue defaultValue="1"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="InternationalPassport">
                      International passport
                    </SelectItem>
                    <SelectItem value="CAC">CAC</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-slate-700 text-[15px] mb-3">
              Upload Evidence of Company registration
            </p>
            <UploadFile file={documentUrl} setFile={setDocumentUrl} />
          </div>
          <Button
            onClick={() => onInvestorOnboarding()}
            className="w-full rounded-md h-[40px] mt-8"
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default Uploadidentity;
