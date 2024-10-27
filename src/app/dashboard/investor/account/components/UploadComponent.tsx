import Dropzone, { FileWithPath } from "react-dropzone";
import { FaFilePdf } from "react-icons/fa";
import { PiFilesThin } from "react-icons/pi";
import Image from "next/image";

interface Props {
  file: FileWithPath | null;
  imageUrl: string;
  handleUpload: (x: FileWithPath[]) => void;
}

const UploadComponent = ({ file, handleUpload, imageUrl }: Props) => {
  return (
    <div className="border-[3px] border-[#77B900] border-dashed rounded-md w-full py-[3rem] px-8 flex flex-col justify-center items-center text-center">
      <Dropzone onDrop={handleUpload} minSize={1024} maxSize={2002000}>
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
              <div className="flex justify-center items-center">
                {!imageUrl ? (
                  <>
                    {file && file.type === "application/pdf" ? (
                      <FaFilePdf size={50} />
                    ) : file && file.type.startsWith("image/") ? (
                      <Image
                        src={URL.createObjectURL(file)}
                        alt="Uploaded"
                        style={{ maxWidth: "100%", maxHeight: "200px" }}
                      />
                    ) : (
                      <PiFilesThin className="w-[42px] h-[32px]" />
                    )}
                  </>
                ) : (
                  <>
                    {imageUrl.toLowerCase().endsWith(".pdf") ? (
                      <div className="flex justify-center mx-auto items-center">
                        <FaFilePdf size={50} />
                        <p> {imageUrl}</p>
                      </div>
                    ) : (
                      <Image
                        src={imageUrl}
                        alt="Uploaded"
                        style={{ maxWidth: "100%", maxHeight: "200px" }}
                      />
                    )}
                  </>
                )}
              </div>

              {!imageUrl && (
                <div>
                  <p className="text-[14px] font-bold">
                    Drag & Drop or{" "}
                    <span className="text-[#6C8C3C]"> Click to upload</span>
                  </p>
                  <h2 className="text-[#747474] text-[16px]">
                    Supported formats: PDF or IMAGE. MAX size: 2MB
                  </h2>
                </div>
              )}
            </div>
          );
        }}
      </Dropzone>

      {file && file.name}
    </div>
  );
};

export default UploadComponent;
