import { InvestmentType } from "../investor/typings";
export type InstitutionCreateApiResponse = string;
export type InstitutionCreateApiArgs = {
  userId: string;
  createInstitutionDto: CreateInstitutionDto;
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

