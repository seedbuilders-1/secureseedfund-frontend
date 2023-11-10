// REQUEST PAYLOAD TYPES
export type LoginUserRequestType = {
  email: string;
  password: string;
};

export type RegisterUserRequestType = {
  email: string;
  firstName: string;
  otherName?: string;
  phone: string;
  password: string;
  role?: "USER" | "ADMIN";
};

// RESPONSE PAYLOAD TYPES
export type AuthResponseType = {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  otherName: string;
  role: string;
  accessToken: string;
  refreshToken: string;
};
