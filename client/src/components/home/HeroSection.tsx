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
        className="bg-cover bg-center h-screen min-h-[600px]" 
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 absolute inset-0 z-20">
        <div className="flex flex-col justify-center items-start h-full py-12 md:py-16 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-block bg-foreground/10 px-3 py-1 rounded-md mb-4">
              <p className="text-white font-medium font-heading text-sm">DNA Testing Available Now • Blockchain Coming Soon</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
              Track the Genetic Lineage of Your Gourmet Mushrooms
            </h1>
            <p className="text-lg md:text-xl mb-4 text-muted-foreground max-w-2xl">
              Secure, verifiable spore exchanges between growers with DNA verification and soon-to-launch blockchain traceability. 
              Start building your reputation in the mushroom cultivation community today.
            </p>
            <p className="text-md mb-8 text-white bg-foreground/10 p-3 rounded-lg inline-block">
              <span className="font-bold">🧬 DNA testing available now:</span> Submit your samples to establish genetic provenance before full platform launch!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-accent hover:bg-accent-light px-6 py-3 rounded-lg font-medium text-white shadow-lg transition-all flex items-center h-auto">
                <Download className="mr-2 h-5 w-5" />
                Join Early Access
              </Button>
              <Button variant="outline" className="border-white hover:bg-foreground/10 px-6 py-3 rounded-lg font-medium text-white transition-all flex items-center h-auto">
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
