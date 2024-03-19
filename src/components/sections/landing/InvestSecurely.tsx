import PaddingContainer from "@/components/shared/PaddingContainer";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Campaign = () => {
  return (
    <div className="w-full border border-[#544A2E40] ">
      <div className="w-full h-[22rem] relative">
        <Image
          src="/assets/images/campaign-image.png"
          alt="Campaign"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-full p-4">
        <h4 className="text-dark text-[1.3rem] font-[500]">ACME AtronOmatic</h4>
        <span className="text-base font-[300] text-[#6A6363]">
          Keeping You Ahead of the Storm!
        </span>

        <div className="w-full grid grid-cols-3 mt-6 gap-x-2">
          <div className="flex flex-col w-full">
            <span className="text-[1rem] text-dark font-[500]">US $ 3.97M</span>
            <span className="text-[0.875rem] text-light">Raised</span>
          </div>
          <div className="flex flex-col w-full">
            <span className="text-[1rem] text-dark font-[500]">2913</span>
            <span className="text-[0.875rem] text-light">Investors</span>
          </div>
          <div className="flex flex-col w-full">
            <span className="text-[1rem] text-dark font-[500]">US $ 399</span>
            <span className="text-[0.875rem] text-light">Min. Investment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const InvestSecurely = () => {
  return (
    <section className="w-full py-20">
      <PaddingContainer>
        <div>
          <div className="flex flex-col items-center justify-center text-dark">
            <h2 className="text-[1.9rem] md:text-[3.0625rem] ">
              Securely invest in startups that you can trust.
            </h2>
            <p className="font-[300] text-[1.3rem]  md:text-[1.5rem] ">
              Join hundreds of investors funding the biggest startups globally.
            </p>
          </div>

          <div className="mt-20">
            <div className="">
              <Tabs defaultValue="vc-backed" className="">
                <TabsList className=" bg-white rounded-full border   grid w-full grid-cols-4 border-[#001D2133] h-14 max-w-[500px]">
                  <TabsTrigger
                    value="vc-backed"
                    variant="retro"
                    className="text-[11px] md:text-[1rem]"
                  >
                    VC Backed
                  </TabsTrigger>
                  <TabsTrigger
                    value="most-raised"
                    variant="retro"
                    className="text-[11px] md:text-[1rem]"
                  >
                    Most Raised
                  </TabsTrigger>
                  <TabsTrigger
                    value="new"
                    variant="retro"
                    className="text-[11px] md:text-[1rem]"
                  >
                    New
                  </TabsTrigger>
                  <TabsTrigger
                    value="female-founders"
                    variant="retro"
                    className="text-[11px]  md:text-[1rem]"
                  >
                    Female founders
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="w-full mt-6">
              <div className="w-full flex items-center justify-between">
                <div className="">
                  <h3 className="text-[1.2rem] font-[500] text-dark md:text-[2rem]">
                    VC and notable investors backed
                  </h3>
                  <div className="flex items-center space-x-2 text-[#544A2E] text-[0.9rem] md:text-[1.125rem]">
                    <span>Explore More Startups</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
              <div className=" flex space-x-4 mt-6  md:w-full">
                <Carousel className="w-full  max-w-[600px] md:max-w-full relative">
                  <CarouselContent className="">
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <Campaign />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <Campaign />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <Campaign />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <Campaign />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="absolute top-[-40px] left-[90%] transform translate-x-[-100%] invisible md:visible" />
                  <CarouselNext className="absolute top-[-40px] left-[90%] transform translate-x-[100%] invisible md:visible" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </PaddingContainer>
    </section>
  );
};

export default InvestSecurely;
