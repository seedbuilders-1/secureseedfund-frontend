import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  price: number;
  buttonText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  price,
  buttonText,
}) => {
  return (
    <div className="relative max-w-sm md:w-[20rem] rounded-2xl shadow-lg pb-12 border-[7px] border-[#00BD8F]">
      <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
        {/* <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full"
        /> */}
        <Image src={imageSrc} alt={title} layout="fill" />
      </div>

      <div className="mt-4 text-center">
        <h3 className="text-xl font-bold mb-2 px-2">{title}</h3>
        <p className="text-2xl font-semibold">${price}</p>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4">
        <Button className="bg-[#241A3F] text-white px-10 py-2 rounded-lg hover:bg-indigo-800">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
