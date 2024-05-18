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
import { useToast } from "../ui/use-toast";
import { CompanyInformationValidation } from "@/lib/validations/startuponboarding";
import { useUploadfileMutation } from "@/services/fileupload";

interface Props {
  handleDocumentType: (x: string) => void;
  documentType: string;
  companyInformationValues: CompanyInformationValidation;
  handleNext: () => void;
  handlePrevious: () => void;
  setDocumentUrl: (x: string | undefined) => void;
  onStartupOnboarding: () => void;
  isCreatingStartup: boolean;
}

const UploadIdentity = ({
  handleDocumentType,
  documentType,
  handlePrevious,
  setDocumentUrl,
  isCreatingStartup,
  onStartupOnboarding,
}: Props) => {
  const [evidenceFile, setEvidenceFile] = useState<FileWithPath | null>(null);

  const [fileUpload, { error: uploadError, isLoading: isUploading }] =
    useUploadfileMutation();
  const { toast } = useToast();

  const handleUpload = async (acceptedFiles: FileWithPath[]) => {
    const uploadedFile = acceptedFiles[0];

    setEvidenceFile(uploadedFile);
    const formData = new FormData();
    formData.append("file", uploadedFile);
    const res = await fileUpload(formData).unwrap();
    setDocumentUrl(res);
  };

  useEffect(() => {
    if (uploadError) {
      toast({
        variant: "destructive",
        title: `${"unable to upload file please try again"}`,
      });
    }
  }, [uploadError]);

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
        <div className="flex gap-3">
          <Button
            onClick={() => handlePrevious()}
            variant="outline"
            className="w-full rounded-md h-[40px] mt-8 border-primaryMain border-[2px]"
          >
            Back
          </Button>
          <Button
            onClick={() => onStartupOnboarding()}
            className="w-full rounded-md h-[40px] mt-8"
            loading={isCreatingStartup || isUploading}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadIdentity;
