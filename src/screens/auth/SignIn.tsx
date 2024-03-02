import SignInForm from "@/components/forms/auth/SignInForm";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const SignIn = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center w-full space-y-10 mt-8">

      <div>
        <h1 className="h2 text-center">Signin to account</h1>
        <p className="p-ui text-center">Provide your credentials to signin</p>

        <div className="mt-2 grid grid-cols-2 gap-x-2">
          <Button variant="secondary" className="space-x-2">
            <FaGoogle />

            <span>Continue with Google</span>
          </Button>
          <Button variant="secondary" className="space-x-2">
            <FaFacebook />
            <span>Continue with Facebook</span>
          </Button>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <Separator className="w-[45%]" />
        <span className="text-[1rem] text-slate-400 w-[10%] text-center">
          or
        </span>
        <Separator className="w-[45%]" />
      </div>

      <SignInForm />
    </div>
  );
};

export default SignIn;
