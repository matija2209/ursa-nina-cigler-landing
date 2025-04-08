"use client"
import { useState } from 'react';
import { 
  AlertCircle, 
  HeartCrack, 
  DollarSign, 
  ShoppingBag, 
  Users, 
  Settings, 
  Lightbulb, 
  Battery, 
  ShieldOff 
} from 'lucide-react';

// Define the interface for our problem statements
interface ProblemStatement {
  id: number;
  text: string;
  icon?: React.ReactNode;
}

export default function CreativeProblemsSection() {
  const [activeProblem, setActiveProblem] = useState<number | null>(null);

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

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-3">
            Te naslednje situacije zvenijo znano?
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-accent rounded"></div>
          </div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Večina ustvarjalk se sooča s podobnimi izzivi pri razvoju svojega posla. Prepoznaš katero od teh situacij?
          </p>
        </div>

        {/* Main interactive hexagon grid - visible on larger screens */}
        <div className="hidden md:block relative max-w-4xl mx-auto">
          {/* Hexagon pattern background */}
          <svg 
            className="absolute inset-0 w-full h-full -z-10 text-secondary/5" 
            viewBox="0 0 600 600" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern id="hexagonPattern" x="0" y="0" width="50" height="88" patternUnits="userSpaceOnUse" patternTransform="scale(2) rotate(0)">
              <path 
                fill="currentColor" 
                d="M24.8,14.4c-0.5-0.9-1.4-1.4-2.4-1.4H14.8c-1,0-1.8,0.5-2.4,1.4L8.5,22c-0.5,0.9-0.5,1.9,0,2.8l4,7.6 c0.5,0.9,1.4,1.4,2.4,1.4h7.7c1,0,1.8-0.5,2.4-1.4l4-7.6c0.5-0.9,0.5-1.9,0-2.8L24.8,14.4z" 
              />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#hexagonPattern)" />
          </svg>

          {/* Interactive problem hexagons */}
          <div className="relative py-16 grid grid-cols-3 gap-8">
            {problemStatements.map((problem, index) => {
              // Calculate offset for every other item in even rows
              const row = Math.floor(index / 3);
              const isEvenRow = row % 2 === 1;
              const offset = isEvenRow ? 'translate-x-1/2' : '';
              
              // Determine shape based on index
              const shapeClass = index % 3 === 0 ? 'hexagon' : 
                                index % 3 === 1 ? 'octagon' : 'diamond';
              
              return (
                <div 
                  key={problem.id}
                  className={`${offset} ${index >= 6 ? '-mt-8' : ''}`}
                >
                  <div
                    className={`${shapeClass} cursor-pointer transition-all duration-300 ${
                      activeProblem === problem.id 
                      ? 'scale-110 shadow-lg bg-accent text-white' 
                      : 'hover:scale-105 bg-white hover:bg-secondary/10 shadow-md'
                    }`}
                    onMouseEnter={() => setActiveProblem(problem.id)}
                    onMouseLeave={() => setActiveProblem(null)}
                  >
                    <div className="shape-content flex flex-col items-center justify-center p-8 text-center">
                      <div className={`mb-3 ${activeProblem === problem.id ? 'text-white' : 'text-accent'}`}>
                        {problem.icon}
                      </div>
                      <p className="text-xs font-medium leading-tight">
                        {problem.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CSS for shapes */}
          <style jsx>{`
            .hexagon {
              position: relative;
              width: 180px;
              height: 180px;
              margin: 0 auto;
              clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            }
            .octagon {
              position: relative;
              width: 180px;
              height: 180px;
              margin: 0 auto;
              clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
            }
            .diamond {
              position: relative;
              width: 180px;
              height: 180px;
              margin: 0 auto;
              clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
            }
            .shape-content {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          `}</style>
        </div>

        {/* Mobile version - simple cards instead of hexagons */}
        <div className="md:hidden space-y-4 max-w-md mx-auto">
          {problemStatements.map((problem) => (
            <div 
              key={problem.id}
              className={`rounded-lg p-4 transition-all duration-300 ${
                activeProblem === problem.id 
                ? 'bg-accent text-white shadow-lg' 
                : 'bg-white hover:bg-secondary/10 shadow-md'
              }`}
              onTouchStart={() => setActiveProblem(problem.id)}
              onTouchEnd={() => setActiveProblem(null)}
            >
              <div className="flex items-center">
                <div className={`mr-3 flex-shrink-0 ${activeProblem === problem.id ? 'text-white' : 'text-accent'}`}>
                  {problem.icon}
                </div>
                <p className="text-base font-medium">{problem.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-bold text-primary mb-6">
            Če si pritrdilno odgovorila vsaj na eno vprašanje, si na pravem mestu!
          </p>
          <button className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Rezerviraj brezplačen posvet
          </button>
        </div>
      </div>
    </section>
  );
}