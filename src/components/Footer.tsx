import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-muted/30 border-t">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                ZapTurize
              </h3>
              <p className="text-muted-foreground">
                Especialistas em soluções digitais para agências de turismo e viagens.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Sites Institucionais</li>
                <li>Landing Pages</li>
                <li>Google Ads</li>
                <li>Identidade Visual</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>WhatsApp: (11) 4863-2797</li>
                <li>zapturize.com.br</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t text-center text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              © {currentYear} ZapTurize. Feito com{" "}
              <Heart className="w-4 h-4 fill-accent text-accent" /> para agências de
              turismo.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
