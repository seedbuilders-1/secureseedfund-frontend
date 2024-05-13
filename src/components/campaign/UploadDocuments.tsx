import { useState, useEffect } from "react";
import { FileWithPath } from "react-dropzone";
import { Button } from "../ui/button";
import UploadComponent from "./UploadComponent";
import { useUploadfileMutation } from "@/services/fileupload";
import { useToast } from "@/components/ui/use-toast";

interface Props {
  handleNext: () => void;
  setCoverPhoto: (x: string) => void;
  setBuisnessPlanUrl: (x: string) => void;
  businessPlanUrl: string;
  coverPhoto: string;
}
const UploadDocuments = ({
  handleNext,
  setBuisnessPlanUrl,
  setCoverPhoto,
  coverPhoto,
  businessPlanUrl,
}: Props) => {
  const { toast } = useToast();
  const [fileUpload, { error: uploadError, isLoading: isUploading }] =
    useUploadfileMutation();
  const [coverPhotoFile, setCoverPhotoFile] = useState<FileWithPath | null>(
    null
  );
  const [businessFile, setBusinessFile] = useState<FileWithPath | null>(null);

  const handleUpload = async (
    acceptedFiles: FileWithPath[],
    fileType: string
  ) => {
    const uploadedFile = acceptedFiles[0];
    fileType === "coverphoto"
      ? setCoverPhotoFile(uploadedFile)
      : setBusinessFile(uploadedFile);

    const formData = new FormData();
    formData.append("file", uploadedFile);
    const res = await fileUpload(formData).unwrap();
    fileType === "coverphoto" ? setCoverPhoto(res) : setBuisnessPlanUrl(res);
  };
  useEffect(() => {
    if (uploadError) {
      toast({
        variant: "destructive",
        title: `${"unable to upload file please try again"}`,
      });
      setCoverPhotoFile(null);
      setBusinessFile(null);
    }
  }, [uploadError]);
  const handleSubmit = () => {
    if (!businessPlanUrl || !coverPhoto) {
      return toast({
        variant: "destructive",
        title: "Double check.",
        description: "Both Cover photo and Company Logo are required",
      });
    }
    handleNext();
  };
  return (
    <div>
      <h2 className="text-[#0F172A] text-[24px] font-medium">
        Tell Investors about your Startup
      </h2>
      <h3 className="text-[#747474] text-[16px] mt-3">
        Add compelling images to showcase your startup and attract potential
        investors.
      </h3>
      <div className="max-w-[600px] mt-[3rem]">
        <div className="max-w-[600px] mt-10">
          <h2 className="text-[#0F172A] text-[17px] font-normal">
            Upload Business Plan
          </h2>
          <UploadComponent
            imageUrl={businessPlanUrl}
            file={businessFile}
            handleUpload={(files) => handleUpload(files, "logo")}
          />
        </div>

        <h2 className="text-[#0F172A] text-[17px] font-normal mt-10">
          Upload Cover Photo
        </h2>
        <UploadComponent
          imageUrl={coverPhoto}
          file={coverPhotoFile}
          handleUpload={(files) => handleUpload(files, "coverphoto")}
        />
      </div>

      <Button
        onClick={() => handleSubmit()}
        loading={isUploading}
        className="w-[30%] rounded-3xl bg-[#241A3F] mt-[4rem]"
      >
        Proceed
      </Button>
    </div>
  );
};

export default UploadDocuments;
