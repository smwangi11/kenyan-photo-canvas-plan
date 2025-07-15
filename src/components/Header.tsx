import { Camera, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Camera className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">KenyaLens</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#photographers" className="text-foreground hover:text-primary transition-colors">
            Photographers
          </a>
          <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
            Gallery
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#community" className="text-foreground hover:text-primary transition-colors">
            Community
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
          <Button variant="hero" size="sm">
            Join Community
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container py-4 space-y-3">
            <a href="#home" className="block py-2 text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#photographers" className="block py-2 text-foreground hover:text-primary transition-colors">
              Photographers
            </a>
            <a href="#gallery" className="block py-2 text-foreground hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#services" className="block py-2 text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#community" className="block py-2 text-foreground hover:text-primary transition-colors">
              Community
            </a>
            <a href="#contact" className="block py-2 text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button variant="hero" className="w-full">
                Join Community
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;