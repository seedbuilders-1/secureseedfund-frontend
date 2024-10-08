// CircularProgress.js
import React from "react";

type Props = {
  percentage: number;
};

const CircularProgress = ({ percentage }: Props) => {
  const radius = 25;
  const stroke = 3;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex justify-center items-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform rotate-[120deg]"
      >
        <circle
          stroke="#e5e7eb" // light gray background circle
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#77B900" // green progress bar
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-stroke duration-300"
        />
      </svg>
      <div className="absolute flex justify-center items-center text-sm font-semibold text-black">
        {percentage}%
      </div>
    </div>
  );
};

export default CircularProgress;
