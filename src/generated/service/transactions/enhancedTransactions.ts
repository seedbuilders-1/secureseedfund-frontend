import { api } from "./transactions";

const enhancedApi = api.enhanceEndpoints({
  endpoints: {
    transactionsControllerGetAllTransactionsForUser: {
      providesTags: (result, error, arg) => [
        { type: "Transaction", id: arg.userId },
      ],
    },
  },
});

export { enhancedApi as api };
