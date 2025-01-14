"use client";
import { FaPlusCircle } from "react-icons/fa";
import Dropzone, { FileWithPath } from "react-dropzone";
import { Button } from "../ui/button";
import Image from "next/image";

interface Props {
  file: FileWithPath | null;
  handleLogoUpload: (x: FileWithPath[]) => void;
}
const UploadLogo = ({ file, handleLogoUpload }: Props) => {
  return (
    <div className="space-y-4 mt-4 flex gap-4">
      <div className="border border-slate-300 rounded-full w-[60px] h-[60px] flex justify-center items-center">
        {file ? (
          <Image
            src={URL.createObjectURL(file)}
            width={60}
            height={60}
            alt="Uploaded file"
          />
        ) : (
          <FaPlusCircle className="text-primaryMain w-[11px]" />
        )}
      </div>
      <Dropzone onDrop={handleLogoUpload} minSize={1024} maxSize={3072000}>
        {({ getRootProps, getInputProps, isDragAccept, isDragReject }) => {
          const additionalClass = isDragAccept
            ? "accept"
            : isDragReject
            ? "reject"
            : "";

          return (
            <div
              {...getRootProps({
                className: `dropzone ${additionalClass}`,
              })}
            >
              <input {...getInputProps()} />
              <Button
                size="sm"
                variant="outline"
                className="border-primaryMain text-primaryMain"
              >
                {" "}
                Upload Logo
              </Button>
            </div>
          );
        }}
      </Dropzone>
    </div>
  );
};

export default UploadLogo;
