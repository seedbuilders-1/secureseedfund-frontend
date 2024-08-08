import Image from "next/image";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => { 
  return (
    <div className="flex ">
      <div className="basis-[50%] bg-secondaryblue fixed h-full w-[50%] overflow-hidden mr-[50%] p-2 hidden justify-center items-center flex-col  md:flex">
        <Image
          src="/assets/icons/logo-white.svg"
          alt="logo"
          width={47}
          height={50}
          className="absolute top-8 left-8"
        />

        <h1 className="text-slate-50 text-[1.3rem] text-center">
          We aim to make investment secure
        </h1>
        <p className="text-slate-300 text-[1rem] leading-[1.5rem] text-center mt-4 w-3/4">
          SecureSeedFund is reshaping the investment ecosystem, making it
          better, faster, and more efficient.
        </p>
      </div>

      <div className="basis-[100%]  py-4 px-20 md:ml-[50%]">{children}</div>
    </div>
  );
};

export default AuthLayout;
