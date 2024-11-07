import { useToast } from "@/components/ui/use-toast";
import {
  api,
  SubscriptionsControllerCompleteSubscriptionTransactionApiArg,
  SubscriptionsControllerGenerateSubscriptionTransactionApiArg,
} from "@/services/subscriptions";

interface Props {
  userId: string;
}

const useSubscription = ({ userId }: Props) => {
  const [
    createSubsciptionStart,
    {
      isLoading: creatingSubscription,
      isSuccess: createdSubscription,
      data: response,
    },
  ] = api.useSubscriptionsControllerGenerateSubscriptionTransactionMutation();

  const { toast } = useToast();
  const createSubscription = async (
    values: SubscriptionsControllerGenerateSubscriptionTransactionApiArg
  ) => {
    try {
      await createSubsciptionStart(values).unwrap();
    } catch (err: any) {
      console.log(err);
      toast({
        variant: "destructive",
        title: err?.data?.message || "Uh oh! Something went wrong.",
      });
    }
  };

  const [
    completeSubscriptionStart,
    { data: completeSubResponse, isSuccess: completedSubscription },
  ] = api.useSubscriptionsControllerCompleteSubscriptionTransactionMutation();

  const completeSubscription = async (
    values: SubscriptionsControllerCompleteSubscriptionTransactionApiArg
  ) => {
    try {
      await completeSubscriptionStart(values).unwrap();
      toast({
        className:
          "top-0 right-0 flex fixed text-white  bg-green-600 md:max-w-[420px] md:top-4 md:right-4",
        title: "Payment verification successful",
        variant: "default",
      });
    } catch (err: any) {
      console.log(err);
      toast({
        variant: "destructive",
        title: err?.data?.message[0] || "Uh oh! Something went wrong.",
      });
    }
  };

  return {
    createSubscription,
    creatingSubscription,
    createdSubscription,
    response,
    completeSubscription,
    completedSubscription,
    completeSubResponse,
  };
};

export default useSubscription;
