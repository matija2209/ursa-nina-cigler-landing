import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContainedSection } from "@/components/layout/container-section";

export function HeroSection() {
  return (
    <ContainedSection bgColor="bg-white" verticalPadding="2xl">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Od Ustvarjalnega Kaosa do Jasnosti in Rasti: <span className="text-[#94D731]">Tvoja Pot</span> do Uspešnega Posla (z Manj Stresa)
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Podpora za ustvarjalke in rokodelke, ki želijo premagati ovire, najti jasnost in zgraditi uspešen, izpolnjujoč posel.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg" className="bg-[#EB008C] hover:bg-[#d0007a] text-white rounded-full">
              <Link href="https://tidycal.com/3672y9m/spoznavna-kavica-z-urso">
                Rezerviraj Brezplačno Spoznavno Kavico
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image 
            src="/ursa_nina_hero.jpg" 
            alt="Urša Nina" 
            width={600} 
            height={600} 
            className="rounded-lg object-cover" 
          />
        </div>
      </div>
    </ContainedSection>
  );
} 