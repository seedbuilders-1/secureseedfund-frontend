import React from "react";

interface SmallCardProps {
  title: string;
  content: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ title, content }) => {
  return (
    <div className="mt-8 bg-[#F1F5F9] p-12 rounded-lg">
      <p className="font-bold text-xl text-cardTitle leading-7 mb-4">{title}</p>
      <p className="text-sm text-cardTitle leading-6">{content}</p>
    </div>
  );
};

export default SmallCard;
