export type StartupOnboardingRequestType = {
  address: string;
  city: string;
  postalCode: string;
  companyName?: string;
  documentType: string;
  documentUrl: string;
  companyEmail: string;
  companyPhone: string;
  userId: string;
  countryId: number;
};
export type StartupOnboardingResponseType = {
  phone: string;
  id: string;
};
