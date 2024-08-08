import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Card = () => {
  return (
    <div className="bg-[#001517] pt-4 mx-auto max-w-[1200px] rounded-sm relative top-[-31px]">
      <Image
        src="/assets/images/startupitem.png"
        alt=""
        width={700}
        height={500}
        className="rounded-xl"
      />
      <div className=" px-4 w-full absolute bottom-[15px] left-0  ">
        <h3 className="text-white text-[1rem] font-semibold md:text-[1.3rem]">
          Startup/Brand name
        </h3>
        <div className="flex flex-col gap-4  md:flex-row  justify-between ">
          <div className="flex gap-4">
            <div className="font-[500] bg-[#FACFF1] px-2 py-4 text-center  w-[25%] rounded-[5rem]  md:w-full">
              <span>Fintech</span>
            </div>
            <div className="font-[500] bg-[#ffff] px-2 py-4  justify-center gap-3 w-[25%] items-center rounded-[5rem] flex md:w-full">
              <span className="text-center">Scale</span>
              <ArrowRight size={14} />
            </div>
          </div>
          <div className="bg-[#6A6363] border flex justify-between items-center gap-3 rounded-3xl h-[70px] border-[#CDEED3] px-4 py-2 w-full md:[50%}">
            <div>
              <h2 className="font-normal text-[1rem] text-[#CDEED3]">
                US$6.6M
              </h2>
              <span className="text-[.7rem text-[#CDEED3]"> Raised</span>
            </div>
            <div>
              <h2 className="font-normal text-[1rem] text-[#CDEED3]">4197 </h2>
              <span className="text-[.7rem text-[#CDEED3]"> Investors</span>
            </div>
            <div>
              <h2 className="font-normal text-[1rem] text-[#CDEED3]">MIN</h2>
              <span className="text-[.7rem text-[#CDEED3]"> Investment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="w-full  min-h-[100vh] grid grid-cols-[1fr]">
      <div className="bg-[#001D21] p-10  flex flex-col justify-center  mt-0 md:mt-7">
        <div className="max-w-[600px] space-y-4  mt-8">
          <h1 className="font-[400] text-[3.2rem] text-white leading-tight md:text-[4.5rem]">
            Tomorrow’s <span className="text-[#D9F3A9]">Unicorn </span>Starts
            Here
          </h1>

          <p className="text-[1rem] text-[#F7F8F6] font-[300] md:text-[1.3rem]">
            Let us help you attract the right investors in a few days. Raise
            capital from hundreds of verified and experienced global investors.
            Let us secure your funding needs while you get back to building your
            company.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <div className="font-[500] bg-none border border-[#CDEED3] px-4 py-4  w-[70%] rounded-3xl  md:w-[70%]">
              <span className="text-white">Yourexample@email.com</span>
            </div>
            <div className="font-[500] bg-[#CDEED3] px-4 py-4  justify-between w-[50%] items-center rounded-3xl flex md:w-[30%]">
              <span>Get started</span>
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </div>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="w-full">
            <Card />
          </CarouselItem>
          <CarouselItem className="w-full">
            <Card />
          </CarouselItem>
          <CarouselItem className="w-full">
            <Card />
          </CarouselItem>
          <CarouselItem className="w-full">
            <Card />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-[-40px] left-[90%] transform translate-x-[-100%] invisible md:visible" />
        <CarouselNext className="absolute top-[-40px] left-[90%] transform translate-x-[100%] invisible md:visible" />
      </Carousel>
    </section>
  );
};

export default HeroSection;
