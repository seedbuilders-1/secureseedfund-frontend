import Image from "next/image";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <div className="basis-[50%] bg-slate-50 fixed h-full w-[50%] overflow-hidden mr-[50%] p-2 flex justify-center items-center flex-col">
        <Image
          src="/assets/images/auth_bg.png"
          width={648}
          height={515}
          alt="Auth Background Image"
          className="object-contain"
        />
        <h1 className="text-slate-800 text-[1.3rem] text-center">
          Securing the perfect Seedfund for your company
        </h1>
        <p className="text-slate-600 text-[1rem] leading-[1.5rem] text-center">
          We're reshaping the startup ecosystem, making it better, <br />{" "}
          faster, and more efficient.
        </p>
      </div>

      <div className="basis-[50%] ml-[50%] py-4 px-20 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
