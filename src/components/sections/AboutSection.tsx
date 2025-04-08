"use client"
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, Info, X } from 'lucide-react';
import Image from 'next/image';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

export default function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Gallery images
  const galleryImages: GalleryImage[] = [
    { id: 1, src: "/gallery/image_1.jpg", alt: "Gallery Image 1", caption: "Ustvarjalna delavnica s strankami" },
    { id: 2, src: "/gallery/image_2.jpg", alt: "Gallery Image 2", caption: "Urša pri delu v svojem studiu" },
    { id: 3, src: "/gallery/image_3.jpg", alt: "Gallery Image 3", caption: "Mentoriranje podjetnic v ustvarjalnih panogah" },
    { id: 4, src: "/gallery/image_4.jpg", alt: "Gallery Image 4", caption: "Predstavitev na podjetniški konferenci" },
    { id: 5, src: "/gallery/image_5.jpg", alt: "Gallery Image 5", caption: "Izdelki študentk programa" },
    { id: 6, src: "/gallery/image_6.jpg", alt: "Gallery Image 6", caption: "Skupinsko fotografiranje po uspešnem zaključku programa" },
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-white to-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* About Section Header */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-bold text-primary mb-2">
                O meni
              </h2>
              <div className="w-24 h-1 bg-accent rounded mb-4"></div>
              <div className="relative w-full max-w-xs mx-auto md:mx-0 aspect-square rounded-full overflow-hidden border-4 border-white shadow-lg transform hover:rotate-3 transition-transform duration-300">
                <Image 
                  width={600}
                  height={600}
                  src="/ursa_nina_hero.jpg" 
                  alt="Urša Nina" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-2/3 mt-8 md:mt-0 md:pl-12">
              <div className="bg-white rounded-xl shadow-md p-6 relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-md">
                  <Info className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Urša Nina</h3>
                <p className="text-muted-foreground mb-4">
                  Sem poslovna mentorica za ustvarjalke, ki želijo iz svojega hobija razviti uspešen in dobičkonosen posel.
                  Z več kot 10 leti izkušenj v podjetništvu ter lastno potjo iz ustvarjalke v uspešno podjetnico
                  pomagam ženskam premostiti ovire in zgraditi posel, ki jih izpolnjuje.
                </p>
                <p className="text-muted-foreground">
                  Moja metoda temelji na kombinaciji poslovnih strategij, kreativnih pristopov in osebnostne rasti.
                  Ne verjamem v univerzalne recepte za uspeh, temveč v individualiziran pristop, ki upošteva tvoje
                  edinstvene talente, okoliščine in cilje.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Poslovno mentorstvo</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">Kreativnost</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">Podjetniška strategija</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Gallery Section */}
          {/* <div className="mt-16">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Utrinki z delavnic in mentorstev</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className="relative group cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          
          {/* Values/Mission Section */}
          <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Moje poslanstvo</h3>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-center text-muted-foreground italic">
                "Verjamem, da si vsaka ženska zasluži živeti od svoje ustvarjalnosti in strasti. 
                Moje poslanstvo je opolnomočiti ustvarjalke, da zgradijo uspešne posle, 
                ki jim omogočajo svobodo, finančno varnost in osebno izpolnitev."
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lightbox Dialog */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black/90 border-0">
          <div className="relative w-full h-full">
            {/* Close button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Main image */}
            <div className="flex items-center justify-center p-4 h-[80vh]">
              <img 
                src={galleryImages[currentImageIndex].src} 
                alt={galleryImages[currentImageIndex].alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">
              <p className="text-lg">{galleryImages[currentImageIndex].caption}</p>
              <p className="text-sm text-gray-300">{currentImageIndex + 1} / {galleryImages.length}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}