"use client";

import PremiumIcon from "@/assets/icons/PremiumIcon";
import WhitCheckIcon from "@/assets/icons/WhitCheckIcon";
import React, { useState } from "react";

interface PricingCardProps {
  title: string;
  description: string;
  prices: { [key: string]: string };
  periodOptions: string[];
  features: string[];
  buttonText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  prices,
  periodOptions,
  features,
  buttonText,
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState(periodOptions[0]);

  return (
    <div className="max-w-sm mx-auto shadow-xl rounded-lg p-6 bg-green-500 text-white">
      <div className="flex items-center space-x-4">
        <div className="bg-white p-3 rounded-md">
          <PremiumIcon />
        </div>
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
      </div>

      <div className="mt-4 flex justify-between">
        {periodOptions.map((period) => (
          <label
            key={period}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="radio"
              name="billingPeriod"
              checked={selectedPeriod === period}
              onChange={() => setSelectedPeriod(period)}
              className="form-radio text-green-600"
            />
            <span>{period}</span>
          </label>
        ))}
      </div>

      <div className="mt-6">
        <span className="text-4xl font-bold">{prices[selectedPeriod]}</span>
        <span className="text-sm">/{selectedPeriod}</span>
      </div>

      <div className="mt-4">
        <h3 className="text-md font-bold">What’s included</h3>
        <ul className="mt-2 space-y-2 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 py-2">
              <WhitCheckIcon />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <button className="w-full bg-white text-green-600 py-2 rounded-md font-semibold">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
