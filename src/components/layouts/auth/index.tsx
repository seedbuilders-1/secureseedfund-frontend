import Image from "next/image";
import { ReactNode } from "react";
import threeImage from "../../../../public/assets/images/threeImage.png";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <div className="basis-[50%] bg-[#F1F1F1] fixed h-full w-[50%] overflow-hidden mr-[50%] p-2 hidden flex-col md:flex">
        <div className="w-full m-0 p-0 h-full">
          <p className="flex items-center justify-center mt-20 text-[24px]">
            Invest Securely-Raise Confidently
          </p>
          <Image
            src={threeImage}
            alt="logo"
            layout="intrinsic"
            className="absolute bottom-0 left-0 right-0"
          />
        </div>
      </div>

      <div className="basis-[100%] py-4 px-20 md:ml-[50%]">{children}</div>
    </div>
  );
};

export default AuthLayout;

{
  /* <Image
  src="/assets/icons/logo-white.svg"
  alt="logo"
  width={47}
  height={50}
  className="absolute top-8 left-8"
/>; */
}
