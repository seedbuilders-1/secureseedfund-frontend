import PaddingContainer from "@/components/shared/PaddingContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="bg-[#FCD9A545] py-10">
      <PaddingContainer>
        <div className="w-full flex flex-col space-y-6 items-center justify-center">
          <h3 className="text-dark text-[3.0625rem] text-center">FAQ</h3>

          <div className="w-full">
            <Accordion type="single" collapsible className="w-[80%] mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[1.3rem] text-primary">
                  Monitor your startup investments portfolios in one dashboard
                  across the globe:
                </AccordionTrigger>
                <AccordionContent>
                  Due diligence is carried on both startups and investors, it is
                  100% secure.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-[1.3rem] text-primary">
                  Seamless infrastructure:
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-[1.3rem] text-primary">
                  Invest and receive gains on your terms:
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-[1.3rem] text-primary">
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

export default FAQSection;
