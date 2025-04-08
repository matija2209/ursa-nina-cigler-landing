"use client"

import { motion, useInView } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { Check } from 'lucide-react';
import { useRef } from 'react';

type BenefitStatement = {
  id: number;
  text: string;
};

export default function BenefitsThreeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefitStatements: BenefitStatement[] = [
    { id: 1, text: "Zbudiš se z jasnostjo in zagonom glede svojega posla. Veš, kaj so tvoji naslednji koraki." },
    { id: 2, text: "Ovire, ki so se zdele nepremostljive, postanejo obvladljivi izzivi, ki jih samozavestno rešuješ." },
    { id: 3, text: "Tvoja kreativnost cveti, ker imaš končno prostor in energijo zanjo." },
    { id: 4, text: "Tvoj posel stabilno raste, prihodki se večajo, ti pa občutiš več finančne varnosti in miru." },
    { id: 5, text: "Končno imaš več časa zase, svojo družino in stvari, ki te polnijo – brez občutka krivde." },
    { id: 6, text: "Počutiš se podprto, razumljeno in opolnomočeno na svoji podjetniški poti." }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const checkVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <SectionHeader title="Kaj pravijo druge podjetnice" />
        
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-8 max-w-4xl mx-auto"
        >
          {benefitStatements.map((benefit) => (
            <motion.div 
              key={benefit.id}
              variants={itemVariants}
              className="flex items-start gap-4 mb-6"
            >
              <motion.div 
                variants={checkVariants} 
                className="bg-primary rounded-full p-1 flex-shrink-0 mt-1"
              >
                <Check className="w-5 h-5 text-white" />
              </motion.div>
              <p className="text-lg text-gray-700">{benefit.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}