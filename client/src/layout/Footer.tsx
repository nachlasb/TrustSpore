import { Link } from "wouter";
import { Dna, Mail, Phone, MapPin } from "lucide-react";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const quickLinks = [
  { text: "Features", href: "#features" },
  { text: "How It Works", href: "#how-it-works" },
  { text: "Marketplace", href: "#marketplace" },
  { text: "Community", href: "#community" },
  { text: "FAQ", href: "#faq" },
];

const resources = [
  { text: "DNA Testing Guide", href: "#" },
  { text: "Blockchain Explained", href: "#" },
  { text: "Growing Techniques", href: "#" },
  { text: "Spore Storage Best Practices", href: "#" },
  { text: "Genetic Preservation", href: "#" },
];

const policyLinks = [
  { text: "Privacy Policy", href: "#" },
  { text: "Terms of Service", href: "#" },
  { text: "Cookie Policy", href: "#" },
];

export default function Footer() {
  // Handle scroll for anchor links
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Offset for fixed header
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer className="bg-primary-dark pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Dna className="h-6 w-6 text-accent mr-2" />
              <span className="font-heading font-bold text-xl">SporeTrust</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Bringing trust and transparency to mushroom genetic exchanges through blockchain 
              technology and DNA verification.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-all">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-all">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-all">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-all">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-muted-foreground hover:text-accent transition-all"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-all"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-accent mt-1 mr-2" />
                <span className="text-muted-foreground">hi@sporetrust.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-accent mt-1 mr-2" />
                <span className="text-muted-foreground">+1 (208) 450-3840</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mt-1 mr-2" />
                <span className="text-muted-foreground">
                  123 Mycelium Way<br />Spokane, WA 99202
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-dark pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SporeTrust. All rights reserved.
            </p>
            <div className="flex flex-wrap space-x-6">
              {policyLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-accent text-sm transition-all"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
