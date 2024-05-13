"use client";
import { useState } from "react";
import CompanyInfo from "@/components/startuponboardingsteps/CompanyInfo";
import useStartupOnboarding from "@/hooks/startup/useStartupOnboarding";
import UploadIdentity from "@/components/startuponboardingsteps/UploadIdentity";
import Successpage from "@/components/onboardingsteps/Successpage";
import TermandCondition from "@/components/onboardingsteps/TermandCondition";
import { CompanyInformationValidation } from "@/lib/validations/startuponboarding";
const Landing = () => {
  const { steps } = useStartupOnboarding();
  const [documentType, setDocumentType] = useState<string>("");
  const [companyInformationValues, setCompanyInformationValues] =
  useState<CompanyInformationValidation>({
    address :"",
       city :"",
        companyEmail:"",
        companyPhone:"",
        postalcode:"",
        companyname:"",
        country:""
      });

const handleCompanyInformation = (values: CompanyInformationValidation) => {
  setCompanyInformationValues(values);
};
const handleDocumentType = (value: string) => {
  setDocumentType(value);
};

  return (
    <>
      {steps === 1
       && <CompanyInfo     
       handleCompanyInformation={handleCompanyInformation}  
      />}
      {steps === 2 
      && 
      <UploadIdentity
      companyInformationValues={companyInformationValues}
      documentType={documentType}
      handleDocumentType={handleDocumentType}
       />}
      {steps === 3 && <TermandCondition />}
      {steps === 4 && (
        <Successpage title={"Thank you for registering your starup"} />
      )}
    </>
  );
};

export default Landing;
