import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye, Download, Filter } from "lucide-react";

const categories = ["All", "Wildlife", "Landscapes", "Portraits", "Weddings", "Culture", "Urban"];

const galleryItems = [
  {
    id: 1,
    title: "Maasai Warrior Portrait",
    photographer: "John Kamau",
    category: "Portraits",
    location: "Kajiado",
    likes: 234,
    views: 1567,
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643-maasai-warrior?w=400&h=500&fit=crop&auto=format"
  },
  {
    id: 2,
    title: "Elephants at Amboseli",
    photographer: "Sarah Njoki",
    category: "Wildlife",
    location: "Amboseli National Park",
    likes: 456,
    views: 2890,
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44-elephants-africa?w=400&h=300&fit=crop&auto=format"
  },
  {
    id: 3,
    title: "Sunset over Lake Nakuru",
    photographer: "Michael Ochieng",
    category: "Landscapes",
    location: "Lake Nakuru",
    likes: 189,
    views: 1245,
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5-lake-sunset-africa?w=400&h=300&fit=crop&auto=format"
  },
  {
    id: 4,
    title: "Traditional Wedding Ceremony",
    photographer: "Grace Wambui",
    category: "Weddings",
    location: "Nyeri",
    likes: 567,
    views: 3421,
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92-african-wedding?w=400&h=500&fit=crop&auto=format"
  },
  {
    id: 5,
    title: "Nairobi City Skyline",
    photographer: "David Mwangi",
    category: "Urban",
    location: "Nairobi CBD",
    likes: 298,
    views: 1876,
    image: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6-nairobi-skyline?w=400&h=300&fit=crop&auto=format"
  },
  {
    id: 6,
    title: "Mount Kenya Peak",
    photographer: "Alice Kiprotich",
    category: "Landscapes",
    location: "Mount Kenya",
    likes: 423,
    views: 2567,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96-mountain-peak-africa?w=400&h=600&fit=crop&auto=format"
  },
  {
    id: 7,
    title: "Samburu Cultural Dance",
    photographer: "Peter Lekupe",
    category: "Culture",
    location: "Samburu County",
    likes: 345,
    views: 2134,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19-african-cultural-dance?w=400&h=400&fit=crop&auto=format"
  },
  {
    id: 8,
    title: "Cheetah in the Wild",
    photographer: "Nancy Chebet",
    category: "Wildlife",
    location: "Maasai Mara",
    likes: 678,
    views: 4523,
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0-cheetah-running?w=400&h=300&fit=crop&auto=format"
  }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const toggleLike = (id: number) => {
    setLikedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Community Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore stunning photography from across Kenya. From the bustling streets of Nairobi 
            to the serene landscapes of the Maasai Mara, discover the beauty of our homeland.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="mb-2"
            >
              <Filter className="mr-2 h-4 w-4" />
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="break-inside-avoid overflow-hidden group hover:shadow-elegant transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-8 w-8 bg-white/90 hover:bg-white"
                    onClick={() => toggleLike(item.id)}
                  >
                    <Heart 
                      className={`h-4 w-4 ${likedItems.includes(item.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
                    />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-8 w-8 bg-white/90 hover:bg-white"
                  >
                    <Download className="h-4 w-4 text-gray-600" />
                  </Button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {item.category}
                  </Badge>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">by {item.photographer}</p>
                <p className="text-xs text-muted-foreground mb-3">{item.location}</p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-3 w-3" />
                      <span>{item.likes + (likedItems.includes(item.id) ? 1 : 0)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>{item.views}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                    View
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Load More Photos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;