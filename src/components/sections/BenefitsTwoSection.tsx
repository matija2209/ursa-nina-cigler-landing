"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';

type BenefitStatement = {
  id: number;
  text: string;
};

export default function BenefitsTwoSection() {
  const benefitStatements: BenefitStatement[] = [
    { id: 1, text: "Zbudiš se z jasnostjo in zagonom glede svojega posla. Veš, kaj so tvoji naslednji koraki." },
    { id: 2, text: "Ovire, ki so se zdele nepremostljive, postanejo obvladljivi izzivi, ki jih samozavestno rešuješ." },
    { id: 3, text: "Tvoja kreativnost cveti, ker imaš končno prostor in energijo zanjo." },
    { id: 4, text: "Tvoj posel stabilno raste, prihodki se večajo, ti pa občutiš več finančne varnosti in miru." },
    { id: 5, text: "Končno imaš več časa zase, svojo družino in stvari, ki te polnijo – brez občutka krivde." },
    { id: 6, text: "Počutiš se podprto, razumljeno in opolnomočeno na svoji podjetniški poti." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % benefitStatements.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovering, benefitStatements.length]);

  const handleBenefitClick = (index: number) => {
    setCurrentIndex(index);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.3 } }
  };

  const dotVariants = {
    inactive: { scale: 1 },
    active: { scale: 1.5, transition: { duration: 0.3 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <SectionHeader title="Predstavljaj si..." />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mt-12"
        >
          <div 
            className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/20"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-secondary/20"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -180, -360]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="relative z-10 p-8 min-h-64 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-center"
                >
                  <motion.div 
                    className="mb-4 inline-block p-2 rounded-full bg-accent/10"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <span className="text-3xl">✨</span>
                  </motion.div>
                  
                  <motion.p 
                    className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    "{benefitStatements[currentIndex].text}"
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 pb-6">
              {benefitStatements.map((_, index) => (
                <motion.button
                  key={index}
                  variants={dotVariants}
                  animate={currentIndex === index ? "active" : "inactive"}
                  onClick={() => handleBenefitClick(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </div>

          {/* Benefit list */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitStatements.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent hover:bg-primary/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {benefit.id}
                  </div>
                  <p className="text-gray-700">{benefit.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}