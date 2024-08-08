import React from "react";
import Image from "next/image";

const EnquiryCard = () => {
  return (
    <div>
      <div className="bg-[#F8FAFC] rounded-2xl mx-24 flex flex-col justify-center items-center p-8">
        <Image
          src="/assets/images/avatar-group.png"
          alt="logo"
          width={120}
          height={56}
          className="mb-4"
        />
        <p className="text-[#101828] text-base font-medium mb-2">
          Still have questions?
        </p>
        <p className="text-[#667085] text-sm font-medium mb-2.5">
          Can&apos;t find the answer you&apos;re looking for? Please chat to our
          friendly team.
        </p>
        <button className="bg-bar text-white px-4 py-2 rounded-md mt-2">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default EnquiryCard;
