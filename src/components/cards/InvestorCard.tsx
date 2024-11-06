import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const cards = [
  {
    image: "/assets/images/invest-1.png",
    avatar: "/assets/images/jonah.png",
    name: "Jonah Myer",
    role: "Individual Investor",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tristique quam volutpat quisque rhoncus amet mi viverra congue pellentesque. In arcu vitae massa volutpat massa askdsksa",
    portfolio: "$28,210,460",
    companies: "32",
    mininvest: "$300",
  },
  {
    image: "/assets/images/invest-2.png",
    avatar: "/assets/images/sarah.png",
    name: "Jonah Myer",
    role: "Individual Investor",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tristique quam volutpat quisque rhoncus amet mi viverra congue pellentesque. In arcu vitae massa volutpat massa askdsksa",
    portfolio: "$28,210,460",
    companies: "32",
    mininvest: "$300",
  },
  {
    image: "/assets/images/invest-3.png",
    avatar: "/assets/images/pg.png",
    name: "Jonah Myer",
    role: "Individual Investor",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tristique quam volutpat quisque rhoncus amet mi viverra congue pellentesque. In arcu vitae massa volutpat massa askdsksa",
    portfolio: "$28,210,460",
    companies: "32",
    mininvest: "$300",
  },
  {
    image: "/assets/images/invest-4.png",
    avatar: "/assets/images/myer.png",
    name: "Jonah Myer",
    role: "Individual Investor",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tristique quam volutpat quisque rhoncus amet mi viverra congue pellentesque. In arcu vitae massa volutpat massa askdsksa",
    portfolio: "$28,210,460",
    companies: "32",
    mininvest: "$300",
  },
];

const LandingPageCard = () => {
  return (
    <div className="flex items-center gap-6">
      {cards.map((card, index) => (
        <div key={index}>
          <div className="shadow-md h-auto w-[320px]">
            <div className="relative">
              <Image
                src={card.image}
                alt={card.name}
                width={325}
                height={183}
                className="rounded-tl-md rounded-tr-md"
              />
              <Image
                src={card.avatar}
                alt={card.name}
                width={51}
                height={55}
                className="rounded-tl-md rounded-tr-md absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>

            <div className="mt-4 p-4 flex flex-col items-center">
              <p className="w-[207px] text-normal font-medium text-center leading-6 text-cardTitle">
                {card.name}
              </p>
              <p>{card.role}</p>
              <p className="w-[207px] text-sm leading-6 font-medium text-black font-primary">
                {card.content.substring(0, 45)}...
              </p>

              <div className="flex items-center gap-4 mt-4">
                <p className="bg-[#FDE68A] text-[#78350F] text-xs p-1.5 rounded-l-xl rounded-r-xl">
                  Actively Investing
                </p>
                <p className="bg-[#D1FAE5] text-[#064E3B] text-xs p-1.5 rounded-l-xl rounded-r-xl">
                  $1M+ investor
                </p>
              </div>

              <div className="flex gap-8 items-center mt-6">
                <div>
                  <p className="text-xs text-black">{card.portfolio}</p>
                  <p className="text-xs text-grey">Portfolio Value</p>
                </div>
                <div>
                  <p className="text-xs text-black">{card.companies}</p>
                  <p className="text-xs text-grey">Companies</p>
                </div>

                <div>
                  <p className="text-xs text-black">{card.mininvest}</p>
                  <p className="text-xs text-grey">min. invest</p>
                </div>
              </div>
            </div>

            <div className="border-t border-brandText mb-4 mt-4"></div>
            <div className="flex justify-between items-center px-4 pb-4">
              <p className="text-black leading-6 text-sm">View Profile</p>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingPageCard;
