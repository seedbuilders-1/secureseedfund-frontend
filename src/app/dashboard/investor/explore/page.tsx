"use client";
import React from "react";
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
import useExplore from "./hooks/useExplore";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

function Page() {
  const { allStartupsData, loadingAllStartupData } = useExplore();
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filters Section */}
      <div className="flex gap-4 mb-[4rem] mt-[2rem] max-w-[700px] mx-auto">
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

      {/* Startups Grid */}
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
          allStartupsData?.items.map((startup) => (
            <div
              key={startup.id}
              onClick={() =>
                router.push(`/dashboard/investor/explore/${startup.id}`)
              }
              className="bg-white rounded-xl border cursor-pointer border-[#0000001A] overflow-hidden w-[390px] h-[550px] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={startup.founder?.profileImage}
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
                <div className="mb-4">
                  <h2 className="text-xl font-medium mb-2 text-[#837e7e]">
                    Doful
                  </h2>
                  <p className="font-medium">
                    at startup dofu we specialize in retaurant ofring
                  </p>
                </div>

                <div className="flex-grow">
                  <p className="text-sm text-gray-500 mb-6 line-clamp-3">
                    at startup dofu we specialize in retaurant ofring at startup
                    dofu we specialize in retaurant ofring at startup dofu we
                    specialize in retaurant ofring at startup dofu we specialize
                    in retaurant ofring
                  </p>

                  <div className="space-y-4 mt-auto">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">Funding</span>
                      <span className="font-normal text-[#837e7e]">
                        $300 from 150 investors
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-medium">Valuation</span>
                      <span className="font-normal text-[#837e7e]">
                        $40.26M valuations
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Page;
