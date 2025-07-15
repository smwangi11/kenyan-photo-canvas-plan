import { Camera, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-savanna" />
              <span className="text-xl font-bold">KenyaLens</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Connecting Kenya's most talented photographers with clients and communities. 
              Showcasing the beauty of our homeland through the art of photography.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-savanna">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-savanna">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-savanna">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-savanna">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#photographers" className="text-background/80 hover:text-savanna transition-colors">Find Photographers</a></li>
              <li><a href="#gallery" className="text-background/80 hover:text-savanna transition-colors">Browse Gallery</a></li>
              <li><a href="#services" className="text-background/80 hover:text-savanna transition-colors">Photography Services</a></li>
              <li><a href="#community" className="text-background/80 hover:text-savanna transition-colors">Join Community</a></li>
              <li><a href="/workshops" className="text-background/80 hover:text-savanna transition-colors">Workshops</a></li>
              <li><a href="/blog" className="text-background/80 hover:text-savanna transition-colors">Photography Blog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/guides" className="text-background/80 hover:text-savanna transition-colors">Photography Guides</a></li>
              <li><a href="/equipment" className="text-background/80 hover:text-savanna transition-colors">Equipment Reviews</a></li>
              <li><a href="/locations" className="text-background/80 hover:text-savanna transition-colors">Photo Locations</a></li>
              <li><a href="/pricing" className="text-background/80 hover:text-savanna transition-colors">Pricing Guide</a></li>
              <li><a href="/legal" className="text-background/80 hover:text-savanna transition-colors">Legal Templates</a></li>
              <li><a href="/support" className="text-background/80 hover:text-savanna transition-colors">Help & Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-background/80 text-sm">
              Get weekly photography tips, featured work, and community updates delivered to your inbox.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button variant="default" className="w-full bg-savanna hover:bg-savanna/90 text-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-savanna" />
              <span className="text-background/80">info@kenyalens.co.ke</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-savanna" />
              <span className="text-background/80">+254 700 123 456</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-savanna" />
              <span className="text-background/80">Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2025 KenyaLens. All rights reserved. Proudly showcasing Kenyan photography talent.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;