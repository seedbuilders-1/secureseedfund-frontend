"use client";
import { useRouter } from "next/navigation";
import { Mail, CheckCircle, RefreshCw, ArrowLeft } from "lucide-react";

const EmailConfirmation = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-4 py-8">
      <div className="max-w-[500px] w-full bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="p-8 space-y-6">
          <div className="flex justify-center mb-4">
            <div className="bg-green-50 p-4 rounded-full">
              <CheckCircle
                className="h-16 w-16 text-green-600 animate-pulse"
                strokeWidth={1.5}
              />
            </div>
          </div>

          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-gray-800">
              Verify Your Email
            </h2>
            <p className="text-gray-600 text-base">
              We've sent a confirmation email to
            </p>
          </div>

          <div className="space-y-4 text-center">
            <p className="text-gray-600 text-sm">
              Please check your inbox and click the confirmation link to
              activate your account. The link will expire in 24 hours.
            </p>

            <div className="flex flex-col space-y-3">
              <button
                // onClick={handleResendConfirmation}
                disabled={false}
                className={`w-full py-3 px-4 mt-9 rounded-lg transition-all duration-300 
                  ${
                    false
                      ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                      : "bg-[#0F8B3A] text-white hover:bg-blue-700"
                  } flex items-center justify-center space-x-2`}
              >
                {false ? (
                  <>
                    <RefreshCw className="mr-2 animate-spin" />
                    Resending...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2" />
                    Resend Confirmation
                  </>
                )}
              </button>

              <button
                onClick={() => router.push("/auth/sign-in")}
                className="w-full py-3 px-4 bg-gray-100 text-gray-700 
                  rounded-lg hover:bg-gray-200 transition-all duration-300 
                  flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="mr-2" />
                Back to Login
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 text-center">
          <p className="text-xs text-gray-500">
            Didn't receive an email? Check your spam folder or contact support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmation;
