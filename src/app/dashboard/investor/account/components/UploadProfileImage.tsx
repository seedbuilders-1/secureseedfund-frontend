import { useState } from "react";
import Dropzone, { FileWithPath } from "react-dropzone";

interface Props {
  handleUpload: (files: FileWithPath[]) => void;
}

const UploadProfileImage = ({ handleUpload }: Props) => {
  const [imagePreview, setImagePreview] = useState<string>(
    "/assets/icons/account.svg"
  );

  const onDropHandler = (acceptedFiles: FileWithPath[]) => {
    handleUpload(acceptedFiles); // External handler for additional processing
    if (acceptedFiles[0]) {
      setImagePreview(URL.createObjectURL(acceptedFiles[0])); // Update preview for the current instance
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Dropzone onDrop={onDropHandler}>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] bg-[#D9D9D9] rounded-md flex items-center justify-center cursor-pointer overflow-hidden"
            style={{
              backgroundImage: `url(${imagePreview})`,
              backgroundSize: "50%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>
      <p className="mt-2 text-center text-gray-600">Upload image</p>
    </div>
  );
};

export default UploadProfileImage;
