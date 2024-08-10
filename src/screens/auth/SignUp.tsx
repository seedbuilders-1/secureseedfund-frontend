import SignUpForm from "@/components/forms/auth/SignUpForm";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center w-full mt-6">
      <div>
        <h1 className="h2 text-center">Create an account</h1>
        <p className="p-ui text-center">
          Fill in the form to join Secure Seed Fund
        </p>

        <div className="mt-2 grid grid-cols-2 gap-4 md:grid-cols-2">
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

      <div className="w-full flex items-center justify-center my-3">
        <Separator className="w-[45%]" />
        <span className="text-[1rem] text-slate-400 w-[10%] text-center">
          or
        </span>
        <Separator className="w-[45%]" />
      </div>

      <SignUpForm />
    </div>
  );
};

export default SignUp;