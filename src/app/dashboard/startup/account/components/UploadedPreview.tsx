import React from "react";
import { FileWithPath } from "react-dropzone";
import { FaFilePdf } from "react-icons/fa";
import { PiFilesThin } from "react-icons/pi";
import { MdVideoLibrary } from "react-icons/md";

interface UploadPreviewProps {
  file?: FileWithPath | null;
  previewUrl?: string | null;
}

const UploadPreview: React.FC<UploadPreviewProps> = ({ file, previewUrl }) => {
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

  const getFileInfo = () => {
    if (file) {
      return {
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2),
      };
    } else if (previewUrl) {
      const fileName = previewUrl.split("/").pop() || "Preview File";
      return {
        name: fileName,
        size: "N/A",
      };
    }
    return null;
  };

  const fileInfo = getFileInfo();

  return (
    <div className="border-[3px] mt-4 border-[#77B900] border-dashed rounded-md w-full py-[3rem] px-8 flex flex-col justify-center items-center text-center">
      <div className="flex justify-center items-center mb-4">
        {renderFilePreview()}
      </div>

      {fileInfo && (
        <p className="mt-2 text-sm truncate max-w-full">
          {fileInfo.name} {fileInfo.size !== "N/A" && `(${fileInfo.size}MB)`}
        </p>
      )}
    </div>
  );
};

export default UploadPreview;
