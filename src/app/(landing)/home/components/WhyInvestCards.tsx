import React from "react";
import Image from "next/image";
import Featured1 from "@/assets/iconspng/Featured1.png";
import Featured2 from "@/assets/iconspng/Featured2.png";
import Featured3 from "@/assets/iconspng/Featured3.png";
import Featured4 from "@/assets/iconspng/Featured4.png";
import Featured5 from "@/assets/iconspng/Featured5.png";
import Featured6 from "@/assets/iconspng/Featured6.png";
const cardData = [
  {
    id: 1,
    image: Featured1,
    title: "Gain access to only verified, vetted and assessed startups",
    description:
      "Due diligence is carried on both startups and investors, it is 100% secure.",
  },
  {
    id: 2,
    image: Featured2,
    title: "Secured payments",
    description:
      "We only make tranche payments to startups based on milestones agreed upon. If milestones are not achieved without valid reasons funds are returned back to investors securely.",
  },
  {
    id: 3,
    image: Featured3,
    title:
      "Monitor your startup investments portfolios in one dashboard across the globe.",
    description:
      "We help monitor the progress of startups in your portfolio to make sure your funds are used judiciously. You can either leverage our network of startups or bring over an interesting startup to sign up with us and let’s help you monitor their progress and your funds.",
  },
  {
    id: 4,
    image: Featured4,
    title: "Seamless infrastructure",
    description:
      "A hassle free and secure matchmaking investment platform for new and aspiring investors.",
  },
  {
    id: 5,
    image: Featured5,
    title: "Increase and build your wealth",
    description: "Increase and build your wealth for the long term",
  },
  {
    id: 6,
    image: Featured6,
    title: "Invest and receive gains on your terms",
    description:
      "You have the opportunity to receive equity, debt or any other investment contract that works for you.",
  },
];

const WhyInvestCards = () => {
  return (
    <div className="my-4 grid grid-cols-2 gap-6 px-4 ">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="bg-[#0F8B3A1A] mb-4  p-3 leading-[15px] md:leading-[20px] rounded-[6px]  md:max-w-[400px]"
        >
          <Image src={card.image} alt="" className="mb-[20px]" />
          <h3 className="text-[11px] md:text-[1.2rem] font-medium md:mt-[5rem] text-left">
            {card.title}
          </h3>
          <p className="text-[9px] md:text-[1.1rem] font-500 md:mt-[1rem]  mt-3 text-left">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WhyInvestCards;
