import { Check, Dna, RefreshCw, QrCode } from "lucide-react";

const features = [
  {
    icon: <Dna className="text-white text-2xl" />,
    title: "DNA Verification",
    description: "Scientifically verify the genetic identity of your mushroom spores, ensuring authenticity and protecting rare genetics.",
    benefits: [
      "Genetic fingerprinting technology",
      "Digital certificates of authenticity",
      "Secure database records"
    ],
    iconClass: "bg-foreground/20",
    checkClass: "text-white"
  },
  {
    icon: <RefreshCw className="text-white text-2xl" />,
    title: "Verified Swaps",
    description: "Exchange spores with confidence through our verified swap system, backed by DNA testing and community trust.",
    benefits: [
      "Secure peer-to-peer exchanges",
      "Transparent verification status",
      "Trust-building reputation system"
    ],
    iconClass: "bg-foreground/20",
    checkClass: "text-white"
  },
  {
    icon: <QrCode className="text-white text-2xl" />,
    title: "Spore Traceability",
    description: "Track the complete lineage of your spores across generations with QR codes linked to our secure database records.",
    benefits: [
      "QR code generation and scanning",
      "Complete genetic history",
      "Generational authenticity tracking"
    ],
    iconClass: "bg-foreground/20",
    checkClass: "text-white"
  }
];

export default function AppFeatures() {
  return (
    <section id="features" className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Advanced Genetic Trust Features</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            SporeTrust combines cutting-edge database technology with genetic science to ensure the 
            authenticity and traceability of your mushroom genetics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-primary p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:translate-y-[-5px]"
            >
              <div className={`h-12 w-12 ${feature.iconClass} rounded-lg flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <Check className={`${feature.checkClass} mt-1 mr-2 h-4 w-4`} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
