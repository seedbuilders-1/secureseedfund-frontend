import React from "react";
import Link from "next/link";
import InvestorCard from "@/components/cards/InvestorCard";
import InvestCard from "@/components/cards/InvestCard";
import SmallCard from "@/components/cards/SmallCard";
import CustomAccordion from "@/components/custom-shadcn/Accordion";
import EnquiryCard from "@/components/cards/EnquiryCard";
import Image from "next/image";

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

      <div className="relative mt pb-20">
        <p className="text-center font-medium text-4xl text-[#1E293B] mt-[450px] mb-6">
          Why SecureSeedFund?
        </p>
        <InvestCard
          title="Raise Capital Quickly"
          detail="Lorem ipsum dolor sit amet consectetur. Ullamcorper mauris a fermentum sed orci enim tincidunt amet neque. Arcu nisl nullam id sed lectus augue tortor. Quam dolor auctor ut fringilla magna amet faucibus ut sed. Aliquet purus pretium gravida nunc vitae. Elit pulvinar libero arcu amet. Magna cras in faucibus et at sed placerat. Erat ultricies tincidunt vel lacinia libero maecenas sagittis cursus. Cursus ac arcu facilisi amet."
        />
        <div className="flex gap-6 mx-28">
          <SmallCard
            title="Multiple Financing Options"
            content="Lorem ipsum dolor sit amet consectetur. Ullamcorper mauris a fermentum sed orci enim tincidunt amet neque. Arcu nisl nullam id sed lectus augue tortor. Quam dolor auctor ut fringilla magna amet faucibus ut sed. Aliquet purus pretium gravida nunc vitae. Elit pulvinar libero arcu amet."
          />
          <SmallCard
            title="Lower Risk"
            content="Lorem ipsum dolor sit amet consectetur. Ullamcorper mauris a fermentum sed orci enim tincidunt amet neque. Arcu nisl nullam id sed lectus augue tortor. Quam dolor auctor ut fringilla magna amet faucibus ut sed. Aliquet purus pretium gravida nunc vitae. Elit pulvinar libero arcu amet."
          />
        </div>
      </div>

      <div className="w-full bg-secondaryblue py-12">
        <div className="mx-24 pt-12 mb-12">
          <p className="text-center text-3xl mb-20 font-secondary text-white">
            Your company is much closer to investments more
            <br /> than you think
          </p>
          <div className="flex items-center gap-6">
            <div className="flex-1">
              <div className="bg-purple rounded-full w-8 h-8 flex items-center justify-center mb-4">
                <p className="text-white text-sm font-bold">1</p>
              </div>
              <p className="font-medium text-xl font-secondary mb-4 text-white">
                Create an account
              </p>
              <p className="text-sm font-primary text-brandText text-justify leading-6">
                It's seamless to set up an account and upload necessary company
                data. Then, we approve if everything checks out.
              </p>
            </div>

            <div className="flex-1 flex justify-center">
              <Image
                src="/assets/images/arrow-1.png"
                alt=""
                width={41}
                height={1}
              />
            </div>

            <div className="flex-1">
              <div className="bg-secondarygreen rounded-full w-8 h-8 flex items-center justify-center mb-4">
                <p className="text-white text-sm font-bold">2</p>
              </div>
              <p className="font-medium text-xl font-secondary mb-4 text-white">
                Setup a funding campaign
              </p>
              <p className="text-sm font-primary text-white text-justify leading-6">
                Create a funding campaign to convince investors on the purpose
                of fund raising. Make sure to make things comprehensive.
              </p>
            </div>

            <div className="flex-1 flex justify-center">
              <Image
                src="/assets/images/arrow-1.png"
                alt=""
                width={41}
                height={1}
              />
            </div>

            <div className="flex-1">
              <div className="bg-brown rounded-full w-8 h-8 flex items-center justify-center mb-4">
                <p className="text-white text-sm font-bold">3</p>
              </div>
              <p className="font-medium text-xl font-secondary mb-4 text-white">
                Go live
              </p>
              <p className="text-sm font-primary text-white text-justify leading-6">
                Once everything checks out, go live, our team will review and if
                it all looks good, your campaign will be live to investors.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-28">
        <p className="text-[#101828] text-3xl font-bold text-center leading-10 font-primary mb-4">
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
