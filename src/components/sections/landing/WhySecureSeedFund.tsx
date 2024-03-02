import PaddingContainer from "@/components/shared/PaddingContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WhySecureSeedFund = () => {
  return (
    <section className="w-full py-10">
      <PaddingContainer>
        <div className="w-full grid grid-cols-2 gap-10">
          <div className="w-full">
            <h3 className="text-dark text-[3.0625rem]">
              Why Invest in Secure <br /> Seedfund
            </h3>
            <p className="text-[1.5rem] text-dark leading-[2.0625rem] font-[300] w-[90%]">
              Startups receive funding in a few days and investors invest in a
              few days. Own a financial stake in tomorrow’s Unicorn. The best
              time to invest in Startups is early.
            </p>
          </div>

          <div className="w-full">
            <Accordion type="single" collapsible className="w-[80%] ml-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[1.3rem]">
                  Gain access to only verified, vetted <br /> and accessed
                  startups
                </AccordionTrigger>
                <AccordionContent>
                  Due diligence is carried on both startups and investors, it is
                  100% secure.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-[1.3rem]">
                  Secured payments
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-[1.3rem]">
                  Monitor your startup investments portfolios in one dashboard
                  across the globe:
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-[1.3rem]">
                  Seamless infrastructure:
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-[1.3rem]">
                  Invest and receive gains on your terms:
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-[1.3rem]">
                  Increase and build your wealth:
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </PaddingContainer>
    </section>
  );
};

export default WhySecureSeedFund;
