// "use client";
// import React, { useState, useEffect } from "react";
// import { FileWithPath } from "react-dropzone";
// import useProfile from "@/hooks/profile/useProfile";
// import { useUploadfileMutation } from "@/services/fileupload";
// import { useToast } from "@/components/ui/use-toast";
// import { EntityInformationValidation } from "@/lib/validations/onboarding";

// const Landing = () => {
//   const { toast } = useToast();
//   const [steps, setSteps] = useState(1);
//   const [logoUrl, setLogoUrl] = useState<string>("");
//   const [evidenceFile, setEvidenceFile] = useState<FileWithPath | null>(null);
//   const [logoFile, setLogoFile] = useState<FileWithPath | null>(null);
//   const [selectInvestorType, setSelectInvestorType] = useState("individual");
//   const [documentType, setDocumentType] = useState<string>("");
//   const [documentUrl, setDocumentUrl] = useState<string>("");
//   const { userProfile, refetchProfile } = useProfile();
//   const [fileUpload, { error: uploadError }] = useUploadfileMutation();

//   const [entityInformationValues, setEntityInformationValues] =
//     useState<EntityInformationValidation>({
//       dateofbirth: "",
//       phonenumber: "",
//       country: "",
//       city: "",
//       address: "",
//       postalcode: "",
//     });
//   const handleInvestorType = (value: string) => {
//     setSelectInvestorType(value);
//   };
//   const handleDocumentType = (value: string) => {
//     setDocumentType(value);
//   };
//   const handleEntityInformation = (values: EntityInformationValidation) => {
//     setEntityInformationValues(values);
//   };
//   const handleLogoUpload = async (acceptedFiles: FileWithPath[]) => {
//     const uploadedFile = acceptedFiles[0];

//     setLogoFile(uploadedFile);
//     const formData = new FormData();
//     formData.append("file", uploadedFile);
//     const res = await fileUpload(formData).unwrap();
//     setLogoUrl(res);
//   };
//   const handleNext = () => {
//     setSteps(steps + 1);
//   };
//   const handlePrevious = () => {
//     setSteps(steps - 1);
//   };
//   useEffect(() => {
//     if (
//       steps <= 3 &&
//       userProfile?.investor?.id &&
//       userProfile?.investor?.investmentQuestionnaire?.id
//     ) {
//       setSteps(4);
//     } else if (steps <= 3 && userProfile?.investor?.id) {
//       setSteps(3);
//     }
//   }, [userProfile, steps]);

//   useEffect(() => {
//     refetchProfile();
//   }, [steps, refetchProfile]);
//   useEffect(() => {
//     if (uploadError) {
//       toast({
//         variant: "destructive",
//         title: `${"unable to upload file please try again"}`,
//       });
//     }
//   }, [uploadError]);

//   return (
//     <>
//       <OnboardLayout steps={steps}>
//         {steps === 1 && (
//           <EntityInformation
//             selectedValue={selectInvestorType}
//             setSelectedValue={setSelectInvestorType}
//             handleChange={handleInvestorType}
//             handleEntityInformation={handleEntityInformation}
//             logoFile={logoFile}
//             entityInformationValues={entityInformationValues}
//             handleLogoUpload={handleLogoUpload}
//             handleNext={handleNext}
//           />
//         )}
//         {steps === 2 && (
//           <Uploadidentity
//             selectInvestorType={selectInvestorType}
//             entityInformationValues={entityInformationValues}
//             logoUrl={logoUrl}
//             documentType={documentType}
//             handleDocumentType={handleDocumentType}
//             documentUrl={documentUrl}
//             setDocumentUrl={setDocumentUrl}
//             handleNext={handleNext}
//             evidenceFile={evidenceFile}
//             handlePrevious={handlePrevious}
//             setEvidenceFile={setEvidenceFile}
//           />
//         )}
//         {steps === 3 && <InvestmentQuestioniare handleNext={handleNext} />}
//         {steps === 4 && <TermandCondition handleNext={handleNext} />}
//         {steps === 5 && (
//           <Successpage title={"Thank you for becoming an investor"} />
//         )}
//       </OnboardLayout>
//     </>
//   );
// };

// export default Landing;
