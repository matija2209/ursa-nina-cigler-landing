import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ContainedSection } from "@/components/layout/container-section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  imageSrc?: string;
  role?: string;
  offsetY?: number; // Variable to control vertical position
}

const testimonials: Testimonial[] = [
  {
    quote: "Ob najinem prvem srečanju sem dobila nek <strong>fajn vajb</strong>, dober odnos, energijo, dostopnost, prijaznost, odprtost in podporo.",
    author: "Zadovoljna stranka",
    imageSrc: "/ursanina_testimonial_1.jpg",
    role: "Ustvarjalka naravne kozmetike",
    offsetY: 0
  },
  {
    quote: "Že po nekaj minutah pogovora sem se <strong>popolnoma sprostila</strong>, se odprla... Čutila sem, da Urša povsem razume vse moje frustracije in izzive.",
    author: "Zadovoljna stranka",
    imageSrc: "/ursanina_testimonial_2.jpg",
    role: "Podjetnica v kreativni industriji",
    offsetY: 16
  },
  {
    quote: "Zdaj vem, da je bila to ena <strong>boljših investicij v moj brand in v moj notranji mir</strong>.",
    author: "Zadovoljna stranka",
    imageSrc: "/ursanina_testimonial_3.jpg",
    role: "Ustvarjalka edinstvenih daril",
    offsetY: 32
  },
  {
    quote: "Za razliko od skupinskih izobraževanj tukaj <strong>ni bilo balasta</strong>... se je nanašalo direktno na moj primer.",
    author: "Zadovoljna stranka",
    role: "Podjetnica v modni industriji",
    offsetY: 8
  },
  {
    quote: "Priznam, da me je <strong>skrbelo glede denarja</strong>. Sedaj vem, da je bil denar... <strong>ena zares dobro porabljen</strong>.",
    author: "Zadovoljna stranka",
    role: "Ustvarjalka ročnih izdelkov",
    offsetY: 24
  }
];

export function TestimonialsSection() {
  return (
    <ContainedSection verticalPadding="lg" maxWidth="5xl" bgColor="bg-gradient-to-b from-white to-secondary/5">
      <SectionHeader variant="secondary" title="Kaj Pravijo Ustvarjalke?" />
      
      {/* Desktop view - with staggered layout */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <div 
            key={index} 
            className="flex-1"
            style={{ marginTop: `${testimonial.offsetY}px` }}
          >
            <Card className="bg-white/90 backdrop-blur-sm border rounded-lg overflow-hidden shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
              {testimonial.imageSrc && (
                <div className="relative w-full h-48 overflow-hidden">
                  <Image 
                    src={testimonial.imageSrc} 
                    alt={`${testimonial.author} - testimonial`} 
                    width={400} 
                    height={200}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent hover:opacity-75 transition-opacity duration-300"></div>
                </div>
              )}
              <div className="p-6 flex-grow bg-gradient-to-br from-white to-secondary/10">
                <div className="flex items-start mb-4">
                  <Quote className="w-6 h-6 text-accent/80 mr-2 flex-shrink-0" />
                  <blockquote 
                    className="text-gray-700 italic" 
                    dangerouslySetInnerHTML={{ __html: `"${testimonial.quote}"` }} 
                  />
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-medium text-primary">{testimonial.author}</p>
                  {testimonial.role && (
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  )}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
      
      {/* Mobile view - stacked vertically */}
      <div className="md:hidden space-y-6 mb-12">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-white/90 backdrop-blur-sm border rounded-lg overflow-hidden shadow-sm">
            {testimonial.imageSrc && (
              <div className="relative w-full h-48 overflow-hidden">
                <Image 
                  src={testimonial.imageSrc} 
                  alt={`${testimonial.author} - testimonial`} 
                  width={400} 
                  height={200}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent"></div>
              </div>
            )}
            <div className="p-6 bg-gradient-to-br from-white to-secondary/10">
              <div className="flex items-start mb-4">
                <Quote className="w-6 h-6 text-accent/80 mr-2 flex-shrink-0" />
                <blockquote 
                  className="text-gray-700 italic" 
                  dangerouslySetInnerHTML={{ __html: `"${testimonial.quote}"` }} 
                />
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="font-medium text-primary">{testimonial.author}</p>
                {testimonial.role && (
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Additional testimonials in a different layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.slice(3).map((testimonial, index) => (
          <Card key={index} className="bg-gradient-to-br from-white to-secondary/20 border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <Quote className="w-6 h-6 text-accent/80 mr-2 flex-shrink-0" />
              <div>
                <blockquote 
                  className="text-gray-700 italic mb-4" 
                  dangerouslySetInnerHTML={{ __html: `"${testimonial.quote}"` }} 
                />
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-medium text-primary">{testimonial.author}</p>
                  {testimonial.role && (
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </ContainedSection>
  );
} 