"use client";
import { useState, useEffect } from "react";
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
import { FileWithPath } from "react-dropzone";
import useStartupOnboarding from "@/hooks/startup/useStartupOnboarding";
import useUserAuth from "@/hooks/auth/useAuth";
import { useToast } from "../ui/use-toast";
import { CompanyInformationValidation } from "@/lib/validations/startuponboarding";
import { useUploadfileMutation } from "@/services/fileupload";

interface Props {
  handleDocumentType: (x: string) => void;
  documentType: string;
  companyInformationValues: CompanyInformationValidation;
}

const UploadIdentity = ({
  handleDocumentType,
  documentType,
  companyInformationValues,
}: Props) => {
  const [evidenceFile, setEvidenceFile] = useState<FileWithPath | null>(null);
  const [documentUrl, setDocumentUrl] = useState<string | undefined>("");
  const { handleNext, isCreatingStartup, isSuccess, startupOnboarding } =
    useStartupOnboarding();
  const [fileUpload, { error: uploadError }] = useUploadfileMutation();
  const { toast } = useToast();
  const { user } = useUserAuth();

  const handleUpload = async (acceptedFiles: FileWithPath[]) => {
    const uploadedFile = acceptedFiles[0];

    setEvidenceFile(uploadedFile);
    const formData = new FormData();
    formData.append("file", uploadedFile);
    const res = await fileUpload(formData).unwrap();
    setDocumentUrl(res);
  };

  useEffect(() => {
    if (isSuccess) {
      handleNext();
    }
  }, [isSuccess]);
  useEffect(() => {
    if (uploadError) {
      toast({
        variant: "destructive",
        title: `${"unable to upload file please try again"}`,
      });
    }
  }, [uploadError]);

  const onStartupOnboarding = () => {
    const {
      companyPhone,
      companyEmail,
      address,
      city,
      postalcode,
      companyname,
      country,
    } = companyInformationValues;
    if (!documentType) {
      return toast({
        variant: "destructive",
        title: "double check.",
        description: "Add the type of document you  have",
      });
    }
    if (!evidenceFile) {
      return toast({
        variant: "destructive",
        title: "double check.",
        description: "Add evidence of company registration",
      });
    }
    startupOnboarding({
      companyPhone,
      countryId: parseInt(country),
      address,
      city,
      postalCode: postalcode,
      companyEmail,
      companyName: companyname,
      documentType: documentType,
      documentUrl: documentUrl || "",
      userId: user?.userId || "",
    });
  };

  return (
    <div className="">
      <h2 className="text-primaryMain mt-4">Need help?</h2>

      <div className="flex flex-col justify-center w-[90%] ml-5">
        <div>
          <h2 className="font-medium text-[24px] text-slate-900 mt-6">
            Upload identity document
          </h2>
          <p className="text-slate-700 text-[15px] mt-5">
            What company document do you have
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
            Upload Evidence of Company Registration
          </p>
          <UploadFile file={evidenceFile} handleUpload={handleUpload} />
        </div>
        <Button
          onClick={() => onStartupOnboarding()}
          className="w-full rounded-md h-[40px] mt-8"
          loading={isCreatingStartup}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default UploadIdentity;
