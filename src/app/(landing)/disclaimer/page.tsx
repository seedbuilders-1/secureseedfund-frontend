import React from "react";

const DisclaimerPage = () => {
  return (
    <div className="p-10 space-y-5 mx-auto max-w-[1200px]">
      <h1 className="text-3xl font-medium mb-4 text-center">DISCLAIMER</h1>

      <section className="mb-4">
        <p className="leading-relaxed">
          This website is owned and operated by SecureSeedFund Global Limited
          ("SecureSeedFund"), a crowdfunding platform. SecureSeedFund is not a
          registered broker-dealer, investment advisor, or a licensed entity for
          capital-raising advice. The platform operates independently of any
          regulatory agency or body.
        </p>
      </section>

      <section className="mb-4">
        <p className="leading-relaxed">
          SecureSeedFund and its affiliates do not provide investment advice,
          analysis, representation, warranty, or recommendations regarding any
          company or the suitability of an investment for any particular
          investor. It is essential that you perform independent due diligence,
          which may include seeking advice from qualified financial, legal, and
          tax professionals, prior to making any investment decisions.
        </p>
      </section>

      <section className="mb-4">
        <p className="leading-relaxed">
          The information provided on our website concerning any company is
          derived either from publicly available sources or directly from the
          respective company. SecureSeedFund and its affiliates disclaim any
          warranty, express or implied, regarding the adequacy, accuracy, or
          completeness of such information.
        </p>
      </section>

      <section className="mb-4">
        <p className="leading-relaxed">
          Any opinions or projections expressed herein reflect our own views, do
          not constitute investment advice, and are subject to change without
          prior notice. Blog posts are prepared solely for informational
          purposes and do not constitute a solicitation to invest in or offer
          shares of any company.
        </p>
        <p className="leading-relaxed mt-2">
          SecureSeedFund and its affiliates may receive fees, compensation, and
          commissions from companies and investors featured on our website at
          www.secureseedfund.com. Details regarding such compensation are
          disclosed in the relevant offering materials.
        </p>
      </section>

      <section className="mb-4">
        <p className="leading-relaxed">
          All investments involve risk. The companies featured on our website
          are typically small or early-stage businesses and are subject to risks
          commonly associated with investing in such entities, as well as risks
          specific to their industry and operations.
        </p>
        <p className="leading-relaxed mt-2">
          Shares in these companies may be highly illiquid, potentially
          requiring investors to hold them for an indefinite period or limiting
          the ability to resell them. Consequently, investments in these
          companies should only be made by individuals who:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Do not require immediate liquidity</li>
          <li>Can bear the risk of a complete loss of their investment</li>
          <li>
            Can allocate only funds they can afford to lose without adversely
            affecting their financial stability or lifestyle
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <p className="leading-relaxed">
          Prospective investors are strongly advised to carefully review all
          offering materials, including the full disclosure of risk factors,
          before making any investment. It is essential to understand the
          applicable investor requirements, investment limits, and the
          conditions for reselling the investment.
        </p>
      </section>

      <section className="mt-6 text-sm text-gray-500">
        <p>
          By accessing our website, you agree to be bound by the Terms of Use
          and Privacy Policy.
        </p>
        <p className="mt-2">
          Copyright © 2024 SecureSeedFund Global Limited. All rights reserved.
        </p>
      </section>
    </div>
  );
};

export default DisclaimerPage;
