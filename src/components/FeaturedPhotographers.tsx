import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Camera, Star, Users } from "lucide-react";

const photographers = [
  {
    id: 1,
    name: "Amina Wanjiku",
    location: "Nairobi",
    specialty: "Portrait & Wedding",
    rating: 4.9,
    portfolioCount: 156,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1-beautiful-african-woman-portrait?w=300&h=300&fit=crop&auto=format",
    featured: "Recent work featured in Kenyan Bride Magazine",
    pricing: "From KSh 15,000"
  },
  {
    id: 2,
    name: "David Kiprotich",
    location: "Maasai Mara",
    specialty: "Wildlife & Safari",
    rating: 4.8,
    portfolioCount: 234,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d-man-with-camera?w=300&h=300&fit=crop&auto=format",
    featured: "National Geographic contributor",
    pricing: "From KSh 25,000"
  },
  {
    id: 3,
    name: "Grace Muthoni",
    location: "Mombasa",
    specialty: "Beach & Landscape",
    rating: 4.9,
    portfolioCount: 189,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80-beautiful-woman-smiling?w=300&h=300&fit=crop&auto=format",
    featured: "Coastal Kenya tourism campaign photographer",
    pricing: "From KSh 18,000"
  }
];

const FeaturedPhotographers = () => {
  return (
    <section id="photographers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Featured Photographers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover Kenya's most talented photographers specializing in various styles and locations across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {photographers.map((photographer) => (
            <Card key={photographer.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={photographer.image}
                  alt={photographer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    <Star className="w-3 h-3 mr-1 fill-current text-savanna" />
                    {photographer.rating}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{photographer.name}</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{photographer.location}</span>
                  </div>
                  <Badge variant="outline" className="mb-3">
                    {photographer.specialty}
                  </Badge>
                </div>

                <div className="text-sm text-muted-foreground mb-4">
                  {photographer.featured}
                </div>

                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Camera className="w-4 h-4 mr-1" />
                    {photographer.portfolioCount} photos
                  </div>
                  <div className="font-medium text-primary">
                    {photographer.pricing}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Portfolio
                  </Button>
                  <Button variant="savanna" size="sm" className="flex-1">
                    Book Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            <Users className="mr-2 h-5 w-5" />
            View All Photographers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPhotographers;