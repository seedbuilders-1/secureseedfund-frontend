import { InvestmentType } from "../investor/typings";
import { User } from "../profile";
export type InstitutionCreateApiResponse = string;
export type InstitutionCreateApiArgs = {
  userId: string;
  createInstitutionDto: CreateInstitutionDto;
};

export type Institution = {
  institution_name: string;
  institution_reg_number: string;
  institution_address: string;
  institution_website: string;
  institution_industry_of_interest: string;
  institution_funding_type: string;
  institution_funding_size: string;
  is_completed_info?: boolean;
  institutionKycInfo: InstitutionKyc;
};


export type CreateInstitutionDto = {
  institution_name: string;
  institution_reg_number: string;
  institution_address: string;
  institution_website: string;
  institution_industry_of_interest: string;
  institution_funding_type: string;
  institution_funding_size: string;
  is_completed_info?: boolean;
};
export type updateInstitutionDto = {
  id: string;
  institution_name: string;
  institution_reg_number: string;
  institution_address: string;
  institution_website: string;
  institution_industry_of_interest: string;
  institution_funding_type: string;
  institution_funding_size: string;
  is_completed_info?: boolean;
};
export type InstitutionGetApiArgs = {
  id: string;
};
export type InstitutionUpdateApiArgs = {
  userId: string;
  updateInstitutionDto: updateInstitutionDto;
};

export type InstitutionnvestInCampaignApiArg = {
  campaignId: string;
  institutionDto: institutionDto;
};
export type institutionDto = {
  investmentAmount: number;
  investorUserId: string;
};

export type InstitutionInvestmentsApiResponse = InvestmentType[];

export type InstitutionInvestmentsGetApiArg = {
  investorId: string;
};

export type InstitutionControllerCreateInstitutionKycApiResponse = string;

export type InstitutionControllerCreateInstitutionKycApiArg = {
  creatorId: string;
  createInstitutionKycDto: CreateInstitutionKycDto;
};

export type CreateInstitutionKycDto = {
  govt_photo_id: Blob;
  proof_of_address: Blob;
  article_assoc: Blob;
  memo_assoc: Blob;
  business_address: Blob;
  dir_company_address: Blob;
  company_status_report: Blob;
  shareholders_address: Blob;
  phone_number: string;
  full_legal_name: string;
  email: string;
  company_reg_number: string;
  source_of_income: string;
  politically_exposed_person: string;
  tin: string;
};

export type InstitutionKyc = {
  user: User;
  govt_photo_id: string;
  proof_of_address: string;
  article_assoc: string;
  memo_assoc: string;
  business_address: string;
  dir_company_address: string;
  company_status_report: string;
  shareholders_address: string;
  phone_number: string;
  full_legal_name: string;
  email: string;
  company_reg_number: string;
  source_of_income: string;
  politically_exposed_person: string;
  tin: string;
  isApproved: boolean;
  id: string;
  createdAt: string;
  updatedAt: string;
};
