import FacebookIcon from "@/assets/icons/FacebookIcon";
import LinkedinIcon from "@/assets/icons/LinkedInIcon";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import PaddingContainer from "@/components/shared/PaddingContainer";

const Footer = () => {
  return (
    <footer className="my-10 w-full h-fit">
      <PaddingContainer>
        <div className="w-full mx-auto flex flex-col md:w-[70%]">
          <h2 className="text-[3rem] font-[400] text-center text-primary mt-10 md:text-[7rem] ">
            SecureSeedFund
          </h2>

          <div className="mt-10 w-full grid grid-cols-3 gap-8">
            <div className="flex flex-col space-y-6">
              <span className="text-[#0A142F] font-[500] cursor-pointer">
                Quick Links
              </span>
              <div className="flex flex-col space-y-4">
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Auto Capture
                </span>
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Data Governance
                </span>
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Virtual Events
                </span>
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Virtual Users
                </span>
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Behavioral Analytics
                </span>
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Connect
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <span className="text-[#0A142F] font-[500] cursor-pointer">
                Explore
              </span>
              <div className="flex flex-col space-y-4">
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Resources
                </span>
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Blog
                </span>
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Documents
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-[#0A142F] font-[500] cursor-pointer">
                OFFICE LOCATION
              </span>
              <div className="flex flex-col space-y-4 mt-6">
                <span className="text-[#0A142F] opacity-[.5] cursor-pointer">
                  ABC Company, 123 East, 17th Street, St. louis 10001
                </span>
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
                © 2022 ABC All Rights Reserved.
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
          </div>
        </div>
      </PaddingContainer>
    </footer>
  );
};

export default Footer;
