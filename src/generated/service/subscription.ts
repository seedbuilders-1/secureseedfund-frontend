import { emptySplitApi as api } from "../emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    subscriptionsControllerGenerateSubscriptionTransaction: build.mutation<
      SubscriptionsControllerGenerateSubscriptionTransactionApiResponse,
      SubscriptionsControllerGenerateSubscriptionTransactionApiArg
    >({
      query: (queryArg) => ({
        url: `/subscriptions/${queryArg.userId}/subscribe`,
        method: "POST",
        body: queryArg.createSubscriptionDto,
      }),
    }),
    subscriptionsControllerCompleteSubscriptionTransaction: build.mutation<
      SubscriptionsControllerCompleteSubscriptionTransactionApiResponse,
      SubscriptionsControllerCompleteSubscriptionTransactionApiArg
    >({
      query: (queryArg) => ({
        url: `/subscriptions/complete`,
        method: "PUT",
        body: queryArg.completeSubscriptionDto,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type SubscriptionsControllerGenerateSubscriptionTransactionApiResponse =
  unknown;
export type SubscriptionsControllerGenerateSubscriptionTransactionApiArg = {
  userId: string;
  createSubscriptionDto: CreateSubscriptionDto;
};
export type SubscriptionsControllerCompleteSubscriptionTransactionApiResponse =
  unknown;
export type SubscriptionsControllerCompleteSubscriptionTransactionApiArg = {
  completeSubscriptionDto: CompleteSubscriptionDto;
};
export type CreateSubscriptionDto = {
  user: string;
  subscriptionType: "free" | "basic" | "premium";
  platform_type: "paystack" | "paydestal";
};
export type CompleteSubscriptionDto = {
  ref_id: string;
};
export const {
  useSubscriptionsControllerGenerateSubscriptionTransactionMutation,
  useSubscriptionsControllerCompleteSubscriptionTransactionMutation,
} = injectedRtkApi;
