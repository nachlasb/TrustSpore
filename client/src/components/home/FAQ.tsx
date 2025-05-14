import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How does DNA fingerprinting work?",
    answer: "DNA fingerprinting examines specific genetic markers unique to each mushroom variety. Our partner labs extract DNA from spore samples, sequence the genetic markers, and create a unique genetic profile that can be verified against known varieties and tracked across generations."
  },
  {
    question: "What is the difference between verified and non-verified swaps?",
    answer: "Verified swaps include DNA testing to confirm the genetic identity of the spores, with results recorded on the blockchain for immutable proof. Non-verified swaps rely on community trust and seller reputation without laboratory confirmation of genetic identity."
  },
  {
    question: "How can I trust the genetic identity of spores I purchase?",
    answer: "Spores with verified status have undergone DNA testing with results recorded on the blockchain. Each verified spore includes a QR code linking to its genetic certificate and history. For non-verified spores, check the seller's trust score and review history before purchasing."
  },
  {
    question: "How much does DNA verification cost?",
    answer: "DNA verification typically costs between $50-$100 per sample, depending on the testing complexity. The results are permanent and transferable to future spore generations, making it a one-time investment for genetic verification. Members with high trust scores receive discounts on testing services."
  },
  {
    question: "How does blockchain ensure the authenticity of my spores?",
    answer: "Blockchain technology creates a permanent, tamper-proof record of your spore's genetic identity and lineage. Each verification is stored as a transaction on our distributed ledger, allowing you to trace the complete history of your spores across multiple generations and exchanges."
  },
  {
    question: "How do I build a strong trust score?",
    answer: "Build your trust score by completing successful exchanges, participating in verified swaps, receiving positive reviews, and maintaining accurate descriptions of your spores. Active community participation and helping new members also contributes to your reputation in the marketplace."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our verification process, blockchain technology, 
            and spore exchanges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-primary p-6 rounded-xl shadow-lg">
              <Accordion type="single" collapsible className="border-none">
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="text-xl font-bold font-heading hover:no-underline pb-0">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-3">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Button 
            variant="outline"
            className="bg-transparent hover:bg-accent border border-accent text-accent hover:text-white px-6 py-3 rounded-lg font-medium transition-all h-auto"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
}
