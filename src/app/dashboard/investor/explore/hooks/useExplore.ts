import { api } from "@/generated/service/startups/enhancedstartup";

const useExplore = (userId?: string) => {
  const { data: allStartupsData, isLoading: loadingAllStartupData } =
    api.useStartupControllerFindAllQuery({
      // subscriptionPlan: "basic,premium",
    });

  return {
    allStartupsData,
    loadingAllStartupData,
  };
};

export default useExplore;
