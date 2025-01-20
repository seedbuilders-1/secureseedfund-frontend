"use client";
import React from "react";
import Image from "next/image";
import useExplore from "@/app/dashboard/investor/explore/hooks/useExplore";
import { thousandFormatter } from "@/lib/helpers";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import useProfile from "@/hooks/profile/useProfile";
import { useToast } from "@/components/ui/use-toast";

type InvestArticleCarouselProps = {
  title: string;
};

const InvestArticleCarousel: React.FC<InvestArticleCarouselProps> = ({
  title,
}) => {
  const { allStartupsData, loadingAllStartupData } = useExplore({});
  const { toast } = useToast();
  const router = useRouter();
  const { userProfile } = useProfile();
  const cardClick = (id: string) => {
    if (!userProfile) {
      toast({
        variant: "destructive",
        title: "Login to view startup",
      });
      return;
    } else {
      if (userProfile.subscription_plan === "free") {
        toast({
          variant: "destructive",
          title: "Upgrade to basic or premium plan to view this startup",
        });
      } else {
        router.push(`/dashboard/investor/explore/${id}`);
      }
    }
  };

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
          {/* <Carousel className="w-full max-w-full ">
            <CarouselContent className="relative gap-8 ">
              {data.map((item, index) => (
                <CarouselItem
                  key={index}
                  className=" border gap-[4rem] border-[#dcdcdc] basis-[100%] rounded-lg md:basis-1/2  lg:basis-[400px] pl-[0rem] "
                >
                  <Image
                    src={item?.companyInformation?.company_cover_photo}
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
            <CarouselPrevious className="absolute top-[-56px] left-[90%]  transform translate-x-[-100%]  text-bold " />
            <CarouselNext className="absolute top-[-56px] left-[90%] transform translate-x-[100%] " />
          </Carousel> */}
          {loadingAllStartupData ? (
            <div className="w-full max-w-7xl mx-auto px-[2rem] py-[2rem]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 9 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    className="w-full h-[300px] rounded-lg"
                  />
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
                onClick={() => cardClick(startup.id)}
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
                  <div className="flex flex-wrap gap-2 mt-4 mb-2">
                    {(startup?.companyInformation?.tags?.split(",") || [])
                      .slice(0, 3)
                      .map((tag: string, index: number) => (
                        <span
                          key={index}
                          className="bg-[#F7F8F9] border border-[#eeeff1] rounded-sm text-[#4B5768] text-[0.9rem] p-2"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    {startup?.companyInformation?.tags &&
                      startup.companyInformation.tags.split(",").length > 3 && (
                        <span className="bg-[#F7F8F9] border border-[#eeeff1] rounded-sm text-[#4B5768] text-[0.9rem] p-2">
                          +
                          {startup.companyInformation.tags.split(",").length -
                            3}{" "}
                          more
                        </span>
                      )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default InvestArticleCarousel;
