import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full grid grid-cols-[1fr] min-h-[90vh] md:grid-cols-[1.5fr_1fr]">
      <div className="bg-[#ffff] p-10 justify-center flex flex-col text-[#011012] mt-0 md:mt-7">
        <div className="max-w-[600px] mx-auto mt-[-10rem] md:mt-0">
          <div className="font-[500] bg-[#D9F3A9] px-4 py-4 w-full items-center rounded-2xl flex md:w-[50%] ">
            <span>Securely Invest in startups here</span>
            <ArrowRight size={14} />
          </div>
          <h1 className="font-[400] text-[3.2rem] leading-tight md:text-[4.5rem]">
            Tomorrow’s Unicorn Starts Here
          </h1>

          <p className="text-[1rem] font-[300] md:text-[1.3rem]">
            Let us help you verify, vet, access and monitor your startup
            investments portfolios in one dashboard across the globe
            <strong className="font-[500]">Invest as little as $1000</strong>
          </p>
        </div>
      </div>
      <div className="relative bg-dark">
        <div className="flex bg-white gap-3 px-6 py-5  rounded-xl w-[280px] absolute bottom-[53px] ml-[1rem]">
          <div className="text-[#628F0F] flex justify-center items-center bg-[#D9F3A9] w-[20px] h-[20px] border rounded-[100%] border-[#628F0F]">
            $
          </div>
          <span className="">Invest in the future</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
