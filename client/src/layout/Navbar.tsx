import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { Menu, X, Dna } from "lucide-react";

const navLinks = [
  { text: "Features", href: "#features" },
  { text: "How It Works", href: "#how-it-works" },
  { text: "Marketplace", href: "#marketplace" },
  { text: "Community", href: "#community" },
  { text: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const { isOpen, toggle, close } = useMobileMenu();
  const [sticky, setSticky] = useState(false);

  // Handle scroll events for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and scroll to section for anchor links
  const handleNavClick = (href: string) => {
    close();
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
    <nav className={`sticky top-0 z-50 bg-primary shadow-lg transition-all ${sticky ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Dna className="h-6 w-6 text-accent mr-2" />
              <span className="font-heading font-bold text-xl">SporeTrust</span>
            </Link>
            <div className="hidden md:ml-8 md:flex md:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-muted-foreground hover:text-white hover:text-accent-light px-3 py-2 rounded-md text-sm font-medium transition-all"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <Button variant="default" className="hidden md:block bg-accent hover:bg-accent-light text-white font-medium">
              Download App
            </Button>
            <button 
              className="md:hidden text-muted-foreground hover:text-white focus:outline-none ml-2" 
              onClick={toggle}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-secondary border-t border-neutral-dark`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-white hover:bg-primary-dark transition-all"
            >
              {link.text}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-neutral-dark">
            <Button className="w-full bg-accent hover:bg-accent-light text-white font-medium">
              Download App
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
