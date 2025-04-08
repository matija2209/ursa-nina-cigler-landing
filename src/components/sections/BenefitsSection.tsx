"use client"
import { useState, useEffect, useRef } from 'react';
import { Sparkles, CheckCircle, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

// Define the interface for our benefit statements
interface BenefitStatement {
  id: number;
  text: string;
}

export default function EnhancedBenefitsSection() {
  // The array of benefit statements
  const benefitStatements: BenefitStatement[] = [
    { id: 1, text: "Zbudiš se z jasnostjo in zagonom glede svojega posla. Veš, kaj so tvoji naslednji koraki." },
    { id: 2, text: "Ovire, ki so se zdele nepremostljive, postanejo obvladljivi izzivi, ki jih samozavestno rešuješ." },
    { id: 3, text: "Tvoja kreativnost cveti, ker imaš končno prostor in energijo zanjo." },
    { id: 4, text: "Tvoj posel stabilno raste, prihodki se večajo, ti pa občutiš več finančne varnosti in miru." },
    { id: 5, text: "Končno imaš več časa zase, svojo družino in stvari, ki te polnijo – brez občutka krivde." },
    { id: 6, text: "Počutiš se podprto, razumljeno in opolnomočeno na svoji podjetniški poti." }
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoObserverRef = useRef<IntersectionObserver | null>(null);
  
  // Set up Intersection Observer manually since react-intersection-observer might have issues
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.muted = true; // Mute is required for autoplay in most browsers
          videoRef.current.play().catch(error => {
            console.log("Autoplay prevented:", error);
          });
          setIsPlaying(true);
        } else if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      });
    };

    // Create and set up observer
    videoObserverRef.current = new IntersectionObserver(handleIntersect, options);
    
    // Start observing when the video element is available
    if (videoRef.current) {
      videoObserverRef.current.observe(videoRef.current);
    }

    // Clean up
    return () => {
      if (videoObserverRef.current) {
        videoObserverRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-accent blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute -bottom-32 left-1/4 w-80 h-80 rounded-full bg-secondary blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-4 tracking-tight">
            Predstavljaj si<span className="text-accent">...</span>
          </h2>
          <div className="flex justify-center items-center">
            <div className="w-10 h-1 bg-accent rounded"></div>
            <div className="w-16 h-1 bg-secondary rounded-full mx-2"></div>
            <div className="w-10 h-1 bg-accent rounded"></div>
          </div>
        </div>
        
        {/* Funky layout with proper spacing */}
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Benefits with horizontal offset pattern */}
          <div className="w-full lg:w-2/3 pr-0 lg:pr-12">
            {/* Left column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefitStatements.slice(0, 3).map((benefit, index) => (
                <div
                  key={benefit.id}
                  className={`transform ${index % 2 === 1 ? 'md:translate-y-12' : ''} transition-all duration-300`}
                  onMouseEnter={() => setHoveredId(benefit.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div 
                    className={`p-6 bg-white rounded-xl shadow-lg border-2 hover:shadow-xl transition-all duration-300 overflow-hidden
                      ${hoveredId === benefit.id ? 'scale-105 border-accent' : 'border-primary/10'}`}
                  >
                    {/* Decorative elements */}
                    {hoveredId === benefit.id && (
                      <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-20">
                        <Sparkles className="w-full h-full text-accent" />
                      </div>
                    )}
                    
                    {/* Numbered indicator */}
                    <div className={`absolute -left-3 -top-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm 
                      ${hoveredId === benefit.id ? 'bg-accent' : 'bg-secondary'}`}>
                      {benefit.id}
                    </div>
                    
                    <div className="flex items-start pt-2">
                      <CheckCircle className={`h-6 w-6 mr-3 flex-shrink-0 ${hoveredId === benefit.id ? 'text-accent' : 'text-secondary'}`} />
                      <p className="text-base text-muted-foreground">{benefit.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Right column - with offset pattern */}
              {benefitStatements.slice(3).map((benefit, index) => (
                <div
                  key={benefit.id}
                  className={`transform ${index % 2 === 0 ? 'md:translate-y-12' : ''} transition-all duration-300`}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setHoveredId(benefit.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div 
                    className={`p-6 bg-white rounded-xl shadow-lg border-2 hover:shadow-xl transition-all duration-300 overflow-hidden relative
                      ${hoveredId === benefit.id ? 'scale-105 border-accent' : 'border-primary/10'}`}
                  >
                    {/* Decorative elements */}
                    {hoveredId === benefit.id && (
                      <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-20">
                        <Sparkles className="w-full h-full text-accent" />
                      </div>
                    )}
                    
                    {/* Numbered indicator */}
                    <div className={`absolute -left-3 -top-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm 
                      ${hoveredId === benefit.id ? 'bg-accent' : 'bg-secondary'}`}>
                      {benefit.id}
                    </div>
                    
                    <div className="flex items-start pt-2">
                      <CheckCircle className={`h-6 w-6 mr-3 flex-shrink-0 ${hoveredId === benefit.id ? 'text-accent' : 'text-secondary'}`} />
                      <p className="text-base text-muted-foreground">{benefit.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Instagram-style reel with auto-play */}
          <div className="w-full lg:w-1/3 mt-16 lg:mt-0 flex justify-center items-center">
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative w-64 md:w-full max-w-xs cursor-pointer transform transition-transform duration-500 hover:scale-105 rounded-2xl overflow-hidden group">
                  {/* Floating badges */}
                  <div className="absolute -right-3 -top-3 bg-accent text-white text-xs font-bold py-1 px-3 rounded-full z-20 shadow-lg transform rotate-12">
                    Oglej si zdaj!
                  </div>
                  
                  {/* Instagram-style reel thumbnail with 9:16 ratio */}
                  <div className="relative aspect-[9/16] overflow-hidden rounded-2xl shadow-lg border-4 border-white group-hover:border-accent transition-colors duration-300">
                    <video 
                      ref={videoRef}
                      src="/ursa_nina_reel.mp4" 
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      poster="/reel_thumbnail.jpg"
                    />
                    
                    {/* The overlay and play button - now conditional on isPlaying */}
                    {!isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm group-hover:bg-black/20 transition-all duration-300">
                        <div className="h-20 w-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          <Play className="h-10 w-10 text-white" />
                        </div>
                      </div>
                    )}
                    
                    {/* Instagram-style reel indicator */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-sm font-medium bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">Urša Nina</span>
                      <span className="bg-accent px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        Reel
                      </span>
                    </div>
                  </div>
                  
                  {/* Caption text below the reel */}
                  <div className="mt-4">
                    <p className="text-center text-sm text-muted-foreground italic font-medium">
                      "Poglejte, kako lahko tudi vi<br />spremenite svoj posel."
                    </p>
                    <div className="flex justify-center mt-2">
                      <div className="w-16 h-1 bg-accent rounded-full"></div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-screen-md p-0 border-0 bg-transparent">
                <div className="aspect-[9/16] w-full max-h-[80vh] mx-auto">
                  <video 
                    src="/ursa_nina_reel.mp4" 
                    controls 
                    autoPlay
                    className="w-full h-full object-cover rounded-lg"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                </div>
              </DialogContent>  
            </Dialog>
          </div>
        </div>
        
        <div className="mt-24 pt-8 text-center relative">
          <div className="absolute left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <p className="text-2xl font-bold text-primary mb-8">
            To ni samo sen – to je <span className="text-accent">tvoja prihodnost!</span>
          </p>
          <button className="relative overflow-hidden bg-accent hover:bg-accent/90 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
            <span className="relative z-10">Začni svojo preobrazbo zdaj</span>
            <span className="absolute inset-0 w-full h-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </button>
        </div>
      </div>
    </section>
  );
}