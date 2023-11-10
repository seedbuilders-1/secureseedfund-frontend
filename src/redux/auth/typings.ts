export type User = {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  otherName: string;
  role: string;
};

export type AuthState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
};
