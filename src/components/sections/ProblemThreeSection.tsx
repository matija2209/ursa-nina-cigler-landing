"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
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
  Frown,
  Smile
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

type ProblemStatement = {
  id: number;
  text: string;
  icon: React.ReactNode;
};

export default function ProblemThreeSection() {
  const [hoveredProblem, setHoveredProblem] = useState<number | null>(null);
  const [draggedProblem, setDraggedProblem] = useState<number | null>(null);
  const [solvedProblems, setSolvedProblems] = useState<number[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [windowWidth, setWindowWidth] = useState(0);

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

  // Track mouse position for floating elements
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Mouse follower animation values
  const followerX = useTransform(mouseX, (val) => val - 20);
  const followerY = useTransform(mouseY, (val) => val - 20);
  const followerRotate = useTransform(mouseX, [0, windowWidth || 1000], [-10, 10]);

  // Drag problem to solution box logic
  const handleDragEnd = (id: number, info: any) => {
    const solutionBox = document.getElementById('solution-box');
    if (solutionBox) {
      const rect = solutionBox.getBoundingClientRect();
      
      if (
        info.point.x > rect.left && 
        info.point.x < rect.right && 
        info.point.y > rect.top && 
        info.point.y < rect.bottom
      ) {
        // Problem was dropped in solution box
        setSolvedProblems(prev => [...prev, id]);
      }
    }
    
    setDraggedProblem(null);
  };

  // Reset all solved problems
  const resetProblems = () => {
    setSolvedProblems([]);
  };

  // Wave animation for text
  const waveVariants = {
    initial: { y: 0 },
    animate: (i: number) => ({
      y: [0, -10, 0],
      transition: {
        delay: i * 0.05,
        duration: 0.8,
        repeat: Infinity,
        repeatType: "mirror" as const,
        repeatDelay: 2
      }
    })
  };

  return (
    <div className="py-12 bg-gradient-to-br from-primary/5 via-white to-accent/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 200 - 100],
              x: [0, Math.random() * 200 - 100],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "mirror"
            }}
          />
        ))}
      </div>

      {/* Mouse follower decoration */}
      <motion.div
        className="fixed w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 pointer-events-none z-50 mix-blend-multiply"
        style={{ 
          x: followerX, 
          y: followerY,
          rotate: followerRotate
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12">
          <SectionHeader title="Te mučijo te podjetniške težave?" />
          <div className="flex justify-center">
            <div className="flex gap-1 mt-2">
              {Array.from("Označi jih!").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={waveVariants}
                  initial="initial"
                  animate="animate"
                  className="text-lg text-primary/80 font-medium"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problemStatements.map((problem) => {
            const isSolved = solvedProblems.includes(problem.id);
            return (
              <motion.div
                key={problem.id}
                drag={!isSolved}
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.6}
                whileDrag={{ scale: 1.1, zIndex: 50 }}
                onDragStart={() => setDraggedProblem(problem.id)}
                onDragEnd={(_, info) => handleDragEnd(problem.id, info)}
                animate={isSolved ? { opacity: 0.5, y: 20, scale: 0.95 } : {}}
                className={`p-5 bg-white rounded-xl shadow-lg cursor-grab active:cursor-grabbing ${
                  isSolved ? 'border-2 border-green-400 bg-green-50' : ''
                } ${draggedProblem === problem.id ? 'z-50' : 'z-10'}`}
                onMouseEnter={() => setHoveredProblem(problem.id)}
                onMouseLeave={() => setHoveredProblem(null)}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`p-3 rounded-full ${
                      isSolved ? 'bg-green-100 text-green-600' : 'bg-primary/10 text-primary'
                    }`}
                    animate={
                      hoveredProblem === problem.id 
                        ? { 
                            rotate: [0, -10, 10, -5, 0],
                            scale: [1, 1.2, 1],
                            transition: { duration: 0.5 }
                          } 
                        : {}
                    }
                  >
                    {isSolved ? <Smile className="h-6 w-6" /> : problem.icon}
                  </motion.div>
                  
                  <div>
                    <p className={`${isSolved ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                      {problem.text}
                    </p>
                    {isSolved && (
                      <motion.p 
                        className="text-green-600 mt-2 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        Rešeno! 🎉
                      </motion.p>
                    )}
                  </div>
                </div>
                
                {/* Drag indicator */}
                {!isSolved && (
                  <motion.div 
                    className="absolute top-3 right-3 text-xs text-gray-400 flex items-center gap-1"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="bg-primary/10 px-2 py-1 rounded text-primary/80">Povleci</span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Solution box */}
        <motion.div
          id="solution-box"
          className="mt-12 p-8 border-4 border-dashed border-primary/30 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 relative"
          animate={{ 
            boxShadow: draggedProblem 
              ? "0 10px 25px rgba(0,0,0,0.2)" 
              : "0 5px 15px rgba(0,0,0,0.05)" 
          }}
        >
          <motion.div
            className="absolute inset-0 bg-primary/5 rounded-lg"
            animate={{ 
              scale: draggedProblem ? [1, 1.02, 1] : 1,
            }}
            transition={{ 
              duration: 1,
              repeat: draggedProblem ? Infinity : 0
            }}
          />
          
          <div className="text-center relative z-10">
            <motion.h3 
              className="text-2xl font-bold text-primary mb-4"
              animate={{ 
                scale: draggedProblem ? 1.1 : 1
              }}
              transition={{ type: "spring" }}
            >
              Odpusti svoje podjetniške težave
            </motion.h3>
            
            <p className="text-gray-600 mb-6">
              Povleci težave sem za pomoč pri njihovem reševanju
            </p>
            
            {solvedProblems.length > 0 ? (
              <div>
                <p className="text-lg font-medium text-green-600 mb-4">
                  Rešene težave: {solvedProblems.length}/{problemStatements.length}
                </p>
                
                <motion.button
                  onClick={resetProblems}
                  className="px-5 py-2 bg-primary text-white rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Začni znova
                </motion.button>
              </div>
            ) : (
              <div className="flex justify-center">
                <motion.div
                  className="p-8 rounded-full bg-primary/20"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror"
                  }}
                >
                  <Frown className="h-12 w-12 text-primary/60" />
                </motion.div>
              </div>
            )}
          </div>
          
          {/* Animated success confetti when all problems are solved */}
          <AnimatePresence>
            {solvedProblems.length === problemStatements.length && (
              <>
                {Array.from({ length: 50 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      width: Math.random() * 10 + 5,
                      height: Math.random() * 10 + 5,
                      left: `${50}%`,
                      top: `${50}%`,
                      background: `hsl(${Math.random() * 360}, 80%, 60%)`,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: [0, 1],
                      x: Math.random() * 300 - 150,
                      y: Math.random() * 300 - 150,
                      opacity: [1, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      delay: i * 0.02,
                    }}
                    exit={{ opacity: 0 }}
                  />
                ))}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <h2 className="text-2xl font-bold text-primary">Bravo! Pripravljeni ste na uspeh!</h2>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}