"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import useExplore from "./hooks/useExplore";
import { thousandFormatter } from "@/lib/helpers";
import { useToast } from "@/components/ui/use-toast";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import PaginationControls from "@/components/shared/PaginationControls";
import { Skeleton } from "@/components/ui/skeleton";

function Page() {
  const [searchText, setSearchText] = useState("");
  const { allStartupsData, loadingAllStartupData, handlePageChange, page } =
    useExplore({ searchText });
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="flex-wrap flex  gap-4 mb-[4rem] mt-[2rem] mx-auto  max-w-[1200px] md:flex-nowrap">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search startups..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 border border-black"
          />
        </div>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="bg-white">
              <SelectLabel>Industry</SelectLabel>
              <SelectItem value="tech">Technology</SelectItem>
              <SelectItem value="health">Healthcare</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="education">Education</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Sort by status" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectLabel>Sort by</SelectLabel>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="funding">Highest Funding</SelectItem>
              <SelectItem value="valuation">Highest Valuation</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-wrap gap-6 items-center justify-center">
        {loadingAllStartupData ? (
          <div className="w-full max-w-7xl mx-auto px-[2rem] py-[2rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 9 }).map((_, index) => (
                <Skeleton key={index} className="w-full h-[300px] rounded-lg" />
              ))}
            </div>
          </div>
        ) : allStartupsData?.items?.length === 0 ? (
          <div className="flex items-center justify-center w-full h-[300px]">
            <p className="text-lg text-gray-500">No startups found.</p>
          </div>
        ) : (
          allStartupsData?.items.map((startup: any) => (
            <div
              key={startup.id}
              onClick={() =>
                router.push(`/dashboard/investor/explore/${startup.id}`)
              }
              className="bg-white rounded-xl border cursor-pointer border-[#0000001A] overflow-hidden w-[390px] h-[550px] transition-transform duration-300 hover:-translate-y-1 hover:border-[##0F8B3A] "
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={startup?.companyInformation?.company_cover_photo}
                  alt="startup image"
                  fill
                  className="object-cover"
                  quality={100}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="eager"
                  unoptimized
                />
              </div>
              <div className="p-6 flex flex-col">
                <div className="">
                  <h2 className="text-2xl font-medium mb-2 text-[#837e7e]">
                    {startup.companyInformation?.company_name}
                  </h2>
                  <p className="font-bold">
                    {startup?.companyInformation?.company_industry}
                  </p>
                </div>

                <div className="flex-grow">
                  <p className="text-sm text-gray-500 mb-6 line-clamp-3">
                    {startup.companyInformation?.company_desc}
                  </p>
                  <div className="flex text-center justify-center items-center border  border-[#064E3B] rounded-sm text-[#064E3B] my-3  bg-[#D1FAE5] h-[30px]  w-[100px] text-[13px]">
                    {startup.businessInformation?.business_model || "N/A"}
                  </div>
                  <div className="space-y-4 mt-auto">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">
                        Previous Funds Raised:
                      </span>
                      <span className="font-normal text-[#837e7e]">
                        {`₦ ${thousandFormatter(
                          startup.fundingInformation?.previous_fundraise ?? 0
                        )}`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="mt-4 w-full">
        <div className="ml-auto w-fit">
          <PaginationControls
            currentPage={page}
            onPageChange={handlePageChange}
            totalPages={allStartupsData?.meta?.totalPages || 1}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
