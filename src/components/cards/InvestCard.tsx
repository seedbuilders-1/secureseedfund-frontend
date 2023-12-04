import React from "react";
import Image from "next/image";

const InvestCard = () => {
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center gap-6 bg-[#F1F5F9] mx-28 p-12 rounded-lg">
        <div>
          <p className="text-[#334155] text-5 font-bold">Invest Securely</p>
          <p className="text-sm text-[#334155] w-7/12 text-justify">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper mauris a
            fermentum sed orci enim tincidunt amet neque. Arcu nisl nullam id
            sed lectus augue tortor. Quam dolor auctor ut fringilla magna amet
            faucibus ut sed. Aliquet purus pretium gravida nunc vitae. Elit
            pulvinar libero arcu amet. Magna cras in faucibus et at sed
            placerat. Erat ultricies tincidunt vel lacinia libero maecenas
            sagittis cursus. Cursus ac arcu facilisi amet.
          </p>
        </div>
        <div>
          <Image
            src="/assets/images/pitch-deck.png"
            alt=""
            width={300}
            height={210}
          />
        </div>
      </div>
    </div>
  );
};

export default InvestCard;
