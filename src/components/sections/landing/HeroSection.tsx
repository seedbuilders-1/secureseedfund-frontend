import { Button } from "@/components/ui/button";
import Image from "next/image";
import home from "@/assets/iconspng/home.png";
import HomeDeskTop from "@/assets/iconspng/HomeDeskTop.png";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen relative grid grid-cols-1">
      <div className="hidden md:block">
        <Image
          src={HomeDeskTop}
          alt="Desktop Hero Image"
          priority
          layout="fill"
          objectFit="cover"
          className="hidden md:block h-[100%] absolute top-0 left-0 w-full "
        />
      </div>

      <div className="absolute md:top-[20%] left-0 md:right-[30rem] text-right p-6 md:p-12 text-[#011012] md:bg-transparent flex flex-col items-center md:items-start">
        <h1 className="font-bold text-2xl md:text-4xl text-center md:text-left">
          <span>Tomorrow’s Unicorn</span>
          <br />
          <span className="text-[#0BA53C] text-3xl md:text-4xl">
            starts here
          </span>
        </h1>

        <p className="text-sm md:text-lg md:text-left mt-4 text-center">
          <strong className="font-semibold text-xl md:text-2xl">
            Securely invest in startups here
          </strong>{" "}
          <br />
          <span className="text-[#2B2B2B] font-normal text-xs md:text-base">
            Let us help you verify, vet, access, and monitor your startup
            investments portfolios in one dashboard across the globe.
          </span>{" "}
          <br />
          <strong className="font-semibold">Invest as little as $1000</strong>
        </p>

        <div className="flex items-center justify-center space-x-4 mt-6">
          <Button className="bg-dark text-white md:bg-[#241A3F] text-xs md:text-sm">
            Join Secure Seedfund
          </Button>
          <Button variant="outline" className="text-xs md:text-sm">
            Explore Startups
          </Button>
        </div>
      </div>

      {/* Mobile Hero Image */}
      <div className="relative  mt-[19rem] block md:hidden">
        <Image
          src={home}
          alt="Hero Image"
          priority
          layout="fill"
          objectFit="cover"
          className="object-cover md:hidden w-[100%] "
        />
      </div>
    </section>
  );
};

export default HeroSection;
