import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full grid grid-cols-[1fr] min-h-[90vh] md:grid-cols-[1.5fr_1fr]">
      <div className="bg-[#ffff] p-10 justify-center flex flex-col text-[#011012] md:bg-[#CDEED3]">
        <div className="font-[600] bg-[#CDEED3] px-4 py-4 rounded-2xl">
          Tommorrow’s Unicorn starts here
        </div>
        <h1 className="font-[400] text-[3.2rem] leading-tight md:text-[5.3125rem]">
          Securely Invest in <br /> Startups Here.
        </h1>

        <p className="text-[1rem] font-[300] md:text-[1.5rem]">
          Let us help you verify, vet, access and monitor your startup <br />
          investments portfolios in one dashboard across the globe. <br />
          <strong className="font-[500]">Invest as little as $1000</strong>
        </p>
        <div className="flex items-center space-x-4 mt-6">
          <Button className="bg-dark text-[#ffff] md:bg-primary">
            Join SecureSeedFund
          </Button>
          <Button variant="outline">Explore Startups</Button>
        </div>
      </div>
      <div className="flex-1 relative h-full">
        <Image
          src="/assets/images/hero-image.png"
          alt="Hero Image"
          priority
          width={500}
          height={500}
          className="object-cover object-right-bottom h-full w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
