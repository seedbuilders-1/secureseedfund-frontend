import React from "react";
import sampleIcon1 from "@/assets/iconspng/testimonie1.png";
import sampleIcon2 from "@/assets/iconspng/testimonie2.png";
import Image from "next/image";
const Testimonies = () => {
  const cardsData = [
    {
      title: "SisPhus",
      description:
        "Lorem ipsum dolor sit amet consectetur. Bibendum eget magnis eget ac laoreet. Pretium ut mauris.",
      icon: sampleIcon1,
      name: "John Doe",
      additionalInfo: "Product Manager, Sisyphus",
    },
    {
      title: "Webflow",
      description:
        "Lorem ipsum dolor sit amet consectetur. Bibendum eget magnis eget ac laoreet. Pretium ut mauris.",
      icon: sampleIcon2,
      name: "John Doe",
      additionalInfo: "Product Manager, Sisyphus",
    },
    {
      title: "Aspace",
      description:
        "Lorem ipsum dolor sit amet consectetur. Bibendum eget magnis eget ac laoreet. Pretium ut mauris..",
      icon: sampleIcon1,
      name: "John Doe",
      additionalInfo: "Product Manager, Sisyphus",
    },
  ];
  return (
    <div className="mt-[5rem]  flex items-center justify-center flex-col ">
      <h1 className="font-bold text-3xl md:text-[2.4rem] text-center md:text-left">
        <span>
          Testimonials For{" "}
          <span className="text-[#0BA53C] text-3xl md:text-[2.4rem]">
            {" "}
            Startups{" "}
          </span>{" "}
        </span>{" "}
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-6 p-4 mt-[3rem] flex-wrap ">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col p-6 rounded-lg shadow-lg "
            style={{
              background:
                "linear-gradient(180.68deg, #93F3A5 1.54%, #FFFFFF 99.71%)",
              width: "350px",
              minWidth: "350px",
            }}
          >
            <h3 className="font-semibold text-lg">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
            <div className="flex items-center my-4">
              <Image src={card.icon} alt={card.name} width={30} height={30} />
              <span className="ml-2 font-medium">{card.name}</span>
            </div>
            <p className="text-gray-500">{card.additionalInfo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonies;
