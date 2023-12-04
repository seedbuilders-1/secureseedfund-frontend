import React from "react";

interface SmallCardProps {
  title: string;
  content: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ title, content }) => {
  return (
    <div className="mt-8 mx-28 bg-[#F1F5F9] p-12 rounded-md">
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};

export default SmallCard;
