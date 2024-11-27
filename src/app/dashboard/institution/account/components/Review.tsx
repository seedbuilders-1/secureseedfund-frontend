import useUserAuth from "@/hooks/auth/useAuth";
import React from "react";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import SuccessComponent from "@/components/cards/SuccessComponent";
import { useCreateInstitutionMutation } from "@/services/institution";
import { InstitutionValidation } from "@/lib/validations/account";
interface Props {
  setStep: (x: number) => void;
  handleBack: () => void;
  institutionDetail: InstitutionValidation;
}
const Review = ({ handleBack, institutionDetail, setStep }: Props) => {
  const { user } = useUserAuth();
  const creatorId = user?.userId as string;

  const [
    createInstitutionAccount,
    { isLoading: isCreatingInstitution, isSuccess: createdInstitution },
  ] = useCreateInstitutionMutation();

  const handleSubmit = () => {
    const createInstitutionDto = {
      institution_name: institutionDetail.Name,
      institution_reg_number: institutionDetail.registrationNumber,
      institution_address: institutionDetail.address,
      institution_website: institutionDetail.website,
      institution_industry_of_interest: institutionDetail.industryOfInterest,
      institution_funding_type: institutionDetail.fundingType,
      institution_funding_size: institutionDetail.fundingSize,
    };
    const payload = {
      userId: creatorId,
      createInstitutionDto,
    };

    createInstitutionAccount(payload);
  };

  return (
    <>
      <div className="w-full  space-y-6 px-5">
        <h2 className="text-[#0F172A] text-[24px] font-medium text-center mt-8">
          Hi {user?.firstName}, carefully review your answers before submission
        </h2>
        <h3 className="text-[#747474] text-[16px] mt-3 text-center">
          Make sure to carefully go over the answers provided and make necessary
          changes before submissionon
        </h3>

        <div className="border border-[#D8D8E2] rounded-lg p-4 md:p-[2rem] ">
          <h2 className="text-[1.7rem] font-medium text-[#0F172A]">
            Institution Information:
          </h2>
          <div className="border border-[#1AA657]  rounded-lg p-2 relative">
            <ul className="space-y-2 list-disc grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
              <li className="flex items-start space-x-2">
                <span className="font-medium">Institution Name:</span>
                <span>{institutionDetail?.Name}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">
                  Institution Registration Number:
                </span>
                <span>{institutionDetail.registrationNumber}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Institution Address</span>
                <span>{institutionDetail.address}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Institution Website:</span>
                <span>{institutionDetail.website}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Institution of Interest:</span>
                <span>{institutionDetail.industryOfInterest}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Funding Size:</span>
                <span>₦{institutionDetail.fundingSize}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Funding Type:</span>
                <span>{institutionDetail.fundingType}</span>
              </li>
            </ul>
            <div
              onClick={() => setStep(1)}
              className="border-[#D8D8E2] rounded-full p-3 cursor-pointer  border absolute top-[12px] right-[13px]"
            >
              <Pencil className="text-[#1AA657]" />
            </div>
          </div>

          <div className="flex justify-between items-center mt-[2rem]">
            <Button variant="outline" className="w-[30%]" onClick={handleBack}>
              Back
            </Button>
            <Button
              onClick={() => handleSubmit()}
              loading={isCreatingInstitution}
              className="w-[30%] rounded-3xl bg-[#241A3F] "
            >
              Deploy
            </Button>
          </div>
        </div>
      </div>
      {createdInstitution && (
        <SuccessComponent
          link="/dashboard/institution"
          description="   Congratulations! Your Account has been Successfully submitted for
          review. Our team will carefully review your submission and get back to
          you within 7 business days ."
          title="Your account information has been successfully submitted"
        />
      )}
    </>
  );
};

export default Review;
