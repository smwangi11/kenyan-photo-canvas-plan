import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedPhotographers from "@/components/FeaturedPhotographers";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedPhotographers />
      <Gallery />
      <Services />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
