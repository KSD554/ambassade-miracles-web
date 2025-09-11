import { Heart, MapPin, Phone, Globe, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Church Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-gold-foreground font-bold text-xl">E</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Ambassade des Miracles</h3>
                <p className="text-sm text-primary-foreground/80">Église</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-4">
              Pour remporter les combats liés à sa destinée. Rejoignez une communauté 
              où la foi transforme les vies et où les miracles se manifestent.
            </p>
            <div className="flex items-center space-x-2 text-gold">
              <Heart className="h-4 w-4" />
              <span className="text-sm">92% recommandent notre église</span>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">Cocody, Attoban derrière le commissariat</p>
                  <p className="text-sm">du 30ème arrondissement</p>
                  <p className="text-sm">près de la CGRAE, Abidjan</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <div>
                  <p className="text-sm">+225 07 59 200 200</p>
                  <p className="text-sm">+225 59 20 02 00</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-gold" />
                <p className="text-sm">bishopomi.org</p>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div>
            <h4 className="font-bold text-lg mb-6">Horaires</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Mercredi</span>
                <span className="text-sm text-gold">17H00-21H00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Jeudi</span>
                <span className="text-sm text-gold">17H00-21H00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Vendredi</span>
                <span className="text-sm text-gold">17H00-21H00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Dimanche</span>
                <span className="text-sm text-gold">08H00-11H00</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-primary-foreground/10 rounded-lg">
              <p className="text-sm font-semibold text-gold mb-1">Transport Gratuit</p>
              <p className="text-xs">+225 0596 085 951</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/80">
              © {currentYear} Église Ambassade des Miracles. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-sm text-primary-foreground/80">
                Fondée par S.E Bishop Ouattara Mohamed Idriss
              </span>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-xs text-primary-foreground/60">
              Site conçu avec ❤️ pour servir la communauté des fidèles
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;