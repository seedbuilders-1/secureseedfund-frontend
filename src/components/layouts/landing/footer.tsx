import FacebookIcon from "@/assets/icons/FacebookIcon";
import LinkedinIcon from "@/assets/icons/LinkedInIcon";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import PaddingContainer from "@/components/shared/PaddingContainer";

const Footer = () => {
  return (
    <footer className="my-10 w-full h-fit">
      <PaddingContainer>
        <div className="w-full mx-auto flex flex-col md:w-[70%]">
          <h2 className="text-[2.5rem]  font-[400] text-center text-[#0F8B3A] mt-10 md:text-[5rem] lg:text-[7rem] ">
            SecureSeedFund
          </h2>

          <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col space-y-6">
              <span className="text-[#0A142F] font-[500] cursor-pointer">
                Get to know us
              </span>
              <div className="flex flex-col space-y-4">
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Our story
                </span>
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Careers
                </span>
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Blog
                </span>
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Partnerships
                </span>
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Contact us
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <span className="text-[#0A142F] font-[500] cursor-pointer">
                Get Started
              </span>
              <div className="flex flex-col space-y-4">
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Secure seed funds
                </span>
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Invest securely
                </span>
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Account login
                </span>
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <span className="text-[#0A142F] font-[500] cursor-pointer">
                Legal & Guides
              </span>
              <div className="flex flex-col space-y-4">
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Investor FAQ
                </span>
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Startup FAQ
                </span>
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Guidelines
                </span>
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Privacy Policy
                </span>
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Terms of Service
                </span>
              </div>
            </div>

            <div className="flex h-full justify-between flex-col">
              <div className="flex flex-col">
                <span className="text-[#0A142F] font-[500] cursor-pointer">
                  OFFICE LOCATION
                </span>
                <div className="flex flex-col space-y-4 mt-6">
                  <span className="text-[#0A142F] opacity-[.5] cursor-pointer">
                    SeedBuilders Innovation Hub. 6A Embu Street. Wuse 2. Abuja
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[#0A142F] font-[500] cursor-pointer">
                  News Letter
                </span>
                <div className="flex items-center border-b py-2">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 leading-tight focus:outline-none"
                  />
                  <img
                    src="https://www.svgrepo.com/show/517643/mail.svg"
                    alt="Email Icon"
                    className="h-6 w-6 text-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-14 border-t border-[#0A142F] flex flex-col items-center justify-center border-opacity-[.12]">
            <div className="flex items-center space-x-4 mt-8">
              <FacebookIcon />
              <LinkedinIcon />
              <TwitterIcon />
            </div>

            <div className="mt-8 flex flex-col space-y-6">
              <span className="text-[0.9rem] opacity-[0.703] text-center">
                {" "}
                © 2024 ABC All Rights Reserved.
              </span>
              <span className="text-[0.9rem] opacity-[0.703] text-center">
                {" "}
                Lorem Ipsum is simply dummy text
              </span>
              <span className="text-[0.9rem] opacity-[0.703] text-center">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <p className="text-[0.9rem] opacity-[0.703]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it t
              </p>
              <p className="text-[0.9rem] opacity-[0.703]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it t
              </p>
            </div>
            <p className="text-[0.9rem] opacity-[0.703] text-center mt-12">
              All Rights Reserved
            </p>
          </div>
        </div>
      </PaddingContainer>
    </footer>
  );
};

export default Footer;
