import FacebookIcon from "@/assets/icons/FacebookIcon";
import LinkedinIcon from "@/assets/icons/LinkedInIcon";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import PaddingContainer from "@/components/shared/PaddingContainer";
import Link from "next/link";

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
                Get started
              </span>
              <div className="flex flex-col space-y-4">
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Secureseedfund
                </span>
                <Link
                  href="/investors"
                  className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer"
                >
                  Invest Securely
                </Link>
                <Link
                  href="/auth-signin"
                  className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer"
                >
                  Account Login
                </Link>
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Success Stories
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <span className="text-[#0A142F] font-[500] cursor-pointer">
                Contact
              </span>
              <div className="flex flex-col space-y-4">
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Help Center
                </span>
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Contact Us
                </span>
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <span className="text-[#0A142F] font-[500] cursor-pointer">
                Legal & Guides
              </span>
              <div className="flex flex-col space-y-4">
                <span className="text-[#0A142F] font-[500 opacity-[.5] cursor-pointer">
                  Disclaimer
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
                    19 mason avenue, Ebbsfleet Valley, Swanscombe, DA10 1DS, UK
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
            <div className="mt-8 flex flex-col space-y-6">
              <span className="text-[1.2rem] font font-bold opacity-[0.703] text-center">
                {" "}
                Important Notice
              </span>
              <div>
                <span className="text-[1rem] font-bold opacity-[0.703]  text-left">
                  High-Risk Investments
                </span>
                <p className="text-[0.9rem] opacity-[0.703] text-left">
                  Investments made through the SecureSeedFund platform involve a
                  significant level of risk, including the potential loss of the
                  entire amount invested. These investments are speculative,
                  illiquid, and not suitable for all investors. SecureSeedFund
                  strongly advises that you do not invest unless you are fully
                  prepared to bear the total loss of your investment.
                </p>
              </div>

              <div>
                <span className="text-[1rem] font-bold opacity-[0.703]  text-left">
                  Independent Decision-Making and Due Diligence
                </span>
                <p className="text-[0.9rem] opacity-[0.703] text-left">
                  Investors are solely responsible for conducting their own
                  thorough examination of any startup and its associated
                  offering terms, including potential risks and merits.
                  SecureSeedFund does not provide investment advice, analysis,
                  or recommendations. It is essential that you perform
                  independent due diligence, which may include seeking advice
                  from qualified financial, legal, and tax professionals, prior
                  to making any investment decisions.
                </p>
              </div>
              <div>
                <span className="text-[1rem] font-bold opacity-[0.703]  text-left">
                  Platform Role and Disclaimers
                </span>
                <p className="text-[0.9rem] opacity-[0.703] text-left">
                  SecureSeedFund is owned and operated by SecureSeedFund Global
                  Limited, a crowdfunding platform. SecureSeedFund is not a
                  registered broker-dealer, investment advisor, or a licensed
                  entity for capital-raising advice. The platform operates
                  independently of any regulatory agency or body. SecureSeedFund
                  does not:
                  <ul className="flex flex-col gap-3 my-4">
                    <li>
                      {" "}
                      ● Recommend or endorse specific startups or investment
                      opportunities.{" "}
                    </li>
                    <li>
                      ● Participate in negotiations or execution of transactions
                      for the sale or purchase of shares.
                    </li>
                    <li>
                      ● Verify the adequacy, accuracy, or completeness of
                      information provided by startups.
                    </li>
                  </ul>
                  All startups and their associated campaigns displayed on this
                  platform are the sole responsibility of the founders. Any
                  information presented is intended solely for illustrative
                  purposes, demonstrating the types of opportunities available.
                  Full details of campaigns are accessible only to authorized
                  investors. See additional general disclosures here.
                </p>
              </div>
              <div>
                <span className="text-[1rem] font-bold opacity-[0.703]  text-left">
                  Investment Risks and Suitability
                </span>
                <p className="text-[0.9rem] opacity-[0.703] text-left">
                  Investing in startups is inherently speculative, highly
                  illiquid, and carries a high degree of risk. Investments in
                  startups should be viewed as long-term commitments suitable
                  only for investors who:
                  <ul className="flex flex-col gap-3 my-4">
                    <li>● Can tolerate a complete loss of capital.</li>
                    <li>● Do not require liquidity.</li>
                    <li> ● Understand and accept the unique</li>
                  </ul>
                  risks of investing in startups. Each investment opportunity
                  carries its own set of risks. SecureSeedFund encourages
                  investors to obtain all necessary information and independent
                  professional advice before proceeding with any investment.
                </p>
              </div>
              <div>
                <span className="text-[1rem] font-bold opacity-[0.703]  text-left">
                  Legal and Regulatory Compliance
                </span>
                <p className="text-[0.9rem] opacity-[0.703] text-left">
                  Investment opportunities on SecureSeedFund are not available
                  to investors residing in countries where solicitation for such
                  offerings is prohibited. It is the responsibility of investors
                  to ensure compliance with the laws and regulations of their
                  country of residence. Potential
                </p>
              </div>
              <div className="flex items-center text-center justify-center space-x-4 mt-8">
                <FacebookIcon />
                <LinkedinIcon />
                <TwitterIcon />
              </div>
              <span className="text-[0.9rem] opacity-[0.703] text-center">
                {" "}
                Copyright © 2024 Secureseedfund.com. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </PaddingContainer>
    </footer>
  );
};

export default Footer;
