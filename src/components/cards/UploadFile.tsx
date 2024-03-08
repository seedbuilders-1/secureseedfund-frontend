import Dropzone, { FileWithPath } from "react-dropzone";
import { MdOutlineFileUpload } from "react-icons/md";
import Image from "next/image";
import { FaFilePdf } from "react-icons/fa";

interface Props {
  file: FileWithPath | null;
  setFile: (x: FileWithPath | null) => void;
}
const UploadFile = ({ file, setFile }: Props) => {
  const handleUpload = (acceptedFiles: FileWithPath[]) => {
    console.log("logging drop/selected file", acceptedFiles);
    const uploadedFile = acceptedFiles[0];
    // Assuming you only accept one file
    setFile(uploadedFile);

    // fake request to upload file
    const url = "https://api.escuelajs.co/api/v1/files/upload";
    const formData = new FormData();
    formData.append("file", uploadedFile);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          console.error(response);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="border border-slate-400  border-dashed rounded-md w-full py-8 px-8 flex flex-col justify-center items-center text-center">
      <Dropzone onDrop={handleUpload} minSize={1024} maxSize={3072000}>
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject,
        }) => {
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
              <div className="flex justify-center items-center">
                {file && file.type === "application/pdf" ? (
                  <FaFilePdf size={50} />
                ) : (
                  <MdOutlineFileUpload />
                )}
              </div>
              <p className="text-slate-500 text-[14px]">
                Drag & Drop or{" "}
                <span className="text-blue-400"> Choose file</span> to upload
              </p>
            </div>
          );
        }}
      </Dropzone>
      {file && (
        <div className="mt-4">
          {file.type === "application/pdf" ? (
            <iframe src={URL.createObjectURL(file)} width="100%" height="500" />
          ) : (
            <Image
              src={URL.createObjectURL(file)}
              className="img-container"
              alt="Uploaded file"
              width={80}
              height={80}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default UploadFile;
