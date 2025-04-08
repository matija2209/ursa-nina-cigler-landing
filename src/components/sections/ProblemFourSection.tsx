"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Check,
  Square,
  CheckSquare,
  ArrowRight
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

type ProblemStatement = {
  id: number;
  text: string;
  icon: React.ReactNode;
};

export default function ProblemFourSection() {
  const [checkedProblems, setCheckedProblems] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  
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

  const toggleCheck = (id: number) => {
    if (checkedProblems.includes(id)) {
      setCheckedProblems(checkedProblems.filter(item => item !== id));
    } else {
      setCheckedProblems([...checkedProblems, id]);
    }
  };

  const resetChecklist = () => {
    setCheckedProblems([]);
    setShowResults(false);
  };

  const handleShowResults = () => {
    setShowResults(true);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.07
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const checkboxVariants = {
    unchecked: { scale: 1 },
    checked: { scale: [1, 1.3, 1], transition: { duration: 0.3 } }
  };

  const resultsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  // Message based on number of checked problems
  const getMessage = () => {
    const count = checkedProblems.length;
    if (count === 0) {
      return "Čestitamo! Kaže, da nimate težav z vašim poslom. Vendar če želite še naprej rasti, smo tu za vas.";
    } else if (count <= 3) {
      return "Imate nekaj izzivov, a ste na dobri poti. Z nekaj podpore boste lahko hitro napredovali.";
    } else if (count <= 6) {
      return "Soočate se z več izzivi, ki so značilni za mnoge podjetnice. S pravim vodenjem se lahko hitro sprostite in vaš posel bo zacvetel.";
    } else {
      return "Trenutno premagujete veliko ovir, kar je lahko izčrpavajoče. Čas je za korak nazaj in novo strategijo, ki bo vaše podjetje popeljala do uspeha.";
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-white">
      <div className="container mx-auto px-4">
        <SectionHeader title="Te mučijo te podjetniške težave?" />
        
        <div className="mt-4 mb-10 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg text-gray-600"
          >
            Označi težave, ki se ti zdijo znane...
          </motion.p>
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {problemStatements.map((problem) => {
            const isChecked = checkedProblems.includes(problem.id);
            
            return (
              <motion.div
                key={problem.id}
                variants={itemVariants}
                className={`mb-4 rounded-lg border ${
                  isChecked ? 'border-primary bg-primary/5' : 'border-gray-200 bg-white'
                } p-4 shadow-sm transition-all duration-300 hover:shadow-md`}
              >
                <motion.div 
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => toggleCheck(problem.id)}
                  whileHover={{ x: 2 }}
                >
                  <motion.div
                    variants={checkboxVariants}
                    animate={isChecked ? "checked" : "unchecked"}
                    className="flex-shrink-0 text-primary"
                  >
                    {isChecked ? (
                      <CheckSquare className="h-6 w-6" />
                    ) : (
                      <Square className="h-6 w-6" />
                    )}
                  </motion.div>
                  
                  <div className="flex items-center gap-3 flex-grow">
                    <motion.div
                      className={`p-2 rounded-full ${
                        isChecked ? 'bg-primary/20' : 'bg-gray-100'
                      }`}
                      animate={
                        isChecked ? {
                          rotate: [0, 10, -10, 0],
                          transition: { duration: 0.5 }
                        } : {}
                      }
                    >
                      {problem.icon}
                    </motion.div>
                    
                    <p className={`${isChecked ? 'text-primary font-medium' : 'text-gray-700'}`}>
                      {problem.text}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-8 flex justify-center gap-4">
          <motion.button
            onClick={resetChecklist}
            className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Ponovno začni
          </motion.button>
          
          <motion.button
            onClick={handleShowResults}
            className="px-6 py-2 bg-primary text-white rounded-full font-medium flex items-center gap-2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={checkedProblems.length === 0 && showResults}
          >
            Pokaži rezultat <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>

        {/* Results section */}
        <AnimatePresence>
          {showResults && (
            <motion.div
              variants={resultsVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="mt-12 p-6 rounded-xl bg-white shadow-lg border border-primary/20 max-w-3xl mx-auto"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
                  >
                    <Check className="h-6 w-6 text-primary" />
                  </motion.div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {checkedProblems.length} od {problemStatements.length} težav
                  </h3>
                  
                  <p className="text-gray-700 mb-4">{getMessage()}</p>
                  
                  {checkedProblems.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-900 mb-2">Vaše težave:</h4>
                      <ul className="space-y-2">
                        {checkedProblems.map((id) => {
                          const problem = problemStatements.find(p => p.id === id);
                          return problem ? (
                            <motion.li 
                              key={id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: id * 0.1 }}
                              className="flex items-center gap-2"
                            >
                              <div className="text-primary">
                                <Check className="h-4 w-4" />
                              </div>
                              <span className="text-gray-700">{problem.text}</span>
                            </motion.li>
                          ) : null;
                        })}
                      </ul>
                    </div>
                  )}
                  
                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.button
                      className="px-6 py-2 bg-primary text-white rounded-full font-medium"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Poišči rešitve za svoje težave
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animation to show when many problems are checked */}
        {checkedProblems.length > 5 && (
          <motion.div 
            className="absolute bottom-10 left-0 right-0 flex justify-center opacity-30 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
          >
            <motion.div
              className="text-6xl"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror"
              }}
            >
              💪
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}