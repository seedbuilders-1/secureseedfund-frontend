import PaddingContainer from "@/components/shared/PaddingContainer";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const Campaign = () => {
  return (
    <div className="w-[25%] border border-[#544A2E40]">
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
            <h2 className="text-[3.0625rem] ">
              Securely invest in startups that you can trust.
            </h2>
            <p className="text-[1.5rem] font-[300]">
              Join hundreds of investors funding the biggest startups globally.
            </p>
          </div>

          <div className="mt-20">
            <Tabs defaultValue="vc-backed">
              <TabsList className="h-14 bg-white rounded-full border border-[#001D2133]">
                <TabsTrigger value="vc-backed" variant="retro">
                  VC Backed
                </TabsTrigger>
                <TabsTrigger value="most-raised" variant="retro">
                  Most Raised
                </TabsTrigger>
                <TabsTrigger value="new" variant="retro">
                  New
                </TabsTrigger>
                <TabsTrigger value="female-founders" variant="retro">
                  Female Founders
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="w-full mt-6">
              <div className="w-full flex items-center justify-between">
                <div className="">
                  <h3 className="text-[2rem] font-[500] text-dark">
                    VC and notable investors backed
                  </h3>
                  <div className="flex items-center space-x-2 text-[#544A2E] text-[1.125rem]">
                    <span>Explore More Startups</span>
                    <ArrowRight size={14} />
                  </div>
                </div>

                <div className="space-x-2 flex">
                  <div className="w-12 h-12 flex items-center justify-center border border-[#6A6363] rounded-full cursor-pointer opacity-60">
                    <ArrowLeft size={18} />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center border border-[#6A6363] rounded-full cursor-pointer">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
              <div className="w-full pr-[-2.5rem] flex space-x-4 mt-6">
                <Campaign />
                <Campaign />
                <Campaign />
                <Campaign />
              </div>
            </div>
          </div>
        </div>
      </PaddingContainer>
    </section>
  );
};

export default InvestSecurely;
