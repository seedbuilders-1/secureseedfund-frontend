import Image from "next/image";
import { ReactNode } from "react";
import threeImage from "../../../../public/assets/images/threeImage.png";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    // <div className="flex flex-col lg:flex-row min-h-screen">
    //   <div className="lg:basis-[50%] bg-[#F1F1F1] lg:fixed h-[50vh] lg:h-full w-full lg:w-[50%] relative overflow-hidden p-2 flex-col hidden lg:flex">
    //     <div className="w-full h-full flex flex-col justify-center items-center">
    //       <p className="text-center text-[24px] mb-4">
    //         Invest Securely-Raise Confidently
    //       </p>
    //       <div className="w-full h-[300px]">
    //         <Image
    //           src={threeImage}
    //           alt="logo"
    //           // layout="fill"
    //           // objectFit="contain"
    //           className="absolute bottom-0 left-0 right-0"
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="flex-grow py-4 px-6 lg:px-20 lg:ml-[50%]">{children}</div>
    // </div>

    <div className="min-h-screen flex justify-between w-full">
      <div className="hidden lg:flex lg:flex-col lg:justify-between w-[50%] relative">
        <div className="hidden lg:block"></div>
        <div className="w-full text-center text-[24px]">
          <p>Invest Securely-Raise Confidently</p>
        </div>
        <div className="relative bottom-0 left-0 right-0 w-full">
          <Image src={threeImage} alt="logo" className="w-full" />
        </div>
      </div>
      <div className="lg:w-[50%] w-full">{children}</div>
    </div>
  );
};

export default AuthLayout;
