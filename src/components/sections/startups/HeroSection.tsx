import Image from "next/image";
import { Button } from "@/components/ui/button";
import startupbackground from "@/assets/iconspng/startbackground.png";
import BigStartupbg from "@/assets/iconspng/bigstartup.png";

const HeroSection = () => {
  return (
    <section className=" mt-[3rem]">
      <div className="flex  w-full items-center gap-[5rem] flex-col md:flex-row  md:gap-[1rem] px-[3rem]">
        <div className="flex items-center md:items-start justify-center flex-col space-y-6   ">
          <p className="text-[1rem] text-[#2B2B2B] md:text-left font-medium md:text-[1.2rem]">
            “Tomorrow’s Unicorn Starts Here”
          </p>
          <h1 className="font-bold text-3xl md:text-[2.4rem] text-center md:text-left">
            <span>
              Secure your{" "}
              <span className="text-[#0BA53C] text-3xl md:text-[2.4rem]">
                <br className="block md:hidden" /> SEED FUND
              </span>
              <br className="hidden md:block" /> here
            </span>
          </h1>
          <p className="text-[1rem] text-[#2B2B2B] font-medium text-center md:text-left md:text-[1.2rem]">
            let us help you <br />{" "}
            <span className="font-normal md:text-left">
              Attract the right investors in a few days. Raise capital from
              hundreds of verified and experienced global investors.
            </span>
          </p>
          <p className="text-[1rem] text-[#2B2B2B] font-medium text-center md:text-left md:text-[1.2rem]">
            {" "}
            Let us secure your funding needs while you get back to building your
            company
          </p>

          <div className="flex items-center mt-[1rem] h-11 justify-between w-full md:w-[80%]  gap-4 px-2 py-2  text-black bg-white border border-neutral-300 rounded-md shadow-sm hover:shadow-md transition-all duration-300">
            <input
              type="email"
              placeholder="Your email address"
              className="w-[70%]  text-sm bg-transparent focus:border-indigo-500 outline-none transition-colors duration-300"
              aria-label="Email address"
            />
            <Button
              variant="default"
              className="bg-gradient-to-r w-[30%] py-3 h-9 rounded-md from-[#241A3F] to-[#362d4f] text-white hover:from-[#2f2355] hover:to-[#453a61] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get Started
            </Button>
          </div>
        </div>

        <div className="">
          <div className="relative px-[1.5rem]">
            <Image
              src={startupbackground}
              alt=""
              className="block md:hidden min-w-[300px] w-[600px]"
            />
            <Image
              src={BigStartupbg}
              alt=""
              className="hidden md:block min-w-[300px] w-[600px]"
            />

            <div
              className="absolute bg-[#F5F5F5] px-9 p-2 text-[0.6rem]  rounded-[1rem] top-[-2.5rem] right-[2rem]  text-bold"
              style={{
                boxShadow: "0px 11.75px 24.49px 0px rgba(0, 0, 0, 0.1)",
              }}
            >
              <p className="font-bold ">
                From comprehensive product management and advanced architectural
                design to seamless construction and sustainable practices, our
                expert team ensures every project is delivered.{" "}
              </p>
            </div>

            <div
              className="absolute bg-[#F5F5F5] px-9 p-2 text-[0.6rem]  rounded-[1rem] right-[16rem] top-[4rem] md:right-[19rem]  text-bold"
              style={{
                boxShadow: "0px 11.75px 24.49px 0px rgba(0, 0, 0, 0.1)",
              }}
            >
              <p className="font-bold ">
                We are in the business of developing products for the building
                and construction eco system.{" "}
              </p>
            </div>

            <div
              className="absolute bg-[#F5F5F5] px-9 p-2 text-[0.6rem]  rounded-[1rem] left-[4rem] bottom-[-1rem] md:left-[10rem]  text-bold"
              style={{
                boxShadow: "0px 11.75px 24.49px 0px rgba(0, 0, 0, 0.1)",
              }}
            >
              <p className="font-bold ">
                $3,500,000{" "}
                <span className="text-[#2B2B2B8C]">from 150 investors</span>{" "}
              </p>
              <p className="font-bold ">
                $40.26M <span className="text-[#2B2B2B8C]">valuations</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
