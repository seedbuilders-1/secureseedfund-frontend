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

const Landing = () => {
  const [logoUrl, setLogoUrl] = useState<FileWithPath | null>(null);
  const [selectInvestorType, setSelectInvestorType] = useState("individual");
  const [documentType, setDocumentType] = useState<string>("");
  const [documentUrl, setDocumentUrl] = useState<FileWithPath | null>(null);
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

  const { changeStepTo3, individualInvestor } = useOnboarding();
  const { steps } = useOnboarding();
  useEffect(() => {
    if (steps <= 3 && individualInvestor) {
      changeStepTo3();
    }
  }, [individualInvestor, steps]);

  console.log(steps);

  return (
    <>
      {steps === 1 && (
        <EntityInformation
          selectedValue={selectInvestorType}
          setSelectedValue={setSelectInvestorType}
          handleChange={handleInvestorType}
          handleEntityInformation={handleEntityInformation}
          file={logoUrl}
          setFile={setLogoUrl}
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
        />
      )}
      {steps === 3 && <InvestmentQuestioniare />}
      {steps === 4 && <TermandCondition />}
      {steps === 5 && <Successpage />}
    </>
  );
};

export default Landing;
