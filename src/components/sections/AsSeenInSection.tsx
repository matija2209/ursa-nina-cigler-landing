import { Quote } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/button';

// Define the interface for endorsements
interface Endorsement {
  image: {
    src: string;
    alt: string;
  };
  author: {
    image: string;
    name: string;
    bio: string;
  };
  offsetY?: number; // Variable to control vertical position
}

export default function AsSeenInSection() {
  // Testimonials with added bio information and offset values
  const endorsments: Endorsement[] = [
    {
      image: {
        src: "/ursanina_asseen_1.jpg",
        alt: "Urša Nina - priznanja"
      },
      author: {
        image: "/ursanina_asseen_1_author.webp",
        name: "SANJA KRIŽAN",
        bio: "Podjetnica in mentorica z več kot 15 let izkušenj v digitalnem marketingu. Ustanoviteljica uspešne marketinške agencije."
      },
      offsetY: 0 // First card at normal position
    },
    {
      image: {
        src: "/ursanina_asseen_2.jpg",
        alt: "Urša Nina - priznanja"
      },
      author: {
        image: "/ursanina_asseen_2_author.png",
        name: "HUDA PEHTA",
        bio: "Ustanoviteljica priljubljene znamke naravne kozmetike z močnim vplivom na slovenskem trgu."
      },
      offsetY: 32 // Second card pushed down by 2rem
    },
    {
      image: {
        src: "/ursanina_asseen_3.jpg",
        alt: "Urša Nina - priznanja"
      },
      author: {
        image: "/ursanina_asseen_3_author.jpg",
        name: "VILA DARILA",
        bio: "Ustvarjalka edinstvenih personaliziranih daril, ki je svojo strast spremenila v rastoče podjetje."
      },
      offsetY: 16 // Third card pushed down by 1rem
    }
  ];

  return (
    <section className="py-16 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader title="Kaj pravijo druge podjetnice" />

        {/* Desktop view - side by side with offsets */}
        <div className="hidden md:flex justify-center space-x-6 mb-12">
          {endorsments.map((testimonial, index) => (
            <div 
              key={index}
              className="flex-1 max-w-md"
              style={{ marginTop: `${testimonial.offsetY}px` }}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                {/* Endorsement screenshot at the top */}
                <div className="p-4 bg-white flex-grow">
                  <div className="relative w-full overflow-hidden rounded shadow-sm">
                    <img 
                      src={testimonial.image.src} 
                      alt={testimonial.image.alt}
                      className="w-full object-contain"
                    />
                    <div className="absolute inset-0 bg-accent/5 hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                </div>
                
                {/* Author information at the bottom */}
                <div className="p-5 bg-gradient-to-br from-primary/5 to-secondary/5 border-t">
                  <div className="flex items-start mb-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-accent flex-shrink-0">
                      <img 
                        src={testimonial.author.image} 
                        alt={testimonial.author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary">
                        {testimonial.author.name}
                      </h3>
                      <div className="flex items-center">
                        <Quote className="w-4 h-4 text-accent mr-1" />
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {testimonial.author.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view - stacked vertically */}
        <div className="md:hidden space-y-6 mb-12">
          {endorsments.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Endorsement screenshot */}
              <div className="p-4 bg-white">
                <div className="relative w-full overflow-hidden rounded shadow-sm">
                  <img 
                    src={testimonial.image.src} 
                    alt={testimonial.image.alt}
                    className="w-full object-contain"
                  />
                </div>
              </div>
              
              {/* Author information */}
              <div className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5 border-t">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-accent flex-shrink-0">
                    <img 
                      src={testimonial.author.image} 
                      alt={testimonial.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">
                      {testimonial.author.name}
                    </h3>
                    <div className="flex items-center">
                      <Quote className="w-4 h-4 text-accent mr-1" />
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {testimonial.author.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-xl font-medium text-primary mb-6">
            Pridruži se uspešnim podjetnicam, ki so že naredile spremembo
          </p>
          <Button variant="default" >
            Rezerviraj brezplačen posvet
          </Button>
        </div>
      </div>
    </section>
  );
}