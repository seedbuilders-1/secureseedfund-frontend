import SignInForm from "@/components/forms/auth/SignInForm";

const SignIn = () => {
  return (
    <div className="flex flex-col h-full items-center mx-auto justify-center w-full space-y-10 md:mt-8">
      <SignInForm />
    </div>
  );
};

export default SignIn;
