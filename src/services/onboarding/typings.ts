export type OnboardingInvestmentUserRequestType = {
  investorType: "INDIVIDUAL" | "INVESTOR";
  phone: string;
  countryId: number;
  dob: string;
  address: string;
  city: string;
  postalCode: string;
  logoUrl: string;
  companyName?: string;
  documentType: string;
  documentUrl: string;
  userId: string;
};
export type OnboardingInvestmentUserResponseType = {
  investorType: string;
  phone: string;
};
export type GetInvestorIdRequestType = {
  userId: string;
};
export type IndividualInvestor = {
  id: string;
  investorType: string;
  phone: string;
};
export type GetInvestorIdResponseType = {
  items: IndividualInvestor[];
};
export type InvestmentQuestioniareRequestType = {
  investorId: string;
  payload: {
    investmentExperience: string;
    investmentDuration: string;
    investmentGoal: string;
    investmentType: string;
    sectorsOfInterest: string[];
    liquidityImportance: string;
  };
};
export type InvestmentQuestioniareResponseType = {
  investmentExperience: string;
  investmentDuration: string;
  investmentGoal: string;
  investmentType: string;
  sectorsOfInterest: [string];
  liquidityImportance: string;
};
