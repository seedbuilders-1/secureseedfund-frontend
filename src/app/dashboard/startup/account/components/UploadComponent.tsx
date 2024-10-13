import React from "react";
import Dropzone, { FileWithPath, Accept } from "react-dropzone";
import { FaFilePdf } from "react-icons/fa";
import { PiFilesThin } from "react-icons/pi";
import { MdVideoLibrary } from "react-icons/md";

interface UploadComponentProps {
  file: FileWithPath | null;
  handleUpload: (files: FileWithPath[], fileType: string) => void;
  fileType: string;
  accept?: Accept;
  maxSize?: number;
  label?: string;
}

const UploadComponent: React.FC<UploadComponentProps> = ({
  file,
  handleUpload,
  fileType,
  accept = {
    "image/*": [".jpeg", ".jpg", ".png", ".svg"],
    "application/pdf": [".pdf"],
    "video/*": [".mp4", ".avi", ".mov"],
  },
  maxSize = 5 * 1024 * 1024, // 5MB default
  label = "Upload File",
}) => {
  const renderFilePreview = () => {
    if (file) {
      if (file.type === "application/pdf") {
        return <FaFilePdf size={50} className="text-red-500" />;
      }
      if (file.type.startsWith("video/")) {
        return <MdVideoLibrary size={50} className="text-blue-500" />;
      }
      if (file.type.startsWith("image/")) {
        return (
          <img
            src={URL.createObjectURL(file)}
            alt="Uploaded"
            className="max-w-full max-h-[200px] object-contain"
          />
        );
      }
    }
    return <PiFilesThin className="w-[42px] h-[32px] text-gray-400" />;
  };

  return (
    <div className="border-[3px] border-[#77B900] border-dashed rounded-md w-full py-[3rem] px-8 flex flex-col justify-center items-center text-center">
      <Dropzone
        onDrop={(acceptedFiles) => handleUpload(acceptedFiles, fileType)}
        accept={accept}
        maxSize={maxSize}
        multiple={false}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <div
            {...getRootProps({
              className: `dropzone ${
                isDragActive
                  ? "border-blue-500 bg-blue-50"
                  : isDragReject
                  ? "border-red-500 bg-red-50"
                  : ""
              }`,
            })}
          >
            <input {...getInputProps()} />
            <div className="flex justify-center items-center mb-4">
              {renderFilePreview()}
            </div>
            <div>
              <p className="text-[14px] font-bold">
                Drag & Drop or{" "}
                <span className="text-[#6C8C3C]">Click to upload</span>
              </p>
              <h2 className="text-[#747474] text-[16px]">{label}</h2>
              <p className="text-[12px] text-[#747474] mt-2">
                Max size: {(maxSize / 1024 / 1024).toFixed(2)}MB
              </p>
            </div>
          </div>
        )}
      </Dropzone>
      {file && (
        <p className="mt-2 text-sm truncate max-w-full">
          {file.name} ({(file.size / 1024 / 1024).toFixed(2)}MB)
        </p>
      )}
    </div>
  );
};

export default UploadComponent;
