import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container px-4 md:px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Si pripravljena narediti premik?</h2>
        <p className="text-gray-700 mb-4">
          Ne rabiš več sama tavati v megli. Naredi prvi, najpomembnejši korak k <strong>jasnosti, strukturi in večjemu zadovoljstvu</strong> v svojem ustvarjalnem poslu.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Začni z brezplačnim, 30-minutnim spoznavnim pogovorom z mano.</strong> Brez obveznosti, le priložnost za navdihujoč klepet in prve usmeritve.
        </p>
        <Button asChild size="lg" className="bg-[#EB008C] hover:bg-[#d0007a] text-white rounded-full mt-6">
          <Link href="https://tidycal.com/3672y9m/spoznavna-kavica-z-urso">
            Da, želim spoznavno kavico!
          </Link>
        </Button>
        <p className="text-sm text-gray-600 text-center mt-3">
          Število terminov za brezplačne spoznavne pogovore je omejeno. Rezerviraj si svojega zdaj.
        </p>
      </div>
    </section>
  );
} 