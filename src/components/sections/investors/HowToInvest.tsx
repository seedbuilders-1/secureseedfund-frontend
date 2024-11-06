import { Button } from "@/components/ui/button";
import PaddingContainer from "@/components/shared/PaddingContainer";
import Image from "next/image";

interface IHowToCard {
  title: string;
  desc: string;
}
const HowToCard = ({ title, desc }: IHowToCard) => {
  return (
    <div className="w-full flex flex-col p-6 bg-[#001215] border border-r-[#ffff]">
      <h4 className="text-[1.1rem] font-[400] text-[#CDEED3] md:text-[2rem]">
        {title}
      </h4>
      <p className="text-[0.9rem]  text-white font-[300] w-[50%] mt-7 md:text-[1rem]">
        {desc}
      </p>
    </div>
  );
};

const HowToInvest = () => {
  return (
    <section className="w-full">
      <div className="bg-[#001D21]">
        <PaddingContainer className="py-10 px-0">
          <div className="w-full flex flex-col space-y-8">
            <h3 className="text-[#CDEED3] text-[1.9rem] text-center md:text-[3.0625rem]">
              How To Invest
            </h3>
            <div className="w-full flex  flex-col md:flex-row">
              <HowToCard title=".01" desc="Sign Up" />
              <HowToCard title=".02" desc="Explore The Startups" />
              <HowToCard title=".03" desc="Securely Fund" />
              <HowToCard title=".04" desc="Review Miles Stones" />
            </div>
          </div>
        </PaddingContainer>
      </div>
      <PaddingContainer>
        <div className="bg-[#DCDCDC] mt-[4rem] grid grid-cols-1 w-full md:grid-cols-2 h-full">
          <div>
            <Image
              src="/assets/images/investorstarted.svg"
              alt=""
              width={600}
              height={550}
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-4 space-y-4">
            <p className="text-[1rem] md:text-[1.7rem]">
              Securely Invest startups you can trust
            </p>
            <h2 className=" text-[#544A2E] text-[2rem] md:text-[3.2rem] w-[70%]">
              Join hundreds of investors funding the biggest startups globally.
            </h2>
            <Button className="w-[50%] text-[#ffff] bg-primary md:w-[30%]">
              Get started
            </Button>
          </div>
        </div>
      </PaddingContainer>
    </section>
  );
};

export default HowToInvest;
