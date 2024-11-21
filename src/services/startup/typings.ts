// Base types for user and investor
interface Investor {
  id: string;
  createdAt: string;
  updatedAt: string;
  investor_phonenumber: string;
  investor_nationality: string;
  investor_country_residence: string;
  investor_residence_city: string;
  investor_status: string;
  investor_image: string;
  investor_type: string;
  investor_annual_income: string;
  investor_investment_duration: string;
  investor_investment_goal: string;
  investor_experience: string;
  investor_liquidity_importance: string;
  is_completed_info: boolean;
}

interface User {
  firstName: string;
  lastName: string;
  investor: Investor | null;
}

interface Investment {
  id: string;
  createdAt: string;
  updatedAt: string;
  total_invested: string;
  user: User;
}

interface Campaign {
  id: string;
  title: string;
  fundingGoal: number;
  campaignType:
    | "EQUITY"
    | "DEBT"
    | "REWARD"
    | "REVENUE_SHARE"
    | "GRANTS"
    | "ROI"
    | "SAFE"
    | "OTHERS";
  startDate: string;
  endDate: string;
  isApprove: boolean;
  investment_balance: string;
  investments: Investment[];
}

export interface StartupInvestors {
  id: string;
  campaignInformation: Campaign[];
}

export type StartupInvestmentsResponse = StartupInvestors[];

export type StartupControllerCreateKycApiResponse = string;
export type StartupControllerCreateKycApiArg = {
  creatorId: string;
  createKycDto: CreateKycDto;
};
export type CreateKycDto = {
  govt_photo_id: Blob;
  proof_of_address: Blob;
  selfie_video: Blob;
  cert_of_incorporation: Blob;
  memo_art_assoc: Blob;
  business_address: Blob;
  dir_company_address: Blob;
  company_status_report: Blob;
  shareholders_address: Blob;
  source_of_income: string;
  politically_exposed_person: string;
  tin: string;
};
