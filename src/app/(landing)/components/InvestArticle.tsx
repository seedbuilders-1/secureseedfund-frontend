import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import explore1 from "@/assets/iconspng/explore1.png";
import explore2 from "@/assets/iconspng/explore2.png";
import explore3 from "@/assets/iconspng/explore3.png";

// Default data
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

type InvestArticleCarouselProps = {
  title: string;
  data?: typeof explore;
};

const InvestArticleCarousel: React.FC<InvestArticleCarouselProps> = ({
  title,
  data = explore,
}) => {
  return (
    <section className="w-full py-20 px-6">
      <div className="w-full px-4 relative">
        <div className="flex gap-[2em] items-center">
          <h3 className="text-[14px] font-[400] text-dark md:text-[2rem]">
            {title}
          </h3>
          <button className="border border-[#d6d7d7] rounded-md px-3 py-1 text-[12px] font-medium">
            See All
          </button>
        </div>

        <div className="mt-11 relative ">
          <Carousel className="w-full max-w-full ">
            <CarouselContent className="relative gap-8 ">
              {data.map((item, index) => (
                <CarouselItem
                  key={index}
                  className=" border gap-[4rem] border-[#dcdcdc] basis-[100%] rounded-lg md:basis-1/2  lg:basis-[400px] pl-[0rem] "
                >
                  <Image
                    src={item.image}
                    alt={`Explore Icon ${index + 1}`}
                    layout="responsive"
                    width={320}
                    height={180}
                    className="object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <p className="mb-3 text-[#bfbbbb] text-[1.2rem] font-medium">
                      {item.OrganiName}
                    </p>
                    <h3 className="text-[1rem] font-semibold mt-5 mb-3">
                      {item.OrganiDesc}
                    </h3>
                    <p className="text-[1rem] font-normal">
                      {item.OrganiParagraph}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4 mb-2">
                      {item.Tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-[#F7F8F9] border border-[#eeeff1] rounded-sm text-[#4B5768] text-[0.9rem] p-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 mb-3">
                      <span className="text-[#2B2B2B] text-[0.9rem] font-semibold">
                        Funding:
                      </span>
                      <span className="text-[#bfbbbb] text-[0.9rem]">
                        {item.Funding}
                      </span>
                    </div>
                    <div className="flex gap-3 mb-3">
                      <span className="text-[#2B2B2B] text-[0.9rem] font-semibold">
                        Valuation:
                      </span>
                      <span className="text-[#bfbbbb] text-[0.9rem]">
                        {item.Valuation}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-[-70px] left-[90%] transform translate-x-[-100%]  text-bold " />
            <CarouselNext className="absolute top-[-70px] left-[90%] transform translate-x-[100%] " />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default InvestArticleCarousel;
