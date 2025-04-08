import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContainedSection } from "@/components/layout/container-section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FaqSection() {
  return (
    <ContainedSection verticalPadding="lg" maxWidth="3xl" bgColor="bg-gradient-to-b from-white to-primary/5">
      <SectionHeader title="Pogosta Vprašanja" variant="primary" />
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="item-1" className="border border-primary/20 rounded-lg overflow-hidden shadow-sm bg-white/90 backdrop-blur-sm">
          <AccordionTrigger className="text-left px-4 py-4 hover:bg-primary/5 transition-colors font-medium">
            Kaj točno je "spoznavna kavica"?
          </AccordionTrigger>
          <AccordionContent className="px-4 py-4 bg-gradient-to-br from-white to-primary/10 text-gray-700">
            To je brezplačen, 30-minutni sproščen pogovor (v živo ali online), kjer se spoznava. Poveš mi več o svojih izzivih in željah, jaz pa ti predstavim, kako bi ti lahko pomagala. Namen je ugotoviti, ali sva dober 'fit' za morebitno nadaljnje sodelovanje. Brez kakršnihkoli obveznosti.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border border-primary/20 rounded-lg overflow-hidden shadow-sm bg-white/90 backdrop-blur-sm">
          <AccordionTrigger className="text-left px-4 py-4 hover:bg-primary/5 transition-colors font-medium">
            Ali moram kaj pripraviti za ta pogovor?
          </AccordionTrigger>
          <AccordionContent className="px-4 py-4 bg-gradient-to-br from-white to-primary/10 text-gray-700">
            Ni nujno. Najbolje je, da prideš odprta za pogovor. Lahko si zapišeš kakšno vprašanje ali izziv, ki te trenutno najbolj muči, da ga ne pozabiš omeniti.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border border-primary/20 rounded-lg overflow-hidden shadow-sm bg-white/90 backdrop-blur-sm">
          <AccordionTrigger className="text-left px-4 py-4 hover:bg-primary/5 transition-colors font-medium">
            Kaj če ugotoviva, da sodelovanje ni zame?
          </AccordionTrigger>
          <AccordionContent className="px-4 py-4 bg-gradient-to-br from-white to-primary/10 text-gray-700">
            Nič hudega! Prav zato je ta prvi pogovor brezplačen in neobvezujoč. Cilj je, da obe strani dobita jasnost. Če ugotoviva, da nisem prava oseba zate, ti morda lahko svetujem kak drug vir pomoči.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border border-primary/20 rounded-lg overflow-hidden shadow-sm bg-white/90 backdrop-blur-sm">
          <AccordionTrigger className="text-left px-4 py-4 hover:bg-primary/5 transition-colors font-medium">
            Je ta pogovor res brezplačen? Kje je "zanka"?
          </AccordionTrigger>
          <AccordionContent className="px-4 py-4 bg-gradient-to-br from-white to-primary/10 text-gray-700">
            Pogovor je res 100% brezplačen in brez obveznosti. Zanke ni. Ponujam ga, ker verjamem v moč osebnega stika in ker je to najboljši način, da ugotoviva, ali ti lahko dejansko pomagam doseči tvoje cilje.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </ContainedSection>
  );
} 