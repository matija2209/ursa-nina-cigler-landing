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
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
  // Create separate refs for each item to track individual visibility
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Function to set refs properly without causing TypeScript errors
  const setItemRef = (index: number) => (el: HTMLDivElement | null) => {
    itemRefs.current[index] = el;
  };

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

  const listItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.95
    },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: i * 0.1 
      }
    }),
    hover: {
      scale: 1.02,
      x: 8,
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const iconContainerVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: (i: number) => ({ 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 500,
        delay: i * 0.1 + 0.2
      }
    }),
    hover: {
      rotate: [0, -10, 10, 0],
      scale: 1.2,
      transition: { 
        duration: 0.5,
        ease: "easeInOut"
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

  // Function to determine the background color based on index
  const getBackgroundColor = (index: number) => {
    const colors = [
      "bg-primary/5", 
      "bg-secondary/5", 
      "bg-accent/5"
    ];
    return colors[index % colors.length];
  };

  // Function to determine icon color based on index
  const getIconColor = (index: number) => {
    const colors = [
      "text-primary", 
      "text-secondary", 
      "text-accent"
    ];
    return colors[index % colors.length];
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-primary/5"
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
        
        <div className="mt-16 max-w-3xl mx-auto">
          {problemStatements.map((problem, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={problem.id}
                ref={setItemRef(index)}
                custom={index}
                variants={listItemVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: false, amount: 0.4 }}
                className={`mb-6 flex items-center ${
                  isEven ? 'flex-row' : 'flex-row-reverse'
                } ${getBackgroundColor(index)} rounded-xl p-5 cursor-pointer shadow-sm transition-all duration-300`}
                onClick={() => handleCardClick(problem.id)}
              >
                {/* Left side (icon) or right side for odd items */}
                <motion.div
                  variants={iconContainerVariants}
                  custom={index}
                  whileHover="hover"
                  className={`p-3 rounded-full ${getBackgroundColor(index === 0 ? 2 : index - 1)} ${getIconColor(index)} flex-shrink-0 ${
                    isEven ? 'mr-5' : 'ml-5'
                  }`}
                >
                  {problem.icon}
                </motion.div>
                
                {/* Text content with arrow shape */}
                <div className={`relative flex-grow ${isEven ? 'text-left' : 'text-right'} ${
                  isEven ? 'pl-4' : 'pr-4'
                }`}>
                  <motion.p 
                    className="text-gray-700 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ 
                      opacity: 1,
                      transition: { delay: index * 0.1 + 0.3 }
                    }}
                    viewport={{ once: false, amount: 0.8 }}
                  >
                    {problem.text}
                  </motion.p>
                  
                  {/* Decorative number */}
                  <div className={`absolute ${isEven ? '-left-1 top-1/2' : '-right-1 top-1/2'} transform -translate-y-1/2 text-4xl font-bold text-gray-100`}>
                    {problem.id}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
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
                      className={`p-4 rounded-full ${getBackgroundColor((activeCard - 1) % 3)} ${getIconColor((activeCard - 1) % 3)}`}
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, -5, 5, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse" 
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