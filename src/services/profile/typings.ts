export type UserProfileResponseType = {
  firstName: string;
  lastName: string;
  companyName: string;
  phone: string;
  startup: Startup[];
  investor: {
    id: string;
    companyName: string;
    investmentQuestionnaire: {
      id: string;
    };
  };
};
export type Startup = {
  id: string;
  companyName: string;
};
export type UserProfileRequestType = {};
