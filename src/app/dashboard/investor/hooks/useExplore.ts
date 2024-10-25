// useExplore.ts
import { api } from "@/generated/service/startups";

const useExplore = (userId?: string) => {
  const { data: allStartupsData, isLoading: loadingAllStartupData } =
    api.useStartupControllerFindAllQuery({
      userId: userId as string,
    });

  return {
    allStartupsData,
    loadingAllStartupData,
  };
};

export default useExplore;
