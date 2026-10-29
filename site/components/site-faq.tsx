import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site";

export function SiteFaq() {
  return (
    <section id="faq" className="flex scroll-mt-24 flex-col gap-6 py-8">
      <h2 className="text-3xl font-medium tracking-tight">常见问题</h2>
      <Accordion type="single" collapsible>
        {faqs.map((item) => (
          <AccordionItem
            key={item.question}
            value={item.question}
            className="border-0 not-last:border-b-0"
          >
            <AccordionTrigger className="min-h-11 text-base">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
