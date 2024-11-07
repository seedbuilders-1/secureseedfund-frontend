"use client";
import { api } from "@/services/startup";
import { useState } from "react";
import { api as investorApi } from "@/services/investor/index";
import { InvestorControllerInvestInCampaignApiArg } from "@/services/investor/index";
import { useToast } from "@/components/ui/use-toast";
import { useDebounce } from "use-debounce";
interface Props {
  searchText?: string;
}
const useExplore = ({ searchText }: Props) => {
  const { toast } = useToast();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [debouncedSearchText] = useDebounce(searchText, 400);
  const { data: allStartupsData, isFetching: loadingAllStartupData } =
    api.useStartupControllerFindAllQuery({
      subscriptionPlan: "basic,premium",
      page: page,
      limit: limit,
      keyword: debouncedSearchText,
    });
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  const [
    createInvestStart,
    { isLoading: isInvesting, isSuccess: investedSuccess },
  ] = investorApi.useInvestorControllerInvestInCampaignMutation();

  const createInvestment = async (
    values: InvestorControllerInvestInCampaignApiArg
  ) => {
    try {
      await createInvestStart(values).unwrap();
      toast({
        className:
          "top-0 right-0 flex fixed text-white  bg-green-600 md:max-w-[420px] md:top-4 md:right-4",
        title: "You have Successfully Invested in this company ",
        variant: "default",
      });
    } catch (err: any) {
      console.log(err);
      toast({
        className:
          "top-0 right-0 flex fixed   md:max-w-[420px] md:top-4 md:right-4",
        variant: "destructive",
        title: err?.data?.message ?? "Uh oh! Something went wrong.",
      });
    }
  };
  return {
    allStartupsData,
    page,
    setLimit,
    handlePageChange,
    loadingAllStartupData,
    createInvestment,
    isInvesting,
    investedSuccess,
  };
};

export default useExplore;
