import { Check, XCircle, Info } from "lucide-react";
import { labImage } from "@/lib/images";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    title: "Submit Your Spores",
    description: "Collect and send spore samples to one of our partner laboratories for DNA analysis and verification."
  },
  {
    number: 2,
    title: "DNA Testing & Verification",
    description: "Labs perform genetic fingerprinting to create a unique digital signature for your spores."
  },
  {
    number: 3,
    title: "Blockchain Certification",
    description: "Your verification results are securely recorded on the blockchain, creating an immutable record of authenticity."
  },
  {
    number: 4,
    title: "Generate QR Verification",
    description: "Receive unique QR codes for your verified spores that can be used for tracking across generations."
  },
  {
    number: 5,
    title: "Trust-Based Exchange",
    description: "Engage in secure verified swaps with other growers on the marketplace, building your trust score with each transaction."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">How SporeTrust Works</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-5">
            Our upcoming blockchain-powered platform will create trust and transparency in the mushroom growing 
            community through a simple verification process. DNA testing is already available.
          </p>
          
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-sm text-white">
              <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              DNA Testing Active
              <span className="mx-3">|</span>
              <span className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
              Blockchain In Development
            </div>
          </div>
          
          <div className="mx-auto max-w-lg p-4 bg-secondary rounded-lg text-center mb-8">
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter email for launch updates" 
                className="flex-grow px-4 py-2 rounded-lg bg-primary border border-neutral-dark focus:ring-1 focus:ring-white"
              />
              <Button className="bg-white hover:bg-gray-200 text-primary px-4 py-2">
                Get Updates
              </Button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2 font-heading">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative bg-secondary rounded-xl p-8 shadow-lg">
            <img 
              src={labImage} 
              alt="Laboratory DNA analysis process" 
              className="rounded-lg shadow-md w-full mb-8" 
            />

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-lg">Verified Swap</h4>
                  <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">Verified</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 h-4 w-4" />
                    DNA certificates included
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 h-4 w-4" />
                    Blockchain verified
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 h-4 w-4" />
                    QR code traceability
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 h-4 w-4" />
                    Higher trust score impact
                  </li>
                </ul>
              </div>
              <div className="bg-primary p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-lg">Non-Verified Swap</h4>
                  <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full">Standard</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <XCircle className="text-yellow-500 mt-1 mr-2 h-4 w-4" />
                    No DNA verification
                  </li>
                  <li className="flex items-start">
                    <XCircle className="text-yellow-500 mt-1 mr-2 h-4 w-4" />
                    Manual record-keeping
                  </li>
                  <li className="flex items-start">
                    <XCircle className="text-yellow-500 mt-1 mr-2 h-4 w-4" />
                    Trust-based only
                  </li>
                  <li className="flex items-start">
                    <XCircle className="text-yellow-500 mt-1 mr-2 h-4 w-4" />
                    Limited trust score impact
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
