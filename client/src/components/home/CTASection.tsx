import { Button } from "@/components/ui/button";
import { Download, BookOpen, Shield, FlaskRound, Users } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Abstract blockchain pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="h-px w-px bg-foreground absolute top-20 left-40" style={{ boxShadow: '0 0 40px 20px rgba(255, 255, 255, 0.2)' }}></div>
          <div className="h-px w-px bg-foreground absolute top-60 left-[70%]" style={{ boxShadow: '0 0 40px 20px rgba(255, 255, 255, 0.2)' }}></div>
          <div className="h-px w-px bg-foreground absolute top-40 left-[30%]" style={{ boxShadow: '0 0 40px 20px rgba(255, 255, 255, 0.2)' }}></div>
          <div className="h-px w-px bg-foreground absolute top-80 left-[10%]" style={{ boxShadow: '0 0 40px 20px rgba(255, 255, 255, 0.2)' }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading leading-tight">
            Join the SporeTrust Early Access Program
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our blockchain integration is currently in development, but you can be among the first to 
            help build our genetic database and establish your reputation early.
          </p>
          <p className="text-md md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Submit your spore samples now for DNA fingerprinting and secure your place as a 
            verified founding member when we launch.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-accent hover:bg-accent-light px-8 py-4 rounded-lg font-medium text-white shadow-lg transition-all flex items-center justify-center h-auto">
              <Download className="mr-2 h-5 w-5" />
              Join Early Access Program
            </Button>
            <Button 
              variant="outline"
              className="bg-transparent hover:bg-secondary border border-white text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center justify-center h-auto"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Read Documentation
            </Button>
          </div>
          
          {/* Email signup */}
          <div className="mt-10 mb-8 bg-secondary p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-3">Get Updates on Our Progress</h3>
            <p className="text-muted-foreground mb-4">
              Be the first to know when new features are released and when our blockchain platform launches.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg bg-primary border border-neutral-dark focus:ring-1 focus:ring-white"
              />
              <Button className="bg-white hover:bg-gray-200 text-primary px-6 py-3 font-medium">
                Sign Up
              </Button>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center">
              <Shield className="text-white h-5 w-5 mr-2" />
              <span className="text-sm">Secure Blockchain Technology</span>
            </div>
            <div className="flex items-center">
              <FlaskRound className="text-white h-5 w-5 mr-2" />
              <span className="text-sm">Scientific DNA Verification</span>
            </div>
            <div className="flex items-center">
              <Users className="text-white h-5 w-5 mr-2" />
              <span className="text-sm">Trusted Community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
