import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="py-12 md:py-20 bg-gray-100">
      <div className="container px-4 md:px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Ne Odlašaj Več – Naredi Korak k Spremembi</h2>
        <p className="text-gray-700 mb-6">
          Tvoj ustvarjalni potencial si zasluži podporo. Predstavljaj si, kako bi bilo imeti jasen načrt in nekoga ob sebi, ki razume tvojo pot. <strong>Prvi korak k tej spremembi je le en klik stran.</strong>
        </p>
        <p className="text-gray-700 mb-8">
          Klikni spodnji gumb in si <strong>rezerviraj termin za brezplačno spoznavno kavico.</strong> Veselim se klepeta s tabo in priložnosti, da slišim tvojo zgodbo!
        </p>
        <Button asChild size="lg" className="bg-[#EB008C] hover:bg-[#d0007a] text-white rounded-full">
          <Link href="https://tidycal.com/3672y9m/spoznavna-kavica-z-urso">
            Začni Svojo Transformacijo – Rezerviraj Brezplačni Termin!
          </Link>
        </Button>
      </div>
    </section>
  );
} 