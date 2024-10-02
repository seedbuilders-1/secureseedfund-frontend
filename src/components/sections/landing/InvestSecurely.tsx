import Image from "next/image";
import { Button } from "@/components/ui/button";
import investsecureimage from "@/assets/iconspng/investsecureimage.png";
import InvestArticle from "@/app/(landing)/components/InvestArticle";

const InvestSecurely = () => {
  return (
    <section className="w-full py-20">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center  text-dark">
          <div className="flex items-center justify-center flex-col px-3">
            <h2 className="text-[1.9rem] font-[600] md:text-3xl text-center  leading-[40px]">
              Securely invest in{" "}
              <span className="text-[#00A539]">startups</span> that you can
              trust.
            </h2>
            <p className="font-[400] text-[14px] text-center  md:text-[20px] mt-3  mb-4 ">
              Join hundreds of investors funding the biggest startups globally.
            </p>
            <Button className="bg-dark text-[#ffff] ">Explore startup</Button>
          </div>
          <div className="hidden md:block">
            <Image src={investsecureimage} alt="" className="md:block" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <InvestArticle title="Most Raised This Week" />
        <div className="flex items-center justify-center mb-5">
          <Button className="bg-dark text-[#ffff]  "> Explore Startup</Button>
        </div>
      </div>
    </section>
  );
};

export default InvestSecurely;
