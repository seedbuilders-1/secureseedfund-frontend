import { useCampaignsControllerUploadMilestoneProofMutation } from "@/services/campaign";
import React, { useState } from "react";
import { FileWithPath } from "react-dropzone";

interface UploadMilestoneProofProps {
  milestoneId: string;
}

const UploadMilestoneProof: React.FC<UploadMilestoneProofProps> = ({
  milestoneId,
}) => {
  const [uploadFile, { isLoading, isError, isSuccess }] =
    useCampaignsControllerUploadMilestoneProofMutation();
  const [selectedFile, setSelectedFile] = useState<FileWithPath | null>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);

    if (file) {
      try {
        await uploadFile({
          milestoneId,
          proof: file,
        }).unwrap();
      } catch (error) {
        console.error("File upload failed:", error);
      }
    }
  };

  return (
    <div className="py-2 px-4">
      <label
        htmlFor={`file-upload-${milestoneId}`}
        className="text-blue-500 hover:underline cursor-pointer"
      >
        {isLoading
          ? "Uploading..."
          : selectedFile
          ? `${selectedFile.name} (${(selectedFile.size / 1024).toFixed(2)} KB)`
          : "Upload Document"}
      </label>
      <input
        id={`file-upload-${milestoneId}`}
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      {isSuccess && (
        <p className="text-green-600">File uploaded successfully!</p>
      )}
      {isError && (
        <p className="text-red-600">Error uploading file. Try again.</p>
      )}
    </div>
  );
};

export default UploadMilestoneProof;
