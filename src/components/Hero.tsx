import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import worshipHero from "@/assets/worship-hero.jpg";

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={worshipHero} 
          alt="Worship and prayer" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-primary-foreground">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Pour remporter les combats liés à sa 
            <span className="text-gold block">destinée</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl">
            Bienvenue à l'Église Ambassade des Miracles, où la foi transforme les vies 
            et où chaque prière trouve sa réponse.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Rejoignez-nous
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Découvrir nos services
            </Button>
          </div>

          {/* Church Image */}
          <div className="absolute top-8 right-8 hidden lg:block">
            <img 
              src="/lovable-uploads/3cafbaf4-48ba-4d5b-ba9a-80ab0a36b9ee.png" 
              alt="Bishop Ouattara Mohamed Idriss" 
              className="w-32 h-40 object-cover rounded-lg shadow-elegant border-4 border-gold"
            />
          </div>

          {/* Event Highlight */}
          <div className="bg-card/95 backdrop-blur-sm rounded-xl p-6 border border-gold/30 shadow-gold">
            <div className="flex items-center space-x-4 mb-4">
              <Calendar className="h-6 w-6 text-gold" />
              <h3 className="text-xl font-bold text-card-foreground">5 Semaines de Prières</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-card-foreground">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gold" />
                <span className="text-sm">Mercredis-Jeudis-Vendredis: 17H00-21H00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gold" />
                <span className="text-sm">Vendredis: 05-12-19-26</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gold" />
                <span className="text-sm">Cocody, Attoban</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;