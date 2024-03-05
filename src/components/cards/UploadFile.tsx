import React, { useState } from "react";
import Dropzone, { FileWithPath } from "react-dropzone";
import { MdOutlineFileUpload } from "react-icons/md";
import Image from "next/image";

const UploadFile = () => {
  const [file, setFile] = useState<FileWithPath | null>(null);

  const handleUpload = (acceptedFiles: FileWithPath[]) => {
    console.log("logging drop/selected file", acceptedFiles);
    // fake request to upload file
    const url = "https://api.escuelajs.co/api/v1/files/upload";
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]); // Assuming you only accept one file

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // File uploaded successfully
          setFile(acceptedFiles[0]);
        } else {
          // File upload failed
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
                <MdOutlineFileUpload />
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
        <>
          <Image
            src={URL.createObjectURL(file)}
            className="img-container"
            alt="Uploaded file"
          />
        </>
      )}
    </div>
  );
};

export default UploadFile;
