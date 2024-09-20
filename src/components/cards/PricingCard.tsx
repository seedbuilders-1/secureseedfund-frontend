import DocIcon from "@/assets/icons/DocIcon";
import GreenCheckIcon from "@/assets/icons/GreenCheckIcon";
import React from "react";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period: string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  period,
  features,
}) => {
  return (
    <div className="max-w-sm mx-auto shadow-xl rounded-lg p-6">
      <div className="flex items-center space-x-4">
        <div className="bg-indigo-100 p-3 rounded-md">
          <DocIcon />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>

      {/* Price */}
      <div className="mt-6">
        <span className="text-4xl font-bold text-[#241A3F]">{price}</span>
        <span className="text-gray-500">/{period}</span>
      </div>

      {/* Features */}
      <div className="mt-4">
        <h3 className="text-md font-bold text-gray-800">What’s included</h3>
        <ul className="mt-2 space-y-2 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 py-2">
              <GreenCheckIcon />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Get Started Button */}
      <div className="mt-6">
        <button className="w-full bg-[#241A3F] text-white py-2 rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
