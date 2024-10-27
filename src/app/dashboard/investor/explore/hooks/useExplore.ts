"use client";
import { api } from "@/generated/service/startups/enhancedstartup";
import { useState } from "react";
import { useDebounce } from "use-debounce";
interface Props {
  searchText?: string;
}
const useExplore = ({ searchText }: Props) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [debouncedSearchText] = useDebounce(searchText, 400);
  const { data: allStartupsData, isFetching: loadingAllStartupData } =
    api.useStartupControllerFindAllQuery({
      // subscriptionPlan: "basic,premium",
      page: page,
      limit: limit,
      keyword: debouncedSearchText,
    });
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return {
    allStartupsData,
    page,
    setLimit,
    handlePageChange,
    loadingAllStartupData,
  };
};

export default useExplore;
