import React from "react";
import { FileWithPath } from "react-dropzone";
import { FaFilePdf } from "react-icons/fa";
import { PiFilesThin } from "react-icons/pi";
import { MdVideoLibrary } from "react-icons/md";

interface UploadComponentProps {
  file: FileWithPath | null;
}

const UploadPreview: React.FC<UploadComponentProps> = ({ file }) => {
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
    <div className="border-[3px] mt-4 border-[#77B900] border-dashed rounded-md w-full py-[3rem] px-8 flex flex-col justify-center items-center text-center">
      <div className="flex justify-center items-center mb-4">
        {renderFilePreview()}
      </div>

      {file && (
        <p className="mt-2 text-sm truncate max-w-full">
          {file.name} ({(file.size / 1024 / 1024).toFixed(2)}MB)
        </p>
      )}
    </div>
  );
};

export default UploadPreview;
