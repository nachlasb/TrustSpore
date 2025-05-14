import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import { heroBackground } from "@/lib/images";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      
      {/* Background image */}
      <div 
        className="bg-cover bg-center h-screen" 
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col justify-center items-start h-screen py-12 md:py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-accent-light font-medium mb-4 font-heading">Blockchain-Powered Authenticity</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
              Track the Genetic Lineage of Your Gourmet Mushrooms
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl">
              Secure, verifiable spore exchanges between growers with DNA verification and blockchain traceability. 
              Build trust in your mushroom cultivation community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-accent hover:bg-accent-light px-6 py-3 rounded-lg font-medium text-white shadow-lg transition-all flex items-center h-auto">
                <Download className="mr-2 h-5 w-5" />
                Download the App
              </Button>
              <Button variant="outline" className="border-muted-foreground hover:border-accent-light px-6 py-3 rounded-lg font-medium text-white hover:text-accent-light transition-all flex items-center h-auto">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <div className="mt-10 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {/* User profile pictures */}
                <div className="w-8 h-8 rounded-full bg-accent-light border-2 border-primary"></div>
                <div className="w-8 h-8 rounded-full bg-primary border-2 border-primary"></div>
                <div className="w-8 h-8 rounded-full bg-primary-light border-2 border-primary"></div>
                <div className="w-8 h-8 rounded-full bg-accent-dark border-2 border-primary"></div>
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by <span className="font-bold text-white">1,200+</span> mushroom growers worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
