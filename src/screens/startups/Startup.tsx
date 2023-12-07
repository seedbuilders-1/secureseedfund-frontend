import React from "react";
import Link from "next/link";
import InvestorCard from "@/components/cards/InvestorCard";
import InvestCard from "@/components/cards/InvestCard";
import SmallCard from "@/components/cards/SmallCard";
import PackagesCard from "@/components/cards/PackagesCard";
import CustomAccordion from "@/components/custom-shadcn/Accordion";
import EnquiryCard from "@/components/cards/EnquiryCard";

const data = [
  {
    title: "Equity",
    details:
      "You own a part of the company you invest in, depending on the investment contract",
    background: "rgba(196, 203, 255, 0.30)",
  },
  {
    title: "Partnership",
    details:
      "You own a part of the company you invest in, depending on the investment contract",
    background: "rgba(0, 83, 39, 0.20)",
  },
  {
    title: "Grant",
    details:
      "You own a part of the company you invest in, depending on the investment contract",
    background: "rgba(249, 163, 38, 0.30)",
  },
  {
    title: "Debt Financing",
    details:
      "You own a part of the company you invest in, depending on the investment contract",
    background: "rgba(0, 83, 39, 0.20)",
  },
];

const accordionItems = [
  {
    title: "Is there a free trial available?",
    detail:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Can I change my plan later?",
    detail:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "What is your cancellation policy?",
    detail:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Can other info be added to an invoice?",
    detail:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "How does billing work?",
    detail:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "How do I change my account email?",
    detail:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];

const Startups = () => {
  const gradientStyle = {
    background: "#6434AA",
  };

  const sectionStyle = {
    background:
      "linear-gradient(108deg, rgba(217, 243, 169, 0.80) 0%, rgba(217, 243, 169, 0.50) 98.77%)",
  };

  return (
    <>
      <div className="relative">
        <div className="h-[400px] relative" style={gradientStyle}>
          <div className="flex flex-col items-center">
            <p className="text-white text-4xl font-medium leading-[50px]">
              Raise Funding
            </p>
            <p className="text-white text-4xl font-medium leading-[50px]">
              From <span className="text-span">Willing Investors</span>
            </p>
            <p className="text-brandText text-lg font-normal text-center">
              Nurture Innovation, Invest Confidently and secure equity the next
              <br />
              leading companies. Secure Seed Fund
            </p>
            <div className="mt-4 flex items-center gap-8">
              <button className="border-solid text-brandText border border-brandText py-3 px-4 rounded-sm">
                Get a Confounder
              </button>
              <button className="border-none bg-[#1AA657] text-brandText py-3 px-4 rounded-sm">
                Raise Funds
              </button>
            </div>
          </div>
          <div className="mt-16 flex items-center justify-between px-12">
            <p className="text-brandText text-sm">Featured Funding Campaigns</p>
            <Link href="/" className="text-brandText text-sm">
              See more
            </Link>
          </div>
          <div className="absolute top-[350px] left-1/2 transform -translate-x-1/2">
            <InvestorCard />
          </div>
        </div>
      </div>

      <div className="relative mt">
        <p className="text-center text-4xl text-[#1E293B] mt-[450px]">
          Why SecureSeedFund?
        </p>
        <InvestCard />
        <div className="flex items-center">
          <SmallCard
            title="Multiple Financing Options"
            content="Lorem ipsum dolor sit amet consectetur. Ullamcorper mauris a fermentum sed orci enim tincidunt amet neque. Arcu nisl nullam id sed lectus augue tortor. Quam dolor auctor ut fringilla magna amet faucibus ut sed. Aliquet purus pretium gravida nunc vitae. Elit pulvinar libero arcu amet. "
          />
          <SmallCard
            title="Lower Risk"
            content="Lorem ipsum dolor sit amet consectetur. Ullamcorper mauris a fermentum sed orci enim tincidunt amet neque. Arcu nisl nullam id sed lectus augue tortor. Quam dolor auctor ut fringilla magna amet faucibus ut sed. Aliquet purus pretium gravida nunc vitae. Elit pulvinar libero arcu amet. "
          />
        </div>
      </div>

      <div className="mt-8 p-12" style={sectionStyle}>
        <p className="text-[#1E293B] text-4xl font-medium text-center mb-6">
          Ways you can earn a return on your investment
        </p>
        <p className="text-center mb-6">
          As an investor, you decide how to invest in the company.{" "}
        </p>
        <p className="text-[#1AA657] text-xl underline text-center mb-6">
          Explore Companies
        </p>

        <div className="flex items-center gap-8 mt-16">
          {data.map((list, index) => (
            <div key={index}>
              <PackagesCard
                title={list.title}
                details={list.details}
                backgroundColor={list.background}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-sessionBg py-12">
        <div className="mx-24 pt-12 mb-12">
          <p className="text-center text-3xl mb-20 font-secondary">
            See how it works
          </p>
          <div className="flex items-center gap-6">
            <div>
              <div className="bg-[#D9F3A9] rounded-full w-8 h-8 flex items-center justify-center mb-4">
                <p className="text-[#64748B] text-sm font-bold">1</p>
              </div>
              <p className="font-medium text-xl font-secondary mb-6">
                Explore Inspiring Companies
              </p>
              <p className="text-normal font-primary">
                We have carefully selected companies that are credible and whose
                products aim to inspire real change in the world
              </p>
            </div>
            <div>
              <div className="bg-[#C4CBFF] rounded-full w-8 h-8 flex items-center justify-center mb-4">
                <p className="text-[#64748B] text-sm font-bold">2</p>
              </div>
              <p className="font-medium text-xl font-secondary mb-6">
                Explore Inspiring Companies
              </p>
              <p className="text-normal font-primary">
                We have carefully selected companies that are credible and whose
                products aim to inspire real change in the world
              </p>
            </div>
            <div>
              <div className="bg-[#C4CBFF] rounded-full w-8 h-8 flex items-center justify-center mb-4">
                <p className="text-[rgba(249, 163, 38, 0.40)] text-sm font-bold">
                  3
                </p>
              </div>
              <p className="font-medium text-xl font-secondary mb-6">
                Explore Inspiring Companies
              </p>
              <p className="text-normal w-auto font-primary">
                We have carefully selected companies that are credible and whose
                products aim to inspire real change in the world
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-12">
        <p className="text-[#101828] text-4xl font-bold text-center leading-10 font-primary mb-4">
          Frequently asked questions
        </p>
        <p className="text-[#667085] text-base text-center mb-16">
          Everything you need to know about the product and billing.
        </p>
        {accordionItems.map((items, index) => (
          <CustomAccordion
            title={items.title}
            detail={items.detail}
            key={index}
          />
        ))}
      </div>

      <div>
        <EnquiryCard />
      </div>
    </>
  );
};

export default Startups;
