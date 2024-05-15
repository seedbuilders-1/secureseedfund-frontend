"use client";
import { useState } from "react";
import CompanyInfo from "@/components/startuponboardingsteps/CompanyInfo";
import UploadIdentity from "@/components/startuponboardingsteps/UploadIdentity";
import Successpage from "@/components/onboardingsteps/Successpage";
import TermandCondition from "@/components/onboardingsteps/TermandCondition";
import { CompanyInformationValidation } from "@/lib/validations/startuponboarding";
import StartupOnboardLayout from "@/components/layouts/startuponboarding";
const Landing = () => {
  const [steps, setSteps] = useState(1);
  const [documentType, setDocumentType] = useState<string>("");
  const [companyInformationValues, setCompanyInformationValues] =
    useState<CompanyInformationValidation>({
      address: "",
      city: "",
      companyEmail: "",
      companyPhone: "",
      postalcode: "",
      companyname: "",
      country: "",
    });

  const handleCompanyInformation = (values: CompanyInformationValidation) => {
    setCompanyInformationValues(values);
  };
  const handleDocumentType = (value: string) => {
    setDocumentType(value);
  };
  const handleNext = () => {
    setSteps(steps + 1);
  };
  const handlePrevious = () => {
    setSteps(steps - 1);
  };

  return (
    <>
      <StartupOnboardLayout steps={steps}>
        {steps === 1 && (
          <CompanyInfo
            companyInformationValues={companyInformationValues}
            handleCompanyInformation={handleCompanyInformation}
            handleNext={handleNext}
          />
        )}
        {steps === 2 && (
          <UploadIdentity
            companyInformationValues={companyInformationValues}
            documentType={documentType}
            handleDocumentType={handleDocumentType}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        )}
        {steps === 3 && <TermandCondition handleNext={handleNext} />}
        {steps === 4 && (
          <Successpage title={"Thank you for registering your starup"} />
        )}
      </StartupOnboardLayout>
    </>
  );
};

export default Landing;
