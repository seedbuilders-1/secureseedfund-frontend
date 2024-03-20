"use client";
import { useState } from "react";
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

const UploadIdentity = () => {
  const [evidenceFile, setEvidenceFile] = useState<FileWithPath | null>(null);
  const [documentType, setDocumentType] = useState<string>("");
  const { handleNext } = useStartupOnboarding();
  const handleDocumentType = (value: string) => {
    setDocumentType(value);
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
          <UploadFile file={evidenceFile} setFile={setEvidenceFile} />
        </div>
        <Button
          onClick={() => handleNext()}
          className="w-full rounded-md h-[40px] mt-8"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default UploadIdentity;
