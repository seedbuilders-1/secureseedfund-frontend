import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";
import PricingCard from "@/components/cards/PricingCard";
import PremiumPricingCard from "@/components/cards/PremiumPricingCard";
import PricingTable from "@/components/cards/PricingTable";
import { features, plans } from "./components/PricingData";

export const metadata: Metadata = {
  title: "Investors | SecureSeedFund",
};

export default function PricingPage() {
  return (
    <>
      <section className="w-full min-h-[90vh] md:mt-[4.5rem] 2xl:mt-[3.5rem]">
        <div className="bg-[#fff] p-10 flex flex-col items-center text-[#011012]">
          <div className="text-center">
            <h1 className=" font-bold text-[2rem]">
              Secure <span className="text-[#00A539]">Seed Fund</span> <br />{" "}
              Pricing Plans
            </h1>
            <h2 className="mt-6 font-bold text-[#170F49]">Plans</h2>
          </div>
          <div className="my-5">
            <Tabs defaultValue="startup">
              <div className="lg:flex lg:justify-center lg:my-8">
                <TabsList className="bg-white rounded-full flex gap-1 items-center shadow-md h-12 w-full max-w-sm lg:justify-center">
                  <TabsTrigger variant="landing" value="startup">
                    Startup
                  </TabsTrigger>
                  <TabsTrigger variant="landing" value="investor">
                    Investor
                  </TabsTrigger>
                  <TabsTrigger variant="landing" value="institutions">
                    Institution
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="startup">
                <div className="flex flex-col lg:flex-row gap-8">
                  <PricingCard
                    title="Free Account"
                    description="Startup User will submit all documentation to admin"
                    price="$0"
                    period="monthly"
                    features={[
                      "Navigate the web/bobile application",
                      "Demo video on how it works",
                      "See a global sample of global investors",
                      "See investors that have funded startups",
                    ]}
                  />
                  <PremiumPricingCard
                    title="Premium Plan"
                    description="Exclusive features for startups"
                    prices={{
                      Month: "$20",
                      "6 Month": "$100",
                      Year: "$200",
                    }}
                    periodOptions={["Month", "6 Month", "Year"]}
                    features={[
                      "Home page visibility and promotion",
                      "Pitch deck upload",
                      "5 min elevator pitch video",
                      "Verification services for documentation",
                      "Virtual meeting with staff and potential investors",
                      "Upload financial records and projections",
                      "Verified badge for investor readiness",
                    ]}
                    buttonText="Get started"
                  />

                  <PricingCard
                    title="Basic Plan Yearly Registration"
                    description="Startup User will submit all documentation to admin"
                    price="$15"
                    period="Yearly"
                    features={[
                      "Insert your company description",
                      "Upload Logo",
                      "Website to attract potential investors",
                      "Access to monthly networking events",
                    ]}
                  />
                </div>
              </TabsContent>
              <TabsContent value="investor">
                <div className="flex flex-col lg:flex-row gap-8">
                  <PricingCard
                    title="Free Account"
                    description=""
                    price="$0"
                    period="monthly"
                    features={[
                      "Navigate the web/bobile application",
                      "Demo video on how it works",
                      "See a global sample of global startups",
                      "See startups that have received funding",
                    ]}
                  />
                  <PremiumPricingCard
                    title="Premium Plan"
                    description="Exclusive features for investors"
                    prices={{
                      Month: "$40",
                      "6 Month": "$100",
                      Year: "$180",
                    }}
                    periodOptions={["Month", "6 Month", "Year"]}
                    features={[
                      "Choose between debt financing",
                      "Equity financing or safe investment",
                      "Have virtual meetings with staff and startups",
                      "Access top-rated startups",
                      "Access startyp's pitch deck upload",
                      "See all the startups on the platform",
                      "All funding opportunities",
                      "Filter based on interests and sectors",
                      "Dashboard to track all investments",
                      "Access startup's 5min elevator pitch video",
                    ]}
                    buttonText="Get started"
                  />

                  <PricingCard
                    title="Basic Plan Yearly Registration"
                    description=""
                    price="$30"
                    period="Yearly"
                    features={[
                      "Access all free accounts benefits",
                      "Access to investment opportunities",
                      "Startups description",
                      "Logo and website",
                    ]}
                  />
                </div>
              </TabsContent>
              <TabsContent value="institutions">
                <div className="flex flex-col md:flex-row gap-8">
                  <PremiumPricingCard
                    title="Premium Plan"
                    description="Venture Capitalists, Angel Investors and Private Equity Firms"
                    prices={{
                      Year: "$1500",
                    }}
                    periodOptions={["Year"]}
                    features={[
                      "Logo as partner displayed on our platform",
                      "Access top rated startups",
                      "Scouting and vetting of interested startups and sectors",
                      "Pay only 5% commission on money invested in a startup",
                    ]}
                    buttonText="Get started"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <PricingTable features={features} plans={plans} />
        </div>
      </section>
    </>
  );
}
