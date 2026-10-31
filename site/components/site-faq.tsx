import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Dictionary } from "@/i18n/dictionary";

export function SiteFaq({ copy }: { copy: Dictionary["faq"] }) {
  return (
    <section id="faq" className="flex scroll-mt-24 flex-col gap-6 py-8">
      <h2 className="text-3xl font-medium tracking-tight">{copy.title}</h2>
      <Accordion type="single" collapsible>
        {copy.items.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="border-0 not-last:border-b-0">
            <AccordionTrigger className="min-h-11 text-base">{item.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
