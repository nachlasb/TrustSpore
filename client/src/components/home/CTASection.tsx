import { Button } from "@/components/ui/button";
import { Download, BookOpen, Shield, FlaskRound, Users } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Abstract blockchain pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="h-px w-px bg-accent absolute top-20 left-40" style={{ boxShadow: '0 0 40px 20px rgba(13, 148, 136, 0.3)' }}></div>
          <div className="h-px w-px bg-accent absolute top-60 left-[70%]" style={{ boxShadow: '0 0 40px 20px rgba(13, 148, 136, 0.3)' }}></div>
          <div className="h-px w-px bg-primary absolute top-40 left-[30%]" style={{ boxShadow: '0 0 40px 20px rgba(56, 189, 248, 0.3)' }}></div>
          <div className="h-px w-px bg-primary absolute top-80 left-[10%]" style={{ boxShadow: '0 0 40px 20px rgba(56, 189, 248, 0.3)' }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading leading-tight">
            Ready to Transform Your Mushroom Growing Experience?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join our community of passionate growers and enjoy the benefits of verified genetics, 
            transparent exchanges, and blockchain-backed trust.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-accent hover:bg-accent-light px-8 py-4 rounded-lg font-medium text-white shadow-lg transition-all flex items-center justify-center h-auto">
              <Download className="mr-2 h-5 w-5" />
              Download SporeTrust App
            </Button>
            <Button 
              variant="outline"
              className="bg-transparent hover:bg-secondary border border-accent text-accent px-8 py-4 rounded-lg font-medium transition-all flex items-center justify-center h-auto"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Read Documentation
            </Button>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center">
              <Shield className="text-accent h-5 w-5 mr-2" />
              <span className="text-sm">Secure Blockchain Technology</span>
            </div>
            <div className="flex items-center">
              <FlaskRound className="text-accent h-5 w-5 mr-2" />
              <span className="text-sm">Scientific DNA Verification</span>
            </div>
            <div className="flex items-center">
              <Users className="text-accent h-5 w-5 mr-2" />
              <span className="text-sm">Trusted Community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
