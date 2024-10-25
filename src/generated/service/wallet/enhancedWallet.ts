import { api } from "./wallet";

const enhancedApi = api.enhanceEndpoints({
  endpoints: {
    walletControllerGetOrCreateWallet: {
      providesTags: (result, error, arg) => [
        { type: "Wallet", id: arg.userId },
        { type: "Wallet", id: "LIST" },
      ],
    },
    walletControllerInitializeDeposit: {
      invalidatesTags: (result, error, arg) => [
        { type: "Wallet", id: arg.userId },
        { type: "Wallet", id: "LIST" },
        { type: "Transaction", id: arg.userId },
      ],
    },

    walletControllerVerifyDeposit: {
      invalidatesTags: (result, error, arg) => [{ type: "Wallet", id: "LIST" }],
    },
  },
});

export { enhancedApi as api };
