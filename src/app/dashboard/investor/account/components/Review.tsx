import useUserAuth from "@/hooks/auth/useAuth";
import { InvestorInfoValidation } from "@/lib/validations/account";
import React, { useState } from "react";
import { FileWithPath } from "react-dropzone";
import useAccount from "../hooks/useAccount";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import SuccessComponent from "@/components/cards/SuccessComponent";

interface Props {
  setStep: (x: number) => void;
  handleBack: () => void;
  investorDetails: InvestorInfoValidation;
  profileImageFile: FileWithPath | null;
  selectedImage: string | null;
}
const Review = ({
  handleBack,
  investorDetails,
  setStep,
  profileImageFile,
  selectedImage,
}: Props) => {
  const { user } = useUserAuth();
  const creatorId = user?.userId as string;

  const {
    createInvestorInformation,
    createdInvestorInformation,
    isCreatingInvestorInformation,
  } = useAccount(creatorId);

  const handleSubmit = () => {
    const createInvestorInformationDto = new FormData();
    createInvestorInformationDto.append(
      "investor_type",
      investorDetails.typeOfInvestmentPreferred
    );

    createInvestorInformationDto.append(
      "investor_phonenumber",
      investorDetails.phone as string
    );
    createInvestorInformationDto.append(
      "investor_nationality",
      investorDetails.nationality
    );
    createInvestorInformationDto.append(
      "investor_country_residence",
      investorDetails.countryOfResidence
    );
    createInvestorInformationDto.append(
      "investor_residence_city",
      investorDetails.city
    );
    createInvestorInformationDto.append(
      "investor_status",
      investorDetails.investorStatus
    );
    if (profileImageFile) {
      createInvestorInformationDto.append(
        "investor_image",
        profileImageFile as File
      );
    }
    createInvestorInformationDto.append(
      "investor_annual_income",
      investorDetails.annualIncome
    );
    createInvestorInformationDto.append(
      "investor_investment_duration",
      investorDetails.howLongDoYouPlanToInvest
    );
    createInvestorInformationDto.append(
      "investor_investment_goal",
      investorDetails.goal
    );
    createInvestorInformationDto.append(
      "investor_liquidity_importance",
      investorDetails.liquidityImportance
    );
    createInvestorInformationDto.append(
      "investor_experience",
      investorDetails.investmentExperience
    );

    const payload = {
      userId: creatorId,
      createInvestorDto: createInvestorInformationDto,
    };

    createInvestorInformation(payload);
  };

  return (
    <>
      <div className="w-full  space-y-6 px-5  mx-auto">
        <h2 className="text-[#0F172A] text-[24px] font-medium text-center">
          Hi {user?.firstName}, carefully review your answers before submission
        </h2>
        <h3 className="text-[#747474] text-[16px] mt-3 text-center">
          Make sure to carefully go over the answers provided and make necessary
          changes before submissionon
        </h3>
        <div className="w-[300px] h-[300px] mx-auto">
          <Image
            src={selectedImage || ""}
            alt="profile image"
            width={110}
            height={100}
            objectFit="contain"
            className="object-cover w-full h-full  mx-auto rounded-md"
          />
        </div>
        <div className="border border-[#D8D8E2] rounded-lg p-4 md:p-[2rem] ">
          <h2 className="text-[1.7rem] font-medium text-[#0F172A]">
            Investor Info:
          </h2>
          <div className="border border-[#1AA657]  rounded-lg p-2 relative">
            <ul className="space-y-2 list-disc grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
              <li className="flex items-start space-x-2">
                <span className="font-medium">First Name:</span>
                <span>{user?.firstName}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Last Name:</span>
                <span>{user?.lastName}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Email:</span>
                <span>{user?.lastName}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Phone Number:</span>
                <span>{investorDetails?.phone}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Address:</span>
                <span>{investorDetails.address}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Nationality</span>
                <span>{investorDetails?.nationality}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Investor Status:</span>
                <span>{investorDetails?.investorStatus}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Investor Type:</span>
                <span>{investorDetails?.typeOfInvestmentPreferred}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Investment Duration:</span>
                <span>{investorDetails?.howLongDoYouPlanToInvest}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Country of Residence:</span>
                <span>{investorDetails?.countryOfResidence}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">City of Residence:</span>
                <span>{investorDetails?.city}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Investment Experience:</span>
                <span>{investorDetails?.investmentExperience}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">How important is Liquidity:</span>
                <span>{investorDetails?.liquidityImportance}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Investment Goal:</span>
                <span>{investorDetails?.goal}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Annual Income:</span>
                <span>{investorDetails?.annualIncome}</span>
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
              loading={isCreatingInvestorInformation}
              className="w-[30%] rounded-3xl bg-[#241A3F] "
            >
              Deploy
            </Button>
          </div>
        </div>
      </div>
      {createdInvestorInformation && (
        <SuccessComponent
          link="/dashboard/startup"
          description="   Congratulations! Your Account has been Successfully submitted for
          review. Our team will carefully review your submission and get back to
          you within [X] business days ."
          title="Your account information has been successfully submitted"
        />
      )}
    </>
  );
};

export default Review;
