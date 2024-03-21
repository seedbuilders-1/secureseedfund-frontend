"use client";
import React, { useState, useEffect } from "react";
import EntityInformation from "@/components/onboardingsteps/EntityInformation";
import Uploadidentity from "@/components/onboardingsteps/Uploadidentity";
import InvestmentQuestioniare from "@/components/onboardingsteps/InvestmentQuestioniare";
import TermandCondition from "@/components/onboardingsteps/TermandCondition";
import Successpage from "@/components/onboardingsteps/Successpage";
import useOnboarding from "@/hooks/onboarding/useOnboarding";
import { EntityInformationValidation } from "@/lib/validations/onboarding";
import { FileWithPath } from "react-dropzone";
import useProfile from "@/hooks/profile/useProfile";
import { useUploadfileMutation } from "@/services/fileupload";
import { useToast } from "@/components/ui/use-toast";

const Landing = () => {
  const { toast } = useToast();
  const [logoUrl, setLogoUrl] = useState<string>("");
  const [evidenceFile, setEvidenceFile] = useState<FileWithPath | null>(null);
  const [logoFile, setLogoFile] = useState<FileWithPath | null>(null);
  const [selectInvestorType, setSelectInvestorType] = useState("individual");
  const [documentType, setDocumentType] = useState<string>("");
  const [documentUrl, setDocumentUrl] = useState<string>("");
  const { userProfile, refetchProfile } = useProfile();
  const [fileUpload, { error: uploadError }] = useUploadfileMutation();

  const [entityInformationValues, setEntityInformationValues] =
    useState<EntityInformationValidation>({
      dateofbirth: "",
      phonenumber: "",
      country: "",
      city: "",
      address: "",
      postalcode: "",
    });
  const handleInvestorType = (value: string) => {
    setSelectInvestorType(value);
  };
  const handleDocumentType = (value: string) => {
    setDocumentType(value);
  };
  const handleEntityInformation = (values: EntityInformationValidation) => {
    setEntityInformationValues(values);
  };
  const handleLogoUpload = async (acceptedFiles: FileWithPath[]) => {
    const uploadedFile = acceptedFiles[0];

    setLogoFile(uploadedFile);
    const formData = new FormData();
    formData.append("file", uploadedFile);
    const res = await fileUpload(formData).unwrap();
    setLogoUrl(res);
  };
  const { changeStepTo3, changeStepTo4 } = useOnboarding();
  const { steps } = useOnboarding();
  useEffect(() => {
    if (
      steps <= 3 &&
      userProfile?.investor?.id &&
      userProfile?.investor?.investmentQuestionnaire?.id
    ) {
      changeStepTo4();
    } else if (steps <= 3 && userProfile?.investor?.id) {
      changeStepTo3();
    }
  }, [userProfile, changeStepTo3, changeStepTo4, steps]);

  useEffect(() => {
    refetchProfile();
  }, [steps, refetchProfile]);
  useEffect(() => {
    if (uploadError) {
      toast({
        variant: "destructive",
        title: `${"unable to upload file please try again"}`,
      });
    }
  }, [uploadError]);

  return (
    <>
      {steps === 1 && (
        <EntityInformation
          selectedValue={selectInvestorType}
          setSelectedValue={setSelectInvestorType}
          handleChange={handleInvestorType}
          handleEntityInformation={handleEntityInformation}
          logoFile={logoFile}
          handleLogoUpload={handleLogoUpload}
        />
      )}
      {steps === 2 && (
        <Uploadidentity
          selectInvestorType={selectInvestorType}
          entityInformationValues={entityInformationValues}
          logoUrl={logoUrl}
          documentType={documentType}
          handleDocumentType={handleDocumentType}
          documentUrl={documentUrl}
          setDocumentUrl={setDocumentUrl}
          evidenceFile={evidenceFile}
          setEvidenceFile={setEvidenceFile}
        />
      )}
      {steps === 3 && <InvestmentQuestioniare />}
      {steps === 4 && <TermandCondition />}
      {steps === 5 && (
        <Successpage title={"Thank you for becoming an investor"} />
      )}
    </>
  );
};

export default Landing;
