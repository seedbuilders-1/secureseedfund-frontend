import React from "react";
import Image from "next/image";

const cards = [
  {
    image: "/assets/images/card-1.png",
    title: "Reinventing Speech with AI Thechnolgoies",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tristique quam volutpat quisque rhoncus amet mi viverra congue pellentesque. In arcu vitae massa volutpat massa askdsksa",
    price: "$32,460 / $100,000 ",
    valuation: "$28,210,460",
    investors: "32",
    mininvest: "$300",
  },
  {
    image: "/assets/images/card-2.png",
    title: "Reinventing Speech with AI Thechnolgoies",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tristique quam volutpat quisque rhoncus amet mi viverra congue pellentesque. In arcu vitae massa volutpat massa askdsksa",
    price: "$32,460 / $100,000 ",
    valuation: "$28,210,460",
    investors: "32",
    mininvest: "$300",
  },
  {
    image: "/assets/images/card-3.png",
    title: "Reinventing Speech with AI Thechnolgoies",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tristique quam volutpat quisque rhoncus amet mi viverra congue pellentesque. In arcu vitae massa volutpat massa askdsksa",
    price: "$32,460 / $100,000 ",
    valuation: "$28,210,460",
    investors: "32",
    mininvest: "$300",
  },
  {
    image: "/assets/images/card-4.png",
    title: "Reinventing Speech with AI Thechnolgoies",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tristique quam volutpat quisque rhoncus amet mi viverra congue pellentesque. In arcu vitae massa volutpat massa askdsksa",
    price: "$32,460 / $100,000 ",
    valuation: "$28,210,460",
    investors: "32",
    mininvest: "$300",
  },
];

const LandingPageCard = () => {
  const progressPercentage = 75;
  return (
    <div className="flex items-center gap-6">
      {cards.map((card, index) => (
        <div key={index}>
          <div className="relative shadow-md h-[448px] w-[320px]">
            <div>
              <Image
                src={card.image}
                alt={card.title}
                width={325}
                height={183}
                className="rounded-tl-md rounded-tr-md"
              />
              <Image
                src="/assets/images/card-logo.png"
                alt=""
                width={55}
                height={55}
                className="absolute bottom-56 right-1 object-contain"
              />
            </div>

            <div className="mt-4 p-4">
              <p className="w-[207px] text-normal font-medium leading-6 text-cardTitle">
                {card.title}
              </p>
              <p className="w-[207px] text-normal font-medium">
                {card.content.substring(0, 20)}...
              </p>
              <p>{card.price}</p>

              <div className="bg-gray-200 h-3 w-full rounded">
                <div
                  className="bg-bar h-full rounded"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p>{card.valuation}</p>
                  <p>valuation</p>
                </div>
                <div>
                  <p>{card.investors}</p>
                  <p>investors</p>
                </div>

                <div>
                  <p>{card.mininvest}</p>
                  <p>mininvest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingPageCard;
