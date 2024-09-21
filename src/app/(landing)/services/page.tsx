import ServiceCard from "@/components/cards/ServiceCard";
import React from "react";

const ServicesPage = () => {
  return (
    <>
      <section className="w-full min-h-[90vh] md:mt-[4.5rem] 2xl:mt-[3.5rem]">
        <div className="bg-[#fff] p-10 flex flex-col items-center text-[#011012]">
          <div className="text-center mb-4">
            <h1 className=" font-bold text-[2rem]">
              Support <span className="text-[#00A539]">Services</span> <br />
              For Startups
            </h1>
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center md:gap-12">
            <ServiceCard
              imageSrc="/assets/images/service1.png"
              title="Learn how to pitch like a PRO"
              price={100}
              buttonText="Get Started"
            />
            <ServiceCard
              imageSrc="/assets/images/service5.png"
              title="Pitch Deck Generator"
              price={200}
              buttonText="Get Started"
            />
            <ServiceCard
              imageSrc="/assets/images/service2.png"
              title="Financial projections, profit and loss with financial modelling for 5 years"
              price={375}
              buttonText="Get Started"
            />
            <ServiceCard
              imageSrc="/assets/images/service3.png"
              title="Virtual office setup"
              price={300}
              buttonText="Get Started"
            />
            <ServiceCard
              imageSrc="/assets/images/service4.png"
              title="Financial/Bookeeping service for a year"
              price={750}
              buttonText="Get Started"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
