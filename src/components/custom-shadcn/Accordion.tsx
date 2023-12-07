"use client";

// import React, { useState } from "react";
// import { Accordion, AccordionItem } from "@/components/ui/accordion";

// interface CustomAccordionProps {
//   title: string;
//   detail: string;
// }

// const CustomAccordion: React.FC<CustomAccordionProps> = ({ title, detail }) => {
//   const [isAccordionOpen, setIsAccordionOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsAccordionOpen(!isAccordionOpen);
//   };

//   return (
//     <Accordion type="single" collapsible className="w-3/6">
//       <AccordionItem value="item-1" className="mb-6">
//         <div
//           style={{
//             marginBottom: "10px",
//             cursor: "pointer",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//           onClick={toggleAccordion}
//         >
//           <span style={{ marginRight: "30px" }}>{title}</span>
//           {isAccordionOpen ? "-" : "+"}
//         </div>
//         {isAccordionOpen && (
//           <div className="w-full text-sm text-primary mb-4">
//             {detail}
//           </div>
//         )}
//       </AccordionItem>
//     </Accordion>
//   );
// };

// export default CustomAccordion;

import React, { useState } from "react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";

interface CustomAccordionProps {
  title: string;
  detail: string;
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({ title, detail }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <Accordion type="single" collapsible className="w-3/6">
      <AccordionItem value="item-1" className="mb-6">
        <div
          style={{
            marginBottom: "10px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onClick={toggleAccordion}
        >
          <span style={{ marginRight: "30px" }}>{title}</span>
          <div className="text-secondaryGreen border border-secondaryGreen rounded-full w-5 h-5 flex items-center justify-center">
            {isAccordionOpen ? "-" : "+"}
          </div>
        </div>
        {isAccordionOpen && (
          <div className="w-full text-sm text-[#101828] mb-4">{detail}</div>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default CustomAccordion;
