import { emptySplitApi as api } from "../../emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    walletControllerGetOrCreateWallet: build.query<
      WalletControllerGetOrCreateWalletApiResponse,
      WalletControllerGetOrCreateWalletApiArg
    >({
      query: (queryArg) => ({ url: `/wallet/${queryArg.userId}` }),
    }),
    walletControllerInitializeDeposit: build.mutation<
      WalletControllerInitializeDepositApiResponse,
      WalletControllerInitializeDepositApiArg
    >({
      query: (queryArg) => ({
        url: `/wallet/deposit/${queryArg.userId}`,
        method: "POST",
        body: queryArg.createDepositDto,
      }),
    }),
    walletControllerVerifyDeposit: build.mutation<
      WalletControllerVerifyDepositApiResponse,
      WalletControllerVerifyDepositApiArg
    >({
      query: (queryArg) => ({
        url: `/wallet/deposit/verify`,
        method: "PUT",
        body: queryArg.verifyDepositDto,
      }),
    }),
    walletControllerRequestWithdrawal: build.mutation<
      WalletControllerRequestWithdrawalApiResponse,
      WalletControllerRequestWithdrawalApiArg
    >({
      query: (queryArg) => ({
        url: `/wallet/${queryArg.userId}/withdraw`,
        method: "POST",
        body: queryArg.withdrawalDto,
      }),
    }),
    walletControllerGetUserWithdrawals: build.query<
      WalletControllerGetUserWithdrawalsApiResponse,
      WalletControllerGetUserWithdrawalsApiArg
    >({
      query: (queryArg) => ({ url: `/wallet/${queryArg.userId}/withdrawals` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type WalletControllerGetOrCreateWalletApiResponse = unknown;
export type WalletControllerGetOrCreateWalletApiArg = {
  userId: string;
};
export type WalletControllerInitializeDepositApiResponse = unknown;
export type WalletControllerInitializeDepositApiArg = {
  userId: string;
  createDepositDto: CreateDepositDto;
};
export type WalletControllerVerifyDepositApiResponse = /** status 200  */
  | object
  | /** status 201 Verifu wallet Deposit */ void;
export type WalletControllerVerifyDepositApiArg = {
  verifyDepositDto: VerifyDepositDto;
};
export type WalletControllerRequestWithdrawalApiResponse = unknown;
export type WalletControllerRequestWithdrawalApiArg = {
  /** User ID for the withdrawal request */
  userId: string;
  /** Amount to withdraw */
  withdrawalDto: WithdrawalDto;
};
export type WalletControllerGetUserWithdrawalsApiResponse = unknown;
export type WalletControllerGetUserWithdrawalsApiArg = {
  /** User ID to retrieve withdrawal requests */
  userId: string;
};
export type CreateDepositDto = {
  /** Amount to deposit */
  amount: number;
};
export type VerifyDepositDto = {
  /** Payment reference for verification */
  reference: string;
};
export type WithdrawalDto = {
  /** Amount to withdraw */
  amount: number;
};
export const {
  useWalletControllerGetOrCreateWalletQuery,
  useWalletControllerInitializeDepositMutation,
  useWalletControllerVerifyDepositMutation,
  useWalletControllerRequestWithdrawalMutation,
  useWalletControllerGetUserWithdrawalsQuery,
} = injectedRtkApi;
