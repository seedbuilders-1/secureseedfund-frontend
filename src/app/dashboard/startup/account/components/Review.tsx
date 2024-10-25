import React from "react";
import SuccessComponent from "../../../../../components/cards/SuccessComponent";
import { Button } from "../../../../../components/ui/button";
import useUserAuth from "@/hooks/auth/useAuth";
import useAccount from "../hooks/useAccount";
import { FundingInformationValidation } from "@/lib/validations/account";
import { FileWithPath } from "react-dropzone";
import UploadPreview from "./UploadedPreview";
import Image from "next/image";
import { Pencil } from "lucide-react";

interface Files {
  businessPlan: FileWithPath | null;
  pitchDeck: FileWithPath | null;
  demoVideo: FileWithPath | null;
  companyLogo: FileWithPath | null;
  companyRegistration: FileWithPath | null;
}

interface Props {
  financialFile: FileWithPath | null;
  setStep: (x: number) => void;
  handleBack: () => void;
  fundingDetails: FundingInformationValidation;
}
const Review = ({
  handleBack,
  fundingDetails,
  setStep,
  financialFile,
}: Props) => {
  const { user } = useUserAuth();
  const creatorId = user?.userId as string;
  const {
    accountInformation,
    createFundingInformation,
    isCreatingFundingInformation,
    createdFundingInfo,
  } = useAccount(creatorId);

  const handleSubmit = () => {
    const createFundingInformationDto = new FormData();
    createFundingInformationDto.append(
      "external_funding",
      fundingDetails.fundingreceivedfromangelinvestororventurecapitalists ===
        "Yes"
        ? "true"
        : "false"
    );
    createFundingInformationDto.append(
      "external_funds_Value",
      fundingDetails.companypostmoneyvaluation
    );
    createFundingInformationDto.append(
      "rationale_valuation",
      fundingDetails.rationaleforcompanyvaluation
    );
    createFundingInformationDto.append("loan_desc", "dd");

    createFundingInformationDto.append(
      "previous_fundraise",
      fundingDetails.howmuchrasisedpreviously
    );
    createFundingInformationDto.append(
      "funding_history_desc",
      fundingDetails.describefundinghistorysinceinception
    );
    createFundingInformationDto.append("funds_use", fundingDetails.useoffunds);
    createFundingInformationDto.append(
      "collected_loans",
      fundingDetails.haveyoucollectedanyloansorcredit === "Yes"
        ? "true"
        : "false"
    );
    createFundingInformationDto.append(
      "incubator_program",
      fundingDetails.partofincubatororacceleratorprogram === "Yes"
        ? "true"
        : "false"
    );
    createFundingInformationDto.append(
      "incubator_program_desc",
      fundingDetails.ifyeswhichprogram
    );
    createFundingInformationDto.append("campaign_type", "EQUITY");
    createFundingInformationDto.append(
      "raise_period",
      fundingDetails.whenareyoulookingatraise
    );
    createFundingInformationDto.append(
      "about_secure_seedFund",
      fundingDetails.howdidyouhearaboutus
    );
    createFundingInformationDto.append(
      "financial_statement",
      financialFile as File
    );
    const payload = {
      creatorId,
      createFundingInformationDto,
    };
    // @ts-ignore
    createFundingInformation(payload);
  };

  const pitchDeckUrl = accountInformation?.companyInformation
    .company_pitchDeck as string;
  const companyRegistration = accountInformation?.companyInformation
    .company_cac as string;
  const businessPlan = accountInformation?.companyInformation
    .company_business_plan as string;
  const demoVideo = accountInformation?.companyInformation
    .company_video as string;

  return (
    <>
      <div className="w-full  space-y-6 px-5  mx-auto">
        <h2 className="text-[#0F172A] text-[24px] font-medium text-center">
          Hi {user?.firstName}, carefully review your answers before submission
        </h2>
        <h3 className="text-[#747474] text-[16px] mt-3 text-center">
          Make sure to carefully go over the answers provided and make necessary
          changes before submission,
          <br />
          {""}{" "}
          <span className="text-[#0F172A] font-[500] text-[1.1rem]">
            once submitted some information cannot be changed.
          </span>
        </h3>
        <div className="w-[300px] h-[300px] mx-auto">
          <Image
            src={accountInformation?.founder?.profileImage || ""}
            alt="logo"
            width={110}
            height={100}
            objectFit="contain"
            className="object-cover w-full h-full  mx-auto rounded-md"
          />
        </div>
        <div className="border border-[#D8D8E2] rounded-lg p-4 md:p-[2rem] ">
          <h2 className="text-[1.7rem] font-medium text-[#0F172A]">
            Founder Info:
          </h2>
          <div className="border border-[#1AA657]  rounded-lg p-2 relative">
            <ul className="space-y-2 list-disc grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
              <li className="flex items-start space-x-2">
                <span className="font-medium">Title:</span>
                <span>{accountInformation?.founder.founderTitle}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">First Name:</span>
                <span>{accountInformation?.founder.founderFirstname}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Last Name:</span>
                <span>{accountInformation?.founder.founderLastname}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Email:</span>
                <span>{accountInformation?.founder.founderEmail}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Education:</span>
                <span>
                  {accountInformation?.founder.founderEducationHistory}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">LinkedIn Profile:</span>
                <span>{accountInformation?.founder.founderLinkdln}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Phone Number:</span>
                <span>{accountInformation?.founder.founderPhone}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Experience:</span>
                <span>{accountInformation?.founder.founderExperience}</span>
              </li>
            </ul>
            <div
              onClick={() => setStep(1)}
              className="border-[#D8D8E2] rounded-full p-3 cursor-pointer  border absolute top-[12px] right-[13px]"
            >
              <Pencil className="text-[#1AA657]" />
            </div>
          </div>

          <h2 className="text-[1.7rem] font-medium text-[#0F172A] mt-4 ">
            Team info
          </h2>
          <div className="border border-[#1AA657] rounded-lg p-4 items-center relative">
            <ul className="space-y-2 list-disc  grid grid-cols-1 md:grid-cols-2  gap-5 items-center">
              <li className="flex items-start space-x-2">
                <span className="font-medium"> Title of Co-founder:</span>
                <span>
                  {accountInformation?.teamInformation.team_cofounder_title}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">First Name of Co-founder:</span>
                <span>
                  {accountInformation?.teamInformation.team_cofounder_firstName}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Last Name of Co-founder:</span>
                <span>
                  {accountInformation?.teamInformation.team_cofounder_lastName}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Email of Co-founder:</span>
                <span>
                  {accountInformation?.teamInformation.team_cofounder_email}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Education of Co-founder:</span>
                <span>
                  {accountInformation?.teamInformation.team_cofounder_education}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Phone Number of Co-founder:</span>
                <span>
                  {accountInformation?.teamInformation.team_cofounder_phone}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Experience of Co-founder:</span>
                <span>
                  {
                    accountInformation?.teamInformation
                      .team_cofounder_experience
                  }
                </span>
              </li>
            </ul>
            <div
              onClick={() => setStep(2)}
              className="border-[#D8D8E2] cursor-pointer  rounded-full p-3  border absolute top-[12px] right-[13px]"
            >
              <Pencil className="text-[#1AA657]" />
            </div>
          </div>

          <h2 className="text-[1.7rem] font-medium text-[#0F172A] mt-4">
            Company info
          </h2>
          <div className="border border-[#1AA657] rounded-lg p-4 mt-4 relative">
            <ul className="space-y-2 list-disc  grid grid-cols-1 md:grid-cols-2  gap-5 items-center">
              <li className="flex items-start space-x-2">
                <span className="font-medium">Company Name:</span>
                <span>
                  {accountInformation?.companyInformation?.company_name}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Company Email:</span>
                <span>
                  {accountInformation?.companyInformation?.company_email}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Company Address:</span>
                <span>
                  {accountInformation?.companyInformation?.company_address}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Company Website:</span>
                <span>
                  {accountInformation?.companyInformation?.company_website}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Company Phone:</span>
                <span>
                  {accountInformation?.companyInformation?.company_phone}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Industry/Sector:</span>
                <span>
                  {accountInformation?.companyInformation?.company_industry}
                </span>
              </li>

              <li className="flex items-start space-x-2">
                <span className="font-medium">Geographic Focus:</span>
                <span>
                  {accountInformation?.companyInformation?.company_geography}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">City of Operation:</span>
                <span>
                  {accountInformation?.companyInformation?.company_city}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Company Description:</span>
                <span>
                  {accountInformation?.companyInformation?.company_desc}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">
                  Why Your Company is a Good Investment:
                </span>
                <span>
                  {accountInformation?.companyInformation?.company_bullet_point}
                </span>
              </li>
            </ul>

            <div className="mt-[1.5rem]">
              <h2> Uploaded Business plan</h2>
              <UploadPreview previewUrl={businessPlan} />
            </div>

            <div>
              <h2> Uploaded Pitch Deck</h2>
              <UploadPreview previewUrl={pitchDeckUrl} />
            </div>
            <div>
              <h2> Upload 5-minute demo video:</h2>
              <UploadPreview previewUrl={demoVideo} />
            </div>
            <div>
              <h2> Upload Evidence of Company Registration:</h2>
              <UploadPreview previewUrl={companyRegistration} />
            </div>
            <div
              onClick={() => setStep(3)}
              className="border-[#D8D8E2] rounded-full cursor-pointer  p-3  border absolute top-[12px] right-[13px]"
            >
              <Pencil className="text-[#1AA657]" />
            </div>
          </div>

          <h2 className="text-[1.7rem] font-medium text-[#0F172A] mt-4">
            Business info
          </h2>
          <div className="border border-[#1AA657] rounded-lg p-4 mt-4 relative">
            <ul className="space-y-2 list-disc  grid grid-cols-1 md:grid-cols-2  gap-5 items-center">
              <li className="flex items-start space-x-2">
                <span className="font-medium">Business Stage:</span>
                <span>
                  {accountInformation?.businessInformation.business_stage}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Business Model:</span>
                <span>
                  {accountInformation?.businessInformation.business_model}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Business Revenue Channels:</span>
                <span>
                  {
                    accountInformation?.businessInformation
                      .business_revenue_channel
                  }
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Market Size:</span>
                <span>
                  {accountInformation?.businessInformation.business_market_size}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">
                  Revenue Generated Since Operation:
                </span>
                <span>
                  {
                    accountInformation?.businessInformation
                      .business_past_revenue_generated
                  }
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Customer Acquisition Cost:</span>
                <span>
                  {
                    accountInformation?.businessInformation
                      .business_customer_acqui_cost
                  }
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Number of Current Users:</span>
                <span>
                  {
                    accountInformation?.businessInformation
                      .business_current_users
                  }
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Monthly Recurring Revenue:</span>
                <span>
                  {
                    accountInformation?.businessInformation
                      .business_monthly_recur_expense
                  }
                </span>
              </li>
              {/* <li className="flex items-start space-x-2">
                <span className="font-medium">
                  Monthly Recurring Expense:
                </span>
                <span>
                  {
                    accountInformation?.businessInformation
                      .business_monthly_recur_expense
                  }
                </span>
              </li> */}
              <li className="flex items-start space-x-2">
                <span className="font-medium">Business Model Description:</span>
                <span>
                  {accountInformation?.businessInformation.business_model_desc}
                </span>
              </li>
            </ul>
            <div
              onClick={() => setStep(4)}
              className="border-[#D8D8E2] rounded-full p-3cursor-pointer  border absolute top-[12px] right-[13px]"
            >
              <Pencil className="text-[#1AA657]" />
            </div>
          </div>

          <h2 className="text-[1.7rem] font-medium text-[#0F172A] mt-4">
            Funding Info
          </h2>
          <div className="border border-[#1AA657] rounded-lg p-4 mt-4 relative">
            <ul className="space-y-2 list-disc grid grid-cols-1   gap-5 items-center">
              <li className=" items-start space-x-2">
                <span className="font-medium">
                  Have you received external funding from Angel Investors or
                  Venture Capitalists:
                </span>
                <span>
                  {
                    fundingDetails?.fundingreceivedfromangelinvestororventurecapitalists
                  }
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">
                  Company Post Money Valuation:
                </span>
                <span>{fundingDetails?.companypostmoneyvaluation}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">
                  Rationale for Company Valuation:
                </span>
                <span>{fundingDetails?.rationaleforcompanyvaluation}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">
                  How much has the company raised previously?:
                </span>
                <span>{fundingDetails?.howmuchrasisedpreviously}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">
                  Describe your funding history since inception:
                </span>
                <span>
                  {fundingDetails?.describefundinghistorysinceinception}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">Use of funds:</span>
                <span>{fundingDetails?.useoffunds}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">
                  Have you collected any loans or Credit?:
                </span>
                <span>{fundingDetails?.haveyoucollectedanyloansorcredit}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">
                  If Yes, state your credit history with tenor, amount, interest
                  rate and creditor:
                </span>
                <span>
                  {
                    fundingDetails?.ifyesstateyourcredithistorywithtenoramountinterestrateandcreditor
                  }
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">
                  Have you been part of an incubator or accelerator program?:
                </span>
                <span>
                  {fundingDetails?.partofincubatororacceleratorprogram}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">
                  What investment are you seeking?:
                </span>
                <span>{fundingDetails?.whichinvestmentareyouseeking}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">
                  How did you hear about SecureSeedFund?:
                </span>
                <span>{fundingDetails?.howdidyouhearaboutus}</span>
              </li>
            </ul>
            <UploadPreview file={financialFile} />
            <div
              onClick={() => setStep(5)}
              className="border-[#D8D8E2] rounded-full p-3  cursor-pointer border absolute top-[12px] right-[13px]"
            >
              <Pencil className="text-[#1AA657]" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-[2rem]">
          <Button variant="outline" className="w-[30%]" onClick={handleBack}>
            Back
          </Button>
          <Button
            onClick={() => handleSubmit()}
            loading={isCreatingFundingInformation}
            className="w-[30%] rounded-3xl bg-[#241A3F] "
          >
            Deploy
          </Button>
        </div>
      </div>
      {createdFundingInfo && (
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
