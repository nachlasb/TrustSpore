import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AppFeatures from "@/components/home/AppFeatures";
import HowItWorks from "@/components/home/HowItWorks";
import DNATestingProcess from "@/components/home/DNATestingProcess";
import MarketplacePreview from "@/components/home/MarketplacePreview";
import Community from "@/components/home/Community";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>SporeTrust - Blockchain Verified Mushroom Genetics</title>
        <meta 
          name="description" 
          content="Track the genetic lineage of your gourmet mushrooms with blockchain technology. SporeTrust facilitates secure, verifiable spore exchanges between growers." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <AppFeatures />
          <HowItWorks />
          <DNATestingProcess />
          <MarketplacePreview />
          <Community />
          <FAQ />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}
