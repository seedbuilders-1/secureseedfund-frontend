import { Button } from "@/components/ui/button";
import Image from "next/image";
import Home from "@/assets/icons/home.svg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full   mt-[4rem] flex flex-col md:flex-row">
      <div className=" flex flex-col  p-6 md:p-12 text-[#011012]">
        <div className="max-w-2xl mx-auto md:mx-0">
          <h1 className="font-bold text-2xl md:text-4xl text-center md:text-left">
            <span>Tomorrow's Unicorn</span>
            <br />
            <span className="text-[#0BA53C] text-3xl md:text-4xl">
              starts here
            </span>
          </h1>

          <p className="text-sm md:text-lg mt-4 text-center md:text-left">
            <strong className="font-semibold text-xl md:text-2xl block mb-2">
              Securely invest in startups here
            </strong>
            <span className="text-[#2B2B2B] font-normal text-xs md:text-base block mb-2">
              Let us help you verify, vet, access, and monitor your startup
              investments portfolios in one dashboard across the globe.
            </span>
            <strong className="font-semibold block">
              Invest as little as $1000
            </strong>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <Link href="/auth/sign-in">
              <Button className="bg-dark text-white md:bg-[#241A3F] text-xs md:text-sm w-full sm:w-auto">
                {" "}
                Join Secure Seedfund
              </Button>
            </Link>
            <Link href="/investors">
              <Button
                variant="outline"
                className="text-xs md:text-sm w-full sm:w-auto"
              >
                Explore Startups
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className=" flex justify-center items-center md:block">
        <div className="relative w-[296px] h-[283px] md:w-[612px] md:h-[520px]">
          <Image
            src={Home}
            alt="Hero Image"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
