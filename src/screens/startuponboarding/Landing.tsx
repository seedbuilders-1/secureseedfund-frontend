"use client";
import { useState, useEffect } from "react";
import CompanyInfo from "@/components/startuponboardingsteps/CompanyInfo";
import UploadIdentity from "@/components/startuponboardingsteps/UploadIdentity";
import Successpage from "@/components/onboardingsteps/Successpage";
import TermandCondition from "@/components/onboardingsteps/TermandCondition";
import { CompanyInformationValidation } from "@/lib/validations/startuponboarding";
import StartupOnboardLayout from "@/components/layouts/startuponboarding";
import { useToast } from "@/components/ui/use-toast";
import useStartupOnboarding from "@/hooks/startup/useStartupOnboarding";
import useUserAuth from "@/hooks/auth/useAuth";
const Landing = () => {
  const [steps, setSteps] = useState(1);
  const { toast } = useToast();
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
  const { isCreatingStartup, isSuccess, startupOnboarding, startupResponse } =
    useStartupOnboarding();
  const [documentUrl, setDocumentUrl] = useState<string | undefined>("");
  const { user } = useUserAuth();
  useEffect(() => {
    if (isSuccess && startupResponse) {
      handleNext();
      toast({
        variant: "default",
        title: " information Saved Successfully ",
      });
      console.log("Startup onboarding response:", startupResponse);
    }
  }, [isSuccess, startupResponse]);

  const onStartupOnboarding = () => {
    const {
      companyPhone,
      companyEmail,
      address,
      city,
      postalcode,
      companyname,
      country,
    } = companyInformationValues;
    if (!documentType) {
      return toast({
        variant: "destructive",
        title: "double check.",
        description: "Add the type of document you  have",
      });
    }
    if (!documentUrl) {
      return toast({
        variant: "destructive",
        title: "double check.",
        description: "Add evidence of company registration",
      });
    }
    startupOnboarding({
      companyPhone,
      countryId: parseInt(country),
      address,
      city,
      postalCode: postalcode,
      companyEmail,
      companyName: companyname,
      documentType: documentType,
      documentUrl: documentUrl || "",
      userId: user?.userId || "",
    });
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
            onStartupOnboarding={onStartupOnboarding}
            setDocumentUrl={setDocumentUrl}
            isCreatingStartup={isCreatingStartup}
          />
        )}
        {steps === 3 && <TermandCondition handleNext={handleNext} />}
        {steps === 4 && (
          <Successpage
            startupId={startupResponse?.id}
            title={"Thank you for registering your starup"}
          />
        )}
      </StartupOnboardLayout>
    </>
  );
};

export default Landing;
