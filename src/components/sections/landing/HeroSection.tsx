import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full grid grid-cols-[1.5fr_1fr] min-h-[90vh]">
      <div className="flex-1 bg-[#CDEED3] p-10 justify-center flex flex-col text-[#011012]">
        <span className="font-[600]">Tommorrow’s Unicorn starts here</span>
        <h1 className="font-[400] text-[5.3125rem]">
          Securely invest in <br /> startups here.
        </h1>

        <p className="text-[1.5rem] font-[300]">
          Let us help you verify, vet, access and monitor your startup <br />
          investments portfolios in one dashboard across the globe. <br />
          <strong className="font-[500]">Invest as little as $1000</strong>
        </p>
        <div className="flex items-center space-x-4 mt-6">
          <Button>Join SecureSeedFund</Button>
          <Button variant="outline">Explore Startups</Button>
        </div>
      </div>
      <div className="flex-1 relative">
        <Image
          src="/assets/images/hero-image.png"
          fill
          alt="Hero Image"
          className="object-cover object-right-bottom"
        />
      </div>
    </section>
  );
};

export default HeroSection;
