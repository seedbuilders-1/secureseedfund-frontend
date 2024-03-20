import CompanyInformationform from "../forms/auth/CompanyInformationform";

const CompanyInfo = () => {
  return (
    <div>
      <h2 className="text-primaryMain mt-4">Need help?</h2>

      <div className="flex flex-col justify-center">
        <h2 className="font-medium text-[24px] text-slate-900 mt-6">
          Company Information
        </h2>

        <div className="mt-8">
          <CompanyInformationform />
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
