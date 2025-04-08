"use client"
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContainedSection } from "@/components/layout/container-section";
import { useEffect, useRef } from "react";

interface Endorsement {
  image: {
    src: string;
    alt: string;
  };
  author: {
    image: string;
    name: string;
    bio: string;
  };
  offsetY: number;
}

interface Testimonial {
  quote: string;
  author: string;
  imageSrc?: string;
}

const endorsements: Endorsement[] = [
  {
    image: {
      src: "/ursanina_asseen_1.jpg",
      alt: "Urša Nina - priznanja"
    },
    author: {
      image: "/ursanina_asseen_1_author.webp",
      name: "SANJA KRIŽAN",
      bio: "Podjetnica in mentorica z več kot 15 let izkušenj v digitalnem marketingu. Ustanoviteljica uspešne marketinške agencije."
    },
    offsetY: 0
  },
  {
    image: {
      src: "/ursanina_asseen_2.jpg",
      alt: "Urša Nina - priznanja"
    },
    author: {
      image: "/ursanina_asseen_2_author.png",
      name: "HUDA PEHTA",
      bio: "Ustanoviteljica priljubljene znamke naravne kozmetike z močnim vplivom na slovenskem trgu."
    },
    offsetY: 32
  },
  {
    image: {
      src: "/ursanina_asseen_3.jpg",
      alt: "Urša Nina - priznanja"
    },
    author: {
      image: "/ursanina_asseen_3_author.jpg",
      name: "VILA DARILA",
      bio: "Ustvarjalka edinstvenih personaliziranih daril, ki je svojo strast spremenila v rastoče podjetje."
    },
    offsetY: 16
  }
];

const testimonials: Testimonial[] = [
  {
    quote: "Ob najinem prvem srečanju sem dobila nek **fajn vajb**, dober odnos, energijo, dostopnost, prijaznost, odprtost in podporo.",
    author: "Zadovoljna stranka",
    imageSrc: "/ursanina_testimonial_1.jpg"
  },
  {
    quote: "Že po nekaj minutah pogovora sem se **popolnoma sprostila**, se odprla... Čutila sem, da Urša povsem razume vse moje frustracije in izzive.",
    author: "Zadovoljna stranka",
    imageSrc: "/ursanina_testimonial_2.jpg"
  },
  {
    quote: "Zdaj vem, da je bila to ena **boljših investicij v moj brand in v moj notranji mir**.",
    author: "Zadovoljna stranka",
    imageSrc: "/ursanina_testimonial_3.jpg"
  },
  {
    quote: "Za razliko od skupinskih izobraževanj tukaj **ni bilo balasta**... se je nanašalo direktno na moj primer.",
    author: "Zadovoljna stranka"
  },
  {
    quote: "Priznam, da me je **skrbelo glede denarja**. Sedaj vem, da je bil denar... **ena zares dobro porabljen**.",
    author: "Zadovoljna stranka"
  }
];

// Helper function to format quotes with markdown-style bold text
const formatQuote = (quote: string) => {
  return quote.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold">$1</span>');
};

// Testimonial Carousel Component
const TestimonialCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(carouselRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: [0, -1800],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        },
      });
    }
  }, [isInView, controls]);

  return (
    <div className="w-full overflow-hidden my-8 py-4">
      <div ref={carouselRef} className="relative">
        <motion.div
          animate={controls}
          className="flex space-x-4"
          style={{
            width: "fit-content",
          }}
        >
          {/* Double the testimonials for smoother infinite loop effect */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 w-72 flex-shrink-0 border border-secondary/10"
            >
              <div className="text-xl text-secondary mb-2">❝</div>
              <p className="text-muted-foreground mb-4 text-sm"
                dangerouslySetInnerHTML={{ __html: formatQuote(testimonial.quote) }} />
              <div className="text-right text-primary font-semibold">
                — {testimonial.author}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default function HeroSectionTwo() {
  return (
    <section className="pt-20 pb-24 overflow-hidden">
      <ContainedSection className="relative" bgColor="bg-gradient-to-b from-secondary/20 to-background" >
        {/* Main Content and Author Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Od Ustvarjalnega Kaosa do Jasnosti in Rasti: Tvoja Pot do Uspešnega Posla (z Manj Stresa)
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground">
              Podpora za ustvarjalke in rokodelke, ki želijo premagati ovire, najti jasnost in zgraditi uspešen, izpolnjujoč posel.
            </p>
            
            <div>
              <Button size="lg" asChild >
                <Link href="/kontakt">
                  Rezerviraj Brezplačno Spoznavno Kavico
                </Link>
              </Button>
            </div>

            {/* Testimonial Carousel */}
            <TestimonialCarousel />
          </motion.div>
          
          {/* Right Side - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image 
                src="/ursa_nina_hero.jpg" 
                alt="Urša Nina - Coaching za ustvarjalke in rokodelke" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating endorsement */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -right-12 top-1/4 z-20 bg-white rounded-lg p-4 shadow-lg max-w-xs transform rotate-3"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image 
                    src={endorsements[0].author.image} 
                    alt={endorsements[0].author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-primary">{endorsements[0].author.name}</p>
                  <p className="text-xs text-muted-foreground">{endorsements[0].author.bio.split('.')[0]}.</p>
                </div>
              </div>
            </motion.div>
            
            {/* Second floating endorsement */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -left-12 bottom-1/4 z-20 bg-white rounded-lg p-4 shadow-lg max-w-xs transform -rotate-2"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image 
                    src={endorsements[1].author.image} 
                    alt={endorsements[1].author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-primary">{endorsements[1].author.name}</p>
                  <p className="text-xs text-muted-foreground">{endorsements[1].author.bio.split('.')[0]}.</p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative background elements */}
            <div className="absolute -z-10 w-full h-full">
              <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary/20 blur-3xl"></div>
              <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-primary/10 blur-3xl"></div>
            </div>
          </motion.div>
        </div>
                
        {/* Endorsements Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg font-medium text-muted-foreground mb-6">Sodelovala s priznanimi slovenskimi podjetnicami</p>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {endorsements.map((endorsement, index) => (
              <motion.div 
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image 
                    src={endorsement.author.image} 
                    alt={endorsement.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs py-1 px-3 rounded-full whitespace-nowrap font-medium">
                  {endorsement.author.name.split(' ')[0]}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <Button variant="outline" size="lg" asChild >
              <Link href="/#reference">
                Preberi vse zgodbe uspešnih strank
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </ContainedSection>
    </section>
  );
}