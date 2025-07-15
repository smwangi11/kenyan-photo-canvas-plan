import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Heart, 
  Briefcase, 
  Mountain, 
  Users, 
  Zap,
  Clock,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description: "Capture your special day with Kenya's most talented wedding photographers",
    features: ["Pre-wedding shoots", "Ceremony coverage", "Reception photography", "Photo editing"],
    priceRange: "KSh 20,000 - 80,000",
    duration: "Full day",
    popular: true
  },
  {
    icon: Camera,
    title: "Portrait Sessions",
    description: "Professional headshots and family portraits in stunning Kenyan locations",
    features: ["Studio sessions", "Outdoor shoots", "Professional lighting", "Digital gallery"],
    priceRange: "KSh 8,000 - 25,000",
    duration: "2-4 hours",
    popular: false
  },
  {
    icon: Mountain,
    title: "Landscape & Nature",
    description: "Showcase Kenya's breathtaking landscapes from coast to highlands",
    features: ["Safari photography", "Coastal shoots", "Mountain expeditions", "Conservation focus"],
    priceRange: "KSh 15,000 - 50,000",
    duration: "Half/Full day",
    popular: false
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Professional documentation of business events and conferences",
    features: ["Event coverage", "Team photography", "Product shots", "Marketing materials"],
    priceRange: "KSh 12,000 - 40,000",
    duration: "4-8 hours",
    popular: false
  },
  {
    icon: Users,
    title: "Community Projects",
    description: "Collaborative photography projects highlighting Kenyan culture and stories",
    features: ["Cultural documentation", "Social impact", "Story telling", "Community engagement"],
    priceRange: "KSh 5,000 - 20,000",
    duration: "Variable",
    popular: false
  },
  {
    icon: Zap,
    title: "Photography Workshops",
    description: "Learn from professionals through hands-on workshops across Kenya",
    features: ["Beginner to advanced", "Equipment guidance", "Location shooting", "Post-processing"],
    priceRange: "KSh 3,000 - 12,000",
    duration: "1-3 days",
    popular: true
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Photography Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intimate portraits to grand safaris, our network of photographers offers comprehensive services 
            tailored to capture Kenya's diverse beauty and your precious moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="relative hover:shadow-elegant transition-all duration-300 group">
                {service.popular && (
                  <div className="absolute -top-3 left-6">
                    <Badge variant="default" className="bg-savanna text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-deep-green" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{service.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Starting from:</span>
                      <span className="font-semibold text-primary">{service.priceRange}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Clock className="mr-2 h-4 w-4" />
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            <Camera className="mr-2 h-5 w-5" />
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;