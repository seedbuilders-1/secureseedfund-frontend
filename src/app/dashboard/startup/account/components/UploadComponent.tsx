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
  previewUrl?: string;
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
  maxSize = 5 * 1024 * 1024,
  label = "Upload File",
  previewUrl,
}) => {
  const renderFilePreview = () => {
    if (previewUrl) {
      if (previewUrl.endsWith(".pdf")) {
        return <FaFilePdf size={50} className="text-red-500" />;
      }
      if (
        previewUrl.endsWith(".mp4") ||
        previewUrl.endsWith(".avi") ||
        previewUrl.endsWith(".mov")
      ) {
        return <MdVideoLibrary size={50} className="text-blue-500" />;
      }
      return (
        <img
          src={previewUrl}
          alt="Uploaded"
          className="max-w-full max-h-[200px] object-contain"
        />
      );
    }

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
                {label}{" "}
                <span className="text-[#6C8C3C]">
                  - Drag & Drop or Click to Upload
                </span>
              </p>
              <p className="text-[12px] text-[#747474] mt-2">
                Max size: {(maxSize / 1024 / 1024).toFixed(2)}MB
              </p>
            </div>
          </div>
        )}
      </Dropzone>
      {(file || !previewUrl) && (
        <>
          <p className="mt-2 text-sm truncate max-w-full">
            {file?.name || "Uploaded File"} (
            {((file?.size ?? 0) / 1024 / 1024).toFixed(2) || "N/A"}MB)
          </p>
        </>
      )}
    </div>
  );
};

export default UploadComponent;
