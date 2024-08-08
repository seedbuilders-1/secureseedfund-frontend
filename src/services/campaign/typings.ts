export type Milestones = {
  milestoneTitle: string;
  milestoneDescription: string;
  targetAmount: number;
  date: string;
};

export type CreateCampaignRequestType = {
  startupId?: string;
  title: string;
  description: string;
  fundingGoal: number;
  campaignType: string;
  coverPhotoUrl: string;
  startDate: string;
  endDate: string;
  companyType: string;
  cofounders: number;
  teamMembers: number;
  about: string;
  milestones: Milestones[];
  businessPlanUrl: string;
};
export type CreateCampaignResponseType = {
  businessPlanUrl: string;
};
export type CampaignDetail = {
  startup: {
    companyName: string;
    companyEmail: string;
    companyPhone: string;
    country: {
      id: number;
      name: string;
      iso: string;
      iso3: string;
      countryCode: string;
    };
    city: string;
    address: string;
    postalCode: string;
    website: string;
    description: string;
    user: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      othername: string;
      photo: string;
      is_varified: boolean;
      email_varified: boolean;
      phone: string;
      role: string;
      createdAt: string;
      updatedAt: string;
      startup: string[];
      investor: string;
    };
    documentType: string;
    documentUrl: string;
    logoUrl: string;
    isApprove: boolean;
  };
  title: string;
  coverPhotoUrl: string;
  startDate: string;
  endDate: string;
  milestones: Milestones[];
  businessPlanUrl: string;
  description: string;
  fundingGoal: number;
  campaignType: string;
  teamMmbers: number;
  cofounders: number;
  isApprove: boolean;
  about: string;
  id: string;
  companyType: string;
};

export type GetCampaignResponseType = {
  items: CampaignDetail[];
};

export type GetCampaignRequestType = {
  userId?: string;
  keyword?: string;
  startupId?: string;
};
