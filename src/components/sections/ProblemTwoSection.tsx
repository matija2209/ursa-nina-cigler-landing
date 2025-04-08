"use client"

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  HeartCrack, 
  DollarSign, 
  ShoppingBag, 
  Users, 
  AlertCircle, 
  Settings, 
  Lightbulb, 
  Battery, 
  ShieldOff,
  X
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

type ProblemStatement = {
  id: number;
  text: string;
  icon: React.ReactNode;
};

export default function ProblemTwoSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // The array of problem statements with matching icons
  const problemStatements: ProblemStatement[] = [
    { 
      id: 1, 
      text: "Si iz svojega ustvarjalnega hobija razvila posel, a se ne razvija tako, kot si želiš?",
      icon: <HeartCrack className="h-6 w-6" />
    },
    { 
      id: 2, 
      text: "Se posel sicer razvija, a še vedno ne ustvarja dovolj prihodkov, da bi lahko mirno živela?",
      icon: <DollarSign className="h-6 w-6" />
    },
    { 
      id: 3, 
      text: "Se ti zdi, da vse kar zaslužiš, takoj zapraviš za material in ostale stroške?",
      icon: <ShoppingBag className="h-6 w-6" />
    },
    { 
      id: 4, 
      text: "Se tvoji čudoviti izdelki ne prodajajo tako dobro, kot si pričakovala?",
      icon: <Users className="h-6 w-6" />
    },
    { 
      id: 5, 
      text: "Ali pa imaš morda preveč povpraševanja in jih preprosto ne zmoreš več proizvesti?",
      icon: <AlertCircle className="h-6 w-6" />
    },
    { 
      id: 6, 
      text: "Si želiš optimizirati proizvodnjo, pa ne veš, kje in kako začeti?",
      icon: <Settings className="h-6 w-6" />
    },
    { 
      id: 7, 
      text: "Imaš polno glavo norih idej, a premalo časa (in energije), da bi jih uresničila?",
      icon: <Lightbulb className="h-6 w-6" />
    },
    { 
      id: 8, 
      text: "Se počutiš preobremenjena, za vse sama, in na meji, da zasovražiš to, kar te je nekoč tako veselilo?",
      icon: <Battery className="h-6 w-6" />
    },
    { 
      id: 9, 
      text: "Imaš težave pri postavljanju meja – domačim, poslovnim partnerjem, strankam?",
      icon: <ShieldOff className="h-6 w-6" />
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: { type: "spring", stiffness: 500 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 500,
        delay: 0.2
      }
    },
    pulse: {
      scale: [1, 1.2, 1],
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  const expandedVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.7, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const decorationVariants = {
    initial: { pathLength: 0 },
    animate: { 
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" }
    }
  };

  const handleCardClick = (id: number) => {
    setActiveCard(id);
  };

  const closeCard = () => {
    setActiveCard(null);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 relative overflow-hidden bg-gradient-to-b from-white to-primary/5"
    >
      {/* Decorative SVG elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" className="opacity-10">
          <motion.path
            d="M0,500 Q250,350 500,500 T1000,500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={decorationVariants}
          />
          <motion.path
            d="M0,600 Q250,750 500,600 T1000,600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-secondary"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={decorationVariants}
          />
          <motion.circle
            cx="100"
            cy="100"
            r="50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-accent"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={decorationVariants}
          />
          <motion.rect
            x="800"
            y="700"
            width="150"
            height="150"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={decorationVariants}
            rx="20"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader title="Te naslednje situacije zvenijo znano?" />
        
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {problemStatements.map((problem) => (
            <motion.div
              key={problem.id}
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer relative overflow-hidden"
              onClick={() => handleCardClick(problem.id)}
            >
              <div className="absolute top-0 right-0 h-16 w-16 bg-primary/10 rounded-bl-full -mr-8 -mt-8" />
              
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 rounded-full bg-primary/20 text-primary"
                  variants={iconVariants}
                  animate={[
                    "visible",
                    problem.id % 3 === 0 ? "pulse" : ""
                  ]}
                >
                  {problem.icon}
                </motion.div>
                
                <p className="text-gray-700">{problem.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Expanded card modal */}
      <AnimatePresence>
        {activeCard !== null && (
          <>
            <motion.div
              className="fixed inset-0 bg-black z-40"
              variants={backgroundVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeCard}
            />
            
            <motion.div
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl p-8 z-50 w-11/12 max-w-lg"
              variants={expandedVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button 
                onClick={closeCard}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
              
              {problemStatements.find(p => p.id === activeCard) && (
                <>
                  <div className="flex justify-center mb-6">
                    <motion.div
                      className="p-4 rounded-full bg-primary/20 text-primary"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, -5, 5, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse" as const
                      }}
                    >
                      {problemStatements.find(p => p.id === activeCard)?.icon}
                    </motion.div>
                  </div>
                  
                  <h3 className="text-xl font-medium text-center mb-4 text-gray-800">
                    {problemStatements.find(p => p.id === activeCard)?.text}
                  </h3>
                  
                  <p className="text-gray-600 text-center">
                    Prepoznaš to težavo? Nisi edina. Veliko podjetnic se sooča s podobnimi izzivi, 
                    a dobra novica je, da obstajajo rešitve.
                  </p>
                  
                  <div className="mt-6">
                    <motion.button
                      className="w-full py-3 px-4 bg-primary text-white rounded-md font-medium"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Poišči rešitev ➝
                    </motion.button>
                  </div>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}