import { Button } from "@/components/ui/button";
import { Camera, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/hero-savanna.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kenyan Savanna at sunset with wildlife"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Capturing Kenya's
            <span className="text-savanna block">Natural Beauty</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Connect with Kenya's most talented photographers and showcase your work to the world. 
            From the Maasai Mara to Mount Kenya, tell your story through the lens.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Camera className="mr-2 h-5 w-5" />
              Explore Galleries
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
              <Users className="mr-2 h-5 w-5" />
              Join Network
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 border-t border-white/20 pt-8">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-savanna">500+</div>
              <div className="text-sm text-gray-300">Photographers</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-savanna">10K+</div>
              <div className="text-sm text-gray-300">Photos</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-savanna">47</div>
              <div className="text-sm text-gray-300">Counties</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-1 h-8 bg-white/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;