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
