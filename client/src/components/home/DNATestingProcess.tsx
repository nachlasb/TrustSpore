import { Button } from "@/components/ui/button";
import { Shield, Fingerprint, History } from "lucide-react";
import QRCode from "@/components/ui/qr-code";
import { sporeCollectionImage, labAnalysisImage } from "@/lib/images";

export default function DNATestingProcess() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-secondary to-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">DNA Testing Process</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our advanced genetic verification uses cutting-edge sequencing technology to create 
            a unique fingerprint for your mushroom genetics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Step 1: Collection */}
          <div className="lg:col-span-2">
            <img 
              src={sporeCollectionImage} 
              alt="Collection of mushroom spores for DNA testing" 
              className="rounded-xl shadow-lg mb-6 w-full object-cover h-64" 
            />
            <h3 className="text-xl font-bold mb-3 font-heading">1. Spore Collection</h3>
            <p className="text-muted-foreground">
              Users collect a small spore sample using our sterile collection kit. The sample is carefully 
              packaged and labeled with a unique identifier.
            </p>
          </div>

          {/* Middle arrows on larger screens */}
          <div className="hidden lg:flex items-center justify-center">
            <svg className="h-10 w-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>

          {/* Step 2: Analysis */}
          <div className="lg:col-span-2">
            <img 
              src={labAnalysisImage} 
              alt="Laboratory DNA analysis of mushroom spores" 
              className="rounded-xl shadow-lg mb-6 w-full object-cover h-64" 
            />
            <h3 className="text-xl font-bold mb-3 font-heading">2. DNA Sequencing</h3>
            <p className="text-muted-foreground">
              Our partner laboratories extract DNA and perform sequencing to identify the unique genetic 
              markers that define the mushroom variety.
            </p>
          </div>

          {/* Step 3: Certification (Full width) */}
          <div className="lg:col-span-5 mt-8">
            <div className="bg-secondary p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold mb-3 font-heading">3. Blockchain Certification</h3>
                  <p className="text-muted-foreground mb-4">
                    The genetic results are processed and recorded on our secure blockchain, creating an 
                    immutable record of your mushroom's DNA profile.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <Shield className="text-accent mt-1 mr-3 h-5 w-5" />
                      <span>Tamper-proof distributed ledger technology</span>
                    </li>
                    <li className="flex items-start">
                      <Fingerprint className="text-accent mt-1 mr-3 h-5 w-5" />
                      <span>Unique cryptographic hash for each genetic profile</span>
                    </li>
                    <li className="flex items-start">
                      <History className="text-accent mt-1 mr-3 h-5 w-5" />
                      <span>Complete history of genetic lineage across generations</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-primary rounded-lg p-6 shadow-inner">
                  <div className="mb-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <h4 className="font-bold">DNA Verification Certificate</h4>
                    </div>
                    <span className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full">Verified</span>
                  </div>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Variety</p>
                      <p className="font-medium">Blue Oyster (Pleurotus ostreatus)</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Genetic ID</p>
                      <p className="font-medium font-mono">PO-21F4A3B5-87C2</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Generation</p>
                      <p className="font-medium">Gen 3</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Verification Date</p>
                      <p className="font-medium">May 15, 2023</p>
                    </div>
                    <div className="mt-6 flex justify-center">
                      <div className="bg-white p-2 rounded-lg inline-block">
                        <QRCode value="spore:PO-21F4A3B5-87C2" size={96} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Ready to verify the genetics of your gourmet mushrooms?</p>
          <Button className="bg-accent hover:bg-accent-light px-6 py-3 rounded-lg font-medium text-white shadow-lg transition-all h-auto">
            Start DNA Verification Process
          </Button>
        </div>
      </div>
    </section>
  );
}
