import { Button } from "@/components/ui/button";
import { Menu, MessageCircle } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-white">ZT</span>
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ZapTurize
              </div>
              <div className="text-xs text-muted-foreground">Turismo Digital</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contato
            </button>
            <Button onClick={handleWhatsAppClick} variant="gradient" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t pt-4">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-left text-sm font-medium hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-left text-sm font-medium hover:text-primary transition-colors"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-left text-sm font-medium hover:text-primary transition-colors"
            >
              Contato
            </button>
            <Button onClick={handleWhatsAppClick} variant="gradient" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
