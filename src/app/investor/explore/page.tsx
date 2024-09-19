"use client";
import React from "react";
import Image from "next/image";
import explore1 from "@/assets/iconspng/explore1.png";
import explore2 from "@/assets/iconspng/explore2.png";
import explore3 from "@/assets/iconspng/explore3.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Page() {
  const explore = [
    {
      image: explore1,
      OrganiName: "Chaw Wow",
      OrganiDesc:
        "We are in the business of developing products for the building and construction eco system.",
      OrganiParagraph:
        "From comprehensive product management and advanced architectural design to seamless construction and sustainable practices, our expert team ensures every project is delivered.",
      Tags: ["VC-BACKED", "FEMALE FOUNDER", "TECH", "+3"],
      Funding: "$3,500,000 from 150 investors",
      Valuation: "$40.26M valuations",
    },
    {
      image: explore2,
      OrganiName: "Tech Villa",
      OrganiDesc:
        "We are in the business of developing products for the building and construction eco system.",
      OrganiParagraph:
        "From comprehensive product management and advanced architectural design to seamless construction and sustainable practices, our expert team ensures every project is delivered.",
      Tags: ["VC-BACKED", "FEMALE FOUNDER", "TECH", "+3"],
      Funding: "$3,500,000 from 150 investors",
      Valuation: "$40.26M valuations",
    },
    {
      image: explore3,
      OrganiName: "Sisphus",
      OrganiDesc:
        "We are in the business of developing products for the building and construction eco system.",
      OrganiParagraph:
        "From comprehensive product management and advanced architectural design to seamless construction and sustainable practices, our expert team ensures every project is delivered.",
      Tags: ["VC-BACKED", "FEMALE FOUNDER", "TECH", "+3"],
      Funding: "$3,500,000 from 150 investors",
      Valuation: "$40.26M valuations",
    },
  ];

  return (
    <>
      <div className="mt-[3rem] flex flex-wrap gap-10 items-center justify-center">
        <Select>
          <SelectTrigger className="w-[300px] mt-2 text-slate-900 border border-slate-300  h-[44px]">
            <SelectValue placeholder="Industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Industry</SelectLabel>
              <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
              <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
              <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
              <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
              <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
              <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[300px] mt-2 text-slate-900 border border-slate-300  h-[44px]">
            <SelectValue placeholder="sort by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>sort by status</SelectLabel>
              <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
              <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
              <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
              <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
              <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
              <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-wrap gap-6 mt-11 items-center justify-center ">
        {explore.map((item, index) => (
          <div
            key={index}
            className="w-[360px] border border-[#e7e8e9] rounded-lg p-4 "
          >
            <Image src={item.image} alt={`Explore Icon ${index + 1}`} />
            <p className="mb-3 mt-1 text-[#bfbbbb] text-[18px] font-medium">
              {item.OrganiName}
            </p>
            <h3 className="text-[20px] font-semibold mt-5 mb-3">
              {item.OrganiDesc}
            </h3>
            <p className="text-[16px] font-normal">{item.OrganiParagraph}</p>

            <div className="flex justify-between mt-4 mb-2">
              {item.Tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-[#F7F8F9] text-[#4B5768] text-[12px] p-2"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mb-3">
              <span className="text-[#2B2B2B] text-[16px] font-semibold">
                Funding: {item.Funding.split(" ").slice(0, 1)}{" "}
              </span>
              <span className="text-[#bfbbbb] font-normal">
                {item.Funding.split(" ").slice(1).join(" ")}
              </span>
            </div>
            <div className="flex gap-3 mb-3">
              <span className="text-[#2B2B2B] text-[16px] font-semibold">
                Valuation: {item.Valuation.split(" ").slice(0, 1)}{" "}
              </span>
              <span className="text-[#bfbbbb] font-normal">
                {item.Valuation.split(" ").slice(1).join(" ")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Page;
