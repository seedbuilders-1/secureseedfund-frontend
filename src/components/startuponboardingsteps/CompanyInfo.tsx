import CompanyInformationform from "../forms/auth/CompanyInformationform";
import { CompanyInformationValidation } from "@/lib/validations/startuponboarding";

interface Props {
  handleCompanyInformation: (x: CompanyInformationValidation) => void;
}

const CompanyInfo = ({ handleCompanyInformation }: Props) => {
  return (
    <div>
      <h2 className="text-primaryMain mt-4">Need help?</h2>

      <div className="flex flex-col justify-center">
        <h2 className="font-medium text-[24px] text-slate-900 mt-6">
          Company Information
        </h2>

        <div className="mt-8">
          <CompanyInformationform
            handleCompanyInformation={handleCompanyInformation}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
